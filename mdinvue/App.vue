<template>
  <div class="container">
    <Hello :name="name"></Hello>
  </div>
</template>

<script>
import Hello from './Hello.vue'

export default {
  components: {
    Hello
  },

  data() {
    return {
      name: 'wsq'
    }
  },

  created() {
    setTimeout(() => {
      this.name = 'ssss'
    }, 1000)
  }
}
</script>

