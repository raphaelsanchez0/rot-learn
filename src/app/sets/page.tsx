import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
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
    </div>
  );
}
