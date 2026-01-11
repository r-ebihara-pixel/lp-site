"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit, CheckCircle2, Loader2, LineChart, ShieldCheck, HelpCircle, User, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const QuizComponent = () => {
  const [step, setStep] = useState(0); 
  const [loadingText, setLoadingText] = useState("AIが適性を分析中...");

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => setStep(5), 3000);
      const textTimer = setTimeout(() => setLoadingText("理想のキャリアパスを構築中..."), 1500);
      return () => { clearTimeout(timer); clearTimeout(textTimer); };
    }
  }, [step]);

  const questions = [
    {
      q: "理想のワークスタイルは？",
      a: [
        { t: "チームで大きな目標を達成したい", v: "team" },
        { t: "自分の技術を磨き、自律して働きたい", v: "solo" }
      ]
    },
    {
      q: "仕事において重視するのは？",
      a: [
        { t: "高年収・キャリアアップ", v: "money" },
        { t: "土日休み・残業なし", v: "life" }
      ]
    },
    {
      q: "PC操作に対するアレルギーは？",
      a: [
        { t: "全くない・むしろ好き", v: "like" },
        { t: "これから慣れていきたい", v: "newbie" }
      ]
    }
  ];

  const handleAnswer = () => {
    if (step < questions.length) setStep(step + 1);
    else setStep(4);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      {/* 診断UI本体 */}
      <div className="bg-white rounded-[48px] shadow-[0_40px_100px_-15px_rgba(139,92,246,0.4)] p-8 md:p-16 border-[12px] border-purple-50 overflow-hidden relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-fuchsia-500 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-purple-500/40 rotate-3">
                <BrainCircuit className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                あなたの<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">隠れた才能</span>を<br />
                AIが完全解析。
              </h2>
              <p className="text-slate-500 mb-10 font-bold">60秒でわかる、あなたに最適なITキャリア。</p>
              <Button 
                onClick={() => setStep(1)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-2xl font-black py-10 rounded-[32px] shadow-2xl shadow-purple-600/40 group transition-all"
              >
                診断を開始する
                <ArrowRight className="ml-2 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Button>
              <div className="mt-8 flex justify-center gap-6">
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  完全無料
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  会員登録不要
                </div>
              </div>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div 
              key={`q-${step}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="py-4"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">Question {step}/3</div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <motion.div key={n} animate={{ scale: n === step ? 1.2 : 1 }} className={`w-3 h-3 rounded-full ${n <= step ? 'bg-purple-600' : 'bg-slate-100'}`} />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 leading-tight">
                {questions[step - 1].q}
              </h3>
              <div className="grid gap-4">
                {questions[step - 1].a.map((ans, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAnswer}
                    className="w-full p-8 text-left rounded-[32px] border-2 border-slate-50 bg-slate-50 hover:border-purple-600 hover:bg-white hover:shadow-2xl transition-all font-black text-slate-700 text-lg flex justify-between items-center group"
                  >
                    {ans.t}
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 group-hover:border-purple-600 group-hover:bg-purple-600 transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="relative inline-block mb-12">
                <Loader2 className="w-24 h-24 text-purple-600 animate-spin" />
                <Zap className="w-10 h-10 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-2xl font-black text-slate-900 animate-pulse">{loadingText}</p>
              <p className="mt-4 text-slate-400 font-bold">あなただけの最適なプランを作成しています...</p>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-block px-6 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-black mb-10 tracking-widest uppercase">Analyzed Successfully</div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                あなたに眠る<br />エンジニア適性は...
              </h2>
              <div className="relative inline-block mb-8">
                <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 tracking-tighter">
                  120%オーバー!
                </span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="absolute -bottom-2 left-0 h-2 bg-purple-200 rounded-full"
                />
              </div>
              <p className="text-xl font-black text-slate-900 mb-8">「インフラエンジニア」の才能があります</p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 rounded-[32px] bg-purple-50 text-left">
                  <p className="text-purple-600 text-xs font-black uppercase mb-2">安定性適性</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">SSS</p>
                </div>
                <div className="p-6 rounded-[32px] bg-fuchsia-50 text-left">
                  <p className="text-fuchsia-600 text-xs font-black uppercase mb-2">成長ポテンシャル</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">MAX</p>
                </div>
              </div>
              <Button className="w-full bg-[#06C755] hover:bg-[#05b54c] text-white text-2xl font-black py-10 rounded-[32px] shadow-2xl shadow-green-600/40 flex flex-col items-center">
                LINEで診断結果の解説を見る
                <span className="text-xs font-bold mt-1 text-white/80">詳しいキャリアパス資料もプレゼント</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 賑やかし要素 */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-purple-100 rounded-full -z-0 opacity-50" />
      <motion.div animate={{ y: [0, 40, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[-100px] left-[-60px] w-48 h-48 bg-fuchsia-100 rounded-[60px] -z-0 opacity-50 rotate-12" />
    </div>
  );
};

export default function DiagnosisLP() {
  return (
    <div className="min-h-screen bg-[#FDFCFE] font-sans text-slate-900 selection:bg-purple-100 overflow-hidden">
      
      {/* 1. Hero Area (Quiz Only Focus) */}
      <section className="pt-24 pb-32 px-4 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-purple-50 via-white to-transparent" />
          <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[30%] bg-fuchsia-200/20 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white shadow-xl shadow-purple-500/5 text-purple-600 text-sm font-black mb-6 border border-purple-50">
              <User className="w-4 h-4" />
              <span>累計 50,000人以上が体験済み</span>
            </div>
          </motion.div>
          
          <QuizComponent />
        </div>
      </section>

      {/* 2. Reviews: Clean & Modern Cards */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">利用者のリアルな声</h2>
            <div className="w-20 h-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "元・保育士（20代）", text: "「ITは理系の人しかできない」と思っていましたが、診断で適性があると言われて勇気が出ました。今では土日休みのエンジニア生活を満喫しています！", img: "/images/member-1.png" },
              { name: "元・アパレル店員（20代）", text: "ゲーム感覚でやってみたけど、自分の性格が驚くほど的中していました。無理な勧誘もなかったので、今の仕事に悩んでいるならまずは受けてみるべきです。", img: "/images/member-2.png" }
            ].map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="bg-slate-50 p-12 rounded-[60px] border border-slate-100 group-hover:border-purple-200 transition-all group-hover:bg-white group-hover:shadow-3xl">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-xl">
                      <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-xl leading-none mb-2">{r.name}</h4>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(n => <Star key={n} className="w-4 h-4 text-yellow-400 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium italic">「{r.text}」</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA: Line Style */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
      >
        <Button className="w-full bg-[#06C755] hover:bg-[#05b54c] text-white text-xl font-black py-10 rounded-[32px] shadow-[0_20px_50px_-5px_rgba(6,199,85,0.4)] flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95">
          <img src="/public/next.svg" className="w-8 h-8 invert brightness-0" alt="" /> {/* LINE ICON placeholder */}
          LINEで無料適性結果を受け取る
        </Button>
      </motion.div>

      <footer className="py-32 bg-white border-t border-slate-50 text-center">
        <div className="font-bold text-3xl text-slate-900 mb-8 tracking-tighter">CAREGE<span className="text-purple-600">.</span></div>
        <p className="text-slate-400 text-xs font-black tracking-widest uppercase">&copy; 2026 CAREGE Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Star({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
