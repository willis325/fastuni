import { useUserStore } from '@/store/user';

const NoLoginRequiredPages = ['/pages-sub/auth/login', '/pages-sub/other/webview'];

const interceptor = {
  invoke({ url }: { url: string }) {
    const userStore = useUserStore();
    if (!userStore.token && !NoLoginRequiredPages.find((v) => url.includes(v))) {
      uni.navigateTo({ url: `/pages/auth/index?redirect=${encodeURIComponent(url)}` });
      return false;
    }
    return true;
  },
};

export const navigateInterceptor = {
  install() {
    uni.addInterceptor('navigateTo', interceptor);
    uni.addInterceptor('redirectTo', interceptor);
    uni.addInterceptor('reLaunch', interceptor);
  },
};
