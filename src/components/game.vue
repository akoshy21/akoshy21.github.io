<template>
  <div class="element-item" :class="theme"><!--
            --><div  class="grid-photo"><video autoplay loop muted playsinline>
    <source :src="vid" type="video/webm"/>
    <source :src="vidAlt" type="video/mp4"/>
  </video>
  </div><!--
        -->
    <router-link :to="path"><div class="overlay"><img :src="logo"/>
    <p class="gametitle">{{name}}</p>
    <p class="subtext">{{description}}</p>
  </div></router-link>
  </div>
</template>

<script>
export default {
  name: "game",
  props: {
    name: String,
    description: String,
    photo: Image,
    logo:String,
    vid: String,
    vidAlt: HTMLVideoElement,
    theme: String,
    path:String
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped>

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
}

.wph .overlay{
  background-color:var(--wph);
}

.grid-photo{
  overflow:hidden;
}

.grid-photo video{
  height:200px;
  margin-left:-60px;
}

.overlay{
  text-align:center;
}

.overlay img{
  width:200px;
  margin-top:40px;
  display:inline-block;
}

.element-item:hover .overlay {
  opacity: 1;
  cursor:pointer;
}

.gametitle{
  text-align:center;
}

.subtext {
  text-align:center;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>