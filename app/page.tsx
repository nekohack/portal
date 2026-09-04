import { ThemeToggle } from "@/components/theme-toggle";
import {
  ChartNoAxesCombined,
  ExternalLink,
  Github,
  Mail,
  Wrench,
  User,
  ArrowUpRight,
  FolderGit2,
  Sparkles,
  Zap,
  Globe,
  Radio,
  Share2,
  Terminal,
  Cpu,
  Layers,
  Music,
  Plane,
  Newspaper,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function Home() {
  const projects = [
    {
      name: "Tracc",
      desc: "Sponsorship Management",
      icon: <Sparkles className="h-6 w-6" />,
      href: "https://go.tracc.jp/",
    },
    {
      name: "Luma",
      desc: "Event Management",
      icon: <Compass className="h-6 w-6" />,
      href: "https://luma-portal.nekohack.me/",
    },
    {
      name: "Bot",
      desc: "Bot Management",
      icon: <Zap className="h-6 w-6" />,
      href: "https://rocket-form.nekohack.me/",
    },
    {
      name: "Assign",
      desc: "Staff Board",
      icon: <Layers className="h-6 w-6" />,
      href: "https://commitment-board.nekohack.me/",
    },
    {
      name: "Link",
      desc: "Link Management",
      icon: <Radio className="h-6 w-6" />,
      href: "https://dl.nekohack.me/",
    },
    {
      name: "IMGO",
      desc: "Image Compression",
      icon: <Cpu className="h-6 w-6" />,
      href: "https://imgo.nekohack.me/",
    },
    {
      name: "Newspaper",
      desc: "Daily News",
      icon: <Newspaper className="h-6 w-6" />,
      href: "https://newspaper.nekohack.me/",
    },
    {
      name: "Portal",
      desc: "Main Hub",
      icon: <Globe className="h-6 w-6" />,
      href: "https://nekohack.me/",
    },
    {
      name: "Multi Post Dash",
      desc: "Posting Dashboard",
      icon: <Share2 className="h-6 w-6" />,
      href: "https://multi-post.nekohack.me/",
    },
    {
      name: "Sheer Music",
      desc: "Fan & Idol Connection",
      icon: <Terminal className="h-6 w-6" />,
      href: "https://sheer-community.nekohack.me/",
    },
    {
      name: "KARAOKE BINGO",
      desc: "Interactive Tool",
      icon: <Music className="h-6 w-6" />,
      href: "https://karaoke-bingo.nekohack.me/",
    },
    {
      name: "JetPhoto",
      desc: "Aviation Spotting",
      icon: <Plane className="h-6 w-6" />,
      href: "https://jetphoto-community.nekohack.me/",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between selection:bg-amber-400 selection:text-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10">
        <ThemeToggle />
        <div className="container mx-auto px-6 py-20 md:py-32 max-w-5xl">
          <section className="mb-32">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
              <div className="order-2 md:order-1 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  ONLINE / ARCHIVE
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
                  I AM{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300">
                    YUMA
                  </span>
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 font-mono text-xs md:text-sm tracking-widest uppercase text-zinc-400">
                  <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-950/80 px-4 py-2 rounded-none border-l-2 border-l-amber-500">
                    <Wrench className="h-4 w-4 text-amber-400" />
                    <span>Application Developer</span>
                  </div>
                  <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-950/80 px-4 py-2 rounded-none border-l-2 border-l-orange-500">
                    <ChartNoAxesCombined className="h-4 w-4 text-orange-400" />
                    <span>Engineering Manager</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 opacity-30 blur-lg group-hover:opacity-70 transition duration-700" />
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-2">
                  <Image
                    src="/jiyuujin.jpg?height=150&width=150"
                    alt="YUMA"
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] object-cover rounded-xl grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="relative border-l border-zinc-800 pl-6 md:pl-10 space-y-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-black" />
              <h2 className="flex items-center gap-3 text-2xl font-mono tracking-widest text-amber-400 uppercase">
                <User className="h-5 w-5" />
                About Me
              </h2>
              <div className="text-zinc-300 space-y-6 font-light leading-relaxed tracking-wide text-base md:text-lg max-w-3xl">
                <p>
                  関西（京都や大阪）を拠点に活動しているアプリケーションデベロッパー兼エンジニアリングマネージャーです。主にWebアプリケーションのバックエンド開発およびシステム全体のアーキテクチャ設計を得意としており、Node.js、TypeScript、Rust、MongoDBなどの技術スタックを用いたプラットフォームのコア開発・保守運用に深く携わっています
                </p>
                <p>
                  また、フロントエンド開発やクロスプラットフォームフレームワーク（ExpoやFlutter）を活用したモバイルアプリ開発、CloudflareやFirebaseを中心としたモダンなインフラ構成にも強みを持っています
                </p>
                <p>
                  個人活動・コミュニティ活動にも注力しており、複数の技術コミュニティや国内最大級の技術カンファレンスのコアスタッフ・オーガナイザーとして、予算管理からテクニカルインフラの構築、スポンサーシップ運用（ツールの開発）まで幅広く管轄しています
                </p>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
                <FolderGit2 className="h-4 w-4 text-amber-400" />
                // FEATURED_PROJECTS_PORTAL
              </h2>
              <span className="text-[10px] font-mono text-amber-400/80">
                [ 12 UNITS ]
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 justify-items-center">
              {projects.map((project, index) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  className="group relative flex flex-col items-center"
                >
                  <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-500 group-hover:border-amber-500 group-hover:bg-amber-500/10 group-hover:text-amber-400 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                    <span className="absolute top-2 font-mono text-[9px] text-zinc-600 group-hover:text-amber-400/80">
                      0{index + 1}
                    </span>
                    {project.icon}
                  </div>

                  <span className="mt-3 font-mono text-xs font-medium text-zinc-400 group-hover:text-amber-300 text-center transition-colors truncate max-w-[100px]">
                    {project.name}
                  </span>

                  <div className="pointer-events-none absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-20 whitespace-nowrap bg-zinc-900 border border-amber-500/40 px-2.5 py-1 text-[10px] font-mono text-amber-400 shadow-xl">
                    {project.desc}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-4">
              <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-500">
                // INDEXED_LINKS
              </h2>
              <span className="text-[10px] font-mono text-amber-400/80">
                [ 05 NAVIGATION UNITS ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <ArtLinkCard
                  href="https://yuma-kitamura.nekohack.me/"
                  title="Portfolio"
                  icon={<ExternalLink />}
                  tag="01"
                />
              </div>
              <div className="md:col-span-4">
                <ArtLinkCard
                  href="https://github.com/jiyuujin"
                  title="GitHub"
                  icon={<Github />}
                  tag="02"
                />
              </div>
              <div className="md:col-span-4">
                <ArtLinkCard
                  href="https://blog.nekohack.me/"
                  title="Weblog"
                  icon={<ExternalLink />}
                  tag="03"
                />
              </div>
              <div className="md:col-span-4">
                <ArtLinkCard
                  href="https://times.nekohack.me/"
                  title="Mastodon"
                  icon={<ExternalLink />}
                  tag="04"
                />
              </div>
              <div className="md:col-span-4">
                <ArtLinkCard
                  href="mailto:jiyuujin@nekohack.me"
                  title="Email"
                  icon={<Mail />}
                  tag="05"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-black/80 backdrop-blur py-10 text-xs font-mono tracking-widest text-zinc-600 uppercase">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            &copy; {new Date().getFullYear()} nekohack. All rights reserved.
          </span>
          <Link
            href="/privacy"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>プライバシーポリシー</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </footer>
    </main>
  );
}

function ArtLinkCard({
  href,
  title,
  icon,
  tag,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  tag: string;
}) {
  const isInternal = href.startsWith("/");
  const Component = isInternal ? Link : "a";

  return (
    <Component
      href={href}
      {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative block w-full p-6 border border-zinc-800 bg-zinc-950/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-amber-500/60 hover:bg-zinc-900/80"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest text-zinc-600 group-hover:text-amber-400 transition-colors">
          [{tag}]
        </span>
        <div className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-zinc-400 group-hover:text-amber-400 transition-colors">
          {icon}
        </div>
        <span className="text-xl font-bold tracking-wider text-zinc-200 group-hover:text-white transition-colors">
          {title}
        </span>
      </div>
    </Component>
  );
}
