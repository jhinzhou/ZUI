<template>
  <div id="app">
    <header class="z-bar">
      <h1>z-ui</h1>
    </header>
    <section class="z-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
}

body {
  background-color: #fff;
  margin: 0;
  overflow: hidden;
}

.z-bar {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  height: 44px;
  line-height: 24px;
  text-align: center;
  background-color: #edf0f4;
  box-shadow: 0 2px 1px #e9eaea;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}
.z-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
