import Vue from 'vue'
import {
  Button,
  Dialog
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(Button)
Vue.use(Dialog)