import index1 from "../../assets/image/index1.png"
import index2 from "../../assets/image/index2.png"
import index3 from "../../assets/image/index3.png"
export const index={
imageUrl: [
  index1, index1, index1, index1, index1, index1, index1, index1, index1,index1,
  index2, index2, index2, index2, index2, index2, index2, index2, index2,index2,
  index3, index3, index3, index3, index3, index3, index3, index3, index3,index3, 
],
options: {
  dropzoneSelector: 'ul',
  draggableSelector: 'li',
  excludeOlderBrowsers: true,
  multipleDropzonesItemsDraggingEnabled: true,
  showDropzoneAreas: true,
  
  onDragstart: function (event) {
  },
  onDragend: function (event) {
  },
  onDrop: function (event) {
  },
}
}
export const b={}
export default {
  index, b
}