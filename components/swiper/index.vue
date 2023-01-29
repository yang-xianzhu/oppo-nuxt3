<template>
  <div class="swiper-wrapper" @mouseenter="enter" @mouseleave="autoMove">
    <!-- 轮播图列表 -->
    <ul class="swiper-content" :style="computedStyle">
      <li
        v-for="item in computedList"
        :style="{ position: 'relative', ...imgStyle }"
      >
        <NuxtLink :style="{ position: 'absolute', ...imgStyle }" :to="'/'" />
        <img :src="item.imgUrl" alt="" />
      </li>
    </ul>
    <!-- 小圆点 -->
    <ol class="dot">
      <li v-for="(_, idx) in list" @click="handleDot(idx)">
        <span :class="{ active: currentIdx === idx }"></span>
      </li>
    </ol>
    <!-- 切换箭头 -->
    <div class="swiper-button">
      <div @click="changeSwiper(-1)" class="swiper-button-left"></div>
      <div @click="changeSwiper(1)" class="swiper-button-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import { onBeforeUnmount } from "vue";
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

// 无缝轮播展示list
const computedList = computed(() => [list[list.length - 1], ...list, list[0]]);

// 当前轮播的索引
const currentIdx = ref<number>(0);
// 自动轮播定时器ID
const timer = ref<NodeJS.Timer | null>(null);
// 切换轮播定时器ID
const handleTimer = ref<NodeJS.Timer | null>(null);

// 是否需要动画
const isTrantion = ref<boolean>(true);

// 计算轮播图偏移量
const computedStyle = computed<CSSProperties>(() => ({
  ...imgStyle,
  transform: `translateX(-${currentIdx.value * 100}%)`,
  transition: isTrantion.value ? "transform 0.5s ease-in-out" : "none",
}));

function changeSwiper(number: number) {
  if (handleTimer.value) {
    return;
  }
  handleTimer.value = setTimeout(() => {
    handleTimer.value = null;
  }, 800);

  if (currentIdx.value + number >= list.length) {
    isTrantion.value = true;
    currentIdx.value = 0;
    setTimeout(() => {
      isTrantion.value = false;
    }, 0);
  } else if (currentIdx.value + number < 0) {
    currentIdx.value = computedList.value.length - 1;
    isTrantion.value = false;
    setTimeout(() => {
      isTrantion.value = true;
      currentIdx.value = list.length - 1;
    }, 0);
  } else {
    currentIdx.value += number;
    isTrantion.value = true;
  }
}

// 切换小圆点
function handleDot(idx: number) {
  isTrantion.value = true;
  currentIdx.value = idx;
}

// 鼠标移入
function enter() {
  clearInterval(timer.value as NodeJS.Timer);
}
// 鼠标移出
function autoMove() {
  // 正在轮播，如果再次移出轮播图，先清除上一次的定时器
  if (timer.value) {
    clearInterval(timer.value);
  }
  timer.value = setInterval(() => {
    changeSwiper(1);
  }, 3000);
}

// 开始轮播
autoMove();

// 页面卸载清除副作用
onBeforeUnmount(() => {
  // 清除副作用
  enter();
});
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  overflow: hidden;
  position: relative;
  &:hover .swiper-button-left,
  &:hover .swiper-button-right {
    opacity: 1;
  }
}

.swiper-content {
  display: flex;
  li {
    flex-shrink: 0;
    z-index: 1;
    img {
      width: inherit;
    }
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

.swiper-button {
  &-left,
  &-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba($color: #000000, $alpha: 0.1);
    border-radius: 50%;
    transition: background-color 0.4s ease, opacity 0.4s ease;
    opacity: 0;
    cursor: pointer;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.4);
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
    }
  }

  &-left {
    left: 30px;
    &::before {
      transform: translate(-36%, -50%) rotate(-45deg);
    }
  }

  &-right {
    right: 30px;
    &::before {
      transform: translate(-62%, -50%) rotate(135deg);
    }
  }
}
</style>
