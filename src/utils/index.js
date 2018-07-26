import index1 from "../../assets/image/index1.png"
import index2 from "../../assets/image/index2.png"
import index3 from "../../assets/image/index3.png"
/**
 * 首页数据
 */
export const index={
imageUrl: [
  {
    url: index1,
    name: "二手车交易平台",
    gitpath:"https://github.com/Lady-Gao/Second-hand",
    router:"SecondHand"
  }, {
    url: index1,
    name: "员工管理系统",
    gitpath: "https://github.com/Lady-Gao/management-system",
    router:"SecondHand"
  }, {
    url: index1,
    name: "音乐播放器APP-Web",
    gitpath: "https://github.com/Lady-Gao/MusicApp",
    router:"SecondHand"
  }, {
    url: index1,
    name: "微企网网站",
    gitpath: "https://github.com/Lady-Gao/Weiqiwang",
    router:"SecondHand"
  }, {
    url: index1,
    name: "员工管理系统",
    gitpath:"https://github.com/Lady-Gao/Second-hand",
    router:"SecondHand"
  }, {
    url: index1,
    name: "电影APP-Web",
    gitpath: "https://github.com/Lady-Gao/Movie",
    router:"SecondHand"
  }, {
    url: index1,
    name: "工作日历",
    gitpath: "https://github.com/Lady-Gao/Calendar",
    router:"SecondHand"
  }, {
    url: index1,
    name: "员工管理系统",
    gitpath:"https://github.com/Lady-Gao/Second-hand",
    router:"SecondHand"
  }, {
    url: index1,
    name: "html小demo",
    gitpath: "https://github.com/Lady-Gao/Small-effect",
    router:"SecondHand"
  }, {
    url: index1,
    name: "小游戏",
    gitpath: "https://github.com/Lady-Gao/GAME",
    router:"SecondHand"
  },
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
/**
 * 项目内容
 */
export const Project = {

}
export default {
  index, Project
}