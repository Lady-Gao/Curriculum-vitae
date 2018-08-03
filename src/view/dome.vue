<template>
 <bgFilter bgColor="#fff">
<div class="domeShow">
  <ul class="domeList">
    <li v-for="(item,idx) in store.index.Dome" :key="idx" @click="domeGo(item)">{{item.name}}</li>
  </ul>
  <div>
  </div>
</div>
    </bgFilter>
</template>

<script>
export default {
    methods: {
        /**
     * 跳转dome页面
     */
    domeGo(item){
      this.$router.push(item.path)
    },
    
    },
};
</script>

<style scoped lang="less">
  .domeShow {
      position: relative;
      margin: 100px;
      z-index: 3;
    .domeList {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin: 20px;
        border-radius: 50%;
        text-align: center;
        background-color: rgb(255, 255, 255);
        transition: all ease 0.5s;
      }
      li:hover {
        transform: scale(1.3, 1.3);
        -ms-transform: scale(1.3, 1.3); /* IE 9 */
        -moz-transform: scale(1.3, 1.3); /* Firefox */
        -webkit-transform: scale(1.3, 1.3); /* Safari 和 Chrome */
        -o-transform: scale(1.3, 1.3);
        background-color: rgba(115, 240, 77, 0.5);
      }
    }
}
</style>