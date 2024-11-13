import { useUserStore } from '@/store/user';

const interceptor = {
  invoke({ url }: { url: string }) {
    const userStore = useUserStore();
    if (!userStore.token) {
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
