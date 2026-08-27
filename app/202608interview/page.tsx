import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/data/site";
import { ShareButtons } from "@/components/share-buttons";

export const metadata: Metadata = pageMetadata(
  '山口発、ジャンルを越境するプロジェクト"impressionists"',
  '3人で鳴らす"ライブの空気感"を音源にしたセカンドアルバム『impressionists』。impressionistsインタビュー。',
  "/202608interview/",
  { url: "/images/releases/impressionists.jpg", alt: "impressionists" },
);

export default function InterviewPage() {
  return (
    <main>
      <section className="article wrap">
        <article className="article-prose">
          <h1 data-reveal>
            山口発、ジャンルを越境するプロジェクト&quot;impressionists&quot;
            <br />
            3 人で鳴らす&quot;ライブの空気感&quot;を音源にしたセカンドアルバム『impressionists』
          </h1>
          <p className="credit" data-reveal>
            2026.08.16　撮影：<a href="https://kazumayoshiga.com/home">ヨシガカズマ</a> ／ 文・構成：奥雄祐（SLP）
          </p>

          <ShareButtons
            url={new URL("/202608interview/", SITE_URL).toString()}
            title={'山口発、ジャンルを越境するプロジェクト"impressionists" 3人で鳴らす"ライブの空気感"を音源にしたセカンドアルバム『impressionists』 | SLP'}
          />

          <Image
            src="/images/interview/interview-01.jpg"
            alt="impressionists"
            width={1024}
            height={681}
            data-reveal
          />

          <p data-reveal>impressionists（インプレッショニスツ）</p>
          <p data-reveal>
            橋本 崇広／ギター、ボーカル、シンセサイザー、他(写真右)
            <br />
            2007 年にポストロックバンド&quot;Little Phrase&quot;を結成。インディーズレーベルより 3
            作品リリースし、国内外で評価を受ける。コンピレーションアルバム&quot;for
            Nihon&quot;に坂本龍一、alva noto 等と参加。その他、映画音楽へ楽曲提供、等。2024
            年より新プロジェクト&quot;impressionists&quot;立ち上げ。奥雄祐が主宰するレーベル&quot;SLP&quot;よりアルバム２作品、シングル１作品を発表。
          </p>
          <p data-reveal>
            津波 拓樹／ドラム (写真中央)
            <br />
            現在まで様々なバンドのドラマーとして精力的に活動を行っている。2012
            年より&quot;Little Phrase&quot;に参加。ドラム、パーカッションの他、ギター、ベース、トランペット等も操る。ジミ・ヘンドリックスを偏愛。
          </p>
          <p data-reveal>
            西牟田 翔／キーボード、ギター (写真左)
            <br />
            現在までの参加バンドでは主にドラムを担当。ソロ名義&quot;ひつじとはね&quot;は楽器のループ音とフィールドレコーディングした音を重ねるスタイル。 「星野源のオールナイトニッポン」で音源が紹介された。
          </p>

          <div className="embed" data-reveal>
            <iframe src="https://www.youtube.com/embed/NwiFhLoAojI" height={394} loading="lazy" allowFullScreen title="impressionists MV" />
          </div>
          <div className="embed" data-reveal>
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=548330267/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
              height={472}
              loading="lazy"
              title="impressionists album player"
            />
          </div>

          <h2 data-reveal>「自由な形で活動していこう」バンドという名の実験場</h2>
          <p data-reveal>「&quot;impressionists(インプレッショニスツ)&quot;、まず名前が覚えづらいですけど。」と苦笑いしながらも、橋本は淀みなく言葉を続ける。</p>
          <p data-reveal>山口を拠点にして動くこのプロジェクトは、アンビエントからバンドサウンドまでを縦横無尽に行き来しながら、着実に存在感を増してきた。</p>
          <p data-reveal>ギター・ボーカル・シンセサイザーに加えてライブでは VJ も担う橋本を軸に、ドラムの津波、キーボードとギターを操る西牟田という 3 人がこのアルバム制作の編成だ。</p>
          <p className="quote" data-reveal>
            「ファーストアルバム『余白』は自分一人、あるいはレーベルオーナーの奥雄祐くんに協力してもらいながら作った作品でしたが、その後リリースしたシングル『from
            here』、そして今作（セカンドアルバム）の『impressionists』はこの 3
            人で構築しました。そういう自由な形で活動していこうというプロジェクトです」（橋本）
          </p>
          <p data-reveal>固定のフォーマットを持たないことが、このバンド（プロジェクト）の一番の特徴なのかもしれない。</p>

          <Image
            src="/images/interview/interview-02.jpg"
            alt="取材で使用したマイクとimpressionistsのCD、マグカップが並ぶテーブル"
            width={681}
            height={1024}
            data-reveal
          />

          <h2 data-reveal>バンドサウンドへの転換 前作『余白』から今作『impressionists』へ</h2>
          <p data-reveal>今回のアルバムは、前作から大きく方向性が変わった一枚だ。</p>
          <p className="quote" data-reveal>「1st はアンビエントアルバムと言ってもいい内容でした。今回は特にドラムが前に出て、完全にバンドサウンドになった。だいぶ音の感じが違う。」（橋本）</p>
          <p data-reveal>その背景にはライブの存在がある。前作『余白』リリース後、3 人で数本のライブを行ったが、セットリストに『余白』の楽曲はほとんど入っていなかった。</p>
          <p className="quote" data-reveal>
            「ライブの MC で音源が出ましたと言うのに、セットリストは『余白』から 1
            曲のみで。ライブの音源を聴きたいっていろんな人から言われて、早くライブで演奏している楽曲を収録した作品を作らないと・
            ・・という気持ちがずっとありました。」（橋本）
          </p>
          <p data-reveal>セカンドアルバムのタイトルがセルフタイトル（バンド名と同様）になったのも、その思いの延長線上にある。</p>
          <p className="quote" data-reveal>
            「ライブで演奏している感じを音源化できた、という実感があって。あと、正直、それ以外のタイトル候補がなかった（笑）。3
            人で作ったファーストアルバムみたいな感覚があるから、これしかないかなって。」（橋本）
          </p>

          <div className="embed" data-reveal>
            <iframe src="https://www.youtube.com/embed/iN3cmVDWYJM" height={394} loading="lazy" allowFullScreen title="impressionists live movie" />
          </div>
          <div className="embed" data-reveal>
            <iframe src="https://www.youtube.com/embed/PAFjYYLhPpU" height={394} loading="lazy" allowFullScreen title="impressionists live movie" />
          </div>

          <h2 data-reveal>全員が「初めて」に向き合ったレコーディング</h2>
          <p data-reveal>制作は 3 人それぞれにとって試行錯誤の連続だった。</p>
          <p data-reveal>橋本は(&quot;Little Phrase&quot;において)ミックス ・アレンジを担ってきたが、今回はエンジニアとして奥が大きく関わった。</p>
          <p className="quote" data-reveal>
            「今まで全部自分でやっていたので、特にミックスが一番苦労するところでした。そこを奥くんがやってくれたことで、視野も増して負荷も軽くなった。それが大前提としてあって、全体的には今までの音源制作よりも苦労しすぎずに済んだ、というのが正直なところ。」（橋本）
          </p>
          <p data-reveal>一方の西牟田は、ドラム以外のレコーディング自体がほぼ初体験に近い状態からのスタートだった。</p>
          <p className="quote" data-reveal>
            「別のバンドでは基本的にドラムとしてバンドに参加してきたので、ギターもキーボードも、ちゃんと録るのは初めてぐらいの感じで。色々と録って橋本さんへ送ってみて、どれを使うか分からないまま任せたものもある。」（西牟田）
          </p>
          <p data-reveal>津波のドラムについては、橋本が真っ先に絶賛する。</p>
          <p className="quote" data-reveal>
            「本当にベストテイクをいつも送ってくれるんです。普通、ドラムって編集することが多いのですが、彼の場合ほとんどそのまま。スタジオで詰める作業をする際でも、パッと良い感じに合わせてくれるのでとても助かる。」（橋本）
          </p>
          <p data-reveal>続けて西牟田はこう言う。</p>
          <p className="quote" data-reveal>
            「クリックに合わせすぎていないというか。遊び心を入れながら、最後にはきっちり合わせてくる。それがすごく音楽的で、面白い。クリックにガチガチに合わせると、どうしても機械的になるじゃないですか。あのライブ感はなかなか出せない。」（西牟田）
          </p>
          <p className="quote" data-reveal>「そうかな。クリックにしっかり合わせているつもりなんだけどな(笑)。」（津波）</p>

          <Image
            src="/images/interview/interview-03.jpg"
            alt="山口の商店街を歩くimpressionistsの3人"
            width={1024}
            height={683}
            data-reveal
          />

          <h2 data-reveal>曲の生まれ方 意識せず、ふとした瞬間に</h2>
          <p className="quote" data-reveal>「意図的に作るぞ、と思っていいものは生まれなくて、ふとした瞬間に出てきたものの方が意外といいかも、っていうことが多い。」と橋本は言う。</p>
          <p data-reveal>特に印象的だったのは、娘のピアノ練習に付き合っていた時の話だ。</p>
          <p className="quote" data-reveal>「合間に代わりにちょっと弾いてたら、あれ？なんかこれいいかも、って(アルバム収録曲『old cartoon』)。そういうパターンが結構多いんですよ。」（橋本）</p>
          <p data-reveal>録りためておいて後で聴き直す、そのサイクルが彼のスタイルだ。</p>
          <p className="quote" data-reveal>「時間が経って聴き直すと、全然ダメだな、というものあるし。けど、あれ、これ誰が作ったの？（笑）ってなるくらい凄く良い、と思うこともありますね。」（橋本）</p>
          <p data-reveal>西牟田が今作に持ち込んだ曲(アルバム収録曲『moonlight reflection』)も、偶然の産物だった。</p>
          <p className="quote" data-reveal>
            「ライブで曲と曲をつなぐとき、なんとなくコードを弾いて、自分が録った環境音を足すみたいなことをやっていて。そのなんとなく弾いていたやつを橋本さんから「アルバムに入れよう」と言われて。あれ、曲っていうイメージではなかったけどな、と思いながら（笑）。」（西牟田）
          </p>

          <Image
            src="/images/interview/interview-04.jpg"
            alt="壁の前に並んで立つimpressionistsの3人"
            width={1024}
            height={683}
            data-reveal
          />

          <h2 data-reveal>山口という場所が与えるもの</h2>
          <p data-reveal>東京ではなく山口を拠点にすることが、音楽にどう影響しているか。</p>
          <p className="quote" data-reveal>
            「もし東京にいたら、全部インストになってたかもしれないな、とは思う。山口だからこそ、聴いてもらう人を意識して、ちょっとボーカルを入れたいっていう気持ちが働く気がします。」と橋本は言う。
          </p>
          <p data-reveal>また、自然環境が制作に直接入り込んでくることも多い。</p>
          <p className="quote" data-reveal>
            「近くに川があるので、散歩しながらいいなと思った音を iPhone
            で録って、そのまま音源に使ったりする。都会の人がフィールドレコーディングしに行くのって結構大変らしくて、それが山口では日常的にできる。」と西牟田は話す。
          </p>
          <p data-reveal>さらに車社会ならではの機材搬送のしやすさ、スタジオ代の安さなど、経済的なメリットも挙がった。</p>
          <p className="quote" data-reveal>「地方ならでは、ということは確かにある。でも&quot;impressionists&quot;の音楽性そのものに山口らしさがあるかっていうと、それはちょっと分からない。」（橋本）</p>
          <p className="quote" data-reveal>「都会は選択肢が多すぎて、自分がやる必要はない、となりそうで。山口はちょうどいいサイズ感だなと思っています。」（津波）</p>

          <Image
            src="/images/interview/interview-05.jpg"
            alt="カフェで談笑するimpressionistsの3人"
            width={1024}
            height={681}
            data-reveal
          />

          <h2 data-reveal>リスナーへ どこで聴いても&quot;合う&quot;アルバム</h2>
          <p className="quote" data-reveal>
            「色んな曲が入っているので、自分のお気に入りのシーンみたいなのを見つけてほしい。冒頭 4
            曲は散歩している時にスッと入る感じがあるし、終盤は夜っぽいなとかある。どこで聴いてもいいな、という全天候型というか。ひと言で言うと、聴く人それぞれに『ここで聴くといいな』というポイントがあると思うので、そんな感じで長く聴いてもらえたら嬉しいです。」（西牟田）
          </p>
          <p className="quote" data-reveal>
            「一回聴いて満足してくれる人もいると思うんですが、できれば何回か繰り返して聴いてもらった方が、より良さが伝わると思う。エンジニアとして関わってくれた奥くんのおかげでいろんな工夫が入っているので、ぜひ何度でも再生してほしい。あと、ライブはたまにしかやりませんが（笑）、ぜひ足を運んでいただければと思います。」（橋本）
          </p>
          <p className="quote" data-reveal>
            「できればスピーカーで鳴らして聴いてもらいたい。空気と混ざる感じで鳴らしてもらった方が良いかな。前作の『与作』※、、、じゃなかった(笑)。
            <br />
            （一同爆笑）
            <br />
            『余白』はシンプルな音が積み重ねられた作品。今作『impressionists』は複雑だけど丁寧に仕上げられた作品だと思います。」（津波）
          </p>
          <p data-reveal>3 人それぞれが初めてに向き合い、思考錯誤を重ねた末に生まれた今作。山口という土地で、ゆっくりと、しかし確かに育ってきた音が、バンドサウンドとして鳴り出した。</p>

          <p className="footnote" data-reveal>※1978 年発売の北島三郎氏の大ヒットシングル</p>
          <p className="credit" data-reveal>
            撮影：<a href="https://kazumayoshiga.com/home">ヨシガカズマ</a> ／ 文・構成：奥雄祐（SLP）
          </p>

          <div className="embed" data-reveal>
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=548330267/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              height={120}
              loading="lazy"
              title="impressionists"
            />
          </div>
          <div className="embed" data-reveal>
            <iframe
              src="https://bandcamp.com/EmbeddedPlayer/album=2411009458/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              height={120}
              loading="lazy"
              title="余白"
            />
          </div>
        </article>
      </section>
    </main>
  );
}
