<template>
  <div class="banner">
    <div class="banner">
      <img
        v-show="!showGallary"
        @click="handleImgClick" 
        src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">故宫(AAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6bc;</span>39
        </div>
      </div>
    </div>
    <common-gallary @close="HandleCLose" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary";
export default {
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_r_800x800_83a5fe3a.jpg",
        "http://img1.qunarzz.com/sight/p0/1510/ca/ca60a080020329ef90.img.jpg_350x240_9ff2208e.jpg",
        "http://img1.qunarzz.com/sight/p0/1510/cc/ccafbdaac21bdbf790.img.jpg_350x240_c35f8451.jpg"
      ],
      showGallary: false
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    handleImgClick() {
      this.showGallary = true;
    },
    HandleCLose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="scss" scoped >
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;

    display: flex;
    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }
    .banner-number {
      margin: 0.14rem;
      padding: 0 0.3rem;
      line-height: 0.4rem;
      height: 0.32rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      .banner-icon {
        font-size: 0.24rem;
        padding: 0.02rem;
      }
    }
  }
}
</style>