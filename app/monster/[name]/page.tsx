"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function MonsterDetails() {
  const { name } = useParams();
  const tasks = useQuery(api.functions.getTasks.getAllTasks);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Check if 'name' is a string before using it
  const monsterName = typeof name === "string" ? name.toLowerCase() : "";
  const monster = tasks?.find(
    (task) => task.name.toLowerCase() === monsterName
  );

  const showPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <>
      <div className="flex mx-auto items-center justify-center gap-12 mt-24 max-sm:flex-col">
        <div>
          <Image
            src={`/images/${monster?.image}`}
            width={400}
            height={400}
            alt={monster?.name}
            className="mb-6 mx-auto object-cover rounded-md shadow-md hover:scale-105 transition-all"
          />
        </div>
        <div className="max-sm:text-center">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {monster.name}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Age:</strong> {monster.age}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Description:</strong> {monster.description}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Skill:</strong> {monster.skill}
          </p>
        </div>
      </div>
      <div className="mt-28 flex justify-center">
        <button
          onClick={showPopup}
          className="bg-green-900 rounded-lg p-2 flex justify-center items-center mx-auto w-40 text-white font-bold hover:scale-105 transition-all"
        >
          Apply
        </button>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <p className="text-center text-lg font-semibold">
              🎉 Thanks for applying! Your monster will be summoned to your
              house tomorrow.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
