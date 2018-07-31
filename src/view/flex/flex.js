export const father = {
     flexDirection: {
         ulClass: "flexDirection",
         liColor: "red",
         radioArr: ["row", "row-reverse", "column", "column-reverse"]
       },
       flexFlow: {
         isdb: true,
         ulClass: "flexFlow",
         liColor: "red",
         radioArr: [
           ["row", "row-reverse", "column", "column-reverse"],
           ['nowrap', 'wrap', 'wrap-reverse']
         ]
       },
       justifyContent: {
         ulClass: "justifyContent",
         liColor: "green",
         radioArr: ["flex-start", "flex-end", "center", "space-between", "space-around"]
       },
       flexWrap: {
         ulClass: "flexWrap",
         liColor: "green",
         radioArr: ['nowrap', 'wrap', 'wrap-reverse']
       },
       alignItems: {
         ulClass: "alignItems",
         liColor: "bule",
         radioArr: ["flex-start", "flex-end", "center", "baseline", "stretch"]
       },
       alignContent: {
         ulClass: "alignContent",
         liColor: "bule",
         radioArr: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
       },

}
export const child={
    order: {
        liClass: "order",
        radioArr: ["1", "10", "20", "30", "40", "50"]
      },
      flexGrow: {
        liClass: "flexGrow",
        radioArr: ["1", "5", "10", "15", "20", "25"]
      },
      flexShrink: {
        liClass: "flexShrink",
        radioArr: ["1", "5", "10", "15", "20", "25"]
      },
      alignSelf: {
        liClass: "alignSelf",
        radioArr: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"]
      }
}
export default {
    father,
    child
}