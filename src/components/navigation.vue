<template>
  <div id="navigation">
    <img class="image" src="../assets/logoalt.png">
    <div class="text">
      <a class="title" href="./index.html">Annamaria Koshy</a>
      <div class="icons"><i class="fas fa-envelope"></i><i class="fab fa-linkedin"></i><i class="fab fa-itch-io"></i><i class="fab fa-twitter-square"></i></div>
      <div class="pages">
        <router-link to="/">Portfolio</router-link>
        <div id="sortbutton" class="sortbutton hide"><div class="button-group filters-button-group">
          <button class="button is-checked" data-filter="*">show all</button>
          <button class="button" data-filter=".games">game design</button>
          <button class="button" data-filter=".writing">writing</button>
          <button class="button" data-filter=".art">graphic design</button>
        </div></div>
        <router-link to="/resume">Resume</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation'
}
</script>

<style scoped>
.sortbutton {
  display:flex;
}

.hide {
  display:none !important;
}

#navigation{
  border-right:5px solid var(--primarylight);
  width:170px;
  padding:0px 20px;
}

i {
  margin-right:10px;
}

i:hover {
  color:var(--primarylight);
  cursor:pointer;
}

.icons{
  margin-top:10px;
  font-size:18px;
}

#navigation img{
  display:block;
  width:150px;
  margin-left:0px;
  margin-top:50px;
  margin-bottom:20px;}

.pages{
  margin-top:20px;
}

.pages a{
  margin-top:5px;
}

#navigation .icons img{
  width:20px;

}

/* ---- button ---- */

.button{
  display:block;
  border:none;
  margin-right:10px;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  color:var(--second);
  text-align:center;
  transition: all 0.2s;
  background-color:#00000000;
  font-family: 'Alata', sans-serif;
  font-weight:700;
  padding:4px 8px;
  margin:5px 0px;
  font-size:12px;
}
button:hover{
  cursor:pointer;
  background-color:var(--second);
  color: var(--darkbg)
}

.button:active,
.button.is-checked {
  background-color: var(--primarylight);
  color:var(--darkbg);
}


button:focus { outline:0 !important; }


/* ---- button-group ---- */

.button-group{
  padding-top:5px;
  padding-bottom:5px;
  padding-left:15px;
}

.button-group:after {
  content: '';
  display: block;
  clear: both;
}
</style>