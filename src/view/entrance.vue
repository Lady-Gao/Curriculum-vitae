<template>
    <bgFilter  :url="url" >
  <div class="entrance">
    <ul class="land">
      <li>
        <img src="../../assets/image/navImg.png" alt="photo" id="headeImg">
      </li>
      <li>
        <el-input placeholder="name" v-model="name"></el-input>
      </li>
      <li>
        <el-input placeholder="e-mail address" v-model="email"></el-input>
      </li>
      <li>
        <el-input placeholder="password" v-model="password"></el-input>
      </li>
     <li>
       <el-button type="info" round > Get Up </el-button>
     </li>
    </ul>
  
  </div>
  </bgFilter>
</template>

<script>
import url from '../../assets/image/gaga.jpg';
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      url:""
    };
  },
created(){
  this.url=url
}
};
</script>

<style lang="less">
.entrance {
  height: 100%;
  text-align: center;
  background-color: #000;
  .land {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
     
    transform: translate(-50%, -50%);
    li {
      margin: 20px;
      text-align: center;
      #headeImg {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      input {
        border-radius: 20px;
        opacity: 0.7;
      }
    }
  }
}
</style>
