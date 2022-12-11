<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FirstView from './components/FirstView.vue'
import SvgAnim from './components/SvgAnim.vue'
import Background from './components/Background.vue'
import SampleCode from './components/SampleCode.vue'
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
        アニメーションまわりとか最近のやりかた試したことなかったので独習してみました！
      </p>
      <p v-budoux>
        コテコテになってしまっていますが、練習ということで…！
      </p>
    </div>
    <DescriptionCard>
      <template #heading>
        Viteを使ってみた
      </template>
      <ul>
        <li v-budoux>想像以上にかんたんに環境が作れてびっくり！</li>
        <li v-budoux>ほんとにGetting startedのコマンド3つくらい叩いたらできた</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard>
      <template #heading>
        Vue3 Composition API を利用してみた
      </template>
      <ul>
        <li v-budoux>まだoptionの記法に慣れているので、違和感がある…</li>
        <li v-budoux>これに慣れてきたらReactとかのコード読み解きもラクになる予感がするので頑張りたいとこ</li>
      </ul>
      <SampleCode type="javascript">
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
        Gsapを利用してみた
      </template>
      <ul>
        <li v-budoux>gsapとそのプラグインScrollTriggerを用いて作成</li>
        <li v-budoux>scrubでスクロール位置に合わせてアニメーションが動くのだけど、それがめちゃ面白い！</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard start-x="-200">
      スライドインさせてみたり
      <SampleCode type="javascript">
        <pre>
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        </pre>
      </SampleCode>
    </DescriptionCard>
    <DescriptionCard v-blur>
      上端下端でウィンドウに入る時にぼかしてみたり
      <SampleCode type="javascript">
        <pre>
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        </pre>
      </SampleCode>
    </DescriptionCard>
    <DescriptionCard>
      背景を埋めてみたり
      <SampleCode type="javascript">
        <pre>
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "body",
              // markers: true,
              scrub: true,
              start: "center center",
              end: "bottom center"
            }
          });
          tl.fromTo(
            box.value,
            {'width': '150vmax'},
            {'width': '300vmax'},
          );
        </pre>
      </SampleCode>
    </DescriptionCard>
    <Background />



    <DescriptionCard>
      <template #heading>
        最初のアニメーション
      </template>
      <video autoplay loop muted>
        <source src="./assets/first-view.mov">
      </video>
      <ul>
        <li v-budoux>gsap.timeline関数を使用した</li>
        <li v-budoux>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard>
      <template #heading>
        Three.jsを使って背景を作成した
      </template>
      <ul>
        <li v-budoux>シェーダーをどうしても自分で作成してみたくて、色々思考錯誤した</li>
        <li v-budoux>本当はWebGL直接いじる感じでやろうと思ってたけど、カスタムシェーダーの勉強のために他の箇所はThree.jsにおまかせした感じになった。</li>
        <li v-budoux>GLSLまじでむずいけど、覚えたら絶対楽しいのがわかった</li>
        <li v-budoux>行列とベクトルをちゃんと勉強したい気持ちになりまくっている…！！！</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard>
      <template #heading>
        カスタムディレクティブを作成した
      </template>
      <ul>
        <li v-budoux>カスタムディレクティブを定義する練習</li>
        <li v-budoux>scrollのstartとendまわりの定義の仕方、fromTo()とのかけ合わせ方が混乱してしまったが、何とかできた！</li>
        <li v-budoux>このカスタムコンポーネントには作成した `v-blur` ディレクティブを指定しているので、上端下端でぼかされるはず</li>
      </ul>

      <SampleCode type="javascript">
        <pre>
          const blurDirective = {
            mounted: function(el: HTMLElement) {
              gsap.to(
                el,
                {
                  'filter': 'blur(10px)',
                  scrollTrigger: {
                    trigger: el,
                    // markers: true,
                    scrub: true,
                    start: "bottom 20%",
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
                    end: "top bottom-=40%"
                  }
                }
              )
            }
          }
          const main = createApp(App)
          main.directive('blur', blurDirective)
          main.mount('#app')
        </pre>
      </SampleCode>
    </DescriptionCard>
    <SideScroller>
      <DescriptionCard>
        <template #heading>
          最初のアニメーション
        </template>
        <video autoplay loop muted>
          <source src="./assets/first-view.mov">
        </video>
        <ul>
          <li v-budoux>gsap.timeline関数を使用した</li>
          <li v-budoux>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
        </ul>
      </DescriptionCard>
      <DescriptionCard>
        <template #heading>
          最初のアニメーション
        </template>
        <video autoplay loop muted>
          <source src="./assets/first-view.mov">
        </video>
        <ul>
          <li v-budoux>gsap.timeline関数を使用した</li>
          <li v-budoux>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
        </ul>
      </DescriptionCard>
      <SampleCode type="javascript">
        <pre>
          const blurDirective = {
            mounted: function(el: HTMLElement) {
              gsap.to(
                el,
                {
                  'filter': 'blur(10px)',
                  scrollTrigger: {
                    trigger: el,
                    // markers: true,
                    scrub: true,
                    start: "bottom 20%",
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
                    end: "top bottom-=40%"
                  }
                }
              )
            }
          }
          const main = createApp(App)
          main.directive('blur', blurDirective)
          main.mount('#app')
        </pre>
      </SampleCode>
      <p v-budoux style="color:white;width: 240px">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </p>
    </SideScroller>

    <SvgAnim />
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
