<script setup lang="ts">
const url = ref('');
const webviewStyles = reactive({
  progress: {
    color: '#15A4FF',
  },
});

onLoad((option) => {
  url.value = option?.url;
});
</script>

<template>
  <web-view :src="url" :webview-styles="webviewStyles"></web-view>
</template>
