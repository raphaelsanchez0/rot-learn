"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Set, FlashCard } from "@/generated/prisma";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
/**
 * Sets Overview Page
 * ------------------
 * This page component displays a list of the user's flashcard sets.
 *
 * Features:
 * - Fetches all sets from the backend using a GET request to `/api/sets`.
 * - Displays each set name inside a clickable card.
 * - Clicking a set navigates to a flashcard-scroller-like view via a query param (`/?setId=...`).
 * - Provides a "Create Set" button that links to the `/create-set` page.
 *
 * Technologies Used:
 * - React (useState, useEffect)
 * - Next.js App Router (`Link`)
 * - Custom UI Components: Button, Card, CardHeader, CardTitle
 *
 * API:
 * - GET /api/sets
 *   Response:
 *   [
 *     {
 *       id: number,
 *       name: string
 *     },
 *     ...
 *   ]
 *   Returns a list of all flashcard sets (excluding flashcards).
 *
 * Notes:
 * - The sets are typed using a `Pick<Set, "id" | "name">[]` for efficient data handling.
 * - The route design uses query parameters for selecting a set (`/?setId=123`).
 * - Optimized for readability and extendability (e.g., could add editing, deletion, or previews).
 */

export default function page() {
  const [sets, setSets] = useState<Pick<Set, "id" | "name">[]>([]);

  useEffect(() => {
    const fetchSets = async () => {
      const res = await fetch("/api/sets");
      const data = await res.json();
      setSets(data);
    };

    fetchSets();
  }, []);

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-4xl font-bold leading-tight tracking-tighter ">
          Your Sets
        </div>
        <Link href="/create-set">
          <Button className="bg-green-600 rounded">Create Set</Button>
        </Link>
      </div>
      {sets.map((set) => (
        <Link href={`/?setId=${set.id}`} key={set.id}>
          <Card key={set.id}>
            <CardHeader>
              <CardTitle>{set.name}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
