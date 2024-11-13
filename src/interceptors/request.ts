import { useUserStore } from '@/store/user';
import type { RequestOptions } from '@/types/request';

const interceptor = {
  invoke(options: RequestOptions) {
    const userStore = useUserStore();

    options.timeout = 10000;
    options.header = { platform: __UNI_PLATFORM__, ...options.header };
    if (userStore.token) options.header.Authorization = `Bearer ${userStore.token}`;
  },
};

export const requestInterceptor = {
  install() {
    uni.addInterceptor('request', interceptor);
    uni.addInterceptor('uploadFile', interceptor);
  },
};
