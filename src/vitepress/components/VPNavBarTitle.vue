<template>
  <a class="VPNavBarTitle" href="/">
    <slot name="navbar-title">
      <img class="logo" width="24" height="24" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo"/>
      <span class="text">REST Data Validator</span>
    </slot>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
