import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet';
import { presetLegacyCompat } from '@unocss/preset-legacy-compat';

const presets = process.env?.UNI_PLATFORM?.startsWith('mp') ? [presetApplet(), presetRemRpx()] : [presetUno()];

export default defineConfig({
  theme: {
    colors: {},
  },
  shortcuts: {
    'flex-row-middle': 'flex flex-row items-center',
    'flex-row-between': 'flex flex-row items-center justify-between',
    'flex-row-center': 'flex flex-row items-center justify-center',
    'flex-col-middle': 'flex flex-col justify-center',
    'flex-col-center': 'flex flex-col items-center justify-center',
    'b-base': 'b-1 b-solid b-white',
  },
  presets: [...presets, presetLegacyCompat({ commaStyleColorFunction: true })],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributify({ prefixedOnly: true, prefix: 'uni' })],
  rules: [
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
});
