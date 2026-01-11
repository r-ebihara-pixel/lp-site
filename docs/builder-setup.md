# Builder.io セットアップガイド

## 概要
このプロジェクトではBuilder.ioを使用してLPをビジュアルエディタで編集できます。

---

## 初期セットアップ

### 1. Builder.ioアカウントの準備
1. [Builder.io](https://builder.io/) にサインアップ/ログイン
2. 新規Space（またはOrganization）を作成

### 2. API Keyの取得
1. Builder.ioダッシュボード → Settings → API Keys
2. **Public API Key** をコピー

### 3. 環境変数の設定
プロジェクトルートに `.env.local` を作成（または編集）：

```env
NEXT_PUBLIC_BUILDER_API_KEY=your-public-api-key-here
```

---

## 動作確認手順

### Step 1: Builder.ioでPageを作成
1. Builder.ioダッシュボードにログイン
2. **Content** → **Page** → **+ New Entry** をクリック
3. ページ名を入力（例：「LP2」）

### Step 2: URLを設定
1. 右サイドパネルの **Targeting** セクション
2. **URL** に `/lp2` を入力

### Step 3: コンテンツを作成
1. ビジュアルエディタでコンテンツを追加
2. テキスト、画像、ボタンなどを配置

### Step 4: Publish
1. 右上の **Publish** ボタンをクリック
2. 公開ステータスを確認

### Step 5: Next.jsで確認
1. 開発サーバーを起動
   ```bash
   npm run dev
   ```
2. ブラウザで http://localhost:3003/lp2 にアクセス
3. Builder.ioで作成したコンテンツが表示されることを確認

---

## プレビュー機能

Builder.ioのエディタから直接プレビューできます：

1. Builder.ioエディタで **Preview** ボタンをクリック
2. プレビューURLが生成される
3. URLにはBuilder特有のクエリパラメータが付与される
4. `getBuilderSearchParams` により正しく描画される

---

## トラブルシューティング

### コンテンツが表示されない
1. `.env.local` の API Key が正しいか確認
2. Builder.ioでPageがPublishされているか確認
3. URLが `/lp2` に設定されているか確認
4. 開発サーバーを再起動

### 元のLPに戻したい
- `/lp2-original` にアクセスすると元のLPが表示されます

---

## 次のステップ（TODO）

### Phase 2: カスタムコンポーネント登録
以下のコンポーネントをBuilder.ioに登録予定：
- [ ] Section / Container / Stack / Grid
- [ ] Text / Button / Image
- [ ] Hero / FAQ / CTA（既存LPのコンポーネント）

### Phase 3: 全LPのBuilder.io対応
- [ ] /lp1, /lp3 などの他LPもBuilder.io対応

---

## ファイル構成

```
lp-site/
├── .env.local                    # Builder.io API Key
├── src/
│   ├── builder-registry.ts       # カスタムコンポーネント登録
│   └── app/
│       ├── lp2/
│       │   └── page.tsx          # Builder.io連携版
│       └── lp2-original/
│           └── page.tsx          # 元のLP（バックアップ）
└── docs/
    └── builder-setup.md          # このファイル
```

---

## 参考リンク

- [Builder.io Documentation](https://www.builder.io/c/docs/developers)
- [Builder.io Next.js App Router Guide](https://www.builder.io/c/docs/integrate-section-building)
- [@builder.io/sdk-react-nextjs](https://www.npmjs.com/package/@builder.io/sdk-react-nextjs)
