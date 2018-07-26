<template>
    <div>
 <el-pagination  background  layout="prev, pager, next"  :total="30" @next-click="checkPage" @prev-click="checkPage" @current-change="checkPage" style="float:right;"></el-pagination>
    </div>
</template>

<script>
    export default {
        name:"pagination",
        methods: {
            checkPage(val) {
                this.$emit("checkPage",val)
            },
        },
        
    }
</script>

<style scoped>

</style>