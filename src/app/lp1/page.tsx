"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Footprints, Calendar, Monitor, Coffee, Sparkles, Zap, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function EmotionalLP() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-orange-100">
      
      {/* 1. Hero Section: Ultra Modern Contrast */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
        {/* 背景装飾 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-sm font-bold mb-8 backdrop-blur-md">
                  <Sparkles className="w-4 h-4" />
                  <span>20代・未経験からのキャリア大逆転</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter text-white">
                  立ち仕事は、<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 font-black">もう限界。</span><br />
                  <span className="relative">
                    デスクワーク
                    <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M2 10C50 3 150 3 298 10" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" 
                      />
                    </motion.svg>
                  </span>で、<br />
                  理想の生活を。
                </h1>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                  飲食・アパレル・工場勤務からエンジニアへ。<br />
                  土日休み、リモートワーク、将来の不安ゼロ。<br />
                  <span className="text-white font-bold">キャレッジなら、3ヶ月で現実になります。</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-black py-8 px-12 rounded-2xl shadow-[0_20px_40px_-10px_rgba(249,115,22,0.5)] transition-all hover:scale-105 active:scale-95 group">
                    無料で相談してみる
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative z-10"
              >
                <div className="rounded-[40px] overflow-hidden border-[12px] border-white/5 shadow-2xl relative">
                  <img src="/images/hero-office.png" alt="理想のオフィス生活" className="w-full h-auto scale-110 hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  {/* Floating Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">98</div>
                      <div>
                        <p className="text-white font-bold">内定獲得率 98%</p>
                        <p className="text-white/60 text-xs">※2025年度実績</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* 装飾シェイプ */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 共感セクション: Visual Cards */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">こんな毎日に、<br className="md:hidden" /><span className="text-slate-400">疲れていませんか？</span></h2>
            <div className="w-24 h-2 bg-slate-200 mx-auto rounded-full overflow-hidden">
              <motion.div 
                className="w-full h-full bg-sky-500" 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/images/member-1.png", title: "連勤続きでヘトヘト", desc: "立ち仕事で足はパンパン。朝起きるのが辛い..." },
              { img: "/images/member-2.png", title: "友人と休みが合わない", desc: "土日はいつも仕事。大切なイベントにも参加できない。" },
              { img: "/images/member-3.png", title: "将来が見えない不安", desc: "この仕事を5年、10年と続けられるイメージが沸かない。" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-slate-50 rounded-[40px] overflow-hidden p-4 pb-10 border border-slate-100 hover:border-sky-200 transition-all hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <div className="rounded-[32px] overflow-hidden mb-8 h-64 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="px-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-slate-900">
                    <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-black text-slate-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">!</span>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 解決策セクション: High Impact Layout */}
      <section className="py-32 px-4 bg-sky-50 relative overflow-hidden">
        {/* 装飾用の背景文字 */}
        <div className="absolute top-0 left-0 text-[20vw] font-black text-sky-100/50 leading-none select-none -z-10 tracking-tighter translate-y-[-20%]">SOLUTION</div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="inline-block px-4 py-1 rounded-full bg-sky-500 text-white text-xs font-bold mb-6 tracking-widest uppercase">The Solution</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                インフラエンジニアなら、<br />
                <span className="text-sky-500 underline decoration-sky-200 underline-offset-8">すべてが解決</span>します。
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Calendar, t: "完全週休2日・土日祝休み", d: "友人と予定を合わせて、旅行やイベントを楽しめます。" },
                  { icon: Coffee, t: "デスクワーク中心の働き方", d: "肉体的な疲れとは無縁。快適なオフィス環境で働けます。" },
                  { icon: Zap, t: "需要が尽きない技術職", d: "手に職をつけることで、将来への漠然とした不安が消えます。" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white shadow-sm border border-sky-100 items-center hover:translate-x-2 transition-transform">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-sky-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[50px] overflow-hidden shadow-3xl border-[20px] border-white relative z-10">
                <img src="/images/support-team.png" alt="エンジニアの働き方" className="w-full h-auto" />
              </div>
              {/* Floating Icons */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-4xl z-20">💻</motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-4xl z-20">☕</motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. なぜキャレッジなのか (選ばれる理由) */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              未経験でも挫折しない、<br /><span className="text-sky-500">伴走型サポート。</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, t: "スマホ完結の学習", d: "忙しい現職中でも大丈夫。移動時間に動画でサクッと学べます。" },
              { icon: CheckCircle2, t: "ブラック企業を徹底排除", d: "離職率や残業時間を厳しく審査。優良企業のみをご紹介します。" },
              { icon: Monitor, t: "強みを引き出すカウンセリング", d: "あなた自身も気づいていない「強み」をアドバイザーが言語化。" }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-sky-900 group transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-lg shadow-sky-500/20">
                  <f.icon className="w-8 h-8 text-white group-hover:text-sky-500" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">{f.t}</h4>
                <p className="text-slate-500 group-hover:text-sky-100 leading-relaxed transition-colors">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA: Full Impact */}
      <section className="py-32 px-4 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0ea5e9_0%,transparent_70%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">
              新しいキャリアを、<br />ここから始めよう。
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              まずは話を聞いてみるだけでもOK。<br />
              あなたの「本当の適性」を一緒に探しましょう。
            </p>
            
            <div className="inline-block relative group">
              <div className="absolute -inset-4 bg-orange-500 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Button size="lg" className="relative bg-orange-500 hover:bg-orange-600 text-white text-3xl font-black py-12 px-16 rounded-[28px] shadow-2xl shadow-orange-500/50 transition-all hover:scale-105 active:scale-95 flex flex-col items-center">
                無料で転職相談に申し込む
                <span className="block text-sm font-bold mt-2 text-white/80 tracking-widest">（30秒で完了・WEB面談OK）</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="font-bold text-3xl text-white mb-8 tracking-tighter">CAREGE<span className="text-sky-500">.</span></div>
          <div className="flex justify-center gap-8 text-slate-500 text-sm mb-12">
            <a href="#" className="hover:text-white transition-colors">会社概要</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
          </div>
          <p className="text-slate-600 text-xs tracking-widest uppercase">&copy; 2026 CAREGE Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
