<template>
    <div>
        <div class="bg" ref="bg"/>
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name:"bgFilter",
        props:{
            url:{
                default:"https://goss3.vcg.com/creative/vcg/800/version23/VCG21gic19943940.jpg"
            }
        },
        mounted () {
            //动态背景图片
                   this.$refs.bg.style.backgroundImage ='url('+this.url+')';
        }
    }
</script>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-size: 100% 100%;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    z-index: 0;
  }
</style>