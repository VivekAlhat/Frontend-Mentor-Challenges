import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>not found</p>
      <Link href="/">Go back</Link>
    </div>
  );
}
