import Vue from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

Vue.component('Hello', Hello)

new Vue({
  render(h) {
    return h(App) 
  }
}).$mount('#app')