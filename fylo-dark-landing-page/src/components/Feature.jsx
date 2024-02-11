export default function Feature({ icon, alt, feature, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-md gap-4 p-4">
      <img src={icon} alt={alt} />
      <div className="space-y-2">
        <h1 className="text-xl">{feature}</h1>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
}
