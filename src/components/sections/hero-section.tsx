"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400 rounded-full blur-3xl opacity-5" />
        </div>
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 text-orange-300 text-sm animate-fade-up">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              インフラエンジニア積極採用中
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up delay-100">
              あなたの
              <span className="text-orange-400">スキル</span>
              を<br />
              次のステージへ
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-200 leading-relaxed animate-fade-up delay-200">
              未経験からでも、経験者でも。<br />
              充実した研修制度と働きやすい環境で、<br />
              <span className="text-orange-300 font-semibold">インフラエンジニア</span>としてのキャリアを築きませんか？
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-xl animate-pulse-glow"
              >
                まずは話を聞いてみる
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-navy-400 text-white hover:bg-navy-800 text-lg px-8 py-6 rounded-xl"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                会社について詳しく見る
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up delay-400">
              {["完全週休2日制", "リモート勤務可", "研修制度充実"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-navy-200">
                  <CheckCircle className="h-5 w-5 text-orange-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block relative animate-fade-up delay-300">
            <div className="relative">
              {/* Main illustration card */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 border border-navy-700 shadow-2xl">
                <div className="space-y-6">
                  {/* Terminal-like header */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-navy-400 text-sm font-mono">career.sh</span>
                  </div>
                  
                  {/* Code-like content */}
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-navy-400">$ career --start</p>
                    <p className="text-green-400">✓ スキルアップ環境... 準備完了</p>
                    <p className="text-green-400">✓ ワークライフバランス... 最適化済み</p>
                    <p className="text-green-400">✓ キャリアパス... 設定完了</p>
                    <p className="text-orange-400 animate-pulse">▋ あなたの未来を構築中...</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-navy-700">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-400">98%</p>
                      <p className="text-xs text-navy-400">定着率</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-400">150+</p>
                      <p className="text-xs text-navy-400">エンジニア数</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-400">3ヶ月</p>
                      <p className="text-xs text-navy-400">研修期間</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-xl px-4 py-2 shadow-lg animate-float">
                <span className="font-bold">未経験OK!</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy-700 text-white rounded-xl px-4 py-2 shadow-lg border border-navy-600 animate-float delay-500">
                <span className="text-sm">年収UP実績多数 📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
