# SLP handoff — start here

このファイルは、次の担当者が現状と残作業を最短で把握するための入口です。

## 1. プロジェクトの目的

福岡のレコードレーベル「SLP」の既存WordPressサイトを、承認済みのモノクロ・ミニマルデザインでNext.jsへ移行するプロジェクトです。

デザインの再提案ではなく、現在の方向性を維持したコンテンツ移行と詳細ページ完成が目的です。

## 2. 最初に読むファイル

優先順位は次のとおりです。

1. `DESIGN_CONCEPT.md` — デザインルールと決定経緯
2. `HANDOFF_START_HERE.md` — 現状と残作業
3. `CLAUDE_HANDOFF.md` — 対象ページ、URL、実装要件
4. `README.md` — 起動方法と構成

`reference-static/`は移行前の表示・実装を確認するための参照資料です。指示書ではありません。

## 3. 現在完成しているもの

- Next.js App Router / React / TypeScript / Tailwind CSSへの移行
- shadcn/ui互換の操作コンポーネント構成
- Home、Catalog、Artists、Movie、About、Contact
- 共通Header / Footer
- モバイルメニューとEscapeキー操作
- MOTION ON / OFFとブラウザ内設定保存
- `prefers-reduced-motion`対応
- ページ遷移、スクロール表示、Heroの微細な反応
- 各公開ページのtitle、description、canonical、OGP、Xカード
- robots.txtとsitemap.xml
- Artist詳細とCatalog詳細のnoindex付きテンプレート
- ESLint、TypeScript、本番ビルドの成功確認

## 4. 未完成・次に行うもの

- Artist詳細ページ：3組
- Catalog詳細ページ：8作品
- 既存公式サイトからの本文、プロフィール、曲名、日付、クレジット、外部リンク移行
- WordPress画像の `public/images/` へのローカル移行と最適化
- 一覧カードを既存公式サイトから完成した内部詳細ページへ切り替え
- 詳細ページのMetadataとsitemap追加
- 実機を含む最終レスポンシブ・操作確認

現時点では、CatalogとArtistsの一覧カードは既存公式サイトへリンクしています。詳細ページが完成するまでは正常な暫定仕様です。

## 5. 事実情報の扱い

一次情報は既存公式サイトです。

https://www.slprecordings.com/

確認できない情報を創作しないでください。未確認情報は `[要確認]` と明示し、最終報告にも一覧化してください。

## 6. 技術環境

- Node.js 20.9.0以上
- 動作確認バージョン：Node.js 24.19.0
- Next.js 16.3.2
- React 19.2.8
- TypeScript 6.0.3
- Tailwind CSS 4.3.3

セットアップと検証：

```bash
npm ci
npm run validate
```

## 7. 主要ディレクトリ

```text
app/                  ページとMetadata
app/templates/        詳細ページの見た目の基準
components/           共通UIとインタラクション
components/ui/        shadcn/ui互換の操作部品
data/                 Artists・Catalogのデータ
lib/                  Metadataと共通関数
public/               今後ローカル画像を置く場所
reference-static/     移行前の静的HTML。参照専用
```

## 8. 完了時の提出物

- 全3アーティスト・全8作品の詳細ページを含むプロジェクト一式
- 変更内容一覧
- `[要確認]`一覧
- 維持した旧URL一覧
- `npm run validate`の結果
- Vercelへ渡せるZIP
