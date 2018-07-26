import bgFilter from "./bgFilter"
import pagination from "./pagination"
const components = [
  bgFilter,
  pagination
]

const install = (Vue) => {
  components.map((item) => {
    Vue.component(item.name, item);
  })
}
export default install