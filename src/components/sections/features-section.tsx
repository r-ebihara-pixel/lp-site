"use client";

import { GraduationCap, Home, Users, TrendingUp, Heart, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "充実の研修制度",
    description: "3ヶ月間の基礎研修で、IT未経験者でも安心してスタートできます。資格取得支援制度も完備。",
    highlights: ["CCNA/LPIC取得支援", "外部研修費用全額負担", "メンター制度"],
  },
  {
    icon: Home,
    title: "柔軟な働き方",
    description: "リモートワーク可能な案件多数。ワークライフバランスを重視した働き方ができます。",
    highlights: ["リモート勤務可", "フレックスタイム", "完全週休2日制"],
  },
  {
    icon: Users,
    title: "風通しの良い社風",
    description: "社員同士の交流が活発で、困ったときは気軽に相談できる環境です。",
    highlights: ["定期1on1面談", "社内勉強会", "チームビルディング"],
  },
  {
    icon: TrendingUp,
    title: "明確なキャリアパス",
    description: "スペシャリスト、マネジメント、どちらの道も選べる。あなたの目指すキャリアを支援します。",
    highlights: ["年2回の評価面談", "キャリア相談窓口", "社内公募制度"],
  },
  {
    icon: Heart,
    title: "充実の福利厚生",
    description: "社員の生活をサポートする各種制度を整備しています。",
    highlights: ["各種社会保険完備", "退職金制度", "健康診断・人間ドック"],
  },
  {
    icon: Award,
    title: "正当な評価制度",
    description: "スキルと成果に応じた評価で、頑張りがしっかり報われます。",
    highlights: ["スキル評価制度", "インセンティブ制度", "昇給年2回"],
  },
];

const stats = [
  { value: "98%", label: "社員定着率" },
  { value: "120万円", label: "平均年収アップ" },
  { value: "95%", label: "資格取得率" },
  { value: "70%", label: "リモート勤務率" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-navy-50 relative" id="features">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(36, 59, 83, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            当社の特徴
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            <span className="text-orange-500">選ばれる理由</span>がここにある
          </h2>
          <p className="text-lg text-navy-600">
            社員一人ひとりの成長と幸せを大切にする会社です。<br />
            だからこそ、多くの方に選ばれ続けています。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-navy-100"
            >
              <p className="text-3xl lg:text-4xl font-bold text-orange-500 mb-1">
                {stat.value}
              </p>
              <p className="text-navy-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-navy-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-navy-700">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <div>
                <p className="font-bold text-lg">田中さん（28歳）</p>
                <p className="text-navy-300 text-sm">元・飲食店勤務 → 入社2年目</p>
              </div>
            </div>
            <blockquote className="text-lg lg:text-xl leading-relaxed">
              <span className="text-orange-400 text-4xl">"</span>
              飲食業界から未経験で転職しました。正直、最初は不安でしたが、研修制度がしっかりしていて、先輩も優しく教えてくれるので、今では一人で案件を任せてもらえるようになりました。年収も前職より<span className="text-orange-400 font-bold">150万円アップ</span>。転職して本当に良かったです。
              <span className="text-orange-400 text-4xl">"</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
