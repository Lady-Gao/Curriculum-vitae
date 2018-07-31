<template>
      <bgFilter bgColor="rgba(0, 150, 136, 0.47)">
    <div class="index">
<div class="domeShow">
  <h2>Dome</h2>
  <ul class="domeList">
    <li v-for="(item,idx) in store.index.Dome" :key="idx" @click="domeGo(item)">{{item.name}}</li>
  </ul>
</div>
<div v-drag-and-drop:options="store.index.options" class="drage">
  <div class="resful">
  </div>
    <div class="content">
      <h2>我的项目</h2>
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
import img from "../../assets/image/timg.jpg";
export default {
  data() {
    return {
      imageArr: []
    };
  },

  created() {
    this.imageArr = this.store.index.imageUrl.slice(0, 10);
    this.img = img;
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
     /**
     * 跳转dome页面
     */
    domeGo(item){
      this.$router.push(item.path)
    }
  }
};
</script>
<style scoped lang="less">
 h2 {
        padding: 20px;
      }
.index {
  position: relative;
  box-sizing: border-box;
  
  .domeShow {
    .domeList {
    margin:100px;
      height: 100%;
    display: flex;
    flex-wrap: wrap;
      li {
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin: 20px;
        border-radius: 50%;
        text-align: center;
        background-color: aqua;
      }
    }
  }
  .drage {
    .content {
      ul {
        display: flex;
        flex-wrap: wrap;
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
          justify-content: space-between;
          text-align: center;
          img {
            transition: all ease 0.5s;
            border-radius: 30%;
            margin-bottom: 20px;
            width: 150px;
            height: 150px;
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
          color: aqua;
        }
      }
    }
  }
}
</style>