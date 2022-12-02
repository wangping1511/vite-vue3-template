<script setup lang="ts">
const appStore = useAppStore()
const {t} =useI18n()
</script>

<template>
  <div>
    <p>{{ appStore.count }}</p>
    <p>{{ t('name') }}</p>
    <button @click="appStore.inc">inc</button>
  </div>
</template>