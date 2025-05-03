"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

/**
 * CreateSetPage Component
 * -----------------------
 * This client-side React component allows users to create a new flashcard set.
 *
 * Features:
 * - Users can input a set name and dynamically add or remove flashcards.
 * - Each flashcard contains a "term" and a "definition".
 * - On submission, the set and its flashcards are sent to the `/api/sets/create` endpoint.
 * - Upon successful creation, the user is redirected to `/sets-client`.
 *
 * Technologies:
 * - React (useState, useEffect)
 * - Next.js App Router (`useRouter`, `Link`)
 * - Custom UI components (Button, Card, Input)
 *
 * API:
 * - POST /api/sets/create
 *   Request Body:
 *     {
 *       name: string,
 *       flashcards: Array<{
 *         term: string,
 *         definition: string
 *       }>
 *     }
 *   Response:
 *     201 Created – returns the created set with its flashcards
 *     400 Bad Request – if the request body is invalid
 *     500 Internal Server Error – if server-side creation fails
 *
 * Notes:
 * - Validation is done client-side to ensure the set has a name
 *   and at least one valid flashcard before making the API call.
 * - Uses optimistic navigation via Next.js's `useRouter().push()` on success.
 */

export default function CreateSetPage() {
  const [setName, setSetName] = useState("");
  const [flashCards, setFlashCards] = useState([{ term: "", definition: "" }]);
  const router = useRouter();

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
      const res = await fetch("/api/sets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: setName,
          flashcards: validCards,
        }),
      });

      if (!res.ok) throw new Error("Failed to create set");

      const data = await res.json();
      //router.push(`/sets/${data.id}`);
      router.push("/sets-client");
      Router;
    } catch (err) {
      console.error(err);
      alert("Error creating set.");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-4xl font-bold leading-tight tracking-tighter ">
          Create a new set
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
            Create Set
          </Button>
        </div>
      </div>
    </div>
  );
}
