import Vue from 'vue'
import * as filters from '@/utils/filters'

// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
