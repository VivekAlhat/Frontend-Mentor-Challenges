import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>This page does not exist</p>
      <Link href="/">Go back</Link>
    </div>
  );
}
