<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,key) in pages" :key="key">
      <div class="icons">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {}
    };
  },
  props: {
    iconList: Array
  },
  computed: {
    pages(){
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index / 8);
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(this.iconList[index])
      });
      return pages
    }
  }
};
</script>
<style lang="scss" scoped>
  @import '@/assets/styles/varibles.scss';
  .icons{
    height: 0;
    width: 100%;
    padding-bottom: 50%;
    overflow: hidden;

    .icon{
      position: relative;
      overflow: hidden;
      float: left;
      height: 0;
      width: 25%;
      padding-bottom: 25%;

      .icon-img{
        position: absolute;
        top: 0;
        box-sizing: border-box;
        padding:0.1rem;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        .icon-img-content{
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }

      .icon-desc{
        position: absolute;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        left: 0;
        right: 0;
        color: $bgColor;
        text-align: center;
        @include ellipsis
      }
    }
  }
</style>