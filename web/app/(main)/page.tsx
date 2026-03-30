import { ScheduleHero } from "@/components/portal/schedule-hero";
import { CardSection, type CardItem } from "@/components/portal/card-section";

const cohortLabel = "第1期 金曜クラス";

const todoItems: CardItem[] = [
  { title: "講義1を終えた方へ", description: "次のステップの案内", href: "#" },
  { title: "講義2を終えた方へ", description: "復習と次週の準備", href: "#" },
];

const monthlyItems: CardItem[] = [
  { title: "自己紹介用の図解をつくってみる", description: "月次課題（例）", href: "#" },
];

const archiveItems: CardItem[] = [
  { title: "講義アーカイブ", description: "過去の録画・資料", href: "#" },
];

const setupItems: CardItem[] = [
  { title: "Cursor セットアップ", href: "#" },
  { title: "図解ツールの入手（Gitea）", href: "#" },
  { title: "AIドリルの使い方", href: "#" },
  { title: "環境変数の設定", href: "#" },
  { title: "トラブルシュート", href: "#" },
];

const guideItems: CardItem[] = [
  { title: "オンライン講義の準備", href: "#" },
  { title: "受講上の注意", href: "#" },
  { title: "チームのガイドライン", href: "#" },
  { title: "グループセッションについて", href: "#" },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
        <span className="text-lg font-bold tracking-tight text-[#1a2f4a]">
          チームポータル
        </span>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="hidden rounded-full bg-amber-100 px-3 py-1 text-amber-900 sm:inline">
            テスト公開（ログインなし）
          </span>
          <span className="hidden rounded-full bg-gray-100 px-3 py-1 text-gray-800 sm:inline">
            {cohortLabel}
          </span>
        </div>
      </header>

      <main className="flex-1 space-y-10 overflow-y-auto px-6 py-6">
        <ScheduleHero />

        <CardSection id="todo" title="やるべきこと" items={todoItems} />
        <CardSection id="monthly" title="月次課題" items={monthlyItems} />
        <CardSection id="archive" title="アーカイブ" items={archiveItems} />
        <CardSection id="setup" title="設定マニュアル" items={setupItems} />
        <CardSection id="guide" title="受講ガイド" items={guideItems} />

        <section id="faq" className="scroll-mt-24 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-6 w-1 rounded-sm bg-[#2563eb]" />
            <h3 className="text-base font-bold text-gray-900">FAQ</h3>
          </div>
          <p>よくある質問はここにリンクや本文を追加できます。</p>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-6 w-1 rounded-sm bg-[#2563eb]" />
            <h3 className="text-base font-bold text-gray-900">運営へのお問い合わせ</h3>
          </div>
          <p>連絡先やフォームのURLをここに置けます。</p>
        </section>

        <section id="settings" className="scroll-mt-24 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-6 w-1 rounded-sm bg-[#2563eb]" />
            <h3 className="text-base font-bold text-gray-900">設定</h3>
          </div>
          <p>ログインやアカウント設定は、本番用に後から追加できます。</p>
        </section>
      </main>
    </div>
  );
}
