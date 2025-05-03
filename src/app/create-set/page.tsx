"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

export default function CreateSetPage() {
  const [setName, setSetName] = useState("");
  const [flashCards, setFlashCards] = useState([{ term: "", definition: "" }]);

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

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-4xl font-bold leading-tight tracking-tighter ">
          Create a new set
        </div>
        <Link href="/sets">
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
        </div>
      </div>
    </div>
  );
}
