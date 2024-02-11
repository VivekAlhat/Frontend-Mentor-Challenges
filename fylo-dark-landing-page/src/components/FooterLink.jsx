export default function FooterLink({ linkText }) {
  return (
    <li className="text-white/80 hover:text-white hover:underline cursor-pointer">
      {linkText}
    </li>
  );
}
