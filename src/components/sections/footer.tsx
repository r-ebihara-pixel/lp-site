"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Company name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              <span className="text-orange-400">Tech</span>Career
            </h3>
            <p className="text-navy-400 text-sm mt-1">
              あなたのキャリアを、次のステージへ
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-navy-300">
            <a href="#" className="hover:text-orange-400 transition-colors">会社概要</a>
            <a href="#" className="hover:text-orange-400 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-orange-400 transition-colors">利用規約</a>
            <a href="#" className="hover:text-orange-400 transition-colors">採用情報</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="ページトップへ戻る"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-navy-500 text-sm">
          <p>© 2026 TechCareer Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
