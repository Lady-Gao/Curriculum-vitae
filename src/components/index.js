import bgFilter from "./bgFilter"
import pagination from "./pagination"
import qrCode from "./qrCode.vue"
const components = [
  bgFilter,
  pagination,
  qrCode
]

const install = (Vue) => {
  components.map((item) => {
    Vue.component(item.name, item);
  })
}
export default install