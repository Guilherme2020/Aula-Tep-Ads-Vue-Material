<template lang="html">
  <div id="">
      <my-menu></my-menu>
      <my-hero></my-hero>
  </div>
</template>
<script>

import Hero from '../shared/Hero.vue'
import Menu from '../shared/Menu.vue'


export default {
  //name: "",

  components: {
    'my-menu': Menu,
    'my-hero': Hero
  },

  data: () => ({

  })
}
</script>
<style lang="css" scoped>
</style>
