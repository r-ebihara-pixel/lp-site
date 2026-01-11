import { Content, fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react-nextjs";
import "@/builder-registry";

// Builder.io API Key
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

// Page props type for Next.js App Router
interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default async function LP2Page(props: PageProps) {
  // searchParamsをawaitで取得（Next.js 15+対応）
  const searchParams = await props.searchParams;
  
  // Builder.ioからコンテンツを取得
  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    userAttributes: {
      urlPath: "/lp2",
    },
    options: getBuilderSearchParams(searchParams),
  });

  // コンテンツが存在しない場合
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Builder.ioコンテンツが見つかりません
          </h1>
          <p className="text-slate-600 mb-6">
            Builder.ioで URL を「/lp2」に設定したページを作成し、Publishしてください。
          </p>
          <div className="bg-slate-100 p-4 rounded-lg text-left text-sm">
            <p className="font-mono text-slate-700">
              1. Builder.ioにログイン<br />
              2. 新規Pageを作成<br />
              3. URLを「/lp2」に設定<br />
              4. コンテンツを追加してPublish
            </p>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            元のLPを確認したい場合は <a href="/lp2-original" className="text-blue-600 underline">/lp2-original</a> へ
          </p>
        </div>
      </div>
    );
  }

  // Builder.ioのコンテンツを描画
  return (
    <Content
      content={content}
      model="page"
      apiKey={BUILDER_API_KEY}
    />
  );
}
