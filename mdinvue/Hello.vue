<script>
export default {
  props: ['name'],
  render() {
    return this.$options.__mdRender.call(this)
  }
}
</script>

<markdown>
# hello markdwon标签
我的名字是 {{ name }}
</markdown>

