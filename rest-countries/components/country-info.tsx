import Span from "./span";

export default function CountryInfo({ prop, value }: CountryInfoProps) {
  return (
    <p>
      <Span>{prop}:</Span>&nbsp;
      {value}
    </p>
  );
}
