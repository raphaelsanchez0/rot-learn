"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Set, FlashCard } from "@/generated/prisma";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Link href={`/sets-client/${set.id}`} key={set.id}>
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
