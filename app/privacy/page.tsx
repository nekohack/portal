import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 py-20 px-6 flex flex-col justify-between selection:bg-amber-400 selection:text-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl w-full">
        <div className="border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-8 md:p-14 relative">
          <div className="absolute -top-3 left-8 px-3 py-0.5 bg-amber-500 text-black font-mono text-[10px] font-bold tracking-widest uppercase">
            LEGAL_DOCUMENT
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-10 pb-6 border-b border-zinc-800 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300">
            プライバシーポリシー
          </h1>

          <div className="space-y-10 text-zinc-300 font-light leading-relaxed tracking-wide text-sm md:text-base">
            <section className="space-y-3">
              <h2 className="text-base font-mono tracking-widest text-amber-400 uppercase flex items-center gap-2">
                <span className="text-zinc-600">//</span> 1. 広告の配信について
              </h2>
              <p>
                当サイト（nekohack.me
                およびそのサブドメイン）では、第三者配信の広告サービス「Google
                AdSense」を利用しています。
              </p>
              <p>
                Googleなどの広告配信事業者は、ユーザーの過去のアクセス情報に基づいて適切な広告を配信するために「Cookie」を使用することがあります。
              </p>
              <p>
                ユーザーは、Googleの広告設定（
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors inline-flex items-center gap-0.5"
                >
                  https://adssettings.google.com/
                  <ArrowUpRight className="h-3 w-3 inline" />
                </a>
                ）でパーソナライズ広告を無効にできます。また、www.aboutads.info
                にアクセスすることで、第三者配信事業者がパーソナライズ広告の掲載で使用する
                Cookie を無効にできます。
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-mono tracking-widest text-amber-400 uppercase flex items-center gap-2">
                <span className="text-zinc-600">//</span> 2. 免責事項
              </h2>
              <p>
                当サイトからのリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
              </p>
              <p>
                当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
            </section>

            <div className="pt-8 border-t border-zinc-800/80 font-mono text-xs text-zinc-500 tracking-widest">
              <p>策定日: 2026年7月12日</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-800 bg-black font-mono text-xs tracking-widest uppercase text-zinc-400 hover:text-white hover:border-amber-500 transition-all duration-300"
            >
              ← トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
