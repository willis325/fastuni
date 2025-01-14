<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni';

const themeVars: ConfigProviderThemeVars = {};
</script>

<template>
  <wd-config-provider :themeVars="themeVars">
    <slot />
    <wd-toast />
    <wd-notify />
    <wd-message-box />
    <wd-watermark content="FastUni - willis" :width="130" :height="130" :opacity="0.3"></wd-watermark>
  </wd-config-provider>
</template>
