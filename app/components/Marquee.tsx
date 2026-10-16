const marqueeItems = [
  "Nasi Box",
  "Prasmanan",
  "Snack Box",
  "Tumpeng",
  "Coffee Break",
  "Paket Arisan",
  "Prasmanan Wedding",
  "Gathering Kantor",
];

function MarqueeContent() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 text-sm font-medium uppercase tracking-[0.16em] text-warm-white/90">
            {item}
          </span>
          <span className="h-1 w-1 rounded-full bg-warm-white/40" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="overflow-hidden border-y border-warm-gray-800/10 bg-green py-3"
      aria-label="Layanan Seruni Catering"
    >
      <div className="animate-marquee flex w-max">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
