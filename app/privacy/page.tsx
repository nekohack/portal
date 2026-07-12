import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="mx-auto max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          プライバシーポリシー
        </h1>

        <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              1. 広告の配信について
            </h2>
            <p>
              当サイト（nekohack.me およびそのサブドメイン）では、第三者配信の広告サービス「Google AdSense」を利用しています。
            </p>
            <p className="mt-2">
              Googleなどの広告配信事業者は、ユーザーの過去のアクセス情報に基づいて適切な広告を配信するために「Cookie」を使用することがあります。
            </p>
            <p className="mt-2">
              ユーザーは、Googleの広告設定（<a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://adssettings.google.com/</a>）でパーソナライズ広告を無効にできます。また、www.aboutads.info にアクセスすることで、第三者配信事業者がパーソナライズ広告の掲載で使用する Cookie を無効にできます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              2. 免責事項
            </h2>
            <p>
              当サイトからのリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p className="mt-2">
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <div className="pt-6 border-t border-gray-100 dark:border-gray-700 text-sm">
            <p>策定日: 2026年7月12日</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
