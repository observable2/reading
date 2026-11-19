import { defaultConfig } from "scoringthespeltair";

const heightVw = 50;
const lineHeight = 2.8;
const linesPer = Math.floor(heightVw / lineHeight);
const config = {
  ...defaultConfig,
  startPara: 0,
  // the weight custom.tmpl sets on #field (not defaultConfig's 400)
  fontWeight: 300,
  // undefined, or an array with one fadeWords value per paragraph
  paraFadeWords: undefined,
  // cosmetic
  // "rColumn": 33,
  // lineHeight: lineHeight,
  // 9/16 of 1080:
  // heightVw: heightVw,
  // linesPer: linesPer,
  // viewPortPx: 956,
}
export { config };