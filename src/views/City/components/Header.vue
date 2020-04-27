<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe632;</div>
      </div>
    </router-link>选择城市
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #fff;
  background: $bgColor;
  text-align: center;
  font-size: 0.32rem;

  .header-left {
    color: #fff;
    top: 0;
    left: 0;
    font-size: 0.4rem;
    width: 0.64rem;
    position: absolute;
    text-align: center;
  }
}
</style>