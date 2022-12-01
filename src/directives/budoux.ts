import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

export const budouxDirective = {
  mounted: function(el: HTMLElement) {
    el.innerHTML = parser.translateHTMLString(el.innerHTML)
  }
}
