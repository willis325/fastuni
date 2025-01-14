<script setup lang="ts">
defineProps<{ desc: string }>();
</script>

<template>
  <view class="flex-col-center">
    <wd-img :width="180" :height="60" src="/static/logo-horizontal.svg" class="block" />
    <wd-text :text="desc" color="#64748b" class="text-base mt-4"></wd-text>
  </view>
</template>
