<template src="../../static/theme/base/buttons.html">
</template>
<script>
export default {
  methods: {
    emitNew () {
      this.$emit('new', true)
    },
    emitGet () {
      this.$emit('get', true)
    }
  }
}
</script>
    
<style scoped>
</style>
    