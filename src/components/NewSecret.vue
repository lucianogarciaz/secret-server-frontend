<template src="../../static/theme/base/newSecret.html">
</template>
<script>
export default {
  methods: {
    submit () {
      console.log('test tes test test ')
    },
    emitNew () {
      console.log('new secret event Emited!')
      this.$emit('new', true)
    }
  }
}
</script>
    
<style scoped>
</style>
    