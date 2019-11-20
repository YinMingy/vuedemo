<template>
  <div class="hello">
    <h1></h1>
    <img src="../assets/img/tree.png" alt="" id="tree">
    <img src="../assets/img/xr.png" alt="" id="xr">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#tree{
  position: absolute;
  right: 200px;
  bottom: 0;
  width: 600px;
}
#xr{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  animation: move 5s infinite;
}
@keyframes move{
  0%{
    left:0;
  }
  /*40%{*/
  /*  left: 20%;*/
  /*}*/
  /*60%{*/
  /*  !*left: 300px;*!*/
  /*  left: 40%;*/
  /*}*/
  100%{
    left: 80%;
  }
}
</style>
