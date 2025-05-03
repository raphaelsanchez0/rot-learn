import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Set } from "@/generated/prisma/client";

export default function SetCard({ set }: { set: Set }) {
  return (
    <Card className="w-full m-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <CardTitle>{set.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
