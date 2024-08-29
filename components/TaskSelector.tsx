"use client";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function TaskSelector() {
  const tasks = useQuery(api.functions.getTasks.getAllTasks) || [];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {tasks.map((task) => (
        <Link key={task.name} href={`/monster/${task.name.toLowerCase()}`}>
          <p className="block p-6 bg-white rounded shadow hover:bg-gray-100">
            {task.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
