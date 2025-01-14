<route lang="json5" type="home">
{
  style: { navigationBarTitleText: 'FastUni', navigationStyle: 'custom' },
}
</route>

<template>
  <view class="flex-col-center h-100vh">
    <FastUni desc="快速开发 uni-app 模板框架" />
    <view class="mt-16">
      <wd-button icon="github-filled" plain @click="goWebView('https://github.com/willis325/fastuni')">Github</wd-button>
      <wd-button @click="goWebView('https://willis325.github.io/fastuni/')" class="ml-6">快速开始 →</wd-button>
    </view>
    <wd-button @click="go">登录</wd-button>
  </view>
</template>

<script setup lang="ts">
import { Util } from '@/utils';

const toast = useToast();

function showToast() {
  toast.show('Hello FastUni');
}

function goWebView(url: string) {
  if (__UNI_PLATFORM__ === 'h5') {
    window.open(url, '_blank');
  } else {
    Util.goWebview(url);
  }
}

function go() {
  uni.navigateTo({ url: '/pages-sub/auth/login' });
}
</script>

<style></style>
