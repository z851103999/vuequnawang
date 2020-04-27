<template>
  <div>
    <div class="search">
      <input type="text"
             v-model="keyword"
             class="search-input"
             placeholder="请输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="(city,index) in cityList"
            :key="index"
            @click="handleCityClick(item.name)">{{city}}
            
        </li>
        <li class="search-item border-bottom" v-show="hasCity">没有找到匹配资源</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapMutations} from 'vuex'

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        //关键字
        keyword: "",
        cityList: [],
        timer: null
      };
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed: {
      hasCity() {
        return !this.cityList.length
      }
    },
    watch: {
      keyword: function () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (!this.keyword) {
            this.cityList = []
            return null
          }
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              // console.log(value)
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value.name)
              }
            })
            this.cityList = result
          }
        }, 100)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)
    },

  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/varibles.scss";

  .search {
    height: 0.72rem;
    padding: 0 .1rem;
    background: $bgColor;

    .search-input {
      padding: 0 0.1rem;
      box-sizing: border-box;
      height: 0.62rem;
      line-height: 0.62rem;
      width: 100%;
      text-align: center;
      border-radius: 0.06rem;
    }
  }

  .search-content {
    overflow: hidden;
    background: #eee;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    z-index: 1;
    bottom: 0;

    .search-item {
      line-height: 0.63rem;
      padding-left: 0.2rem;
      color: #666;
      background: #fff;
    }
  }
</style>