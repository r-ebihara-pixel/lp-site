"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ShieldCheck, Zap, Users, ArrowRight, CheckCircle2, Trophy, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function MeritLP() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Hero Section: Professional & Sharp */}
      <section className="pt-32 pb-24 px-4 bg-white relative overflow-hidden">
        {/* 背景のグリッドパターン */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest border border-blue-200">
                  <Award className="w-3 h-3" />
                  完全無料
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-widest border border-yellow-200">
                  <Star className="w-3 h-3 fill-current" />
                  満足度 95%
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tighter">
                受講料<span className="text-blue-600">0円。</span><br />
                一生モノの<br />
                <span className="relative">
                  ITスキル
                  <div className="absolute bottom-2 left-0 w-full h-4 bg-blue-600/10 -z-10" />
                </span>をその手に。
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
                未経験からインフラエンジニアへの最短ルート。<br />
                国家資格レベルの知識（CCNA/LinuC）をタダで身につけ、<br />
                <span className="font-bold text-slate-900">確実に平均年収+100万円を目指すキャリアプログラム。</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black py-10 px-12 rounded-2xl shadow-2xl shadow-blue-600/20 group transition-all">
                  無料で学習を開始する
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-3xl border-[16px] border-slate-50 relative group">
                <img src="/images/hero-office.png" alt="研修風景" className="w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Floating Certificates */}
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-12 right-0 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100">
                <Trophy className="w-10 h-10 text-yellow-500 mb-2" />
                <p className="font-black text-slate-900">CCNA合格率</p>
                <p className="text-2xl font-black text-blue-600 italic leading-none">95.4%</p>
              </motion.div>
              
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-0 -left-12 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img src={`/images/member-${i}.png`} /></div>)}
                  </div>
                  <span className="text-xs font-bold text-slate-400">現在 150名が受講中</span>
                </div>
                <p className="font-black text-slate-900">平均年収UP額</p>
                <p className="text-2xl font-black text-emerald-500 italic leading-none">+120万円</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WARNING Section: Dark Contrast */}
      <section className="py-24 bg-slate-950 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[60px] border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
            <span className="inline-block px-6 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-black mb-8 border border-red-500/20">WARNING</span>
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
              「未経験歓迎」の求人に、<br />
              <span className="text-red-500">騙されないでください。</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              IT業界の「未経験歓迎」の裏側には、<br className="hidden md:block" />
              単調なデータ入力や家電販売など、スキルが身につかない現場も多いのが現実です。<br /><br />
              <span className="text-white font-bold">エンジニアとしての確かなキャリアを歩むためには、<br className="hidden md:block" />最初から「武器（技術）」を持つことが不可欠です。</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Curriculum: Timeline Style */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">カリキュラム詳細</h2>
            <p className="text-slate-500">3ヶ月後、あなたは見違えるプロの姿に。</p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
            
            <div className="space-y-32">
              {[
                { t: "IT基礎・OS入門", d: "PCの仕組みからWindows/Linuxの違いまで、エンジニアの土台を固めます。", icon: Zap, side: "left" },
                { t: "Linuxサーバー構築実習", d: "実際にコマンドを打ち込み、Webサーバーやファイルサーバーを構築します。", icon: BookOpen, side: "right" },
                { t: "CCNAネットワークマスター", d: "インターネットの核心「ネットワーク」。パケットがどう飛ぶかを完全に理解。", icon: Award, side: "left" },
                { t: "就職支援・内定獲得", d: "エンジニア特有の面接ノウハウを伝授。優良企業へのパスポートを手に入れます。", icon: Trophy, side: "right" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${item.side === "right" ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <div className={`p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-500/5 group`}>
                      <item.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                      <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">Step {i + 1}</span>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.t}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-600 border-[6px] border-white shadow-xl z-10 relative hidden lg:flex items-center justify-center text-white text-xs font-black">
                    {i + 1}
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Free? */}
      <section className="py-32 px-4 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">なぜ「無料」で<br />提供できるのか？</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                私たちは多くの成長企業とパートナーシップを結んでいます。<br /><br />
                就職が決まった際に企業から紹介料をいただく仕組みのため、<br />
                <span className="text-white font-black border-b-2 border-white">あなたから費用をいただく必要はありません。</span>
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <ShieldCheck className="w-8 h-8 mb-4 text-white" />
                  <p className="font-bold text-sm">違約金などは一切なし</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <Users className="w-8 h-8 mb-4 text-white" />
                  <p className="font-bold text-sm">キャリア相談も永年無料</p>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, rotate: -5 }} whileInView={{ opacity: 1, rotate: 0 }} className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
                <img src="/images/support-team.png" alt="説明風景" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Success Stories */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">実績こそが信頼の証。</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "田中さん（24歳・元アパレル）", from: "年収220万", to: "年収350万", desc: "シフト制で生活が不安定でしたが、今は土日休みで仕事後の時間も充実しています。" },
              { name: "佐藤さん（26歳・元飲食）", from: "年収280万", to: "年収420万", desc: "エンジニアは自分には無理だと思っていましたが、カリキュラムが分かりやすく挫折せずに済みました。" }
            ].map((s, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border-4 border-slate-50">
                    <img src={`/images/member-${i+1}.png`} alt={s.name} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">{s.name}</h4>
                    <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">Success Story</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-8 p-6 bg-slate-50 rounded-3xl">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs font-bold mb-1">Before</p>
                    <p className="text-slate-500 font-bold line-through">{s.from}</p>
                  </div>
                  <ArrowRight className="text-blue-600 w-8 h-8" />
                  <div className="text-center">
                    <p className="text-blue-600 text-xs font-black mb-1">After</p>
                    <p className="text-2xl font-black text-slate-900 italic">{s.to}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed italic">「{s.desc}」</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-32 px-4 bg-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight tracking-tighter">
            あなたの手に、<br />一生モノの技術を。
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-3xl font-black py-12 px-16 rounded-[32px] shadow-2xl shadow-blue-600/50 transition-all hover:scale-105 active:scale-95 flex flex-col items-center">
            まずは無料でカリキュラムを見てみる
            <span className="block text-sm font-bold mt-2 text-blue-200/80 tracking-widest underline decoration-blue-200/20">お申し込み後、最短1分で開始可能</span>
          </Button>
        </div>
      </section>

      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center">
        <div className="font-bold text-3xl text-white mb-8 tracking-tighter">CAREGE<span className="text-blue-600">.</span></div>
        <p className="text-slate-600 text-xs tracking-widest uppercase">&copy; 2026 CAREGE Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
