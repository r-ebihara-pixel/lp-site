"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, Phone, Mail, MapPin } from "lucide-react";

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-navy-50 relative" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            お問い合わせ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            まずは<span className="text-orange-500">気軽に</span>お話しませんか？
          </h2>
          <p className="text-lg text-navy-600">
            カジュアル面談も大歓迎！転職を決めていなくても、<br />
            キャリアの相談だけでもお気軽にどうぞ。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-navy-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">お問い合わせ先</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-navy-300 text-sm">電話番号</p>
                    <p className="font-semibold text-lg">03-1234-5678</p>
                    <p className="text-navy-400 text-xs">平日 9:00〜18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-navy-300 text-sm">メールアドレス</p>
                    <p className="font-semibold">recruit@example.co.jp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-navy-300 text-sm">所在地</p>
                    <p className="font-semibold">東京都渋谷区〇〇1-2-3</p>
                    <p className="text-navy-400 text-xs">〇〇ビル5F</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <h4 className="font-bold text-navy-900 mb-4">面談でわかること</h4>
              <ul className="space-y-3">
                {[
                  "あなたに合ったキャリアプラン",
                  "具体的な年収シミュレーション",
                  "未経験からの成長ステップ",
                  "実際の働き方・社風",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-xl border border-navy-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  お問い合わせありがとうございます！
                </h3>
                <p className="text-navy-600 mb-6">
                  担当者より2営業日以内にご連絡いたします。<br />
                  しばらくお待ちください。
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-navy-300 text-navy-700 hover:bg-navy-50"
                >
                  フォームに戻る
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl border border-navy-100"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-navy-900 font-semibold">
                      お名前 <span className="text-orange-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="山田 太郎"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-navy-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-navy-900 font-semibold">
                      メールアドレス <span className="text-orange-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-navy-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-navy-900 font-semibold">
                      電話番号
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="090-1234-5678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-navy-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <Label htmlFor="experience" className="text-navy-900 font-semibold">
                      IT業界のご経験
                    </Label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-navy-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                    >
                      <option value="">選択してください</option>
                      <option value="none">未経験</option>
                      <option value="less-1">1年未満</option>
                      <option value="1-3">1〜3年</option>
                      <option value="3-5">3〜5年</option>
                      <option value="5+">5年以上</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-navy-900 font-semibold">
                      ご質問・ご要望など
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="気になることがあればお気軽にご記入ください"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 border-navy-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-sm text-navy-500">
                    ※ ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
                  </p>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-xl"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    無料で相談する
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
