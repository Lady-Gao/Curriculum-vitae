<template>
    <div class="qrcode">
        <qrcode-vue :value="url" :size="size" level="H"></qrcode-vue>
        <h5 @click="toPath">点击进入...</h5>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
    export default {
        name:"qrCode",
        props:{
            url:""
        },
        data(){
            return {
                value: '',
                size: 80
            }
        },
        components:{
            QrcodeVue
        },
        methods: {
            toPath(){
            
                window.open(this.url)
            }
        }
    }
</script>

<style scoped lang="less">
.qrcode{
    margin:30px;
    text-align: center;
    h5:hover{
        color:rgb(245, 145, 14);
    }
}
</style>