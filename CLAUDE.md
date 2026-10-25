# Claude project instructions

このリポジトリは、福岡のレコードレーベル SLP のホームページです（Next.js / Vercelで公開、GitHub: `roastia/slp-website`）。
デザインは承認済みです。リデザインはせず、既存のデザインルールを守って修正・追加を行ってください。

Artist詳細ページ（3組）・Catalog詳細ページ（8作品）は実装済みです。`HANDOFF_START_HERE.md` と `CLAUDE_HANDOFF.md` は着手当時のスナップショットのため、現状と食い違う記述があります。

## 作業の進め方（毎回守ること）

1. **作業の最初に `git pull` で最新の状態にする**（MacとWindowsの両方で作業しているため）
2. ファイルの修正は、接続したフォルダ内の実ファイルを直接書き換える
3. 修正のたびに **commit まで行う**（push はユーザーが行う）
4. commit 後、ユーザーが実行する push 用コマンドを **1行で** 伝える。フォルダのパスはMacのものにする
   - コード・CSS・TypeScriptを変更したとき（buildを含める）:
     ```
     cd "~/Documents/slp-next"; npm run build; git push
     ```
   - README・ドキュメントなど文章だけの変更（buildは不要）:
     ```
     cd "~/Documents/slp-next"; git push
     ```
5. 修正内容に応じて、README の更新が必要な場合は更新する（同じ commit に含める）
6. ZIPでの納品は不要

## 最初に読むファイル

1. `DESIGN_CONCEPT.md` — デザインルールと決定経緯（最優先）
2. `README.md` — 起動方法と現在の構成

`reference-static/` は移行前の表示・実装を確認するための履歴です。現在の指示ではありません。

## デザインの非交渉ルール

- 色は黒と白のみ。中間の階層は透明度で表現する
- 罫線・下線・点線・装飾的な枠線・アクセントカラー・影・標準的な角丸カードを使わない
- フォントは General Sans のみ
- Catalog と Artists のグリッドは同一に保つ
- 画像はカラーのまま使う（グレースケール禁止）
- 装飾的な番号、カタログ番号、リリース数・アーティスト数などの件数表示を付けない
- MOTION ON / OFF、reduced-motion対応、ページ遷移、モバイルメニュー、320px幅までのレスポンシブを維持する
- 経歴・曲名・日付・クレジット・リンクなどの事実を創作しない。不明な事実は `[要確認]` と明記する

## 技術ルール

- Next.js App Router、TypeScript、Tailwind CSS、lockfile、現在のコンポーネント構成を維持する
- Server Components を基本とし、操作が必要な部分だけ Client Components にする
- 詳細ページは静的生成とページごとのメタデータ（`generateMetadata`）を使う
- 一覧・詳細のデータは `data/` 配下で一元管理し、コンポーネント間で内容を重複させない
- テンプレート用ルートは noindex、公開ページは index 可能にする
- 画像の `alt`、`width`、`height` を保持する
- 旧URLを維持する
- 秘密情報（APIキーなど）はコミットしない。環境変数はVercel側に設定する

## 検証

コードを変更したときは、可能な範囲で次を確認する:

```bash
npm run validate   # lint + build
```

あわせて、内部リンク、メタデータ、sitemap、画像参照、モバイル表示、MOTION ON/OFF に影響がないかを確認する。
