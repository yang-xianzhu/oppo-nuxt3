<template>
  <nav>
    <div class="w">
      <h1 class="logo">
        <NuxtLink to="/">
          <img src="@/assets/images/logo.png" alt="OPPO商城" />
        </NuxtLink>
      </h1>
      <ul class="navbar">
        <li v-for="item in navbars" :key="item.id">
          <NuxtLink :to="item.link"> {{ item.title }} </NuxtLink>
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
const navbars = useHomeStore().homeInfo.navbars;
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
    &:nth-child(n + 2) {
      margin-left: 60px;
    }
  }
  a {
    color: var(--app-navbar-color);
    opacity: 0.55;
    transition: all 0.4s ease;
    &:hover {
      opacity: 1;
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
