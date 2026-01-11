"use client";

import { Server, Shield, Cloud, Database, Network, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Server,
    title: "サーバー構築・運用",
    description: "Linux/Windowsサーバーの設計から運用保守まで、基礎から実践的なスキルを習得",
    skills: ["Linux", "Windows Server", "VMware"],
  },
  {
    icon: Cloud,
    title: "クラウドインフラ",
    description: "AWS、Azure、GCPなど主要クラウドサービスの構築・運用スキルを身につける",
    skills: ["AWS", "Azure", "GCP"],
  },
  {
    icon: Network,
    title: "ネットワーク設計",
    description: "企業ネットワークの設計・構築から、セキュリティ対策まで幅広く対応",
    skills: ["Cisco", "Juniper", "Firewall"],
  },
  {
    icon: Shield,
    title: "セキュリティ対策",
    description: "サイバーセキュリティの知識と実践的な対策スキルを習得",
    skills: ["SIEM", "WAF", "脆弱性診断"],
  },
  {
    icon: Database,
    title: "データベース管理",
    description: "Oracle、MySQL、PostgreSQLなどの設計・構築・チューニング",
    skills: ["Oracle", "MySQL", "PostgreSQL"],
  },
  {
    icon: Monitor,
    title: "監視・運用自動化",
    description: "Zabbix、Ansible、Terraformなどを使った効率的な運用体制の構築",
    skills: ["Zabbix", "Ansible", "Terraform"],
  },
];

const careerPath = [
  { level: "入社〜3ヶ月", title: "基礎研修", description: "IT基礎、資格取得支援" },
  { level: "3ヶ月〜1年", title: "運用・監視", description: "現場でのOJT研修" },
  { level: "1年〜3年", title: "構築・設計", description: "上流工程へステップアップ" },
  { level: "3年〜", title: "PM・リーダー", description: "プロジェクト管理、チームリード" },
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-white relative" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-navy-900 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            解決策
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            <span className="text-orange-500">インフラエンジニア</span>という選択
          </h2>
          <p className="text-lg text-navy-600">
            ITインフラは社会を支える重要な基盤。<br />
            需要が高く、安定したキャリアを築けるインフラエンジニアの道へ。
          </p>
        </div>

        {/* Why Infrastructure Engineer */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 mb-16 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                なぜ今、<span className="text-orange-400">インフラエンジニア</span>なのか？
              </h3>
              <ul className="space-y-4">
                {[
                  "DX推進により需要が急増中 - 2030年までに45万人の人材不足予測",
                  "景気に左右されにくい安定した職種",
                  "未経験からでも着実にスキルアップ可能",
                  "リモートワークとの相性が良い",
                  "年収アップの実績多数（平均120万円UP）",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <span className="text-navy-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800/50 rounded-2xl p-6 border border-navy-700">
              <h4 className="text-lg font-semibold text-orange-400 mb-4">キャリアパス例</h4>
              <div className="space-y-4">
                {careerPath.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-24 text-sm text-navy-400">{step.level}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{step.title}</span>
                        {i < careerPath.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-orange-400" />
                        )}
                      </div>
                      <p className="text-sm text-navy-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills/Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            習得できるスキル・技術領域
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-navy-100 hover:border-orange-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">{solution.title}</h4>
                <p className="text-navy-600 text-sm mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-xl"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            インフラエンジニアへの第一歩を踏み出す
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
