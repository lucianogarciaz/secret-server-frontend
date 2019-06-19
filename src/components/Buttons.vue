<template src="../../static/theme/base/buttons.html">
</template>
<script>
export default {
  methods: {
    emitNew () {
      console.log('new secret event Emited!')
      this.$emit('new', true)
    },
    emitGet () {
      console.log('get secret event Emited!')
      this.$emit('get', true)
    }
  }
}
</script>
    
<style scoped>
</style>
    