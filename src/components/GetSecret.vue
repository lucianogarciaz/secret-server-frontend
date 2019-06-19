<template src="../../static/theme/base/getSecret.html">
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      finished: false,
      secret: {
        IdSecret: null
      }
    }
  },
  computed: {
    button () {
      if (this.finished) {
        return 'I want to see another secret'
      } else {
        return 'Go!'
      }
    }
  },
  methods: {
    submitbutton () {
      console.log('test tes test test ')
      axios.get('http://104.251.219.141:8089/secret?IdSecret=3d155b9a-926b-11e9-a934-6bc28d7abb3c', function (data, status, request) {
        console.log(data, status, request)
        if (status === 200) {
          this.users = data
        }
      })
      this.finished = !this.finished
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
    