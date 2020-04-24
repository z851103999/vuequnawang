<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :hotList="hotList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/views/Home/components/HomeHeader";
import HomeSwiper from "@/views/Home/components/Swiper";
import HomeIcons from "@/views/Home/components/Icons";
import HomeRecommend from '@/views/Home/components/Recommend';
import HomeWeekend from '@/views/Home/components/Weekend.vue';
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      lastCity: [],
      hotList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("http://rap2.taobao.org:38080/app/mock/233924/index")
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.topIcon = data.IconList
        this.weekendList = data.weekendList;
        this.hotList = data.hotList
      }
    }
  },
  // 渲染完成对页面进行改动
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  activated() {
    // 更改城市重新获取
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>
