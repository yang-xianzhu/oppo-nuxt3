<template>
  <div
    style="
      background-color: var(--app-page-background-color);
      padding: 36px 0 80px 0;
    "
  >
    <div class="w">
      <!-- 轮播图部分 -->
      <swiper :list="banners" />
      <!-- 导航nav部分 -->
      <Nav :list="categorys" />
      <!-- 楼层部分 -->
      <Floor :list="categorys" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from "@/store";
import Nav from "@/components/Nav/index.vue";
import Floor from "@/components/Floor/index.vue";

// 轮播图列表
const banners = useHomeStore().homeInfo?.banners?.map((v) => ({
  imgUrl: v.picStr,
  href: v.link,
}));

// nav列表
const categorys = useHomeStore().homeInfo?.categorys;
</script>
