<template>
    <div class="model">
<el-collapse accordion class="collapse">
    <el-collapse-item title="关于公司">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$route.path)
        },
       
    }
</script>

<style scoped lang="less">
.model{
    .collapse{
        text-align: center;
    }
}
</style>