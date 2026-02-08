"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black-100">
      <h2 className="mb-4 text-2xl font-bold text-white">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-purple px-4 py-2 text-white hover:bg-purple/80"
      >
        Try again
      </button>
    </div>
  );
}
