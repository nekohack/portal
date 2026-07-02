import { ThemeToggle } from "@/components/theme-toggle";
import {
  ChartNoAxesCombined,
  ExternalLink,
  Github,
  Mail,
  Wrench,
  User,
  ShieldAlert,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-between">
      <div>
        <ThemeToggle />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-800">
                <Image
                  src="/jiyuujin.jpg?height=150&width=150"
                  alt="YUMA"
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] object-cover"
                  priority
                />
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                I am YUMA
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  <span>Application Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChartNoAxesCombined className="h-5 w-5" />
                  <span>Engineering Manager</span>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-2xl mb-16 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-gray-700">
                <User className="h-6 w-6" />
                About Me
              </h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  関西を拠点に活動しているアプリケーションデベロッパー兼エンジニアリングマネージャーです。
                  主にWebアプリケーションのバックエンド開発およびシステム全体のアーキテクチャ設計を得意としており、Node.js、TypeScript、Rust、MongoDBなどの技術スタックを用いたプラットフォームのコア開発・保守運用に深く携わっています
                  [cite: The user is a professional software engineer with a
                  skill set spanning frontend development, backend development
                  (primary focus), and application architecture design., The
                  user is a professional software engineer with a skill set
                  spanning frontend development, backend development (primary
                  focus), and application architecture design., The user has a
                  strong preference for a modern technical stack including
                  Flutter, Firebase, Cloudflare (Pages/Workers), and is
                  exploring Rust for personal projects., The user works on the
                  development and maintenance of "BOTCHAN," a chatbot and
                  payment platform, involving technologies like Node.js,
                  TypeScript, MongoDB.].
                </p>
                <p>
                  また、フロントエンド開発やクロスプラットフォームフレームワーク（Flutter）を活用したモバイルアプリ開発、CloudflareやFirebaseを中心としたモダンなインフラ構成にも強みを持っています
                  [cite: The user is a professional software engineer with a
                  skill set spanning frontend development, backend development
                  (primary focus), and application architecture design., The
                  user is a professional software engineer with a skill set
                  spanning frontend development, backend development (primary
                  focus), and application architecture design., The user has a
                  strong preference for a modern technical stack including
                  Flutter, Firebase, Cloudflare (Pages/Workers), and is
                  exploring Rust for personal projects.].
                </p>
                <p>
                  個人活動・コミュニティ活動にも注力しており、複数の技術コミュニティや国内最大級の技術カンファレンスのコアスタッフ・オーガナイザーとして、予算管理からテクニカルインフラの構築、スポンサーシップ運用（社内ツールの開発）まで幅広く管轄しています
                  [cite: The user is a lead organizer and developer for the
                  Flutter Osaka community and is involved with the Flutter Japan
                  User Group., The user is a core staff member of the
                  FlutterKaigi organizing team, responsible for budgeting,
                  technical infrastructure, and sponsorship management., The
                  user values operational efficiency and automation, often
                  building custom tools to streamline repetitive tasks like
                  sponsor data management or form testing.].
                  効率化と自動化を好み、現場主義のカルチャーを大切にしながら日々ものづくりを続けています
                  [cite: The user favors a "festival-like" or "culture festival"
                  atmosphere for tech conferences, emphasizing local community
                  engagement and high-energy networking., The user values
                  operational efficiency and automation, often building custom
                  tools to streamline repetitive tasks like sponsor data
                  management or form testing., Planning and execution of
                  FlutterKaigi 2026, scheduled for November 2026 with a focus on
                  "现场主義" (on-site preference) and no simultaneous
                  streaming.].
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="mx-auto max-w-2xl mb-16">
              <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900 dark:text-white">
                YUMA&apos;s links
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <LinkCard
                  href="https://yuma-kitamura.nekohack.me/"
                  title="Portfolio"
                  icon={<ExternalLink />}
                />
                <LinkCard
                  href="https://blog.nekohack.me/"
                  title="Weblog"
                  icon={<ExternalLink />}
                />
                <LinkCard
                  href="https://github.com/jiyuujin"
                  title="GitHub"
                  icon={<Github />}
                />
                <LinkCard
                  href="https://bsky.app/profile/jiyuujin.bsky.social"
                  title="Bluesky"
                  icon={<ExternalLink />}
                />
                <LinkCard
                  href="https://times.nekohack.me/"
                  title="Mastodon"
                  icon={<ExternalLink />}
                />
                <LinkCard
                  href="mailto:jiyuujin@nekohack.me"
                  title="Email"
                  icon={<Mail />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <span>
            &copy; {new Date().getFullYear()} YUMA. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:underline flex items-center gap-1"
            >
              <ShieldAlert className="h-4 w-4" />
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="hover:underline flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function LinkCard({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) {
  const isInternal = href.startsWith("/");
  const Component = isInternal ? Link : "a";

  return (
    <Component
      href={href}
      {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
        {icon}
      </div>
      <span className="text-lg font-medium">{title}</span>
    </Component>
  );
}
