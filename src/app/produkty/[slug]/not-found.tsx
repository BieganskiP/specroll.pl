import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center text-center">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">
          Nie znaleziono produktu
        </h1>
        <p className="text-gray-600 mb-8">
          Przepraszamy, ale szukany produkt nie istnieje.
        </p>
        <Link
          href="/produkty"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Wróć do produktów
        </Link>
      </div>
    </main>
  );
}
