import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black-100">
      <h2 className="mb-2 text-4xl font-bold text-white">404</h2>
      <p className="mb-4 text-xl text-white-200">Page Not Found</p>
      <Link
        href="/"
        className="rounded-lg bg-purple px-4 py-2 text-white hover:bg-purple/80"
      >
        Return Home
      </Link>
    </div>
  );
}
