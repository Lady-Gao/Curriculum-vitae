<template>
    <div class="index">
      <bgFilter/>
<div v-drag-and-drop:options="store.index.options" class="drage">
    <h2>我的项目</h2>
  <ul>
    <!-- 每个版块里有图片和跳转的路径 -->
    <li v-for="item in imageArr" :key="item" @click="routerGo(item)">
      <img :src="item.url" >
        <h4>{{item.name}}</h4>
    </li>
    
  </ul>
  <!-- 分页 -->
   <pagination @checkPage="checkPage"/>
 
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imageArr: []
    };
  },

  created() {
    this.imageArr = this.store.index.imageUrl.slice(0, 10);
    console.log(this.store);
  },
  methods: {
    /**
     * 点击分页条上下一页
     * @newpage  当前页
     */
    checkPage(newpage) {
      this.imageArr = this.store.index.imageUrl.slice(
        (newpage - 1) * 10,
        10 * newpage
      );
    },
     /**
     * 跳转页面
     * @url  跳转的链接
     */
    routerGo(item){
     this.$router.push({name:item.router,path:item.gitpath})
    }
  }
};
</script>
<style scoped lang="less">
.index {
  color: aliceblue;
  .drage {
    position:absolute;
    top:5%;
    left: 10%;
    width:80%;
    height:60%;
    z-index: 2;
    h2{
      margin: 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      li {
        justify-content: space-around;
        margin: 20px;
        text-align: center;
        img {
          border-radius: 30%;
        }
      }
    }
  }
}
</style>