import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-end lg:space-x-5 xl:space-x-[50] ${className}`}>
      <Link
        className="focus:ring-0 focus:outline-none text-3xl font-bold tracking-tighter"
        href="/"
      >
        Specroll
        <span className="text-sm leading-none">&#174;</span>
      </Link>
    </div>
  );
}
