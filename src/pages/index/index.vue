<route lang="json5" type="home">
{
  style: { navigationBarTitleText: 'FastUni' },
}
</route>

<template>
  <view class="flex-col-middle-center">
    <FastUni msg="hello FastUni" />
    <text class="text-9 c-#8f8f94">{{ title }}</text>
    <wd-button @click="showToast">主要按钮</wd-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');

const toast = useToast();

function showToast() {
  toast.show('Hello FastUni');
}
</script>

<style></style>
