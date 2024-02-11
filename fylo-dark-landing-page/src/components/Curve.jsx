export default function Curve() {
  return (
    <picture>
      <source
        srcSet="/bg-curvy-desktop.svg"
        media="(min-width: 600px)"
        className="w-full absolute bottom-0 left-0"
      />
      <img
        src="/bg-curvy-mobile.svg"
        alt="curve"
        className="w-full absolute bottom-0 left-0"
      />
    </picture>
  );
}
