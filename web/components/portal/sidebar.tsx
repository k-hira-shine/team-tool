"use client";

import type { LucideIcon } from "lucide-react";
import {
  Home,
  Calendar,
  ListTodo,
  FileText,
  Archive,
  BookOpen,
  HelpCircle,
  Mail,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections: {
  title: string;
  items: { href: string; label: string; icon: LucideIcon }[];
}[] = [
  {
    title: "学習",
    items: [
      { href: "/#schedule", label: "スケジュール", icon: Calendar },
      { href: "/#todo", label: "やるべきこと", icon: ListTodo },
      { href: "/#monthly", label: "月次課題", icon: FileText },
      { href: "/#archive", label: "アーカイブ", icon: Archive },
    ],
  },
  {
    title: "サポート",
    items: [
      { href: "/#setup", label: "設定マニュアル", icon: BookOpen },
      { href: "/#guide", label: "受講ガイド", icon: BookOpen },
      { href: "/#faq", label: "FAQ", icon: HelpCircle },
      { href: "/#contact", label: "運営へのお問い合わせ", icon: Mail },
    ],
  },
  {
    title: "アカウント",
    items: [{ href: "/#settings", label: "設定", icon: Settings }],
  },
];

function NavLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  const pathname = usePathname();
  const active = pathname === href.split("#")[0];
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
        active ? "bg-gray-200/80 text-gray-900" : "text-gray-700 hover:bg-gray-200/60"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0 opacity-80" />
      {label}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-gray-200 bg-[#f0f4f8]">
      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
        <NavLink href="/" label="トップ" icon={Home} />
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              {section.title}
            </p>
            <nav className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <p className="px-1 text-center text-xs leading-relaxed text-gray-500">
          ログインは後から追加予定
        </p>
      </div>
    </aside>
  );
}
