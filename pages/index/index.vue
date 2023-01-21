<template>
  <div
    style="
      background-color: var(--app-page-background-color);
      padding-top: 36px;
    "
  >
    <div class="w">
      <!-- 轮播图部分 -->
      <swiper :list="banners" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store";
const banners = useHomeStore().homeInfo?.banners?.map((v) => ({
  imgUrl: v.picStr,
  href: v.link,
}));
</script>
