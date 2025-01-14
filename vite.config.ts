import { resolve } from 'path';
import { defineConfig } from 'vite';
import Uni from '@dcloudio/vite-plugin-uni';
import UniPages from '@uni-helper/vite-plugin-uni-pages';
import UniManifest from '@uni-helper/vite-plugin-uni-manifest';
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts';
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    UniPages({ dts: 'types/uni-pages.d.ts', exclude: ['**/components/**/**.*'], routeBlockLang: 'json5', subPackages: ['src/pages-sub'] }),
    UniManifest(),
    UniLayouts(),
    Components({ dirs: ['src/components'], extensions: ['vue'], deep: true, dts: 'types/components.d.ts', resolvers: [WotResolver()] }),
    AutoImport({
      imports: ['vue', 'uni-app', 'pinia', { 'wot-design-uni': ['useToast'] }],
      dirs: ['src/hooks', 'src/store'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: { enabled: true },
      vueTemplate: true,
      resolvers: [],
    }),
    Uni(),
    UnoCSS(),
    ViteRestart({ restart: ['vite.config.js'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
    hmr: true,
  },
  define: {
    __UNI_PLATFORM__: JSON.stringify(process.env.UNI_PLATFORM),
  },
  build: {
    target: 'es6',
    sourcemap: mode === 'development',
    minify: mode === 'development' ? false : 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
