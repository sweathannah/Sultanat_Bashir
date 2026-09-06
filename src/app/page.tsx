
export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6">
      <div className="bg-white text-zinc-900 border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:border-zinc-800 border p-6 rounded-xl shadow-sm max-w-md w-full transition-colors duration-300">
        <h2 className="text-xl font-bold">Project Title</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Project description goes here...
        </p>
      </div>
    </div>
  );
}