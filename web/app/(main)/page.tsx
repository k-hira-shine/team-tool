import { CardSection, type CardItem } from "@/components/portal/card-section";

const dummyTools: CardItem[] = [
  {
    title: "ツールA（ダミー）",
    description: "後で実際のURLと説明に差し替え。",
    href: "#",
    anchor: "tool-a",
  },
  {
    title: "ツールB（ダミー）",
    description: "チーム用の置き場所のイメージ。",
    href: "#",
    anchor: "tool-b",
  },
  {
    title: "ツールC（ダミー）",
    description: "カードは増やしたり減らしたりできる。",
    href: "#",
    anchor: "tool-c",
  },
  {
    title: "ツールD（ダミー）",
    description: "リンク先は # のままでもよい。",
    href: "#",
    anchor: "tool-d",
  },
  {
    title: "ツールE（ダミー）",
    description: "必要ならセクションを分けてもよい。",
    href: "#",
    anchor: "tool-e",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
        <span className="text-lg font-bold tracking-tight text-[#1a2f4a]">
          チームポータル
        </span>
        <span className="hidden rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900 sm:inline">
          テスト公開（ログインなし）
        </span>
      </header>

      <main className="flex-1 space-y-8 overflow-y-auto px-6 py-8">
        <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
          チームで使うツールへの入口です。下はダミーのカードです。名前・説明・URLはすべて差し替えてください。
        </p>

        <CardSection id="tools" title="ツール" items={dummyTools} />
      </main>
    </div>
  );
}
