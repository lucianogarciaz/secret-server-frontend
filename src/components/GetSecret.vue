<template src="../../static/theme/base/getSecret.html">
</template>
<script>
import axios from 'axios'
import moment from 'moment'
var axiosInstance = axios.create({
  baseURL: 'http://104.251.219.141:8089'
})
export default {
  data () {
    return {
      finished: false,
      secret: {
        IdSecret: null
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
      if (_this.secret.IdSecret === null || _this.secret.IdSecret === '') {
        _this.error = 'You have to insert your key'
        return
      }
      axiosInstance.get(`secret?IdSecret=` + _this.secret.IdSecret)
        .then(response => {
          var data = response.data
          if (data.Id !== '0') {
            _this.error = null
            _this.secret.Secret = data.Secret.Secret
            _this.secret.CreatedDate = moment(data.Secret.CreatedDate, 'DD-MM-Y hh:mm:ss')
            _this.secret.ExpireAfter = data.Secret.ExpireAfter ? moment(data.Secret.CreatedDate, 'Y-MM-DD hh:mm:ss')
              .add(data.Secret.ExpireAfter, 'minutes')
              .format('DD-MM-Y hh:mm:ss') : 'Never'
            _this.secret.ExpireAfterViews = data.Secret.ExpireAfterViews ? data.Secret.ExpireAfterViews : 'Never'
            _this.finished = true
          } else {
            _this.error = data.Message
          }
        })
    .catch(e => {
      _this.error = 'Mmmm.. Something is wrong...'
    })
    },
    emitGet () {
      this.secret = {}
      this.finished = false
      this.error = null
      this.$emit('get', true)
    }
  }
}
</script>
    
<style scoped>
</style>
    