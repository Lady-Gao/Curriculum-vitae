<template>
    <div id="flex">
        <father></father>
        <child></child>
    </div>
</template>

<script>
import  '../../../assets/js/swiper-4.3.3.min.css'
import father from "./father.vue";
import child from "./child.vue";
export default {
  components: {
    father,
    child
  }
};
</script>

<style lang="less">
#flex {
  position: absolute;
  width: 100%;
  height:100% ;
  ol {
    height: 60%;
    width: 50%;
    float: left;
    border: 1px solid #000;
    display: flex;
    overflow: hidden;
  }
  ol li {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
  .listUl {
    margin-left: 1%;
    float: left;
    width: 22%;
    height: 60%;
    flex-direction: column;
  }
  .listUl li {
    width: 100%;
  }
  .span {
    font-size: 20px;
    color: rgb(46, 44, 43);
    font-weight: bold;
  }
  .showCss span:nth-child(3) {
    color: #f00;
  }
  .showCss pre:nth-child(1) {
  }
  .textP {
    height: 30px;
  }
}
</style>