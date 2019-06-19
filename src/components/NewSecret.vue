<template src="../../static/theme/base/newSecret.html">
</template>
<script>
import axios from 'axios'
import qs from 'querystring'
var axiosInstance = axios.create({
  baseURL: 'http://104.251.219.141:8089/secret'
})
export default {
  data () {
    return {
      finished: false,
      secret: {
        idSecret: null,
        secret: null,
        expireAfter: 0,
        expireAfterViews: 0
      },
      error: null
    }
  },
  computed: {
    button () {
      if (this.finished) {
        return 'I want to see another secret'
      } else {
        return 'Go!'
      }
    },
    title () {
      if (this.finished) {
        return 'Your key is: '
      } else {
        return 'New Secret!!'
      }
    }
  },
  methods: {
    submitbutton () {
      var _this = this
      if (_this.finished) {
        _this.finished = false
        _this.secret = {}
        return
      }
      if (_this.secret.Secret === '' || _this.secret.Secret === null) {
        return
      }
      var requestBody = {
        secret: _this.secret.secret,
        expireAfter: _this.secret.expireAfter,
        expireAfterViews: _this.secret.expireAfterViews
      }

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axiosInstance.post('', qs.stringify(requestBody), config)
      .then(response => {
        var data = response.data
        if (data.Id !== '0') {
          _this.secret.idSecret = data.Secret.IdSecret
          _this.finished = true
          _this.error = null
        } else {
          _this.error = data.Message
        }
      })
      .catch(e => {
        _this.error = 'Mmmm.. Something is wrong...'
      })
    },
    emitNew () {
      this.$emit('new', true)
      this.secret = {}
      this.finished = false
      this.error = null
    }
  }
}
</script>
    
<style scoped>
</style>
    