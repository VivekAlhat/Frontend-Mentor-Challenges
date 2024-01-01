import Span from "./span";

export default function CountryData({ title, data }: CountryDataProps) {
  return (
    <p>
      <Span name={title} />
      {data}
    </p>
  );
}
