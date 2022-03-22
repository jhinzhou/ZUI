// 导入组件，组件必须声明 name
import ZSwitch from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
ZSwitch.install = function (Vue) {
  Vue.component(ZSwitch.name, ZSwitch)
}

export default ZSwitch
