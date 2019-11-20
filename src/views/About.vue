<template>
  <div class="home">
    <NavBread></NavBread>
    <hr>
    <VCommond></VCommond>
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBread from'@/components/Breadcrump'
  import VCommond from "@/components/VCommond";

  export default {
    name: 'home',
    components: {
      VCommond,
      NavBread
    }
  }
</script>
