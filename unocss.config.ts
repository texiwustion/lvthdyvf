// eslint-disable-next-line import/no-named-as-default
import presetWeapp from "unocss-preset-weapp";
import {
  transformerClass,
  extractorAttributify
} from "unocss-preset-weapp/transformer";
import { defineConfig, transformerDirectives } from "unocss";
const {
  presetWeappAttributify,
  transformerAttributify
} = extractorAttributify();
export default defineConfig({
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === "h5",
      platform: "taro",
      taroWebpack: "webpack5"
    }) as any,
    presetWeappAttributify() as any
  ],
  shortcuts: [
    {
      "border-base": "border border-gray-500/10",
      center: "flex justify-center items-center"
    }
  ],
  transformers: [
    transformerClass() as any,
    transformerDirectives({
      enforce: "pre"
    }),
    transformerAttributify()
  ],
  content: {
    pipeline: {
      include: [/\.([jt]sx|css)($|\?)/],
      exclude: []
    }
  }
});
