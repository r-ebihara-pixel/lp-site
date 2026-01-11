"use client";

import { AlertCircle, Clock, TrendingDown, Users, HelpCircle, Briefcase } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "今の仕事に将来性を感じない",
    description: "このまま続けていて、本当に大丈夫なのか不安になることがある",
  },
  {
    icon: Clock,
    title: "残業が多くてプライベートがない",
    description: "仕事ばかりで自分の時間が取れず、心身ともに疲弊している",
  },
  {
    icon: AlertCircle,
    title: "スキルが身につかない環境",
    description: "単純作業の繰り返しで、市場価値が上がっている実感がない",
  },
  {
    icon: Users,
    title: "人間関係のストレス",
    description: "職場の雰囲気が悪く、毎日出勤するのが憂鬱になっている",
  },
  {
    icon: HelpCircle,
    title: "IT業界に興味はあるけど不安",
    description: "未経験でも本当にやっていけるのか、一歩を踏み出せない",
  },
  {
    icon: Briefcase,
    title: "転職したいけど何から始めれば...",
    description: "情報が多すぎて、自分に合った会社を見つけられない",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            こんなお悩みありませんか？
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            今の働き方に<span className="text-orange-500">不安</span>を感じていませんか？
          </h2>
          <p className="text-lg text-navy-600">
            多くの方が同じような悩みを抱えています。<br />
            でも、一歩踏み出せば状況は変わります。
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg border border-navy-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-navy-100 group-hover:bg-orange-100 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <point.icon className="w-7 h-7 text-navy-600 group-hover:text-orange-500 transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {point.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {point.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Empathy message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-navy-900 text-white rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-4xl">💭</div>
            <div className="text-left">
              <p className="text-lg font-semibold">
                一つでも当てはまるなら、<span className="text-orange-400">私たちがお手伝いできます</span>
              </p>
              <p className="text-navy-300 text-sm mt-1">
                実は、当社のエンジニアの多くも同じ悩みを持っていました
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
