// 从 Vue 实例开始看

import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) { // 严谨点：Vue 是一个构造函数，不能直接调用，直接调用会报错
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) // new Vue 时候传进来的参数，所有的选项：data, methods, computed, props, created, beforeCreate
}

initMixin(Vue) // 完毕
stateMixin(Vue) // 完毕
eventsMixin(Vue) // 完毕
lifecycleMixin(Vue) // 完毕
renderMixin(Vue)

export default Vue
