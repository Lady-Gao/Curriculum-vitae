<template>
    <div class="model">
<el-collapse accordion class="collapse">
    <el-collapse-item title="项目负责">
        <p>balabal</p>
  </el-collapse-item>
    <el-collapse-item title="项目查看">
  <qrCode :url="this.$route.params.gitpath"/>
  </el-collapse-item>
</el-collapse>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        mounted(){
        },
       
    }
</script>

<style scoped lang="less">
.model{
    .collapse{
        width:98%;
        text-align: center;
    }
}
</style>