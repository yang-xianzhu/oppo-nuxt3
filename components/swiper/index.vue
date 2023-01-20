<template>
  <div class="swiper-wrapper">
    <ul class="swiper-content" :style="imgStyle">
      <li :style="imgStyle">
        <img :src="list[currentIdx].imgUrl" alt="" :style="imgStyle" />
      </li>
    </ul>

    <ol class="dot">
      <li v-for="(_, idx) in list" @click="handleDot(idx)">
        <span :class="{ active: currentIdx === idx }"></span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";

export interface IList {
  imgUrl: string;
  href?: string;
}

export interface IProps {
  list: IList[];
  imgStyle?: CSSProperties;
}

const {
  list,
  imgStyle = {
    height: "480px",
    width: "100%",
  },
} = withDefaults(defineProps<IProps>(), {});

const currentIdx = ref<number>(0);

function handleDot(idx: number) {
  currentIdx.value = idx;
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  position: relative;
}

.swiper-content {
  position: relative;
  display: flex;
  li {
    position: absolute;
    left: 0;
    flex-shrink: 0;
    z-index: 1;
  }
}

.dot {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  z-index: 2;
  li {
    display: flex;
    justify-content: center;
    height: 16px;
    width: 24px;
    cursor: pointer;
    span {
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: #fff;
      &.active {
        background: #2d6a38;
      }
    }
    &:nth-child(n + 2) {
      margin-left: 12px;
    }
  }
}
</style>
