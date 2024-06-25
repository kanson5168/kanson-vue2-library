import DataVisual from './src/main.vue'
DataVisual.install = function (Vue) {
  Vue.component(DataVisual.name, DataVisual)
}
export default DataVisual