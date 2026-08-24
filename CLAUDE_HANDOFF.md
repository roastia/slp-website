# SLP Next.jsサイト：Claude向け実装引き継ぎ書

このプロジェクトは、レコードレーベル「SLP」の既存静的HTML版をNext.jsへ移行したものです。

作業開始前に、必ず `CLAUDE.md`、`DESIGN_CONCEPT.md`、`HANDOFF_START_HERE.md` を最初から最後まで読んでください。移行前の実装は `reference-static/` に参照用として残しています。

このファイルの作成対象はまだ未実装です。現在の一覧カードが既存公式サイトへ移動するのは、詳細ページ完成前の暫定仕様です。

## 現在の技術構成

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui互換コンポーネント構成
- Vercelへデプロイ可能

`package-lock.json`を維持し、別フレームワークへ変更しないでください。

Node.jsは20.9.0以上を使用してください。`.nvmrc`は動作確認済みの24.19.0を指定しています。

## 現在完成しているページ

- `/`
- `/catalog/`
- `/artists/`
- `/movie/`
- `/about/`
- `/contact/`
- `/templates/artist/`（noindexのデフォルトテンプレート）
- `/templates/catalog/`（noindexのデフォルトテンプレート）

## 作成対象

### Artists

- impressionists
- KEIMABASS
- swmcps

### Catalog

- impressionists / impressionists
- impressionists / from here
- swmcps / avt_
- KEIMABASS / Ordinary Single (Waves)
- KEIMABASS / CC
- KEIMABASS / rwotnc a
- KEIMABASS / 瞬く呼吸
- impressionists / 余白

## 維持する旧URL

### Artists

- `/impressionists/`
- `/artists/keimabass/`
- `/artists/swmcps/`

### Catalog

- `/catalog/impressionists-impressionists/`
- `/from-here_impressionists/`
- `/catalog/avt_/`
- `/catalog/ordinarysingle_keimabass/`
- `/catalog/cc_keimabass/`
- `/catalog/rwotnc-a_keimabass/`
- `/catalog/matatakukokyuu_keimabass/`
- `/catalog/yohaku_impressionists/`

特殊な既存URLを守るため、`impressionists`と`from here`はルート直下のページとして作成します。それ以外は `app/artists/[slug]/page.tsx` と `app/catalog/[slug]/page.tsx` で生成してください。

## 実装方法

1. `app/templates/artist/page.tsx` と `app/templates/catalog/page.tsx` を見た目の基準にする
2. 事実情報を既存公式サイト `https://www.slprecordings.com/` から確認する
3. データ型を作り、`data/artists.ts` と `data/releases.ts` を詳細情報へ拡張する
4. `generateStaticParams`で詳細ページを静的生成する
5. `generateMetadata`でページ固有のtitle、description、canonical、OGP、Xカードを設定する
6. 一覧カードの `href` を完成した内部URLへ変更する
7. WordPress画像を `public/images/` に保存し、可能ならWebPまたはAVIFへ最適化する
8. `npm run build` が成功するまで確認する
9. `npm run validate`でLintと本番ビルドをまとめて確認する

## 絶対に変更しないデザインルール

- 色は黒 `#000000` と白 `#ffffff` のみ
- グレーは色指定ではなくopacityで表現する
- セクション区切りに罫線、下線、点線を使わない
- General Sans以外のフォントを追加しない
- CatalogとArtistsは同じカードグリッドを共有する
- 画像をグレースケール加工しない
- カタログ番号、作品数、アーティスト数などの装飾的数字を追加しない
- 区切りは余白、白黒反転、文字の強弱だけで表現する
- `MOTION ON / OFF`、ページ遷移、スクロール表示、モバイルメニューを維持する
- shadcn/uiの標準的な角丸、罫線、影、アクセントカラーをそのまま持ち込まない

## コンテンツルール

- 既存公式サイトを一次情報として使用する
- 曲名、日付、クレジット、リンク、プロフィールを推測・創作しない
- 確認できない情報は `[要確認]` とする
- 存在しない外部リンクや空のボタンを作らない
- 詳細ページ完成後はnoindexを付けない

## 完了前チェック

- [ ] 全3アーティストの詳細ページがある
- [ ] 全8作品の詳細ページがある
- [ ] 旧URLを維持している
- [ ] 一覧カードから内部詳細ページへ移動できる
- [ ] ページ固有のMetadataが設定されている
- [ ] 画像にaltと固有寸法がある
- [ ] 画像はカラー表示されている
- [ ] 320pxからデスクトップまで崩れない
- [ ] モバイルメニューをキーボードとEscapeキーで操作できる
- [ ] MOTION OFFとprefers-reduced-motionが動く
- [ ] `npm run build` が成功する
- [ ] `npm run validate` が成功する
- [ ] 変更内容と `[要確認]` を報告する
