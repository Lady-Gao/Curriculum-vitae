<template>
    <div class="qrcode">
        <!-- 二维码生成方法一 -->
        <qrcode-vue :value="url" :size="100" level="H"></qrcode-vue>
        <!-- 二维码生成方法二 
         <img :src="src"  /> -->
        <p><span @click="toPath">点击进入...</span></p>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
    export default {
        name:"qrCode",
        props:{
            url:{
                default:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/Lady-Gao"
            },
            size:{
                default:"100x100"
            }
        },
        data(){
            return {
              
            }
        },
        components:{
            QrcodeVue
        },
        methods: {
            /**
             * 新打开跳转窗口
             */
            toPath(){
             window.open(this.url)
            }
        },
        computed:{
            src(){
                console.log(this.size)
            return "https://api.qrserver.com/v1/create-qr-code/?size="+this.size+"&data="+this.url
            }
        }
    }
</script>

<style scoped lang="less">
.qrcode{
    padding-top:20%;
    box-sizing: border-box;
    text-align: center;
    span:hover{
        color:rgb(245, 145, 14);
        cursor: pointer;
    }
}
</style>