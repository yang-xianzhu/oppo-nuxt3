<template>
  <div :style="style" class="tabs-container">
    <div class="current-slider" :style="sliderStyle"></div>
    <ul class="tabs">
      <li
        v-for="(item, idx) in list"
        :key="item.id"
        ref="refList"
        @click="handleItem(idx, item.productDetailss, $event)"
        :class="['no-select', { active: idx === currentSliderIdx }]"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { CSSProperties } from "vue";
import type { ProductDetailss } from "@/api/detail/type";
export interface IList {
  text: string;
  id: number | string;
  productDetailss: ProductDetailss[];
}
export interface IProps {
  style: CSSProperties;
  list: IList[];
}

const emit = defineEmits(["change"]);
const { style, list } = defineProps<IProps>();

const refList = ref<HTMLHtmlElement[] | null>(null);
const currentSliderIdx = ref<number>(0);

const sliderStyle = computed<CSSProperties>(() => {
  if (refList.value) {
    return {
      width:
        (refList!.value as HTMLHtmlElement[])[currentSliderIdx.value]
          .clientWidth -
        32 +
        "px",
      left: refList.value[currentSliderIdx.value].offsetLeft + 16 + "px",
    };
  } else {
    return {
      width: 0,
      left: 0,
    };
  }
});

function handleItem(
  idx: number,
  productDetailss: ProductDetailss[],
  event: MouseEvent
) {
  // 记录当前tabs
  currentSliderIdx.value = idx;
  // 当前tabs的list
  emit("change", productDetailss);
  // 添加点击产生波浪效果
  ware(idx, event);
}

function ware(idx: number, e: MouseEvent) {
  const currentLi = refList.value![idx];
  if (currentLi.childNodes.length > 4) {
    return;
  }
  const span = document.createElement("span");
  span.classList.add("ware");
  span.style.cssText = `
  position: absolute;
  left:${e.offsetX}px;
  top:${e.offsetY}px;
  transform: translate(-50%, -50%);
  width:${currentLi.clientWidth * 3}px;
  height:${currentLi.clientHeight * 3}px;
  background-image: radial-gradient(circle,var(--app-tabs-ware-depp-color), var(--app-tabs-ware-color));
  border-radius: 50%;
  z-index:3
  `;

  span.animate(
    [
      // keyframes
      {
        width: "0px",
        height: "0px",
        opacity: 1,
      },
      {
        width: "400px",
        height: "400px",
        opacity: 0,
      },
    ],
    {
      // timing options
      duration: 800,
      iterations: 1,
    }
  );

  currentLi.append(span);

  setTimeout(() => {
    span.remove();
  }, 800);
}

onMounted(() => {
  currentSliderIdx.value = 0;
  // 初始化
  emit("change", list[0].productDetailss);
});
</script>

<style lang="scss" scoped>
.tabs-container {
  position: relative;
  height: 48px;
  line-height: 48px;
}

.current-slider {
  position: absolute;
  bottom: 0;
  height: 2px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  background: $tabs-color;
}

.tabs {
  display: flex;

  li {
    overflow: hidden;
    position: relative;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    &.active {
      color: $tabs-color;
    }
  }
}
</style>
