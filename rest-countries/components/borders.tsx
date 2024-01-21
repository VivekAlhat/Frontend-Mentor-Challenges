import Link from "next/link";

export default function Borders({ borders }: BorderProps) {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {borders.map((border) => (
        <Link
          href={`/country/${border}`}
          key={border}
          className="dark:bg-dark-mode-el px-4 py-2 rounded-md shadow-custom hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          {border}
        </Link>
      ))}
    </div>
  );
}
