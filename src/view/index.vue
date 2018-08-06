<template>
      <bgFilter bgColor="#fff">
    <div class="index">

<div  class="drage">
  <div class="resful">
  </div>
    <div class="content">
      <ul>
        <!-- 每个版块里有图片和跳转的路径 -->
        <li v-for="(item,index) in imageArr" :key="index" @click="routerGo(item)">
          <img :src="item.url" >
            <h4>{{item.name}}</h4>
        </li>
        
      </ul>
    </div>
  <!-- 分页 -->
   <pagination @checkPage="checkPage"/>
 
    </div>
    </div>
    </bgFilter>
</template>
<script>
// 引入背景图
export default {
  data() {
    return {
      imageArr: []
    };
  },

  created() {
    this.imageArr = this.store.index.imageUrl.slice(0, 10);
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
     * 跳转git页面
     */
    routerGo(item) {
      console.log(item.router);
      this.$router.push({ name: item.router, params: item });
    },
    
  }
};
</script>
<style scoped lang="less">

.index {
  position: relative;
  box-sizing: border-box;
  padding:80px;
  .drage {
    .content {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 150px;
          height: 150px;
          border-radius: 30%;
        }

        li {
          position: relative;
          margin-bottom: 20px;
          margin: 30px;
          
          text-align: center;
          img {
            transition: all ease 0.5s;
            border-radius: 30%;
            padding:15px;
            margin-bottom: 20px;
            width: 120px;
            height: 120px;
          }
        }
        li:hover:before {
          transform: scale(1.3, 1.3);
          -ms-transform: scale(1.3, 1.3); /* IE 9 */
          -moz-transform: scale(1.3, 1.3); /* Firefox */
          -webkit-transform: scale(1.3, 1.3); /* Safari 和 Chrome */
          -o-transform: scale(1.3, 1.3);
          background-color: rgba(115, 240, 77, 0.5);
        }
        li:hover img {
          cursor: pointer;
          transform: scale(1.15, 1.15);
          -ms-transform: scale(1.15, 1.15); /* IE 9 */
          -moz-transform: scale(1.15, 1.15); /* Firefox */
          -webkit-transform: scale(1.15, 1.15); /* Safari 和 Chrome */
          -o-transform: scale(1.15, 1.15);
        }
        li:hover h4 {
          color:rgba(115, 240, 77, 0.5);
        }
      }
    }
  }
}
</style>