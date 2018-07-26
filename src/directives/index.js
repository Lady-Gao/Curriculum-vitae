import Vue from 'vue'
export default(Vue)=>{
Vue.directive("height", {
  inserted(el, binding) {
      el.style.height = window.innerHeight*binding.value+"px"
      console.log(el.style)
  }
});
}