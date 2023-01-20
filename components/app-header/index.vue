<template>
  <header>
    <div class="w app-header">
      <div class="left">
        <NuxtLink to="/" style="margin-right: 14px">oppo官网</NuxtLink>
        <NuxtLink to="/">一加官网</NuxtLink>
      </div>
      <ul class="right">
        <li>
          <NuxtLink to="/">下载 OPPO 商城 App</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">登录</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">注册</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">购物车(0)</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  color: var(--app-header-color);
  height: 36px;
  background: var(--app-header-background-color);
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
}

.app-header a {
  color: inherit;
  font-size: 12px;
}

.left a {
  color: #eee;
}

.right {
  display: flex;
  align-items: center;
  > li {
    &:nth-child(n + 2) {
      position: relative;
      margin-left: 24px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -12px;
        transform: translateY(-50%);
        width: 1px;
        height: 12px;
        background: var(--app-header-color);
      }
    }
  }
}
</style>
