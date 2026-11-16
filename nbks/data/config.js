import { defaultConfig } from "scoringthespeltair";

const heightVw = 50;
const lineHeight = 2.8;
const linesPer = Math.floor(heightVw / lineHeight);
const config = {
  ...defaultConfig,
  startPara: 0,
  fontWeight: 300, // the weight custom.tmpl sets on #field (defaultConfig's 400 is not what the page shows)
  paraFadeWords: undefined, // undefined, or an array with interger for each para
  // cosmetic
  // "rColumn": 33,
  // lineHeight: lineHeight,
  // this is 9/16 of 1080:
  // heightVw: heightVw,
  // linesPer: linesPer,
  // viewPortPx: 956,
}
export { config };