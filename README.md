# SLP — Record Label Site (Next.js)

福岡を拠点とするレコードレーベル「SLP」のコーポレート／レーベルサイト。
既存のWordPress（Divi）サイトから、承認済みのモノクロ・ミニマルデザインでNext.jsへ移行したもの。

- 本番URL: https://www.slprecordings.com

## 技術スタック

| 分類 | 内容 |
| --- | --- |
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| UI | React 19 |
| スタイル | Tailwind CSS 4（`app/globals.css` に集約） |
| コンポーネント基盤 | shadcn/ui 互換構成（`components.json`）、`class-variance-authority` / `clsx` / `tailwind-merge` / `@radix-ui/react-slot` |
| お問い合わせフォーム | [Formspree](https://formspree.io/)（`components/contact-form.tsx` から直接送信） |
| ニュースレター | [Buttondown](https://buttondown.com/) API（`app/api/newsletter/route.ts` 経由。要 `BUTTONDOWN_API_KEY`） |
| 計測 | `@vercel/analytics`, `@vercel/speed-insights` |
| Lint | ESLint (`eslint-config-next`) |
| ホスティング | Vercel |

## セットアップ

```bash
npm ci
npm run dev       # http://localhost:3000
```

Node は `.nvmrc`（24.19.0で動作確認済み）／ `package.json` の `engines`（20.9.0以上）を参照。

環境変数は `.env.example` を参照し、`.env.local` を作成して設定する（ニュースレター機能を使う場合のみ必須。本番はVercelのプロジェクト設定で管理し、リポジトリにはコミットしない）。

```
BUTTONDOWN_API_KEY=
```

デザイン移行前の静的HTML版を素早く見たい場合は `OPEN_PREVIEW.html` をブラウザで開く。Next.js版をMacでワンクリック起動したい場合は `START_NEXT_PREVIEW.command` を使う。

### スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | ビルド済みアプリの起動 |
| `npm run lint` | ESLint 実行 |
| `npm run validate` | lint → build を通しで実行（デプロイ前チェック用） |

## 開発フロー（Git）

このリポジトリは Git 管理下にあり、デフォルトブランチは `main`。修正を反映する際は、ビルドが通ることを確認してからコミット・pushする。

```powershell
npm run build
git add -A
git commit -m "変更内容の要約"
git push
```

> **AIアシスタント（Claude等）と作業する際の注意**
> チャットのAIアシスタントが、このPC上のフォルダに接続された状態（デバイス連携）で作業している場合は、ここに書いたファイルは直接このPC上の実体を書き換える。一方で、チャットにファイルをアップロードしただけの状態（デバイス連携なし）で作業している場合、AIが編集・確認できるのはブラウザ上の一時的な作業スペースのコピーであり、このPC上の実体とは別物になる。後者の場合、AIの回答内容が自動的にこのPCへ反映されることはないため、提示されたコマンドやコード差分をこのPC上のターミナルで実際に実行する必要がある。作業を始める前に、AIがこのフォルダに直接アクセスできている状態か確認すると安全。

## ディレクトリ構成

```
app/
  layout.tsx                    ルートレイアウト（<head>、Header/Footer、Analytics 等）
  page.tsx                      トップページ（Hero + 最新リリース）
  not-found.tsx                 404ページ
  globals.css                   全スタイル（Tailwindベース）
  robots.ts / sitemap.ts        robots.txt / sitemap.xml を動的生成
  icon.png / apple-icon.png     favicon / Apple touch icon
  catalog/
    page.tsx                     Catalog 一覧
    [slug]/page.tsx               リリース詳細（全8作品、generateStaticParams で静的生成）
  artists/
    page.tsx                     Artists 一覧
    [slug]/page.tsx               アーティスト詳細（全3組、generateStaticParams で静的生成）
  movie/page.tsx                 YouTube 埋め込みのMV一覧
  radio/page.tsx                 Spotify番組(SLP Radio)の埋め込み
  about/page.tsx                 About
  contact/page.tsx               Contact（ContactForm を使用）
  api/newsletter/route.ts        ニュースレター登録API（Buttondown連携）
  202608interview/page.tsx       特集記事（impressionists インタビュー、ハードコード記事ページ）
  baddgfct2ida8gj4/page.tsx      非公開の音源限定配布ページ（noindex）
  utidn7u26ivqyfif/page.tsx      非公開の音源限定配布ページ（noindex）

components/
  site-header.tsx          ヘッダー（グローバルナビ、モーション ON/OFF トグル、モバイルメニュー）
  site-footer.tsx           フッター（SNSリンク、ニュースレター、footer高さをCSS変数に反映）
  motion-system.tsx         スクロールリビール／ページ遷移演出／`prefers-reduced-motion` 対応
  hero.tsx                   トップページのHero（ポインター追従の微細な反応）
  page-header.tsx            下層ページ共通の見出しセクション
  newsletter-form.tsx        ニュースレター登録フォーム（`/api/newsletter` へPOST）
  contact-form.tsx           お問い合わせフォーム（Formspreeへ直接POST）
  json-ld.tsx                 構造化データ(JSON-LD)埋め込み用
  social-icon.tsx             SNSアイコンのインラインSVG
  artist-card.tsx             Artists一覧用カード
  release-card.tsx            Catalog一覧用カード
  ui/button.tsx               shadcn/ui互換のButtonコンポーネント

data/
  site.ts                   サイトURL、グローバルナビ項目、SNSリンク
  artists.ts                アーティスト情報（プロフィール、リリース紐付け、対談記事リンク等）
  releases.ts                リリース情報（トラックリスト、配信リンク、Bandcamp埋め込みID等）

lib/
  metadata.ts               ページ単位の Metadata(OGP/Twitter Card含む) を組み立てる共通関数
  structured-data.ts         JSON-LD（Organization / MusicGroup / MusicAlbum）を組み立てる共通関数
  utils.ts                   `cn()`（clsx + tailwind-merge）

public/
  images/artists/            アーティスト写真
  images/releases/            ジャケット画像
  images/interview/           202608interview 記事で使用する画像
  downloads/                  限定配布用の音源ファイル（.wav）

reference-static/           移行前の静的HTML版。実装の参照専用（現行の指示書ではない）
```

## プロジェクト資料

このリポジトリには、AIアシスタント（Claude）と協働で開発を進めるための指示書が含まれている。新しく着手する際は、次の順で読む。

1. `DESIGN_CONCEPT.md` — デザインルールと決定経緯（白黒2色のみ、線を使わない、General Sans統一 等）
2. `HANDOFF_START_HERE.md` — プロジェクトの目的と、作成当時の完成/未完成状況
3. `CLAUDE_HANDOFF.md` — 対象ページ、旧URL一覧、実装要件
4. `CLAUDE.md` — AIアシスタント向けの作業ルール（非交渉事項、技術ルール、検証手順）
5. `PROMPT_FOR_CLAUDE.md` — 上記を踏まえた依頼プロンプトの例

**注意**: `HANDOFF_START_HERE.md` と `CLAUDE_HANDOFF.md` は「Artist詳細ページ3組・Catalog詳細ページ8作品が未着手」という前提で書かれているが、現時点ではすべて実装済み（上記ディレクトリ構成を参照）。着手当時のスナップショットのため、現状と食い違う記述がある点に注意。

## 既知の未整理事項

- `app/impressionists/` と `app/from-here_impressionists/` は中身が空のディレクトリとして残っている（旧URL構成の名残）。実際のリダイレクトは `next.config.ts` の `redirects()` で処理済みのため、これらの空ディレクトリは削除して問題ない。
- `_to_delete/` フォルダに、上記ページの旧実装やデバッグ用HTMLなど、削除待ちのファイルが置かれている。

## メモ

- `next.config.ts` に、旧URL構成（`/impressionists` 等）から現行URL（`/artists/impressionists/` 等）への恒久リダイレクトを定義済み。
- `app/layout.tsx` で Fontshare（General Sans）を `<link>` で読み込んでいる。作業環境から `api.fontshare.com` へのネットワークアクセスができず `next/font/local` によるセルフホスト化ができなかったため、`preload` で優先度を上げる形の暫定対応にとどまっている（コード内コメント参照）。
- Google Search Console の所有権確認用メタタグの値が `app/layout.tsx` に直書きされている。ドメイン移管や再発行の際は忘れずに更新すること。
- `baddgfct2ida8gj4` / `utidn7u26ivqyfif` は、SNS等で個別に共有する音源限定配布用のURLで、意図的に第三者から辿れないパス名にしてある（`robots: { index: false, follow: false }` 設定済み）。
- `app/globals.css` の `body` は `min-height:100svh`（`100dvh` ではない）。スマホブラウザはアドレスバーの表示/非表示で実際の高さが変わるため、`100dvh` を使うとページ最下部までスクロールした際に「高さが伸びる→スクロール位置がずれて戻る→アドレスバーが再表示→高さが縮む」というループが起き、画面下部のフッターが震えて見える不具合が起きていた。`100svh`（アドレスバー表示を前提にした固定に近い最小値）に変更することで解消済みのため、意図せず `100dvh` に戻さないよう注意。
- デザインは白黒2色のみ、区切り線（罫線・下線・点線）を使わない方針が確定事項。詳細は `DESIGN_CONCEPT.md` を参照。
- `header.site` はスクロールしても縦paddingが変わらない固定の高さにしてある（以前は `.scrolled` クラスで `padding:16px 0`→`10px 0` に縮む演出があった）。理由：`#site-header` は `position:sticky` のため、ヘッダー自身の高さが変わるとページ全体の高さ（`scrollHeight`）も一緒に変動する。ページの余白を詰めてスクロール可能距離が数十pxまで短くなったことで、この十数pxの高さ変動が無視できない割合になり、スクロール最下部付近でブラウザがスクロール位置を微調整し続けて画面が震える不具合が発生していた（Chromeでのみ確認、Edgeでは未再現）。ヘッダーの高さを固定して解消済み。同様の「スクロール量に応じて要素の高さが変わる演出」を追加する際は、ページが短いほどこの手のループが起きやすい点に注意。
