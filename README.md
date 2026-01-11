# TechCareer - 求職者向けランディングページ

インフラエンジニア採用のためのランディングページです。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: Shadcn UI
- **アイコン**: Lucide React
- **言語**: TypeScript

## カラースキーム

- **プライマリ**: ネイビー（信頼感を表現）
- **アクセント**: オレンジ（行動を促す）

## ページ構成

1. **ヒーローエリア** - メインビジュアルとCTA
2. **悩み共感セクション** - ターゲットの課題を提示
3. **解決策セクション** - インフラエンジニアという選択肢を提案
4. **会社の特徴セクション** - 当社で働くメリット
5. **お問い合わせフォーム** - リード獲得

## 開発環境の起動

```bash
cd lp-site
npm install
npm run dev
```

http://localhost:3000 でアクセスできます。

## ビルド

```bash
npm run build
npm start
```

## ディレクトリ構成

```
lp-site/
├── src/
│   ├── app/
│   │   ├── globals.css      # グローバルスタイル・カスタムカラー
│   │   ├── layout.tsx       # ルートレイアウト
│   │   └── page.tsx         # メインページ
│   ├── components/
│   │   ├── sections/        # ページセクション
│   │   │   ├── hero-section.tsx
│   │   │   ├── pain-points-section.tsx
│   │   │   ├── solution-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── contact-form-section.tsx
│   │   │   └── footer.tsx
│   │   └── ui/              # UIコンポーネント
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts         # ユーティリティ関数
└── package.json
```
