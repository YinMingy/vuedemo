<template>
  <div class="home">
    <NavBread></NavBread>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBread from'@/components/Breadcrump'

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavBread
  }
}
</script>
<style>

</style>
