import { Check } from "lucide-react";

const events = [
  { title: "講義1", date: "4/5（土）10:00–12:00", done: true },
  { title: "講義2", date: "4/12（土）10:00–12:00", done: true },
  { title: "グループセッション", date: "4/19（土）14:00–15:30", done: false, next: true },
];

export function ScheduleHero() {
  return (
    <section id="schedule" className="relative scroll-mt-24 overflow-hidden rounded-xl bg-[#1a2f4a] px-6 py-6 text-white shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-blue-100/90">1ヶ月目</p>
          <h2 className="mt-1 text-lg font-bold tracking-tight">スケジュール</h2>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/20"
          title="カレンダーに一括登録（今後つなげられます）"
        >
          一括登録
        </button>
      </div>
      <ul className="mt-5 space-y-3">
        {events.map((ev) => (
          <li
            key={ev.title}
            className="flex items-center justify-between gap-3 rounded-lg bg-white/10 px-3 py-2.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              {ev.done ? (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/90">
                  <Check className="h-4 w-4 text-white" />
                </span>
              ) : (
                <span className="h-7 w-7 shrink-0 rounded-full border-2 border-white/40" />
              )}
              <div>
                <p className="font-medium">{ev.title}</p>
                <p className="text-sm text-blue-100/85">{ev.date}</p>
              </div>
            </div>
            {ev.next ? (
              <span className="shrink-0 rounded bg-amber-400 px-2 py-0.5 text-xs font-bold text-gray-900">
                NEXT
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
