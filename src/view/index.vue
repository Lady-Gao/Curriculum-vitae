<template>
    <div class="index">
 
          <el-carousel :interval="4000" type="card" >
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
<div v-drag-and-drop:options="options">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <ul>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
  </ul>
</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
     options: {
  dropzoneSelector: 'ul',
  draggableSelector: 'li',
  excludeOlderBrowsers: true,
  multipleDropzonesItemsDraggingEnabled: true,
  showDropzoneAreas: true,
  onDrop: function(event) {},
  onDragstart: function(event) {},
  onDragend: function(event) {}
}
    };
  },

  created() {
    console.log(this.$route.params.name);
  },
  methods: {
    name() {}
  }
};
</script>
<style>
.item {
  height: 20px;
  margin: 10px;
  background-color: #0ff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>