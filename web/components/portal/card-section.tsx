import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type CardItem = { title: string; description?: string; href: string };

export function CardSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: CardItem[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-6 w-1 rounded-sm bg-[#2563eb]" aria-hidden />
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#2563eb]/40 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-medium text-gray-900 group-hover:text-[#1a2f4a]">
                {item.title}
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#2563eb]" />
            </div>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
