<template>
        <bgFilter>
          <div class="model">
              <el-collapse accordion class="collapse" v-model="activeName" name="1">
                  <el-collapse-item :title="ProjectTilte.title">
                      <p v-height="0.3">{{ProjectContent.content}}</p>
                </el-collapse-item>
                  <el-collapse-item :title="ProjectTilte.title1" name="2">
                      <p v-height="0.3">{{ProjectContent.content1}}    :    {{ProjectContent.content2}}</p>
                </el-collapse-item>
                  <el-collapse-item :title="ProjectTilte.title2" name="3">
                <qrCode v-height="0.5" :url="$route.params.gitpath"/>
                </el-collapse-item>
              </el-collapse>
          </div>
    </bgFilter>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      activeName:"3"
    };
  },
  mounted() {
    this.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=3434/";
  },
  computed: {
    ProjectTilte() {
      return this.store.Project.titles;
    },
    ProjectContent() {
      return this.store.Project.contents[this.$route.params.idx];
    }
  }
};
</script>

<style  lang="less" scoped>

.model {
 
  .collapse {
    position: absolute;
    text-align: center;
    top: 0;
    left: 2%;
    z-index: 10;
    width: 96%;
    .el-collapse-item__header {
      background-color: rgba(0, 0, 0, 0);
    }
    p {
      padding: 10% 20%;
    }
  }
}
</style>