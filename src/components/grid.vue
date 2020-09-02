<template>
<div id="grid">


  <div class="scroll"><div class="grid">
      <game theme="wph games art" vid="/assets/videos/wph.mp4" logo="/assets/images/wphlogo.png" path="/workplacehazards"></game>
    <div class="element-item metalloid " data-category="metalloid">
      <h3 class="name">Tellurium</h3>
      <p class="symbol">Te</p>
      <p class="number">52</p>
      <p class="weight">127.6</p>
    </div>
    <div class="element-item post-transition metal " data-category="post-transition">
      <h3 class="name">Bismuth</h3>
      <p class="symbol">Bi</p>
      <p class="number">83</p>
      <p class="weight">208.980</p>
    </div>
    <div class="element-item post-transition metal " data-category="post-transition">
      <h3 class="name">Lead</h3>
      <p class="symbol">Pb</p>
      <p class="number">82</p>
      <p class="weight">207.2</p>
    </div>
    <div class="element-item transition metal " data-category="transition">
      <h3 class="name">Gold</h3>
      <p class="symbol">Au</p>
      <p class="number">79</p>
      <p class="weight">196.967</p>
    </div>
    <div class="element-item alkali metal " data-category="alkali">
      <h3 class="name">Potassium</h3>
      <p class="symbol">K</p>
      <p class="number">19</p>
      <p class="weight">39.0983</p>
    </div>
    <div class="element-item alkali metal " data-category="alkali">
      <h3 class="name">Sodium</h3>
      <p class="symbol">Na</p>
      <p class="number">11</p>
      <p class="weight">22.99</p>
    </div>
    <div class="element-item transition metal " data-category="transition">
      <h3 class="name">Cadmium</h3>
      <p class="symbol">Cd</p>
      <p class="number">48</p>
      <p class="weight">112.411</p>
    </div>
    <div class="element-item alkaline-earth metal " data-category="alkaline-earth">
      <h3 class="name">Calcium</h3>
      <p class="symbol">Ca</p>
      <p class="number">20</p>
      <p class="weight">40.078</p>
    </div>
    <div class="element-item transition metal " data-category="transition">
      <h3 class="name">Rhenium</h3>
      <p class="symbol">Re</p>
      <p class="number">75</p>
      <p class="weight">186.207</p>
    </div>
    <div class="element-item post-transition metal " data-category="post-transition">
      <h3 class="name">Thallium</h3>
      <p class="symbol">Tl</p>
      <p class="number">81</p>
      <p class="weight">204.383</p>
    </div>
    <div class="element-item metalloid " data-category="metalloid">
      <h3 class="name">Antimony</h3>
      <p class="symbol">Sb</p>
      <p class="number">51</p>
      <p class="weight">121.76</p>
    </div>
    <div class="element-item transition metal " data-category="transition">
      <h3 class="name">Cobalt</h3>
      <p class="symbol">Co</p>
      <p class="number">27</p>
      <p class="weight">58.933</p>
    </div>
    <div class="element-item lanthanoid metal inner-transition " data-category="lanthanoid">
      <h3 class="name">Ytterbium</h3>
      <p class="symbol">Yb</p>
      <p class="number">70</p>
      <p class="weight">173.054</p>
    </div>
    <div class="element-item noble-gas nonmetal " data-category="noble-gas">
      <h3 class="name">Argon</h3>
      <p class="symbol">Ar</p>
      <p class="number">18</p>
      <p class="weight">39.948</p>
    </div>
    <div class="element-item diatomic nonmetal " data-category="diatomic">
      <h3 class="name">Nitrogen</h3>
      <p class="symbol">N</p>
      <p class="number">7</p>
      <p class="weight">14.007</p>
    </div>
    <div class="element-item actinoid metal inner-transition " data-category="actinoid">
      <h3 class="name">Uranium</h3>
      <p class="symbol">U</p>
      <p class="number">92</p>
      <p class="weight">238.029</p>
    </div>
    <div class="element-item actinoid metal inner-transition " data-category="actinoid">
      <h3 class="name">Plutonium</h3>
      <p class="symbol">Pu</p>
      <p class="number">94</p>
      <p class="weight">(244)</p>
    </div>
  </div>
</div>

</div>
</template>

<script>
import Isotope from "isotope-layout/dist/isotope.pkgd"
import game from './game.vue'



var iso;

export default {
  name: "grid",
  components: {
    game
  },
  mounted: function () {
    document.getElementById("sortbutton").classList.remove("hide");
    this.$nextTick(init());
  },
  beforeRouteLeave:function(to, from, next){
    console.log("fired before route leave");
    document.getElementById("sortbutton").classList.add("hide");
    next();
  }
  ,
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}

function init () {
  iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

// filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match( /ium$/ );
    }
  };

// bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !event.target.matches('button') ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

// change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !event.target.matches('button') ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}

</script>

<style scoped>
* { box-sizing: border-box; }

#grid{
  display:flex;
  flex-grow:1;
  flex-direction:column;
  align-items: stretch;
  height:100vh;
  padding-left:50px;
}



#grid > .scroll{
  flex-direction: column;
  overflow-y:auto;
flex:1;
  margin-bottom:2px;
}

.scroll::-webkit-scrollbar-track {
  background: var(--seconddark);
  border: 4px solid black!important;
  border-radius: 10px;
}

.scroll::-webkit-scrollbar-thumb {
  background: black;
  border: 4px solid var(--seconddark);
}

-webkit-scrollbar:hover{
  cursor:pointer;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: black;
  border: 4px solid var(--second);
}

.scroll::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background: var(--seconddark);
}


/* ---- isotope ---- */

.grid {
  margin-left:auto;
  margin-right:auto;display:flex;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .element-item ---- */

.element-item {
  position: relative;
  flex-direction: row;
  width:250px;
  margin:5px;
  height: 200px;
  background: #888;
  color: #262524;
}

.element-item > * {
  margin: 0;
  padding: 0;
}

.element-item .name {
  position: absolute;

  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}

.grid{
  padding-bottom:40px;
  padding-top:40px;
}
</style>