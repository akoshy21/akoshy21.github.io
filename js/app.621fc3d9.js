(function(e){function t(t){for(var r,o,i=t[0],l=t[1],m=t[2],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(u.length)u.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var h=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0055":function(e,t,a){"use strict";var r=a("bb23"),s=a.n(r);s.a},"0091":function(e,t,a){"use strict";var r=a("bb78"),s=a.n(r);s.a},"034f":function(e,t,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"0e71":function(e,t,a){"use strict";var r=a("ca39"),s=a.n(r);s.a},"2cca":function(e,t,a){e.exports=a.p+"img/logoalt.4eca43bc.png"},"41cc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,s=a("a026"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navigation"),a("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"navigation"}},[r("img",{staticClass:"image",attrs:{src:a("2cca")}}),r("div",{staticClass:"text"},[e._m(0),e._m(1),r("div",{staticClass:"pages"},[r("router-link",{attrs:{to:"/"}},[e._v("Portfolio")]),e._m(2),r("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"title",attrs:{href:"./index.html"}},[e._v("Annamaria "),a("span",{staticClass:"lastName"},[e._v("Koshy")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icons"},[a("a",{staticClass:"fas fa-envelope",attrs:{href:"mailto:someone@yoursite.com"}}),a("a",{staticClass:"fab fa-linkedin",attrs:{href:"https://www.linkedin.com/in/annamaria-koshy-a2a167149/",target:"_blank"}}),a("a",{staticClass:"fab fa-itch-io",attrs:{href:"https://annamariakoshy.itch.io/",target:"_blank"}}),a("a",{staticClass:"fab fa-twitter-square",attrs:{href:"https://twitter.com/AnnamariaKoshy",target:"_blank"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sortbutton hide",attrs:{id:"sortbutton"}},[a("div",{staticClass:"button-group filters-button-group"},[a("button",{staticClass:"button is-checked",attrs:{"data-filter":"*"}},[e._v("show all")]),a("button",{staticClass:"button",attrs:{"data-filter":".games"}},[e._v("game design")]),a("button",{staticClass:"button",attrs:{"data-filter":".writing"}},[e._v("writing")]),a("button",{staticClass:"button",attrs:{"data-filter":".art"}},[e._v("graphic design")]),a("button",{staticClass:"button",attrs:{"data-filter":".film"}},[e._v("films")])])])}],m={name:"navigation"},h=m,c=(a("c825"),a("2877")),u=Object(c["a"])(h,i,l,!1,null,"2e67ad47",null),d=u.exports,g={name:"app",components:{navigation:d}},p=g,f=(a("034f"),Object(c["a"])(p,n,o,!1,null,null,null)),v=f.exports,w=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"grid"}},[a("div",{staticClass:"scroll"},[a("div",{staticClass:"grid"},[a("game",{attrs:{theme:"wph games art",vid:"/assets/videos/wph.mp4",logo:"/assets/images/wphlogo.png",path:"/workplacehazards"}}),a("game",{attrs:{theme:"ss games art writing",photo:"/assets/images/scorched.png",logo:"/assets/images/scorchedlabel.png",path:"/scorchedstatesman"}}),a("game",{attrs:{theme:"hiu games art writing",photo:"/assets/images/hell.png",logo:"/assets/images/helllabel.png",path:"/hellisunderground"}}),a("game",{attrs:{theme:"sp games writing",photo:"/assets/images/scarlet.png",logo:"/assets/images/scarletLabel.PNG",path:"/scarletpimpernel"}}),a("game",{attrs:{theme:"ht gf games art writing",photo:"https://i.imgur.com/sEOAB7f.png",logo:"https://img.itch.zone/aW1nLzE5OTkxODkucG5n/315x250%23c/WNhS3N.png",path:"/godsforsaken"}}),a("game",{attrs:{theme:"rotc games writing art",photo:"/assets/images/rotc.png",logo:"https://img.itch.zone/aW1nLzE4MzY2NDIucG5n/347x500/owqsNC.png",path:"/riseofthecurrent"}}),a("game",{attrs:{theme:"kt games",photo:"/assets/images/koala.png",logo:"/assets/images/koalatealabel.png",path:"/koalatea"}}),a("game",{attrs:{theme:"ht so games art",photo:"/assets/images/standoff.jpg",logo:"/assets/images/standofflabel.png",path:"/standoff"}}),a("game",{attrs:{theme:"ht fot games art",photo:"/assets/images/1403.png",logo:"/assets/images/1403l.png",path:"/1403"}}),a("game",{attrs:{theme:"ht dcc games art",vid:"/assets/videos/DCC.mp4",logo:"/assets/images/donut.png",path:"/donutcountyclone"}}),a("game",{attrs:{theme:"ht nca games art writing",photo:"https://img.itch.zone/aW1nLzE2MzUwMDMucG5n/315x250%23c/RaPThr.png",name:"Nameless Chat App",path:"/namelesschatapp"}}),a("game",{attrs:{theme:"ht sts games art",photo:"/assets/images/studioslaughter.jpg",logo:"/assets/images/studiolabel.png",path:"/studioslaughter"}})],1)])])},y=[],k=(a("ac1f"),a("466d"),a("b4fd")),x=a.n(k),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"element-item",class:e.theme},[a("div",{staticClass:"grid-photo"},[e.photo?a("img",{attrs:{src:e.photo}}):e._e(),e.vid?a("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[a("source",{attrs:{src:e.vid,type:"video/webm"}}),a("source",{attrs:{src:e.vidAlt,type:"video/mp4"}})]):e._e()]),a("router-link",{attrs:{to:e.path}},[a("div",{staticClass:"overlay"},[e.logo?a("img",{attrs:{src:e.logo}}):e._e(),e.name?a("p",{staticClass:"gametitle"},[e._v(e._s(e.name))]):e._e(),e.description?a("p",{staticClass:"subtext"},[e._v(e._s(e.description))]):e._e()])])],1)},C=[],P={name:"game",props:{name:String,description:String,photo:Image,logo:String,vid:String,vidAlt:HTMLVideoElement,theme:String,path:String,labelHeight:String},data:function(){return{publicPath:"/"}}},S=P,D=(a("db7d"),Object(c["a"])(S,_,C,!1,null,"1fd84136",null)),A=D.exports,L={name:"grid",components:{game:A},mounted:function(){document.getElementById("sortbutton").classList.remove("hide"),this.$nextTick(z())},beforeRouteLeave:function(e,t,a){console.log("fired before route leave"),document.getElementById("sortbutton").classList.add("hide"),a()},data:function(){return{publicPath:"/"}}};function z(){r=new x.a(".grid",{itemSelector:".element-item",layoutMode:"fitRows"});var e={numberGreaterThan50:function(e){var t=e.querySelector(".number").textContent;return parseInt(t,10)>50},ium:function(e){var t=e.querySelector(".name").textContent;return t.match(/ium$/)}},t=document.querySelector(".filters-button-group");t.addEventListener("click",(function(t){if(t.target.matches("button")){var a=t.target.getAttribute("data-filter");a=e[a]||a,r.arrange({filter:a})}}));for(var a=document.querySelectorAll(".button-group"),s=0,n=a.length;s<n;s++){var o=a[s];j(o)}}function j(e){e.addEventListener("click",(function(t){t.target.matches("button")&&(e.querySelector(".is-checked").classList.remove("is-checked"),t.target.classList.add("is-checked"))}))}var T=L,G=(a("0091"),Object(c["a"])(T,b,y,!1,null,"5a737b49",null)),I=G.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],E={name:"HelloWorld",props:{msg:String}},O=E,H=Object(c["a"])(O,M,W,!1,null,"386ae8ab",null),B=H.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resume"},[a("div",{staticClass:"scroll"},[a("table",[a("tr",[a("th",[e._v("Education")])])])])])}],q={name:"resume"},R=q,U=(a("0e71"),Object(c["a"])(R,K,N,!1,null,"6bd0511d",null)),$=U.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.theme,attrs:{id:"gamepage"}},[a("div",{staticClass:"infobar"},[a("div",{staticClass:"subbar"},[a("h1",[e._v(e._s(e.name))]),a("div",{staticClass:"gameBlock"},[e.ttsLink?a("a",{staticClass:"tts",attrs:{href:e.ttsLink,target:"_blank"}},[a("div",{staticClass:"small"},[e._v("Play on")]),e._v("Tabletop Simulator")]):e.itchLink?a("a",{staticClass:"itch",attrs:{href:e.itchLink,target:"_blank"}},[e._v("Play at itch.io")]):e._e()])])]),a("div",{staticClass:"pageContent"},[a("div",{staticClass:"mainBlock"},[a("div",{staticClass:"gridPage"},e._l(e.content,(function(t){return a("div",{key:t.id,staticClass:"block",class:t.flex},[t.image?a("div",{staticClass:"image",class:t.float},[a("img",{attrs:{src:t.image}})]):e._e(),t.video?a("div",{staticClass:"vidBlock",class:t.float},[a("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.video,type:"video/webm"}}),a("source",{attrs:{src:t.videoAlt,type:"video/mp4"}})])]):e._e(),t.team?a("div",{staticClass:"team"},[a("h2",[e._v("The Team")]),e._l(t.team,(function(t){return a("div",{key:t.id,staticClass:"memberbox"},[a("b",{staticClass:"name"},[e._v(e._s(t.member))]),e._v(": "+e._s(t.roles))])}))],2):e._e(),e._l(t.text,(function(t){return a("div",{key:t.id,staticClass:"textbox"},[t.head?a("h2",{staticClass:"header"},[e._v(e._s(t.head))]):e._e(),a("span",{staticClass:"subsec",domProps:{innerHTML:e._s(t.text)}})])}))],2)})),0)]),a("div",{staticClass:"sidebar"},[e.ttsLink?a("a",{attrs:{href:e.ttsLink,target:"_blank"}},[a("i",{staticClass:"fas fa-play-circle"})]):e.itchLink?a("a",{attrs:{href:e.itchLink,target:"_blank"}},[a("i",{staticClass:"fas fa-play-circle"})]):e._e(),null!=e.ttsLink&&null!=e.itchLink?a("a",{attrs:{href:e.itchLink,target:"_blank"}},[a("i",{staticClass:"fas fa-download"})]):e._e(),a("ShareNetwork",{attrs:{network:"facebook",url:e.urlPath,title:e.name,description:e.description}},[a("i",{staticClass:"fab fa-facebook-square"})]),a("ShareNetwork",{attrs:{network:"twitter",url:e.urlPath,title:e.name,description:e.description}},[a("i",{staticClass:"fab fa-twitter-square"})])],1)])])},V=[],J={name:"gamePage",props:{urlPath:String,itchLink:String,ttsLink:String,name:String,description:String,photo:Image,logo:String,vid:String,vidAlt:HTMLVideoElement,theme:String,content:Array,text:Array,ind:String}},Y=J,Q=(a("8e04"),Object(c["a"])(Y,F,V,!1,null,"3117da4d",null)),Z=Q.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.theme,attrs:{id:"docPage"}},[a("div",{staticClass:"infobar"},[a("div",{staticClass:"subbar"},[a("h1",[e._v(e._s(e.name))]),a("div",{staticClass:"gameBlock"},[e.itchLink?a("a",{attrs:{href:e.itchLink,target:"_blank"}},[e._v("Play at itch.io")]):e._e()])])]),a("div",{staticClass:"pageContent"},[a("div",{staticClass:"mainBlock"},e._l(e.sps,(function(e){return a("div",{key:e.id,staticClass:"block",class:e.flex})})),0)])])},ee=[],te={name:"docPage",props:{urlPath:String,name:String,theme:String,sps:Array}},ae=te,re=(a("0055"),Object(c["a"])(ae,X,ee,!1,null,"39f72e11",null)),se=re.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.theme,attrs:{id:"docPage"}},[a("div",{staticClass:"infobar"},[a("div",{staticClass:"subbar"},[a("h1",[e._v(e._s(e.name))]),a("div",{staticClass:"gameBlock"},[e.itchLink?a("a",{attrs:{href:e.itchLink,target:"_blank"}},[e._v("Play at itch.io")]):e._e()])])]),a("div",{staticClass:"pageContent"},[a("div",{staticClass:"mainBlock"},[a("iframe",{attrs:{width:"80%",height:"auto",src:e.src,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("div",{staticClass:"sidebar"},[e.youtube?a("a",{attrs:{href:e.youtube,target:"_blank"}},[a("i",{staticClass:"fas fa-play-circle"})]):e._e(),a("ShareNetwork",{attrs:{network:"facebook",url:e.urlPath,title:e.name,description:e.description}},[a("i",{staticClass:"fab fa-facebook-square"})]),a("ShareNetwork",{attrs:{network:"twitter",url:e.urlPath,title:e.name,description:e.description}},[a("i",{staticClass:"fab fa-twitter-square"})])],1)])])},oe=[],ie={name:"vidPage",props:{urlPath:String,name:String,theme:String,sps:Array,src:String,youtube:String}},le=ie,me=(a("abee"),Object(c["a"])(le,ne,oe,!1,null,"a2bf45b8",null)),he=me.exports;s["a"].use(w["a"]);var ce=new w["a"]({routes:[{path:"/",name:"Grid",component:I},{path:"/hello",name:"Hello World",component:B},{path:"/resume",name:"Resume",component:$},{path:"/workplacehazards",name:"Workplace Hazards",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/workplacehazards",itchLink:"https://loch-nesrac.itch.io/workplace-hazards",theme:"wph",name:"Workplace Hazards",content:[{video:"/assets/videos/wph.mp4",flex:"one"},{text:[{head:"Welcome to your mandatory Workplace Safety Training Module!",text:"This short interactive guide is here to educate you and a fellow employee about the many dangers and hazards that can occur in the workplace."},{text:" where players must utilize their dead bodies to solve puzzles and reach the exit. Stylized like a workplace safety training module, the levels often put the 'workers' in direct danger and require certain sacrifices to be made.",head:"A local co-op puzzle platformer"}],flex:"two"},{text:[{head:"Contributions",text:"In this project, I had an all around role. From a programming and implementation perspective I created the base ragdoll character movement, statistic tracking, and blood splatter stains. From a visual design standpoint, I conceptualized and helped implement the hazard sign aesthetic and assisted in sprite design."},{text:"I also was heavily involved in integration and bug-fixing. The largest portion of my contributions was getting the various systems and pieces made by individuals working together. This, ultimately, meant I had my hands in just about every system."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Systems Programmer, Graphic Designer"},{member:"Carson Decker",roles:"Systems Programmer, FX Artist, Level Designer"},{member:"Kate Howell",roles:"Project Manager, Gameplay Programmer, Level Designer"},{member:"Logan Kornota",roles:"Sprite Artist, Character Artist"},{member:"Luke Brockmann",roles:"Writer, Graphic Designer, Level Designer"}],flex:"two"},{float:"left",image:"https://img.itch.zone/aW1hZ2UvNTMwNDU1LzI3NTcyMTUucG5n/347x500/5Tuuz2.png",flex:"one"},{image:"https://img.itch.zone/aW1hZ2UvNTMwNDU1LzI3NTcyMTUucG5n/347x500/5Tuuz2.png",flex:"one"}]}},{path:"/scorchedstatesman",name:"The Scorched Statesman",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/scorchedstatesman",itchLink:"https://annamariakoshy.itch.io/shcd-scorched-statesman",theme:"ss",name:"The Scorched Statesman",content:[{image:"/assets/images/scorched.png",flex:"one"},{text:[{text:"When a young man's sister comes to Sherlock desperate to clear her brother's name, you're given the case and must figure out what exactly happened and who the real arsonist is. The twist? Her brother's already confessed to the crime.",head:"A painting, a confession, and plenty of suspects"},{head:"An open and shut arson case",text:"But things are hardly ever what they seem when you work for <a class='l' href='https://g.co/kgs/PVJfBa' target='_blank'>Sherlock Holmes, Consulting Detective</a>. Dive into this custom expansion for the game of the same name and uncover the truth of the Scorched Statesman."},{text:'At its core, this module is a mystery game, told in the form of short story blurbs to be read aloud. Players use the clues embedded in the booklet text, images, a map, and other "props" such as a newspaper to put together what the mystery actually was and solve the case.'}],flex:"two"},{text:[{head:"Contributions",text:"This game was heavily narrative centric. It required a large amount of writing, editing, and tweaking. More than that, however, it required a well thought out and planned mystery. This project was largely a collaborative effort, with all of us together conceptualizing the mystery and building out the blocks of necessary information from there."},{text:'In terms of personal contributions, as part of the design team, I helped conceptualize the mystery and the "game" as a whole. As a writer, I wrote and edited for the booklet. Finally, as a graphic designer, I created the booklet, the newspaper, and any visual assets used in the module. '}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Writer, Game Designer, Graphic Designer"},{member:"Matt Cutts",roles:"Writer, Game Designer"},{member:"Rilee Horowitz",roles:"Writer, Game Designer"},{member:"Luke Brockmann",roles:"Writer, Game Designer, Handwriting Artist"}],flex:"two"}]}},{path:"/scarletpimpernel",name:"The  Adventures of Lady  Marguerite Blakeney",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/scarletpimpernel",itchLink:"https://annamariakoshy.itch.io/scarlet",theme:"ss",name:"The  Adventures of Lady  Marguerite Blakeney",content:[{image:"/assets/images/scarlet.png",flex:"one"},{text:[{head:"Enter the Scarlet Pimpernel as the infamous Marguerite Blakeney",text:"Marguerite Blakeney is a much esteemed member of English high society. France, her homeland, is in the midst of the French revolution, and when her old friend Chauvelin shows up to request her help in catching the much sought after Scarlet Pimpernel, her life will never be the same."},{text:"Based on <i>The Scarlet Pimpernel</i> novel, written by Baroness Orczy, this twine game puts the player in the shoes of the wife of the Scarlet Pimpernel and gives Marguerite agency to make choices and decisions that can impact France, the aristocracy, and her marriage."},{head:"Contributions",text:"This was a solo project, completed over the course of three weeks. Utilizing a public domain IP, <i>The Scarlet Pimpernel</i>, I tried to stylize the writing and branching styles to mirror the original. It is unfinished, with a few paths ending abruptly due to the time constraint."}],flex:"two"}]}},{path:"/hellisunderground",name:"Hell is Underground",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/hellisunderground",itchLink:"https://kevin-ray.itch.io/hell-is-underground",theme:"hiu",name:"Hell is Underground",content:[{image:"/assets/images/hell.png",flex:"one"},{image:"/assets/images/hiu2.png",flex:"one"},{text:[{head:"Welcome to Hell. Or the closest you'll get.",text:"The subway is a chaotic swirling mess of stations, people, and bureaucracy. And you've got to navigate it all."},{text:" where the player must complete quests, explore the stations, and stumble through the wild and untameable place that is the subway. An homage to the craziness that is the MTA, we tried too capture the innate humor present in the subway on a day to day basis.",head:"A first person adventure game"}],flex:"two"},{text:[{head:"Contributions",text:"In this project, I was responsible for the questing system, the dialogue system, and general bug fixing. It was a big project made over four weeks, so I also contributed in the form of writing dialogue, set dressing and set-up, and designing visual assets, such as posters and boards."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Programmer, Writer, Game Designer, Graphic Designer"},{member:"Kevin Ray",roles:"Programmer, Game Designer"},{member:"Kate Howell",roles:"Programmer, Game Designer"},{member:"Carsen Decker",roles:"Programmer, Game Designer, Effects Specialist"},{member:"Rilee Horowitz",roles:"Programmer, 3D Modeler"},{member:"Luke Brockmann",roles:"Writer, Game Designer, Graphic Designer"}],flex:"two"}]}},{path:"/riseofthecurrent",name:"Rise of the Current",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/riseofthecurrent",itchLink:"https://rileehorowitz.itch.io/rise-of-the-current",theme:"rotc",name:"Rise of the Current",content:[{image:"/assets/images/rotc.png",flex:"one"},{text:[{head:"Enter an alternate timeline",text:"where in the war for superiority, steam won and electricity was relegated to the underground. Join up with Tesla and the Current, a group of electricity wielding revolutionaries and embark on a mission for the good of electricity. Use gadgets, talk your way through situations, and make your mark as the newest agent of the Current. It's all up to you now."},{text:"This is a <a class='l' href='http://www.memento-mori.com/'>Parsely</a> module designed to center around player decision and the impact your choices can have on a crisis that will change the world, for better or for worse. The game requires a \"parser\" that guides the player through the experience, serving as sort of the computer for what is a tabletop version of an old adventure game."}],flex:"two"},{text:[{head:"Contributions",text:'Writing, graphic design, and game design, this project was a fun combo of my three favored areas. Made over the course of a few weeks, we designed the "adventure" and the overall plot of the story first. Then we went on to specific puzzle design for the smaller interactions. A bulk of the work was fleshing out the details and providing the correct information and set up for the various "commands".'},{text:"Personally, I wrote several parts of the booklet, designed the booklet, and helped in all game design parts of the project. Though we had trouble with the Parsely system at first, by the end we created a product we were incredibly happy with."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Writer, Game Designer, Graphic Designer"},{member:"Rilee Horowitz",roles:"Writer, Game Designer"},{member:"Luke Brockmann",roles:"Writer, Game Designer"}],flex:"two"}]}},{path:"/koalatea",name:"Koala-Tea",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/koalatea",itchLink:"https://annamariakoshy.itch.io/koala-tea",theme:"kt",name:"Koala-Tea",content:[{image:"/assets/images/koala.png",flex:"one"},{text:[{head:"On a Quest for the Legendary Golden Leaf",text:"Koala-Tea is a lighthearted game with an Animal Crossing feel where you chill in various tea rooms throughout the world. Speak to other animals about a legendary golden leaf you need for your dream of starting a cafe of your very own!     "}],flex:"two"},{text:[{head:"Contributions",text:"I was the primary programmer for this project, setting up the game systems and scenes. We used Ink in for the dialogue, so I was in charge of the integrations there as well, particularly in regards to the linking of variables and event triggers between the two. More atypically, I also was primarily responsible for setting up the scenes, 3D models, and sprites within Unity. I also added sound and visual effects."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Programmer, Set Designer"},{member:"Samina Trachier",roles:"Programmer, Game Designer, 3D Modeler, Artist"},{member:"Anjali Chavan",roles:"Programmer, Graphic Designer"},{member:"Maddy Sutton",roles:"Writer"},{member:"Rachel Geng",roles:"Artist"}],flex:"two"}]}},{path:"/standoff",name:"Standoff",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/standoff",theme:"kt",name:"Standoff",content:[{image:"/assets/images/standoff.jpg",flex:"one"},{text:[{head:"Shoot your friends!",text:"Standoff is a tabletop game centered around the idea of the craziest standoff theWest has ever seen. Players aim their guns at their targets, then use cards to redirect, reaim, and neutralize their fellow players' attacks. Played over the course of a few rounds, try to be the last one standing in order to win the game."}],flex:"two"},{text:[{head:"Personal Contributions",text:"Card design, game design,a lot of polishing, redesign work, etc."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Game Designer, Graphic Designer"},{member:"Rilee Horowitz",roles:"Game Designer, Graphic Designer"},{member:"Elizabeth Yuan",roles:"Artist"}],flex:"two"}]}},{path:"/1403",name:"1403",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/standoff",itchLink:"https://rileehorowitz.itch.io/1403",theme:"fot",name:"1403",content:[{image:"/assets/images/1403l.png",flex:"one"},{image:"/assets/images/1403.png",flex:"one"},{text:[{head:"What does home mean to you?",text:'The theme of the 2019 Global Game Jam was "What Does Home Mean To You", and we made a game based on Apartment 1403, a place we spent most of our time, hanging out and talking with friends. Our home was each other, and so we made this game to exemplify that. 1403 is somewhere to chill, play games, and talk.'},{text:"A.K.A. an apartment simulation where you do what you know best: play games and provide emotional support."}],flex:"two"},{float:"left",image:"https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/1403-midgame_1.png?itok=Cwn1NqRK&timestamp=1548632884",flex:"one"},{text:[{head:"Personal Contributions",text:"Dialogue systems, game designer, graphic design"}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Game Designer, Programmer, Graphic Designer, Writer"},{member:"Matt Cutts",roles:"Game Designer, Programmer, Audio Designer, Writer"},{member:"Rilee Horowitz",roles:"Game Designer, Programmer, Lighting Artist, Writer"},{member:"Luke Brockmann",roles:"Game Designer, Graphic Designer, Writer, Voice Actor"},{member:"Kevin Ray",roles:"Game Designer, Programmer, 3D Modeler, Lighting Artist"},{member:"Cindy Lin",roles:"Artist"}],flex:"two"}]}},{path:"/donutcountyclone",name:"Donut County Clone",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/donutcountyclone",itchLink:"https://annamariakoshy.itch.io/donut-county",theme:"dcc",name:"Donut County Clone",content:[{video:"/assets/videos/DCC.mp4",flex:"one"},{image:"https://img.itch.zone/aW1hZ2UvNDIzMDM5LzIxMTA0MzcucG5n/original/9UxTKG.png",flex:"one"},{image:"/assets/images/6k7aT6.png",flex:"one"},{text:[{head:"Everyone loves Donut County!",text:"This is not that. This is a clone we made of the Racoon Lagoon level from <a class='l' href='http://donutcounty.com/   '>Donut County.</a> Using that level as reference and nothing else, we recreated the models from scratch, programmed all the mechanics, and made as similar a match to that as we could."}],flex:"two"},{text:[{head:"Personal Contributions",text:'I took on a simultaneous management and programmer role in this project. I figured out and implemented the "hole" mechanic and also set up the majority of the level, putting objects in place, getting the opening "cinematic" functioning, and overall working on everything that brings it together.'},{text:"etcetc"}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Programmer, 3D Modeler, Graphic Designer"},{member:"Anjali Chavan",roles:"Programmer, 3D Modeler"},{member:"Rilee Horowitz",roles:"Programmer, 3D Modeler"},{member:"Ajali Harrison",roles:"3D Modeler"}],flex:"two"}]}},{path:"/godsforsaken",name:"Gods Forsaken",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/godsforsaken",itchLink:"https://rileehorowitz.itch.io/gods-forsaken",ttsLink:"https://steamcommunity.com/sharedfiles/filedetails/?id=2279408589&searchtext=gods+forsaken",theme:"gf",name:"Gods Forsaken",content:[{image:"https://i.imgur.com/sEOAB7f.png",flex:"one"},{image:"https://i.imgur.com/S9VsVvY.png",flex:"one"},{image:"https://i.imgur.com/QdbylbE.png",flex:"one"},{text:[{head:"Somewhere in America...",text:"A bunch of college students put together a board game based on the American Gods IP."},{text:" where players must utilize their dead bodies to solve puzzles and reach the exit. Stylized like a workplace safety training module, the levels often put the 'workers' in direct danger and require certain sacrifices to be made.",head:"A local co-op puzzle platformer"}],flex:"two"},{text:[{head:"Personal Contributions",text:"In this project, I had an all around role. From a programming and implementation perspective I created the base ragdoll character movement, statistic tracking, and blood splatter stains. From a visual design standpoint, I conceptualized and helped implement the hazard sign aesthetic and assisted in sprite design."},{text:"I also was heavily involved in integration and bug-fixing. The largest portion of my contributions was getting the various systems and pieces made by individuals working together. This, ultimately, meant I had my hands in just about every system."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Writer, Game Designer, Graphic Designer"},{member:"Matt Cutts",roles:"Writer, Game Designer"},{member:"Rilee Horowitz",roles:"Writer, Game Designer"},{member:"Luke Brockmann",roles:"Writer, Game Designer, Handwriting Artist"}],flex:"two"}]}},{path:"/namelesschatapp",name:"Nameless Chat App",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/namelesschatapp",itchLink:"https://annamariakoshy.itch.io/nameless-chat-app",theme:"nca",name:"Nameless Chat App",content:[{image:"/assets/images/nameless.png",flex:"one"},{text:[{head:"A Nameless Chat App",text:"Where you reconnect with an old friend after months of not speaking. A short interaction simulation, made entirely in Processing."},{text:"This project was made over a few weeks, as a solo project. It is an homage to the feelings of drifting apart one tackles after going to college and losing touch with friends. It also was the first attempt I made at tackling narrative systems design and conversational interactions in a game setting."}],flex:"two"}]}},{path:"/studioslaughter",name:"Studio Slaughter",component:Z,props:{urlPath:"https://www.annamariakoshy.com/#/studioslaughter",theme:"ss",name:"Studio Slaughter",content:[{image:"/assets/images/studio.png",flex:"one"},{image:"/assets/images/studioslaughter.jpg",flex:"one"},{text:[{head:"Battle Your Way Out In Studio Slaughter",text:"A four player free-for-all style board game where four movie characters must battle on the sets of Hollywood to determine who is the best star."},{text:"As players move around the board, they must pick up weapons to kill other players and awards to try and win the game. The player with 8 awards wins the game."}],flex:"two"},{text:[{head:"Contributions",text:"This was a two week project. As it was a team project, I collaborated with my peers and worked on game design. I also worked on it from a graphic design perspective, putting together the manual and components for the final board game."}],flex:"two"},{team:[{member:"Annamaria Koshy",roles:"Game Designer, Graphic Designer"},{member:"Samina Trachier",roles:"Artist, Game Designer"},{member:"Cindy Lin",roles:"Artist, Game Designer"}],flex:"two"}]}},{path:"/screenplays",name:"Screenplays",component:se,props:{urlPath:"https://www.annamariakoshy.com/#/screenplays",theme:"screen",name:"Screenplays",sps:[{}]}},{path:"/untitled",name:"Untitled",component:he,props:{urlPath:"https://www.annamariakoshy.com/#/untitled",theme:"vids",name:"Untitled",src:"https://www.youtube-nocookie.com/embed/8VE5aejPDUQ?",youtube:"https://www.youtube.com/watch?v=8VE5aejPDUQ"}}],data:function(){return{publicPath:"/"}}}),ue=a("bd8c"),de=a.n(ue);s["a"].config.productionTip=!1,s["a"].use(de.a),new s["a"]({el:"#app",router:ce,template:"<App/>",components:{App:v}})},"6ca2":function(e,t,a){},7364:function(e,t,a){},"85ec":function(e,t,a){},"8e04":function(e,t,a){"use strict";var r=a("7364"),s=a.n(r);s.a},"9ada":function(e,t,a){},abee:function(e,t,a){"use strict";var r=a("41cc"),s=a.n(r);s.a},bb23:function(e,t,a){},bb78:function(e,t,a){},c825:function(e,t,a){"use strict";var r=a("9ada"),s=a.n(r);s.a},ca39:function(e,t,a){},db7d:function(e,t,a){"use strict";var r=a("6ca2"),s=a.n(r);s.a}});
//# sourceMappingURL=app.621fc3d9.js.map