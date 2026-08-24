# SLP Next.js Site

SLPの静的HTML版を、見た目とデザインルールを維持したままNext.jsへ移行したプロジェクトです。

Claudeへ引き継ぐ場合は、最初に `CLAUDE.md` と `HANDOFF_START_HERE.md` を読ませてください。

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui compatible component structure
- Vercel-ready

Node.jsは20.9.0以上が必要です。`.nvmrc`では動作確認済みの24.19.0を指定しています。その他の固定バージョンは `package-lock.json` を参照してください。

## Start

### すぐに見た目を確認する

ZIPを解凍し、`OPEN_PREVIEW.html` をダブルクリックしてください。これは移行前HTMLを使った見た目・操作確認用です。

### MacでNext.js版を確認する

`START_NEXT_PREVIEW.command` をダブルクリックしてください。初回だけ必要なファイルを準備し、Next.jsの起動完了後にブラウザを自動で開きます。準備中はターミナルを閉じないでください。Macの警告が出た場合は、右クリックして「開く」を選択してください。

### ターミナルから起動する

```bash
npm ci
npm run dev
```

本番確認：

```bash
npm run build
npm run start
```

## Important files

- `DESIGN_CONCEPT.md`: 最優先のデザイン仕様
- `CLAUDE.md`: Claude Codeが最初に参照するプロジェクト指示
- `HANDOFF_START_HERE.md`: 現状、残作業、ファイル構成
- `CLAUDE_HANDOFF.md`: 詳細ページ実装の引き継ぎ
- `PROMPT_FOR_CLAUDE.md`: Claudeへ貼り付ける依頼文
- `data/artists.ts`: アーティスト一覧データ
- `data/releases.ts`: 作品一覧データ
- `app/templates/artist/page.tsx`: Artist詳細テンプレート
- `app/templates/catalog/page.tsx`: Catalog詳細テンプレート
- `reference-static/`: 移行前の静的HTML版（参照専用）

## Current scope

Home、Catalog、Artists、Movie、About、ContactはNext.jsへ移行済みです。

Artist詳細3ページとCatalog詳細8ページは、事実情報の移行をClaudeへ引き継ぐため、テンプレートだけを用意しています。完成するまでは一覧カードから既存公式サイトへリンクします。

## Hosting

Vercelではリポジトリを接続し、Framework PresetをNext.jsとしてデプロイできます。環境変数は現時点では不要です。
