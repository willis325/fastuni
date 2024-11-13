import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import 'virtual:uno.css';
import '@/styles/theme.scss';
import App from './App.vue';
import { navigateInterceptor, requestInterceptor } from './interceptors';

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();

  pinia.use(
    createPersistedState({
      storage: {
        getItem: uni.getStorageSync,
        setItem: uni.setStorageSync,
      },
    }),
  );

  app.use(pinia);
  app.use(requestInterceptor);
  app.use(navigateInterceptor);

  return {
    app,
  };
}
