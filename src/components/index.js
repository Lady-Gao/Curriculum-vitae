import bgFilter from "./bgFilter"
const components = [
  bgFilter
]

const install = (Vue) => {
  components.map((item) => {
    Vue.component(item.name, item);
  })
}
export default install