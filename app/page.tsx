import { ThemeToggle } from "@/components/theme-toggle";
import {
  ChartNoAxesCombined,
  ExternalLink,
  Github,
  Mail,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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

          {/* Links Section */}
          <div className="mx-auto max-w-2xl">
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
                href="jiyuujin@nekohack.me"
                title="Email"
                icon={<Mail />}
              />
            </div>
          </div>
        </div>
      </div>
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
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
        {icon}
      </div>
      <span className="text-lg font-medium">{title}</span>
    </Link>
  );
}
