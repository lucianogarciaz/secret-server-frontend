<template src="../static/theme/base/mainpage.html"></template>

<script>
import NewSecret from '@/components/NewSecret.vue'
import GetSecret from '@/components/GetSecret.vue'
import Buttons from '@/components/Buttons.vue'

export default {
  name: 'top-page',
  components: {
    NewSecret,
    GetSecret,
    Buttons
  },
  created () {
    console.log('The web is loaded')
  },
  data () {
    return {
      newSecVisible: false,
      getSecVisible: true
    }
  },
  computed: {
    isVisible () {
      if (!this.newSecVisible && !this.getSecVisible) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getSecret () {
      this.getSecVisible = !this.getSecVisible
    },
    newSecret () {
      this.newSecVisible = !this.newSecVisible
    }
  }
}
</script>

<style>
body {
  font-family: 'Raleway', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .33s
}
.fade-enter, .fade-leave-to {
  opacity: .3
}
</style>
