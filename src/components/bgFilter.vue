<template>
    <div>
        <div class="bg" ref="bg"/>
         <!-- 导航 -->
        <div class="nav">
            <ul>
                <li  v-for="(item,index) in navArr" :key="index" @click="handleSelect(item.path)">{{item.name}}</li>
              
            </ul>
    </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: "bgFilter",
  props: {
    url: "",
    bgColor:{
      default:"rgba(223, 213, 213, 0.877)"
    },
    bgSize:{
      default:"90% 90%"
    }
  },
  data() {
    return {
      activeIndex: "0" ,//选中导航条,
      navArr:[
          {name:"Land",path:"/"},
          {name:"Home",path:"/home"},
          {name:"flex",path:"/dome/flex"},
      ]
    };
  },
  mounted() {
    //动态背景图片
    this.url&&(this.$refs.bg.style.backgroundImage = "url(" + this.url + ")")
    ;
    this.bgColor&&(this.$refs.bg.style.backgroundColor = this.bgColor)
    ;
    this.bgSize&&(this.$refs.bg.style.backgroundSize = this.bgSize)
    ;
  },
  methods: {
    /**
     * 导航点击事件跳转
     * @param String index 选中菜单项的 index值
     * @param Array indexpath 下拉选中菜单项的 indexpath值
     */
    handleSelect(path) {
     this.$router.push(path)
    }
  }
};
</script>

<style scoped lang="less">
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-image: url("../../assets/image/gaga.jpg");
  // background-size: 90% 95%;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
  // opacity: 0.8;
  z-index: 0;
}
.nav {
    position: fixed;;
  top:10px;
  right: 30px;
  z-index: 1;
  width:500px;
  
  color: antiquewhite;
  ul{
      li{
          width:80px;
          height:50px;
          float: left;
          text-align: center;
          line-height: 50px;
          margin-left:20px;
          transition: all ease 1.5s;
           border-bottom: 1px solid rgba(252, 250, 250, 0.473)
      }
      li:hover{
          border-bottom: 1px solid #f40;

      }
  }
}
</style>