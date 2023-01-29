<template>
  <div class="layout">
    <!-- 头部 -->
    <div class="fixed-header">
      <AppHeader />
      <AppNavbar />
    </div>
    <!-- navbar -->
    <div style="padding-top: 120px">
      <slot></slot>
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
}
</style>
