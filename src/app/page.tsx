"use client";

import React, { useState } from 'react';

// アイコンコンポーネント
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen font-sans text-slate-800 bg-white">
      
      {/* ヘッダー */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight">
            <span className="text-slate-900">CAREGE</span>
            <span className="text-orange-500">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#reason" className="hover:text-orange-500 transition-colors">選ばれる理由</a>
            <a href="#service" className="hover:text-orange-500 transition-colors">サービス概要</a>
            <a href="#flow" className="hover:text-orange-500 transition-colors">就職までの流れ</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">よくある質問</a>
          </nav>
          <a 
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 px-5 rounded-full transition-colors shadow-lg shadow-orange-500/20"
          >
            無料相談する
          </a>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="pt-28 pb-0 md:pt-40 md:pb-0 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left py-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
                20代・未経験からのIT転職
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                IT業界へ本気で<br />
                <span className="text-orange-400">転職したい</span>あなたへ
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                担当アドバイザーが内定まで伴走。<br />
                最短距離でITキャリアを実現する就職支援サービス
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  就職アドバイザーに相談する
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
            <div className="relative h-full hidden lg:block">
              {/* input_file_1.png を想定したヒーロー画像 */}
              <div className="relative z-10 rounded-tl-[80px] overflow-hidden border-l-8 border-t-8 border-orange-500/30 shadow-2xl">
                <img 
                  src="/images/hero-office.png" 
                  alt="明るいオフィスでの仕事風景" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* 装飾要素 */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由（ポートレート画像付き） */}
      <section id="reason" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-slate-900 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              選ばれる理由
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              私たちが<span className="text-orange-500">伴走</span>します
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/member-1.png" alt="スタッフ1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900">IT企業紹介に特化</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  業界の裏側まで知り尽くしたアドバイザーが、あなたに最適な企業を厳選してご紹介。
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/member-2.png" alt="スタッフ2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900">内定まで徹底伴走</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  書類添削から面接対策まで。あなたの「本気」を、孤独な戦いにはさせません。
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/member-3.png" alt="スタッフ3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-900">無料eラーニング</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  未経験でも困らない状態まで、最短でスキルアップ。自信を持って選考に臨めます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社との違い */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              他社サービスとの違い
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              CAREGEが選ばれる<span className="text-orange-500">理由</span>
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl p-2">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-slate-50 rounded-tl-xl"></th>
                  <th className="p-4 text-center bg-orange-500 text-white font-bold text-lg">CAREGE</th>
                  <th className="p-4 text-center bg-slate-100 text-slate-500 rounded-tr-xl font-normal">一般的なサービス</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "求人の閲覧", carege: "IT業界に特化した厳選求人", other: "掲載情報中心" },
                  { label: "エントリーシート", carege: "Web上で簡単入力・提出サポート", other: "自分で作成・提出" },
                  { label: "学習サポート", carege: "eラーニングでITスキル習得", other: "基本なし" },
                  { label: "面談・サポート", carege: "専任スタッフが個別に伴走", other: "一部サービスで対応" },
                  { label: "企業マッチング", carege: "希望に合わせた最適マッチング", other: "求人応募のみ" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="p-5 font-bold text-slate-700 bg-slate-50/50">{row.label}</td>
                    <td className="p-5 text-center bg-orange-50/30">
                      <div className="flex items-center justify-center gap-2">
                        <CheckIcon />
                        <span className="text-slate-900 font-bold">{row.carege}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center text-slate-400">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* サポートチーム セクション（input_file_11.pngを想定） */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/images/support-team.png" 
                  alt="プロフェッショナルなサポートチーム" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-xs">利用者の内定獲得率</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Support System</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-8">
                経験豊富なアドバイザーが<br />内定までマンツーマンサポート
              </h2>
              <div className="space-y-6">
                {[
                  "あなた専任のアドバイザーが個別面談",
                  "企業の採用傾向に基づいた面接トレーニング",
                  "スキルアップのためのeラーニングが完全無料",
                  "入社後のアフターフォローも万全"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-1 rounded-full text-orange-600">
                      <CheckIcon />
                    </div>
                    <p className="text-lg text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 text-orange-500 font-bold text-lg hover:translate-x-2 transition-transform"
                >
                  サポート体制を詳しく見る
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最後に（CTA） */}
      <section id="contact" className="py-24 bg-slate-900 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            未来を変える覚悟があるなら、<br />
            <span className="text-orange-400">今日がスタートライン</span>です。
          </h2>
          <p className="text-slate-300 mb-12 text-xl leading-relaxed">
            まずは「話を聞いてみる」だけでも構いません。<br />
            あなたの新しい第一歩を、私たちが全力で支えます。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-full text-xl transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 group"
            >
              無料の転職相談を予約する
              <div className="group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon />
              </div>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>登録無料</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>オンライン対応可能</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>履歴書不要（初回）</span>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12 bg-slate-950 text-white px-4 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="font-bold text-3xl">
              CAREGE<span className="text-orange-500">.</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-orange-400 transition-colors">会社概要</a>
              <a href="#" className="hover:text-orange-400 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-orange-400 transition-colors">利用規約</a>
              <a href="#" className="hover:text-orange-400 transition-colors">お問い合わせ</a>
            </nav>
          </div>
          <div className="text-center text-slate-600 text-sm">
            <p>&copy; 2026 CAREGE Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
