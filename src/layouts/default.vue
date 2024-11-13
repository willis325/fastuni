<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni';

const themeVars: ConfigProviderThemeVars = {
  colorTheme: '#3985ff',
};
</script>

<template>
  <wd-config-provider :themeVars="themeVars">
    <slot />
    <wd-toast />
    <wd-notify />
    <wd-message-box />
  </wd-config-provider>
</template>
