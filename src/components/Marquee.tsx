"use client";

const ITEMS = [
  "HAIRCUTS",
  "COLORING",
  "BRAIDS",
  "STYLING",
  "NAILS",
  "KERATIN",
  "HIGHLIGHTS",
  "BLOWOUTS",
];

export default function Marquee() {
  const content = ITEMS.map((item) => (
    <span
      key={item}
      className="flex items-center gap-6 px-6 font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-ink/10 whitespace-nowrap"
    >
      {item}
      <span className="inline-block w-3 h-3 rounded-full bg-gold/30" />
    </span>
  ));

  return (
    <section className="py-8 overflow-hidden border-y border-ink/5">
      <div className="marquee-track">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </section>
  );
}
