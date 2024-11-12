<route lang="json5" type="home">
{
  style: { navigationBarTitleText: 'FastUni' },
}
</route>

<template>
  <view class="flex-col-middle-center">
    <text class="text-9 c-#8f8f94">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
</script>

<style></style>
