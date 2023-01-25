<template>
  <div>{{ title }}</div>
</template>

<script lang="ts" setup>
const { title } = defineProps<{ title: string }>();
</script>

<style lang="scss" scoped>
div {
  font-size: 24px;
  font-weight: 500;
  color: #000;
}
</style>
