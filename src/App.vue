<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FirstView from './components/FirstView.vue'
import SvgAnimation from './components/SvgAnimation.vue'
import Background from './components/Background.vue'
import SampleCode from './components/SampleCode.vue'
import SampleCard from './components/SampleCard.vue'
import DescriptionCard from './components/DescriptionCard.vue';
import SideScroller from './components/SideScroller.vue';
import Three from './components/Three.vue';

</script>

<template>
  <Three />
  <main ref="sandbox">
    <FirstView />
    <div class="lead">
      <p v-budoux>
        アニメーションまわりとか最近のやりかた試したことなかったので色々いじったり試したりしてみました！
      </p>
    </div>

    <article>
      <DescriptionCard>
        <template #heading>
          Viteを使ってみた
        </template>
        <ul>
          <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
          <li>想像以上にかんたんに環境が作れてびっくり！</li>
          <li>ほんとにGetting startedのコマンド3つくらい叩いたらできた</li>
          <li>詳しくは調べられてないけど、開発環境がサクサク作れるのはいいなーと感じた！</li>
        </ul>
      </DescriptionCard>

      <DescriptionCard>
        <template #heading>
          Vue3 Composition API を利用してみた
        </template>
        <ul>
          <li><a href="https://v3.ja.vuejs.org/guide/composition-api-introduction.html#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF%E3%82%92-setup-%E3%81%AE%E4%B8%AD%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B" target="_blank">Composition API について</a></li>
          <li>まだOptions記法に慣れているので、違和感がある…</li>
          <li>
            Options記法に比べて、以下のような利点があるらしい。
            <ul>
              <li>同じ関心事の記述をまとめられる(確かにOptionsだと、 <SampleCode>data</SampleCode>や<SampleCode>computed</SampleCode>、<SampleCode>methods</SampleCode>の記述がコンポーネント内のコードが肥大化するにつれてバラけてしまいがちだった。)</li>
              <li>TypeScriptとの親和性がある</li>
            </ul>
          </li>
          <li>TypeScriptもちゃんと覚えたいので頑張りたいとこ…！</li>
        </ul>
        <SampleCode caption="とあるコンポーネントの <script setup> タグ内">
          <pre>
            import { ref, onMounted } from 'vue'

            // ここでテンプレート参照したい要素をつなぎこむ
            // (変数名とref属性の名称をあわせる)
            const templateRef = ref(null);
            const props = defineProps({
              // ここにpropsを定義
            })

            onMounted(() => {
              // ここに処理を記述
            })
          </pre>
        </SampleCode>
      </DescriptionCard>

      <DescriptionCard>
        <template #heading>
          カスタムディレクティブを作成した
        </template>
        <ul>
          <li><a href="https://v3.ja.vuejs.org/guide/custom-directive.html#%E5%9F%BA%E6%9C%AC" target="_blank">カスタムディレクティブ について</a></li>
          <li>ざっくりいうと、要素(element)に好きな機能を持たせた属性(attribute)を定義することができる君</li>
          <li>
            今回は<SampleCode>v-blur</SampleCode>ディレクティブと<SampleCode>v-budoux</SampleCode>ディレクティブを作成した！
            <ul>
              <li>
                <SampleCode>v-blur</SampleCode>:
                ウィンドウに入るときと出る時にぼかしを入れるディレクティブ。
                後ほど実例が表示されます。
              </li>
              <li>
                <SampleCode>v-budoux</SampleCode>:
                <a href="https://github.com/google/budoux">budoux</a> が適用され、
                文章がいい感じの文節で折り返されるようになる
                (このページの見出しおそらくいい感じのところで折り返してるかと思います！すごい！)
              </li>
            </ul>
          </li>
        </ul>
        <SampleCode caption="blur.ts">
          <pre>
            import gsap from 'gsap'
            import ScrollTrigger from "gsap/ScrollTrigger"
            gsap.registerPlugin(ScrollTrigger)

            export const blurDirective = {
              mounted: function(el: HTMLElement) {
                gsap.to(
                  el,
                  {
                    'filter': 'blur(10px)',
                    scrollTrigger: {
                      trigger: el,
                      // markers: true,
                      scrub: true,
                      start: "bottom top+=200",
                      end: "bottom top"
                    }
                  }
                );
                gsap.fromTo(
                  el,
                  {
                    'filter': 'blur(10px)'
                  },
                  {
                    'filter': 'blur(0px)',
                    scrollTrigger: {
                      trigger: el,
                      // markers: true,
                      scrub: true,
                      start: "top bottom",
                      end: "top center"
                    }
                  }
                )
              }
            }
          </pre>
        </SampleCode>
        <SampleCode caption="budoux.ts">
          <pre>
            import { loadDefaultJapaneseParser } from 'budoux';
            const parser = loadDefaultJapaneseParser();

            export const budouxDirective = {
              mounted: function(el: HTMLElement) {
                el.innerHTML = parser.translateHTMLString(el.innerHTML)
              }
            }
          </pre>
        </SampleCode>

        <SampleCode caption="main.ts">
          <pre>
            const main = createApp(App)
            main.directive('blur', blurDirective)
            main.directive('budoux', budouxDirective)
            main.mount('#app')
          </pre>
        </SampleCode>
      </DescriptionCard>
    </article>

    <article>
      <DescriptionCard>
        <template #heading>
          GSAPを利用してみた
        </template>
        <ul>
          <li><a href="https://greensock.com/gsap/" target="_blank">GSAP(GreenSock Animation Platform)</a></li>
          <li>GSAPとそのプラグインScrollTriggerを用いて作成</li>
          <li>scrubでスクロール位置に合わせてアニメーションが動くのだけど、それがめちゃ面白い！</li>
          <li>基本的にはCSSのtransitionとanimationをいい感じに扱える様にしてくれるものが多いので、CSS覚えてる人には使いやすいと感じた</li>
          <li>
            個人的に嬉しいなーとなったポイントは以下。
            <ul>
              <li>アニメーションを手続き的に実行できる点(timeline)</li>
              <li>スクロールと連動したアニメーションが可能な点(ScrollTrigger)</li>
              <li>IntersectionObserverの書き方むずいけど、このライブラリを使うと結構直感的にかける点</li>
            </ul>
          </li>
        </ul>
        <p>
          以下に活かせそうな例を作成してみた！
        </p>
      </DescriptionCard>

      <DescriptionCard>
        <h3 v-budoux>timelineを用いた最初のアニメーション</h3>
        <video src="./assets/first-view.mov" autoplay loop muted playsinline></video>
        <ul>
          <li>gsap.timeline関数を使用した</li>
          <li>このアニメーションの次はこのアニメーション→その次のアニメーション…と手続き的にアニメーションを実行できる</li>
          <li>ボールが跳ねる→文字が一文字ずつ跳ねる→文字が縮小する→(一個前と同時に)背景が透過する</li>
          <li>
            staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる
            <ul>
              <li>今回は一文字ずつずれて同じアニメーションが実行されるようにするところに適用している</li>
            </ul>
          </li>
        </ul>
      </DescriptionCard>

      <DescriptionCard start-x="-200">
        <h3 v-budoux>スライドインさせるアニメーション</h3>
        <SampleCode caption="スライドインでのコンポーネント内のgsapアニメーション記述部分">
          <pre>
            const props = defineProps({
              startX: {
                type: String,
                default: '0'
              },
              startY: {
                type: String,
                default: '0'
              },
            })

            onMounted(() => {
              gsap.set(
                card.value,
                {
                  x: props.startX,
                  y: props.startY,
                  opacity: 0
                }
              )
              gsap.to(
                card.value,
                {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: card.value,
                    // markers: true,
                    // scrub: true,
                    toggleActions: "play none none reset",
                    start: "top center+=30%",
                    end: "top center-=30%"
                  }
                }
              );
            })
          </pre>
        </SampleCode>
        <ul>
          <li>スクロールの際、特定要素がウィンドウの特定位置に来ることをトリガーとしてスライドインする</li>
          <li>
            今回はCompositionAPIの練習も兼ねて、defineProps用いてコンポーネントのpropsとして定義した
            <ul>
              <li><SampleCode>startX</SampleCode>もしくは<SampleCode>startY</SampleCode>の独自propsを指定するとその位置からスライドしているように見える</li>
              <li>このカードは <SampleCode>start-x="-200"</SampleCode>を指定している</li>
            </ul>
          </li>
        </ul>
      </DescriptionCard>
      <DescriptionCard v-blur>
        <h3 v-budoux>上端下端でウィンドウに入る時にぼかすアニメーション</h3>
        <SampleCode caption="ぼかすエフェクトのディレクティブ内のgsapアニメーション記述部分">
          <pre>
            gsap.to(
              el,
              {
                'filter': 'blur(10px)',
                scrollTrigger: {
                  trigger: el,
                  // markers: true,
                  scrub: true,
                  start: "bottom top+=200",
                  end: "bottom top"
                }
              }
            );
            gsap.fromTo(
              el,
              {
                'filter': 'blur(10px)'
              },
              {
                'filter': 'blur(0px)',
                scrollTrigger: {
                  trigger: el,
                  // markers: true,
                  scrub: true,
                  start: "top bottom",
                  end: "top center"
                }
              }
            )
          </pre>
        </SampleCode>
        <ul>
          <li>スクロールの際、特定要素がウィンドウの特定位置に来ることをトリガーとしてぼかしを入れる</li>
          <li><SampleCode>scrub: true;</SampleCode>とすることで、スクロール位置とアニメーションの進行量をあわせることができる(おもしろいいいい)</li>
          <li>このセクションをウィンドウの上端下端に持ってくと挙動が確認できる</li>
          <li>今回はVue.jsの練習も兼ねてカスタムディレクティブとして前述したblurディレクティブを定義した</li>
        </ul>
      </DescriptionCard>

      <DescriptionCard style="mix-blend-mode:exclusion">
        <h3 v-budoux>背景を埋めるエフェクト</h3>
        <SampleCode caption="背景を埋めるエフェクトコンポーネント内のgsapアニメーション記述部分">
          <pre>
            const activator = ref();
            const expandBall = ref();

            onMounted(() => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: activator.value,
                  scrub: true,
                  start: "top bottom",
                  end: "top center"
                }
              });
              tl.to(
                expandBall.value,
                {
                  'width': '300vmax',
                  'height': '300vmax',
                },
              ).fromTo(
                expandBall.value,
                {
                  autoAlpha: 1
                },
                {
                  autoAlpha: 0,
                },
              );
            })
          </pre>
        </SampleCode>
        <ul>
          <li>スクロールの際、アニメーションさせる要素とトリガーさせる要素を別にすることができる</li>
          <li>今回は、このセクションがウィンドウに入ったら、背景の<SampleCode>.expandBall</SampleCode>を広げるエフェクトを作成してみた</li>
          <li>おまけで、<SampleCode type="css">mix-blend-mode</SampleCode>をちゃんと使用したことなかったので使用してみた（背景白になってもちゃんと読めるように文字色が変わってるはず！）</li>
        </ul>
      </DescriptionCard>
      <Background />
      <DescriptionCard>
        <h3 v-budoux>縦スクロールで横スクロールしているようなエフェクト</h3>
        <ul>
          <li>スクロールを用いてアニメーションを作成できるということは、スクロール対象を固定して横に移動するアニメーションを適用してあげれば、縦スクロールを横スクロールの様に見立てるような見せ方もできる</li>
          <li>以下は、10枚の画像を横に並べたサンプル。縦スクロールに応じて横に移動する(横スクロールしているように見える)</li>
        </ul>
      </DescriptionCard>
      <SideScroller>
        <SampleCard v-for="n in 10" :n="n"></SampleCard>
      </SideScroller>
    </article>

    <article>
      <DescriptionCard>
        <template #heading>
          Three.jsを使って背景を作成した
        </template>
        <ul>
          <li><a href="https://threejs.org/" target="_blank">Three.js</a></li>
          <li>javascriptで3dをいじれるライブラリ。WebGLを組み合わせられるので、GPU処理できちゃう！</li>
          <li>本当はWebGL直接いじる感じでやろうと思ってたけど、カスタムシェーダーの勉強のために他の箇所はThree.jsにおまかせした感じになった。。</li>
          <li>シェーダーをどうしても自分で作成してみたくて、色々思考錯誤した</li>
          <li>GLSLまじでむずいけど、覚えたら絶対楽しいのがわかった</li>
          <li>行列とベクトルをちゃんと勉強したい気持ちになりまくっている…！！！</li>
          <li>
            今回は白い点が、スクロールに応じて回転するようなものを作成して背景に設置した！
            <ul>
              <li>BufferGeometryを動的に作成してそれをシェーダーに渡してこねこねする箇所でだいぶ苦労した。。うまく動かん！なんでええええの連続</li>
            </ul>
          </li>
        </ul>
      </DescriptionCard>
    </article>

    <article>
      <SvgAnimation />
      <DescriptionCard>
        <template #heading>
          SVGのアニメーションを作成した
        </template>
        <ul>
          <li>SVGのパスを描画するようなアニメーションを作成した</li>
          <li>スクロールに応じて後ろでにょろにょろが動いているはず！</li>
          <li>SVGのパスの長さは<SampleCode>SVGGeometryElement.getTotalLength()</SampleCode>で取得することができる！</li>
          <li>
            パスを描画するアニメーションは<SampleCode type="css">stroke-dasharray</SampleCode>と<SampleCode type="css">stroke-dashoffset</SampleCode>を使用することを学んだ！
            <ul>
              <li><SampleCode type="css">stroke-dasharray</SampleCode>: 破線や間隔のある線のパターン</li>
              <li><SampleCode type="css">stroke-dashoffset</SampleCode>: 破線を描く際のオフセット値(何ピクセルずらしてスタートするか)</li>
            </ul>
            <ol>
              <li><SampleCode type="css">stroke-dasharray</SampleCode>で破線の長さ=パスの長さとする</li>
              <li><SampleCode type="css">stroke-dashoffset</SampleCode>で、パスの長さ分ずらすことで、なにも描かれていない状態を作り出す</li>
              <li>CSSなりGSAPで<SampleCode type="css">stroke-dashoffset</SampleCode>を0に近づけて行くことで、徐々にパスが描かれるように見える</li>
            </ol>
          </li>
        </ul>
        <SampleCode>
          <pre>
            const svgPath = targetLine.value as SVGGeometryElement
            const svgPathLength = Math.floor(svgPath.getTotalLength())
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: svgPath,
                // markers: true,
                scrub: true,
                start: "top+=100 top",
                end: "bottom bottom"
              }
            });
            tl.set(
              svgPath,
              {
                'stroke-width': '100px'
              }
            ).fromTo(
              svgPath,
              {
                'stroke-dasharray': svgPathLength,
                'stroke-dashoffset': svgPathLength,
              },
              {
                'stroke-dashoffset': '0'
              }
            );
          </pre>
        </SampleCode>
      </DescriptionCard>
    </article>

    <article>
      <DescriptionCard>
        <template #heading>
          まとめ
        </template>
        <ul>
          <li><strong>Vite</strong>: かんたん早い！</li>
          <li><strong>Vue 3 Composition API</strong>: 覚えたい！TypeScriptも合わせて学ぶぞ！という気持ち</li>
          <li><strong>GSAP</strong>: おもしろい！実務で使えるタイミング出てきたらいいなあ…！</li>
          <li><strong>Three.js</strong>: 奥が深い！シェーダーいじれたらホントに楽しそう！</li>
          <li><strong>SVG</strong>: パス描画ってこうやってやるんだ！</li>
        </ul>
        <p>
          色々ごった煮で気が向いた時にいじってみてたけど、まだまだ知らないこといっぱいだなああああとなりました。。これからも楽しみつつ学んで行く感じで行きたい気持ちです！
        </p>
        <p>
          このページは、<a href="https://adventar.org/calendars/7720" target="_blank">GMOペパボデザイナー Advent Calendar 2022</a>の19日目の投稿でした！
          他の方の投稿も面白いのでぜひぜひ見てみてください！！！
        </p>
      </DescriptionCard>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 100vw;
  overflow: hidden;
}
.lead {
  text-align: center;
  padding: 26rem 24px;
  color: #888;
}
</style>
