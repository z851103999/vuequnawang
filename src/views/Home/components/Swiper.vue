<template>
  <div class="wrapper">
    <swiper :option="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id" >
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pageination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-pagination-bullet-active {
    background: #fff !important;
  }

  .swiper-img {
    width: 100%;
  }
}
</style>