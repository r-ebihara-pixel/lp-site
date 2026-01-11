"use client";

import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Users, Star } from 'lucide-react';

/**
 * LP2 (Merit-based) content integrated into the Unrep-inspired template.
 * Preserves the exact styling and animation logic of the template.
 */
export default function LP2Premium() {
  useEffect(() => {
    // Reveal on scroll logic from the template
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Marquee: duplicate nodes to ensure seamless loop
    const track = document.getElementById('marquee-track');
    if (track) {
      const base = Array.from(track.children);
      base.slice(0, Math.min(6, base.length)).forEach(n => track.appendChild(n.cloneNode(true)));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --bg: #efefed;
          --ink: #0f0f10;
          --muted: rgba(15,15,16,.65);
          --line: rgba(15,15,16,.12);
          --panel: rgba(255,255,255,.70);
          --shadow: 0 18px 60px rgba(0,0,0,.12);
          --dark: #121213;
          --dark-ink: rgba(255,255,255,.92);
          --dark-muted: rgba(255,255,255,.70);
          --dark-line: rgba(255,255,255,.12);
          --lime: #caff1a;
          --orange: #ffb01a;
          --pink: #ff3d7a;
          --cyan: #00d7ff;
          --purple: #9b5cff;
          --radius-xl: 28px;
          --radius-lg: 18px;
          --max: 1320px;
          --gutter: clamp(16px, 4vw, 40px);
          --h1: clamp(32px, 5vw, 72px);
          --h2: clamp(24px, 3vw, 36px);
          --h3: clamp(16px, 1.8vw, 22px);
          --body: clamp(14px, 1.1vw, 16px);
          --sans: 'Inter', "Noto Sans JP", sans-serif;
        }

        * { box-sizing: border-box; }

        .lp-wrapper {
          width: 100%;
          min-height: 100vh;
          background: radial-gradient(ellipse 900px 520px at 10% -10%, rgba(255,255,255,.75), transparent 60%),
                      radial-gradient(ellipse 700px 460px at 90% 0%, rgba(0,0,0,.04), transparent 62%),
                      var(--bg);
          color: var(--ink);
          font-family: var(--sans);
          font-size: var(--body);
          overflow-x: hidden;
        }

        .container { 
          width: 100%;
          max-width: var(--max);
          padding-left: var(--gutter);
          padding-right: var(--gutter);
          margin-left: auto;
          margin-right: auto;
        }
        .section { 
          padding: clamp(48px, 7vw, 90px) 0; 
          position: relative; 
          overflow: hidden;
        }
        .divider { border-top: 1px solid var(--line); }

        .hl {
          padding: .05em .12em;
          background: linear-gradient(90deg, color-mix(in srgb, var(--lime) 85%, white),
                                            color-mix(in srgb, var(--orange) 70%, white),
                                            color-mix(in srgb, var(--pink) 70%, white));
          border-radius: 999px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .header {
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: color-mix(in srgb, var(--bg) 80%, transparent);
          border-bottom: 1px solid var(--line);
        }
        .nav { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding:  0;
          flex-wrap: wrap;
          gap: 12px;
        }
        .brand { display: flex; align-items: center; gap: 10px; }
        .brand strong { font-size: clamp(14px, 1.2vw, 18px); }
        .brand small { font-size: 11px; display: block; opacity: 0.6; }
        .logo-sphere {
          width: 32px; height: 32px; border-radius: 10px;
          background: conic-gradient(from 220deg, var(--lime), var(--orange), var(--pink), var(--purple), var(--cyan), var(--lime));
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          flex-shrink: 0;
        }

        .nav-links {
          display: none;
          gap: 20px;
          align-items: center;
          font-size: 13px;
          font-weight: 700;
        }
        .nav-links a { transition: color .2s; }
        .nav-links a:hover { color: #2563eb; }
        @media (min-width: 768px) {
          .nav-links { display: flex; }
        }

        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid var(--line); background: rgba(255,255,255,.65);
          font-weight: 700; font-size: 13px; cursor: pointer;
          transition: transform .15s ease, background .15s ease;
          white-space: nowrap;
        }
        .btn.primary { background: var(--ink); color: white; border-color: transparent; }
        .btn:hover { transform: translateY(-1px); background: rgba(255,255,255,.92); }
        .btn.primary:hover { background: #000; }
        .btn.lg { padding: 14px 28px; font-size: 15px; }

        .hero { 
          padding: clamp(32px, 5vw, 56px) 0 clamp(48px, 6vw, 80px); 
          position: relative; 
          overflow: visible;
        }
        .hero::before {
          content: ""; position: absolute; right: 5%; top: -10%;
          width: min(550px, 60vw); height: min(550px, 60vw); border-radius: 40%;
          background: conic-gradient(from 230deg, var(--lime), var(--orange), var(--pink), var(--purple), var(--cyan), var(--lime));
          opacity: .5; mix-blend-mode: multiply; pointer-events: none;
          z-index: 0;
        }
        .hero-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 32px; 
          position: relative; 
          z-index: 1;
          align-items: center;
        }
        @media (min-width: 900px) { 
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 48px; } 
        }

        h1 { 
          font-size: var(--h1); 
          line-height: 1.15; 
          font-weight: 900; 
          margin: 0 0 16px; 
          letter-spacing: -0.02em;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .lead { 
          color: var(--muted); 
          font-size: clamp(14px, 1.2vw, 17px); 
          line-height: 1.7;
          margin-bottom: 28px; 
          max-width: 55ch; 
        }

        .kicker {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 10px; border: 1px solid var(--line);
          background: rgba(255,255,255,.65); border-radius: 999px;
          font-size: 11px; color: var(--ink); font-weight: 700; margin-bottom: 14px;
        }
        .kicker-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--lime);
        }

        .hero-card {
          border: 1px solid rgba(0,0,0,.12); background: rgba(255,255,255,.72);
          border-radius: var(--radius-xl); box-shadow: var(--shadow); padding: 24px;
          width: 100%;
          max-width: 100%;
        }
        .bubble {
          display: grid; grid-template-columns: auto 1fr; gap: 10px;
          padding: 10px; border-radius: 14px; background: rgba(16,16,18,.92);
          color: white; margin-bottom: 8px;
        }
        .avatar-mini {
          width: 28px; height: 28px; border-radius: 8px;
          background: conic-gradient(from 220deg, var(--lime), var(--orange), var(--pink));
          flex-shrink: 0;
        }
        .bubble-name { font-weight: 900; font-size: 13px; }
        .bubble-sub { font-size: 11px; opacity: 0.6; }
        .bubble-result { font-weight: 700; font-size: 12px; margin-top: 4px; }

        .marquee { overflow: hidden; margin-top: 28px; border-block: 1px solid var(--line); }
        .marquee-track { display: flex; gap: 12px; padding: 10px 0; animation: scroll 20s linear infinite; }
        .tag { 
          padding: 6px 14px; border-radius: 999px; 
          background: white; border: 1px solid var(--line); 
          font-size: 12px; font-weight: 700; white-space: nowrap; 
        }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .eyebrow .label { font-size: 11px; font-weight: 900; color: var(--muted); text-transform: uppercase; letter-spacing: .1em; }
        .eyebrow .rule { flex: 1; height: 1px; background: var(--line); }

        h2 { font-size: var(--h2); font-weight: 900; line-height: 1.2; margin-bottom: 10px; }
        h3 { font-size: var(--h3); font-weight: 900; line-height: 1.3; margin: 12px 0 6px; }

        .band-dark { background: var(--dark); color: white; }
        .band-dark .muted { color: var(--dark-muted); }
        .band-dark .eyebrow .rule { background: var(--dark-line); }

        .warning-section {
          width: 100%;
          background: #0f0f0f;
          padding: clamp(60px, 10vw, 120px) 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .warning-image {
          width: min(33%, 400px);
          height: auto;
          display: block;
          border-radius: 12px;
        }


        .grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; }
        .card {
          grid-column: span 12; padding: 20px; border-radius: var(--radius-xl);
          background: white; border: 1px solid var(--line); box-shadow: 0 10px 30px rgba(0,0,0,.05);
          position: relative; transition: border-color .2s;
        }
        @media (min-width: 640px) { .card { grid-column: span 6; } }
        @media (min-width: 980px) { .card { grid-column: span 4; } }
        .card.dark { background: rgba(255,255,255,.05); border-color: var(--dark-line); }

        .feature-row {
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 24px; 
          align-items: center;
          padding: 24px; 
          padding-bottom: 36px;
          border-radius: var(--radius-xl); 
          background: white; 
          border: 1px solid var(--line);
          margin-bottom: 16px;
        }
        @media (min-width: 768px) { 
          .feature-row { 
            grid-template-columns: 1fr 1fr; 
            gap: 40px; 
            padding: 32px; 
            padding-right: 48px;
            padding-bottom: 32px;
          } 
        }
        .feature-row .step-img-wrapper {
          position: relative;
          width: 100%;
        }
        .feature-row .step-img-wrapper::before {
          content: "";
          position: absolute;
          top: 12px;
          left: 12px;
          right: -12px;
          bottom: -12px;
          background: #0f0f10;
          border-radius: var(--radius-lg);
          z-index: 0;
        }
        .feature-row .step-img {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
        }
        .feature-row .step-img img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          object-position: center;
        }
        @media (min-width: 768px) {
          .feature-row .step-img-wrapper::before {
            top: 14px;
            left: 14px;
            right: -14px;
            bottom: -14px;
          }
        }
        .step-label { font-size: 11px; font-weight: 900; color: #2563eb; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 8px; }
        .feature-desc { color: var(--muted); font-size: 14px; line-height: 1.6; }

        .why-free-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .why-free-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
        }
        .price-card {
          padding: 32px;
          border-radius: 32px;
          background: #0f172a;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .price-card::before {
          content: "";
          position: absolute;
          top: -40px; right: -40px;
          width: 120px; height: 120px;
          background: rgba(37, 99, 235, 0.2);
          border-radius: 50%;
          filter: blur(40px);
        }
        .price-label { font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.5); margin-bottom: 12px; }
        .price-value { font-size: clamp(48px, 8vw, 64px); font-weight: 900; letter-spacing: -0.03em; margin-bottom: 12px; }
        .price-desc { font-size: 13px; color: rgba(255,255,255,.6); line-height: 1.6; }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 13px;
          font-weight: 700;
        }

        .faq-box { border: 1px solid var(--line); border-radius: var(--radius-xl); background: white; overflow: hidden; }
        details { padding: 16px 20px; border-bottom: 1px solid var(--line); }
        details:last-child { border-bottom: none; }
        summary { 
          font-weight: 900; cursor: pointer; list-style: none; 
          display: flex; justify-content: space-between; align-items: center;
          font-size: 14px;
        }
        summary::-webkit-details-marker { display: none; }
        details p { margin: 12px 0 0; font-size: 13px; color: var(--muted); line-height: 1.7; }

        .ghost {
          position: absolute; left: 50%; transform: translateX(-50%); bottom: -20px;
          font-size: clamp(48px, 10vw, 120px); font-weight: 900; color: rgba(0,0,0,.03);
          white-space: nowrap; pointer-events: none; z-index: 0;
          user-select: none;
        }
        .band-dark .ghost { color: rgba(255,255,255,.02); }

        .cta-box {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          padding: 32px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          text-align: center;
        }
        @media (min-width: 768px) {
          .cta-box { grid-template-columns: 1fr 1fr; text-align: left; padding: 48px; gap: 40px; }
        }
        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 32px;
          border-radius: 16px;
          background: var(--lime);
          color: #0f172a;
          font-weight: 900;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: transform .15s, background .15s;
        }
        .cta-btn:hover { transform: translateY(-2px); background: #d4ff33; }
        .cta-btn-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #0f172a;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .footer {
          padding: 48px 0;
          background: #0a0a0b;
          border-top: 1px solid rgba(255,255,255,.05);
          text-align: center;
          color: rgba(255,255,255,.4);
        }
        .footer-brand { font-size: 20px; font-weight: 900; color: white; margin-bottom: 12px; letter-spacing: -0.02em; }
        .footer-brand span { color: #2563eb; }
        .footer-copy { font-size: 11px; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 24px; }
        .footer-links { display: flex; justify-content: center; gap: 24px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
        .footer-links a { transition: color .2s; }
        .footer-links a:hover { color: white; }

        .reveal { opacity: 0; transform: translateY(16px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        .flex { display: flex; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 8px; }
        .gap-3 { gap: 12px; }
        .gap-4 { gap: 16px; }
        .mb-4 { margin-bottom: 16px; }
        .mb-6 { margin-bottom: 24px; }
        .mb-8 { margin-bottom: 32px; }
        .mt-4 { margin-top: 16px; }
        .mt-6 { margin-top: 24px; }
        .mt-8 { margin-top: 32px; }
        .pb-4 { padding-bottom: 16px; }
        .border-b { border-bottom: 1px solid var(--line); }
        .text-center { text-align: center; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; margin-inline: auto; }
      `}</style>

      <div className="lp-wrapper">
        <header className="header">
          <div className="container nav">
            <div className="brand">
              <div className="logo-sphere"></div>
              <div>
                <strong>CAREGE PREMIUM</strong>
                <small>Free IT Career School</small>
              </div>
            </div>
            <div className="nav-links">
              <a href="#warning">警告</a>
              <a href="#curriculum">カリキュラム</a>
              <a href="#why-free">なぜ無料？</a>
              <a href="#faq">FAQ</a>
            </div>
            <a href="#cta" className="btn primary">
              <span className="kicker-dot"></span>
              無料で相談
            </a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero">
            <div className="container hero-grid">
              <div className="reveal">
                <div className="kicker">
                  <span className="kicker-dot"></span>
                  受講料0円 / 国家資格レベル
                </div>
                <h1>受講料0円。<br /><span className="hl">一生モノのスキル</span>を<br />タダで手に入れる。</h1>
                <p className="lead">
                  未経験からインフラエンジニアへ。動画で学べる研修カリキュラムと、徹底した就職支援で、市場価値の高いプロへの転身を完全サポート。
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="#cta" className="btn primary lg">無料で講座を試す</a>
                  <a href="#curriculum" className="btn lg">詳細を見る</a>
                </div>
                <div className="marquee">
                  <div className="marquee-track" id="marquee-track">
                    <span className="tag">受講料0円</span>
                    <span className="tag">CCNA合格率 95.4%</span>
                    <span className="tag">平均年収 +120万円</span>
                    <span className="tag">最短3ヶ月で就職</span>
                    <span className="tag">完全オンライン対応</span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Success Stories - moved below */}
            <div className="container">
              <div className="hero-card reveal" style={{ marginTop: '32px' }}>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)' }}>Success Stories</span>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => <Star key={i} style={{ width: 12, height: 12, color: '#facc15', fill: '#facc15' }} />)}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                  <div className="bubble">
                    <div className="avatar-mini"></div>
                    <div>
                      <div className="bubble-name">田中さん (24歳・元アパレル)</div>
                      <div className="bubble-sub">Before: 年収220万 / シフト制</div>
                      <div className="bubble-result" style={{ color: 'var(--lime)' }}>After: 年収350万 (エンジニア)</div>
                    </div>
                  </div>
                  <div className="bubble">
                    <div className="avatar-mini" style={{ background: 'conic-gradient(from 220deg, var(--cyan), var(--purple))' }}></div>
                    <div>
                      <div className="bubble-name">佐藤さん (26歳・元飲食)</div>
                      <div className="bubble-sub">Before: 年収280万 / 夜勤あり</div>
                      <div className="bubble-result" style={{ color: 'var(--cyan)' }}>After: 年収420万 (設計担当)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WARNING BAND */}
          <section className="warning-section" id="warning">
            <img src="/images/warning.png" alt="未経験歓迎の求人に騙されないでください" className="warning-image" />
          </section>

          {/* CURRICULUM */}
          <section className="section" id="curriculum">
            <div className="container">
              <div className="eyebrow reveal">
                <span className="label">Program</span>
                <span className="rule"></span>
                <span className="label">04 Blocks</span>
              </div>
              <h2 className="reveal mb-8">プロへの4つのステップ</h2>
              
              <div>
                {[
                  { id: "01", t: "IT基礎・OS入門", d: "PCの仕組みからWindows/Linuxの違いまで、エンジニアの土台を固めます。", img: "/images/steps/step1.png" },
                  { id: "02", t: "サーバー構築実習", d: "実際にコマンドを打ち込み、Webサーバーやファイルサーバーを構築します。", img: "/images/steps/step2.png" },
                  { id: "03", t: "ネットワークマスター", d: "国家資格レベルのネットワーク知識を習得。パケットの流れを理解します。", img: "/images/steps/step3.png" },
                  { id: "04", t: "就職支援・内定獲得", d: "エンジニア特有の選考対策を実施。優良企業へのパスポートを手に入れます。", img: "/images/steps/step4.png" }
                ].map((item, i) => (
                  <div key={i} className="feature-row reveal">
                    <div>
                      <div className="step-label">Step {item.id}</div>
                      <h3>{item.t}</h3>
                      <p className="feature-desc">{item.d}</p>
                    </div>
                    <div className="step-img-wrapper">
                      <div className="step-img">
                        <img src={item.img} alt={item.t} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ghost">CURRICULUM</div>
            </div>
          </section>

          {/* WHY FREE */}
          <section className="section" id="why-free" style={{ background: 'white' }}>
            <div className="container">
              <div className="eyebrow reveal">
                <span className="label">Reliability</span>
                <span className="rule"></span>
                <span className="label">No Cost</span>
              </div>
              <div className="why-free-grid">
                <div className="reveal">
                  <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '24px' }}>なぜ<span style={{ color: '#2563eb' }}>「0円」</span>なのか？</h2>
                  <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                    キャレッジは、あなたを雇用する<strong>企業からの紹介料で運営</strong>されています。そのため、求職者の方から費用をいただくことは一切ありません。後から請求することも、無理な引き止めもありません。
                  </p>
                  <div className="badge-row">
                    <div className="badge">
                      <ShieldCheck style={{ width: 16, height: 16, color: '#10b981' }} /> 違約金なし
                    </div>
                    <div className="badge">
                      <Users style={{ width: 16, height: 16, color: '#2563eb' }} /> マンツーマンサポート
                    </div>
                  </div>
                </div>
                <div className="reveal">
                  <div className="price-card">
                    <div className="price-label">Tuition Fee</div>
                    <div className="price-value">¥0</div>
                    <p className="price-desc">
                      教材費、カウンセリング、面接対策まですべて無料。あなたが投資するのは「自分の時間」だけです。
                    </p>
                    <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,.1)' }}>
                      <a href="#cta" style={{ color: 'var(--lime)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform .2s' }}>
                        詳しく聞く <ArrowRight style={{ width: 16, height: 16 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ghost">ZERO COST</div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section" id="faq">
            <div className="container max-w-3xl">
              <div className="eyebrow reveal">
                <span className="label">FAQ</span>
                <span className="rule"></span>
                <span className="label">Q&A</span>
              </div>
              <h2 className="reveal mb-8 text-center">よくある質問</h2>
              <div className="faq-box reveal">
                <details>
                  <summary><span>本当に未経験でも大丈夫ですか？</span><span>＋</span></summary>
                  <p>はい、受講生の9割が非IT職種からのスタートです。PCの基本操作ができれば問題ありません。</p>
                </details>
                <details>
                  <summary><span>途中で辞めたらお金がかかりますか？</span><span>＋</span></summary>
                  <p>いいえ。違約金や教材費の請求などは一切ございませんのでご安心ください。</p>
                </details>
                <details>
                  <summary><span>働きながらでも受講できますか？</span><span>＋</span></summary>
                  <p>動画カリキュラムによるオンライン学習がメインですので、隙間時間を活用して進めることが可能です。</p>
                </details>
              </div>
              <div className="ghost">FAQ</div>
            </div>
          </section>

          {/* CTA */}
          <section className="section band-dark" id="cta">
            <div className="container">
              <div className="cta-box reveal">
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Get Started</div>
                  <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16 }}>人生を、<br /><span className="hl" style={{ color: '#0f172a' }}>ここからリブート。</span></h2>
                  <p className="muted" style={{ fontSize: 15 }}>
                    相談だけでも大歓迎です。無理な勧誘は一切行いません。
                  </p>
                </div>
                <div className="flex items-center justify-center" style={{ flexDirection: 'column', gap: 12 }}>
                  <button className="cta-btn">
                    <span className="cta-btn-dot"></span>
                    無料でキャリア相談
                  </button>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>※30秒で入力完了・土日面談OK</p>
                </div>
              </div>
              <div className="ghost">CTA CTA CTA</div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-brand">CAREGE<span>.</span></div>
            <p className="footer-copy">© 2026 CAREGE Inc. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Company</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
