(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],s[a]&&d.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},s={app:0},i=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-13c3cbb7":"6155cac4"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-13c3cbb7":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-13c3cbb7":"81b04df0"}[e]+".css",s=c.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===o||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],m.parentNode.removeChild(m),n(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){a[e]=0}));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=s[e]=[t,n]});t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}s[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/LandingPageAdeoCode/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d20":function(e,t,n){},1136:function(e,t,n){"use strict";var o=n("3bc6"),a=n.n(o);a.a},1209:function(e,t,n){"use strict";var o=n("e736"),a=n.n(o);a.a},"1ce5":function(e,t,n){"use strict";var o=n("6f99"),a=n.n(o);a.a},"1f40":function(e,t,n){},"27cd":function(e,t,n){"use strict";var o=n("530d"),a=n.n(o);a.a},"2ddb":function(e,t,n){},"347c":function(e,t,n){"use strict";var o=n("0d20"),a=n.n(o);a.a},3517:function(e,t,n){"use strict";var o=n("e001"),a=n.n(o);a.a},"3bc6":function(e,t,n){},"4d0b":function(e,t,n){"use strict";var o=n("1f40"),a=n.n(o);a.a},"530d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"header_homme"},r=i,c=n("2877"),l=Object(c["a"])(r,a,s,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("headerHome"),n("section_2"),n("section_3"),n("section_footer")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("bare_navigation"),n("div",{staticClass:"content"},[n("h3",{staticClass:"Le-carnet-de-sant-d"},[e._v("Le carnet de santé digital de la maison")]),n("h4",{staticClass:"description-produit"},[e._v("Un suivi personnalisé et une historisation complète de votre maison dans un espace 100% sécurisé.")]),n("buttonTOAccessHommy")],1)],1)},_=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"barreNavigation"},[n("router-link",{staticClass:"Home",attrs:{to:"/"}},[n("img",{staticClass:"Header-hommy",attrs:{src:"img/header-hommy.svg"}})]),e._m(0)],1)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("a",{staticClass:"Connexion",attrs:{href:"https://app.homebookplatform.com/#/login",target:"_blank"}},[e._v("Connexion")])])}],h={name:"nav"},b=h,k=(n("1136"),Object(c["a"])(b,v,g,!1,null,"259c33c5",null)),w=k.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ButtonTOAccessHommy"},[n("a",{attrs:{href:"https://app.homebookplatform.com/#/account-creation/email",target:"_blank"}},[n("div",{staticClass:"buttonMobil"},[e._v("Accéder à Hommy")])])])}],O={name:"buttonTOAccessHommy"},x=O,j=(n("fc60"),Object(c["a"])(x,C,y,!1,null,"58745f87",null)),E=j.exports,z={name:"header_home",components:{bare_navigation:w,buttonTOAccessHommy:E}},A=z,S=(n("3517"),Object(c["a"])(A,p,_,!1,null,"4f914aee",null)),$=S.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"habitation_donnes"},[n("div",{staticClass:"block_1"},[n("div",{staticClass:"Vos-habitations-vos"},[e._v("Vos habitations, vos données !")]),n("corps_de_page_engagement")],1),e._m(0)])},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block_2"},[n("img",{staticClass:"on-boarding-secured",attrs:{src:"img/on-boarding-secured.svg"}})])}],I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"corps_de_page"},[n("section",{staticClass:"conteneur"},[n("section",{staticClass:"line"},[n("div",{staticClass:"contneeur_img"},[n("img",{staticClass:"Secure-picto",attrs:{src:"img/secure-picto.svg"}})]),n("div",{staticClass:"Cest-votre-espace"},[e._v(" C’est votre espace, personne à part vous ne peut y accéder sans votre accord explicite.")])]),n("section",{staticClass:"line"},[n("div",{staticClass:"contneeur_img"},[n("img",{staticClass:"Share-picto",attrs:{src:"img/share-picto.svg"}})]),n("div",{staticClass:"Actuellement-vous-po"},[e._v(" Partagez votre habitation avec un tiers qui accédera à toute ses informations. Il pourra alors compléter tous ses détails ou ses documents, sans pour autant pouvoir la supprimer. ")])])])])}],H={name:"corps_de_page_engagement"},N=H,P=(n("6a2f"),Object(c["a"])(N,I,L,!1,null,"52d8ddd0",null)),M=P.exports,B={name:"habitation_donnes",components:{corps_de_page_engagement:M}},U=B,V=(n("7bfe"),Object(c["a"])(U,T,q,!1,null,"1faff059",null)),R=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_fonctionnalites",attrs:{id:"encre_haut_fonctionnalite"}},[n("a",{ref:"encre_haut_fonctionnalite",attrs:{href:"#encre_haut_fonctionnalite"}}),n("p",{directives:[{name:"show",rawName:"v-show",value:e.show_firstblock,expression:"show_firstblock"}],staticClass:"titre_fonctionnalite"},[e._v("Fonctionnalités")]),n("transition",{attrs:{name:"annimation",mode:"out-in"}},[e.show_firstblock?n("firstblock",{key:"first_block-P",model:{value:e.show_firstblock,callback:function(t){e.show_firstblock=t},expression:"show_firstblock"}}):n("secondblock",{key:"second_block_p",attrs:{afficher:e.show_firstblock},model:{value:e.show_firstblock,callback:function(t){e.show_firstblock=t},expression:"show_firstblock"}})],1)],1)},G=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_first_block"},[e._l(6,function(t){return n("tags",{attrs:{data_tag:e.Information_tags[t-1],class_pointeur:{conteneur_fleche:t<=3,conteneur_fleche_droite:t>=4,conteneur_fleche_annimation:e.nom_pointeur_hover==="tag-"+(t-1)},class_Bandeaux:{conteneur_texte:t<=3,conteneur_texte_droite:t>=4,annimation_beandaux_droite:e.nom_tag_hover==="tag-"+(t-1)&&t>=4,annimation_beandaux_gauche:e.nom_tag_hover==="tag-"+(t-1)&&t<=3}},nativeOn:{mouseover:function(n){return function(){return e.hover_tag(t-1)}()},mouseout:function(t){e.nom_tag_hover=null},click:function(t){return function(){return e.show_secondblock()}()}}})}),n("mockup_iphone")],2)},J=[],Y=n("cebc"),K=n("2f62"),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_tag"},[n("div",{class:e.class_Bandeaux},[e._v("En savoir plus")]),n("div",{staticClass:"tags"},[n("img",{staticClass:"Lock",attrs:{src:e.data_tag.url}}),n("div",{staticClass:"Coffre-fort-numriqu"},[e._v(e._s(e.data_tag.titre))])]),n("div",{class:e.class_pointeur},[n("div",{staticClass:"rond"}),n("div",{staticClass:"trais"})])])},Q=[],W={name:"tags",props:{data_tag:{type:Object,default:null},class_pointeur:{type:[Object,String],default:null},class_Bandeaux:{type:[Object,String],default:null}}},Z=W,ee=(n("6b78"),Object(c["a"])(Z,X,Q,!1,null,"56102c84",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"conteneur_sprite",staticClass:"Mockup-feature"},[n("div",{staticClass:"conteneur_ecran_iphone"},[n("img",{ref:"sprite",attrs:{src:"img/Sprite desktop.png",alt:"image_cadre"}})])])},oe=[],ae={name:"mockup_iphone",computed:Object(Y["a"])({},Object(K["c"])({id:"getVERSION_ACTUEL"})),mounted:function(){this.udapteTranslate()},watch:{id:function(){this.udapteTranslate()}},methods:{udapteTranslate:function(){this.$refs.sprite.style.transform="translateX("+-254*this.id+"px)"}}},se=ae,ie=(n("9678"),Object(c["a"])(se,ne,oe,!1,null,"57dc3ccb",null)),re=ie.exports,ce={name:"first_block",components:{tags:te,mockup_iphone:re},model:{props:"show_firstblock",event:"show_firstblock"},mounted:function(){this.isMobile()},computed:Object(Y["a"])({},Object(K["c"])({Information_tags:"getInformation_tags"})),data:function(){return{nom_tag_hover:null,nom_pointeur_hover:null}},methods:Object(Y["a"])({},Object(K["b"])(["modifier_version_actuel"]),{hover_tag:function(e){this.nom_tag_hover="tag-"+e,this.nom_pointeur_hover="tag-"+e,this.modifier_version_actuel({valeur_id:e})},show_secondblock:function(){this.$emit("show_firstblock",!1)},isMobile:function(){(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&!0})(navigator.userAgent||navigator.vendor||window.opera)}})},le=ce,ue=(n("8ae1"),Object(c["a"])(le,D,J,!1,null,"070c5697",null)),de=ue.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_second_block"},[n("horizontalBarre",{class:{barre_horizontal:!0,barre_horizontal_show:!e.boolean_animation,barre_horizontal_hide:e.boolean_animation}}),n("mockup_iphone",{staticClass:"Mockup-feature_on"}),n("feature"),n("croix",{nativeOn:{click:function(t){return e.close(t)}}})],1)},fe=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_horizontal_bare"},e._l(6,function(t){return n("tagsHorizontal",{attrs:{class_tag:{tags:!0,tags_animation_aller:!0,tags_border:t-1===e.VERSION_ACTUEL},data:e.Information_tags[t-1]},nativeOn:{click:function(n){return e.udapte(t-1)}}})}),1)},_e=[],ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.class_tag},[n("img",{staticClass:"Lock",attrs:{src:e.data.url}}),n("div",{staticClass:"Coffre-fort-numriqu"},[e._v(e._s(e.data.titre))])])},ge=[],he={name:"tags-horizontal",props:{data:{type:Object,default:null},class_tag:{type:[Object,String],default:null}},methods:{}},be=he,ke=(n("4d0b"),Object(c["a"])(be,ve,ge,!1,null,"09732f39",null)),we=ke.exports,Ce={name:"horizontal_bare",computed:Object(Y["a"])({},Object(K["c"])({Information_tags:"getInformation_tags",VERSION_ACTUEL:"getVERSION_ACTUEL"})),components:{tagsHorizontal:we},data:function(){return{}},methods:Object(Y["a"])({},Object(K["b"])(["modifier_version_actuel"]),{udapte:function(e){this.modifier_version_actuel({valeur_id:e})}})},ye=Ce,Oe=(n("80fd"),Object(c["a"])(ye,pe,_e,!1,null,"88dddc42",null)),xe=Oe.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_feature"},[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("div",{key:e.id},[n("h1",{staticClass:"titre"},[e._v(e._s(e.data_tag[e.id].titre))]),n("p",{staticClass:"message"},[e._v(" "+e._s(e.data_tag[e.id].message))])])])],1)},Ee=[],ze={name:"feature",computed:Object(Y["a"])({},Object(K["c"])({id:"getVERSION_ACTUEL",data_tag:"getInformation_tags"}))},Ae=ze,Se=(n("1209"),Object(c["a"])(Ae,je,Ee,!1,null,"763dd5f5",null)),$e=Se.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"croix_tags_features",staticClass:"croix_tags_features"},[n("span")])},qe=[],Ie={name:"croix"},Le=Ie,He=(n("c4b1"),Object(c["a"])(Le,Te,qe,!1,null,"195468a2",null)),Ne=He.exports,Pe={name:"second_block",components:{horizontalBarre:xe,mockup_iphone:re,feature:$e,croix:Ne},model:{props:"show_firstblock",event:"show_firstblock"},props:{boolean_animation:{type:Boolean,default:!1}},data:function(){return{}},methods:{close:function(){this.$emit("show_firstblock",!0)}}},Me=Pe,Be=(n("1ce5"),Object(c["a"])(Me,me,fe,!1,null,"213e502b",null)),Ue=Be.exports,Ve={name:"index",components:{firstblock:de,secondblock:Ue},data:function(){return{show_firstblock:!0}},watch:{show_firstblock:function(e,t){!1===e?(this.$refs.encre_haut_fonctionnalite.click(),document.body.style.overflowY="hidden"):document.body.style.overflowY="scroll"}},methods:{}},Re=Ve,Fe=(n("347c"),Object(c["a"])(Re,F,G,!1,null,"caff53d8",null)),Ge=Fe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteneur_footer"},[n("div",{staticClass:"conteneur_button"},[n("p",[e._v("Commencez à prendre soin de votre habitat")]),n("buttonTOAccessHommy")],1),e._m(0)])},Je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"conteneur_texte"},[n("div",{staticClass:"CGU"},[n("a",{attrs:{href:"cgu-hommy-app.pdf",target:"_blank"}},[e._v("CGU")])]),n("div",{staticClass:"rond"}),n("div",{staticClass:"ML"},[n("a",{attrs:{href:"https://app.homebookplatform.com/#/menu/legal",target:"_blank"}},[e._v("Mentions légal")])])])])}],Ye={name:"footer",components:{buttonTOAccessHommy:E}},Ke=Ye,Xe=(n("27cd"),Object(c["a"])(Ke,De,Je,!1,null,"b9d2d106",null)),Qe=Xe.exports,We={components:{headerHome:$,section_2:R,section_3:Ge,section_footer:Qe},name:"Home"},Ze=We,et=Object(c["a"])(Ze,m,f,!1,null,"3a1cd705",null),tt=et.exports;o["a"].use(d["a"]);var nt=new d["a"]({mode:"history",base:"/LandingPageAdeoCode/",routes:[{path:"/",name:"home",component:tt},{path:"/test",name:"test",component:function(){return n.e("chunk-13c3cbb7").then(n.bind(null,"2762"))}}]}),ot=n("bd86"),at="MODIFIER_VERSION_ACTUEL";o["a"].use(K["a"]);var st=new K["a"].Store({state:{version_acutel:null,information_tags:[{id:0,titre:"Inventaire de la maison",url:"img/lock.svg",message:"Hommy permet un suivi personnalisé de votre maison.\nSuivez facilement l'historique et les évolutions de votre logement : ses caractéristiques, ses équipements, les entretiens réalisés, etc."},{id:1,titre:"Calendrier de l’habitation",url:"img/calendar.svg",message:"Programmez vos événements à venir et faites le suivi des temps forts de votre maison.\nGardez un historique complet de la vie de tous vos équipements, de l‘achat jusqu‘à leur remplacement et programmez des notifications pour ne plus jamais rien oublier."},{id:2,titre:"Suivi des consommations",url:"img/energy.svg",message:"Connaître votre consommation électrique pour mieux la maîtriser peut vous aider à faire des économies d’énergie.\nSuivez les consommations de votre logement avec Hommy, fixez-vous un objectif de consommation annuelle et suivez sa réalisation !"},{id:3,titre:"Gestion des documents",url:"img/calendar.svg",message:"Vous bénéficiez d‘une vue globale des documents de votre habitation, centralisés dans un espace 100% sécurisé, qu'ils concerne une pièce ou un équipement particulier.\nAinsi vous conservez en toute sécurité  les informations importantes pour votre maison : notices, factures, garanties, plans, etc."},{id:4,titre:"Contacts de la maison",url:"img/worker.svg",message:"Vos contacts professionnels sont centralisés au même endroit, pour trouver le bon spécialiste au bon moment.\nDéclarez facilement les artisans qui sont intervenus chez vous et gardez enfin un nom associé à une réparation, un entretien ou à des travaux."},{id:5,titre:"Gestion multi-habitations",url:"img/share.svg",message:"Le carnet de santé de votre maison est prêt être à partagé auprès de vos proches ou de vos locataires pour qu'ils puissent suivre et compléter les informations du logement."}]},getters:{getInformation_tags:function(e){return e.information_tags},getVERSION_ACTUEL:function(e){return e.version_acutel}},mutations:Object(ot["a"])({},at,function(e,t){e.version_acutel=t}),actions:{modifier_version_actuel:function(e,t){var n=e.commit,o=t.valeur_id;n(at,o)}}}),it=n("9483");Object(it["a"])("".concat("/LandingPageAdeoCode/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:nt,store:st,render:function(e){return e(u)}}).$mount("#app")},"59a9":function(e,t,n){},6992:function(e,t,n){},"6a2f":function(e,t,n){"use strict";var o=n("59a9"),a=n.n(o);a.a},"6b78":function(e,t,n){"use strict";var o=n("aa8e"),a=n.n(o);a.a},"6f99":function(e,t,n){},"7bfe":function(e,t,n){"use strict";var o=n("bfb5"),a=n.n(o);a.a},"80fd":function(e,t,n){"use strict";var o=n("e856"),a=n.n(o);a.a},"8ae1":function(e,t,n){"use strict";var o=n("dd65"),a=n.n(o);a.a},9678:function(e,t,n){"use strict";var o=n("f762"),a=n.n(o);a.a},aa8e:function(e,t,n){},bfb5:function(e,t,n){},c4b1:function(e,t,n){"use strict";var o=n("6992"),a=n.n(o);a.a},dd65:function(e,t,n){},e001:function(e,t,n){},e736:function(e,t,n){},e856:function(e,t,n){},f762:function(e,t,n){},fc60:function(e,t,n){"use strict";var o=n("2ddb"),a=n.n(o);a.a}});
//# sourceMappingURL=app.71c7b440.js.map