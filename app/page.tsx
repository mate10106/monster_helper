import TaskSelector from "@/components/TaskSelector";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center p-8">
        Summon Your <span className="text-yellow-500">Monster</span> Helper
      </h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-lg shadow-md">
        <p className="text-lg font-semibold">
          Discover the perfect monster companion to assist you in your daily
          tasks! Whether you need help with cleaning, cooking, organizing, or
          just boosting morale, there's a monster ready to lend a hand. Click on
          a monster below to learn more about their unique abilities and bring
          them into your world!
        </p>
      </div>
      <TaskSelector />
    </main>
  );
}
