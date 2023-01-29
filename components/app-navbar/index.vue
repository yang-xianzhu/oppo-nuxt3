<template>
  <nav>
    <div class="w">
      <h1 class="logo">
        <NuxtLink to="/">
          <img src="@/assets/images/logo.png" alt="OPPO商城" />
        </NuxtLink>
      </h1>
      <ul class="navbar">
        <li
          v-for="item in navbars"
          :key="item.id"
          @click="handlePage(item.type as THomeData)"
          :class="{
            active:
              item.type === 'oppo' ? '/' : '/' + item.type === currentPath,
          }"
        >
          <NuxtLink :to="item.type === 'oppo' ? '/' : item.type">
            {{ item.title }}</NuxtLink
          >
        </li>
      </ul>
      <div class="nav-search">
        <input
          placeholder="Find N2 系列"
          class="text-truncate"
          type="text"
          name=""
          id=""
        />
        <img src="@/assets/images/search.svg" alt="" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/store";
import type { THomeData } from "@/api/home/type";
const navbars = useHomeStore().homeInfo.navbars;
const route = useRoute();
const currentPath = ref<THomeData>("/" as THomeData);
watch(
  () => route.fullPath,
  (path) => {
    currentPath.value = path as THomeData;
  }
);
//切换路由
const store = useHomeStore();
function handlePage(type: THomeData) {
  store.fetchHomeData(type);
}
</script>

<style lang="scss" scoped>
nav {
  height: 84px;
  line-height: 84px;
  background-color: var(--app-navbar-background-color);
  transition: background-color 0.4s ease;
  @include borderBottom(var(--app-navbar-border-color), 1px);
}

.w {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo {
  overflow: hidden;
  width: 250px;
  height: 50px;

  a {
    display: block;
    height: inherit;
    img {
      height: inherit;
      background-position: left center;
    }
  }
}

.navbar {
  display: flex;
  margin-left: 60px;
  li {
    color: var(--app-navbar-color);
    opacity: 0.55;
    transition: all 0.4s ease;
    cursor: pointer;
    &.active {
      opacity: 0.88;
    }
    &:hover {
      opacity: 1;
    }
    &:nth-child(n + 2) {
      margin-left: 60px;
    }
  }
}

.nav-search {
  overflow: hidden;
  border-radius: 18px;
  margin-left: 60px;
  height: 36px;
  width: 160px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
  background-color: #f6f6f6;
  background-color: hsla(0, 0%, 93.3%, 0.5);
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-style: none;
    outline: none;
    &::placeholder {
      color: #dadada;
    }
  }
  img {
    height: 14px;
    width: 14px;
  }
}
</style>
