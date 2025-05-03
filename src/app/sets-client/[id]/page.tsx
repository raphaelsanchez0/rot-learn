"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
/**
 * EditSetPage Component
 * ---------------------
 * This client-side React component allows users to edit an existing flashcard set.
 *
 * Features:
 * - Fetches an existing set using the set ID from the URL via Next.js `useParams`.
 * - Populates the form with the existing set name and its flashcards.
 * - Allows the user to modify the set name, update flashcards, or remove them.
 * - Enables the user to add new flashcards dynamically.
 * - On submission, the updated data is sent to `/api/sets/[id]` using a PUT request.
 * - On success, the user is redirected back to the main sets page (`/sets-client`).
 *
 * Technologies Used:
 * - React (useState, useEffect)
 * - Next.js App Router (`useRouter`, `useParams`)
 * - Custom UI components: Button, Input, Card
 *
 * API:
 * - GET /api/sets/:id
 *   - Fetches a single flashcard set by its numeric ID
 *   - Includes the associated flashcards
 *
 * - PUT /api/sets/:id
 *   Request Body:
 *     {
 *       name: string,
 *       flashcards: Array<{
 *         term: string,
 *         definition: string
 *       }>
 *     }
 *   Response:
 *     200 OK – Returns the updated set
 *     400 Bad Request – If name or flashcards are invalid
 *     500 Internal Server Error – If update fails server-side
 *
 * Notes:
 * - All form validation is handled on the client side.
 * - The component depends on the `id` param being available in the route `/sets-client/[id]/edit`.
 * - Audio feedback or accessibility features can be added to enhance usability for diverse users.
 */

export default function EditSetPage() {
  const [setName, setSetName] = useState("");
  const [flashCards, setFlashCards] = useState([{ term: "", definition: "" }]);
  const router = useRouter();

  const params = useParams();
  const setId = params.id;

  useEffect(() => {
    const fetchSet = async () => {
      if (!setId) return;
      try {
        const res = await fetch(`/api/sets/${setId}`);
        const data = await res.json();
        setSetName(data.name);
        setFlashCards(data.flashcards ?? []);
      } catch (error) {
        console.error("Failed to load set", error);
      }
    };

    fetchSet();
  }, [setId]);

  const handleFlashCardChange = (
    index: number,
    field: "term" | "definition",
    value: string
  ) => {
    const updated = [...flashCards];
    updated[index][field] = value;
    setFlashCards(updated);
  };

  const addCard = () => {
    setFlashCards([...flashCards, { term: "", definition: "" }]);
  };

  const handleSubmit = async () => {
    if (!setId) return;
    if (!setName.trim()) {
      alert("Set name is required.");
      return;
    }

    const validCards = flashCards.filter(
      (card) => card.term.trim() && card.definition.trim()
    );

    if (validCards.length === 0) {
      alert("At least one valid flashcard is required.");
      return;
    }

    try {
      const res = await fetch(`/api/sets/${setId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: setName,
          flashcards: validCards,
        }),
      });

      if (!res.ok) throw new Error("Failed to update set");

      router.push(`/sets-client/`);
    } catch (err) {
      console.error(err);
      alert("Error updating set.");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-4xl font-bold leading-tight tracking-tighter ">
          Edit set
        </div>
        <Link href="/sets-client">
          <Button variant="outline">Back</Button>
        </Link>
      </div>

      <div className="space-y-2 mt-4">
        <label className="block font-semibold">Set Name</label>
        <Input
          placeholder="e.g. Biology Basics"
          value={setName}
          onChange={(e) => setSetName(e.target.value)}
        />
      </div>

      <div className="space-y-6 mt-4">
        {flashCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Flashcard {index + 1}</CardTitle>
              <Button
                variant="destructive"
                onClick={() =>
                  setFlashCards(flashCards.filter((_, i) => i !== index))
                }
              >
                Remove
              </Button>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Term"
                value={card.term}
                onChange={(e) =>
                  handleFlashCardChange(index, "term", e.target.value)
                }
              />
              <Input
                placeholder="Definition"
                value={card.definition}
                onChange={(e) =>
                  handleFlashCardChange(index, "definition", e.target.value)
                }
              />
            </CardContent>
          </Card>
        ))}
        <div className="flex items-center justify-between">
          <Button onClick={addCard} variant="outline">
            + Add Another Card
          </Button>
          <Button onClick={handleSubmit} variant="outline">
            Edit Set
          </Button>
        </div>
      </div>
    </div>
  );
}
