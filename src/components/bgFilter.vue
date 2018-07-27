<template>
    <div>
        <div class="bg" ref="bg"/>
         <!-- 导航 -->
        <div class="nav">
            <ul>
                <li router="/dhfsdhfkadjsd" @click="handleSelect">w</li>
                <li>w</li>
                <li>w</li>
            </ul>
      <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(255,255,255,0)"
            text-color="#fff"
            active-text-color="#ffd04b">
         <el-menu-item index="/">页面1</el-menu-item>
         <el-menu-item index="/home">页面2</el-menu-item>
         <el-menu-item index="/me">页面3</el-menu-item>
      </el-menu> -->
    </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "bgFilter",
  props: {
    url: ""
  },
  data() {
    return {
      activeIndex: "0" //选中导航条
    };
  },
  mounted() {
    //动态背景图片
    this.url&&(this.$refs.bg.style.backgroundImage = "url(" + this.url + ")")
    ;
  },
  methods: {
    /**
     * 导航点击事件跳转
     * @param String index 选中菜单项的 index值
     * @param Array indexpath 下拉选中菜单项的 indexpath值
     */
    handleSelect(e) {
      console.log(e)
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
background-color: rgba(245, 240, 240, 0.877);
  background-size: 100% 100%;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  z-index: 0;
}
.nav {
    position:absolute;
  top:0;
  right: 30px;
  z-index: 15;
  width:500px;
  ul{
      li{
          width:80px;
          height:50px;
          float: left;
          text-align: center;
          line-height: 50px;
          margin-right:20px;
          transition: all ease 1.5s;
           border-bottom: 1px solid rgba(252, 250, 250, 0)
      }
      li:hover{
          border-bottom: 1px solid #f40;

      }
  }
}
</style>