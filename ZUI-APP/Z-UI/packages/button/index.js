// 导入组件，组件必须声明 name
import ZButton from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
ZButton.install = function (Vue) {
  Vue.component(ZButton.name, ZButton)
}

export default ZButton
