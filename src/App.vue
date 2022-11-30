<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FirstView from './components/FirstView.vue'
import SvgAnim from './components/SvgAnim.vue'
import Background from './components/Background.vue'
import SampleCode from './components/SampleCode.vue'
import DescriptionCard from './components/DescriptionCard.vue';
import SideScroller from './components/SideScroller.vue';

</script>

<template>
  <main ref="sandbox">
    <FirstView />
    <div class="lead">
      <p>
        アニメーションまわりとか最近のやりかた試したことなかったので独習してみました！
      </p>
      <p>
        コテコテになってしまっていますが、練習ということで…！
      </p>
    </div>
    <DescriptionCard>
      <template #heading>
        Viteを使ってみた
      </template>
      <ul>
        <li>想像以上にかんたんに環境が作れてびっくり！</li>
        <li>ほんとにGetting startedのコマンド3つくらい叩いたらできた</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard>
      <template #heading>
        Vue3 Composition API を利用してみた
      </template>
      <ul>
        <li>まだoptionの記法に慣れているので、違和感がある…</li>
        <li>これに慣れてきたらReactとかのコード読み解きもラクになる予感がするので頑張りたいとこ</li>
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
        <li>gsapとそのプラグインScrollTriggerを用いて作成</li>
        <li>scrubでスクロール位置に合わせてアニメーションが動くのだけど、それがめちゃ面白い！</li>
      </ul>
    </DescriptionCard>
    <Background />
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
      <template #heading>
        最初のアニメーション
      </template>
      <video autoplay loop muted>
        <source src="./assets/first-view.mov">
      </video>
      <ul>
        <li>gsap.timeline関数を使用した</li>
        <li>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
      </ul>
    </DescriptionCard>

    <DescriptionCard v-blur>
      <template #heading>
        viewportの上端下端でぼかすカスタムディレクティブを作成した
      </template>
      <ul>
        <li>カスタムディレクティブを定義する練習</li>
        <li>scrollのstartとendまわりの定義の仕方、fromTo()とのかけ合わせ方が混乱してしまったが、何とかできた！</li>
        <li>このカスタムコンポーネントには作成した `v-blur` ディレクティブを指定しているので、上端下端でぼかされるはず</li>
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
          <li>gsap.timeline関数を使用した</li>
          <li>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
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
          <li>gsap.timeline関数を使用した</li>
          <li>staggerというオプションをつけることで、アニメーション対象の要素たちを指定した時間分ずらして順次実行できる</li>
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
      <p style="color:white;width: 240px">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </p>
    </SideScroller>
    <SvgAnim />

  </main>
</template>

<style scoped lang="scss">
main {
  overflow: hidden;
}
.lead {
  text-align: center;
  padding: 26rem 24px;
  color: #888;
  mix-blend-mode: exclusion;
}
</style>
