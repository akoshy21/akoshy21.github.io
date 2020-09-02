<template>
  <div id="gamepage" :class="theme"><div class="infobar">  {{name}}</div>
</div>
</template>

<script>
export default {
  name: "gamePage",
  props:{
    name:String,
    description: String,
    photo: Image,
    logo:String,
    vid: String,
    vidAlt: HTMLVideoElement,
    theme: String
  }
}
</script>

<style scoped>
#gamepage{
  padding-left:50px;
  padding-right:50px;
  display:flex;
  flex-grow:1;
  flex-direction:column;
  align-items: stretch;
  height:100vh;
}

.infobar{
  display:flex;
  flex-direction: column;
  margin-top: 40px;
  height:50px;
  background-color:var(--second);
}
</style>