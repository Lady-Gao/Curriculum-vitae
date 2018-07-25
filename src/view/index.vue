<template>
    <div class="index">
<div v-drag-and-drop:options="store.index.options">
  <ul>
    <li v-for="item in imageArr" :key="item">
      <img :src="item" >
    </li>
    
  </ul>
 
    </div>
    <el-pagination  background  layout="prev, pager, next"  :total="30" @next-click="checkPage" @prev-click="checkPage" @current-change="checkPage"></el-pagination>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imageArr:[]
    }
  },

  created() {
    this.imageArr=this.store.index.imageUrl.slice(0,10)
    console.log(this.store);
  },
  methods: {
    /**
     * 点击分页条上下一页
     * @newpage  当前页
     */
    checkPage(newpage) {
      this.imageArr=this.store.index.imageUrl.slice((newpage-1)*10,10*newpage)
    },
    
  }
};
</script>
<style scoped lang="less">
.index {
  
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      justify-content:space-around;
      margin:10px;
      img{
        border-radius: 30%;
      }
    }
  }
}
</style>