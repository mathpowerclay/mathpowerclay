(this.webpackJsonpmathpowerclay=this.webpackJsonpmathpowerclay||[]).push([[0],{28:function(e,a,t){e.exports=t(52)},33:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(12),c=t.n(r),m=t(19),i=(t(33),t(3)),s=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,l=e.onClick,r=e.buttonStyle,c=e.buttonSize,m=s.includes(r)?r:s[0],E=o.includes(c)?c:o[0];return n.a.createElement(i.Link,{to:l,className:"btn-mobile",spy:!0,smooth:!0,duration:500},n.a.createElement("button",{className:"btn ".concat(m," ").concat(E),type:t},a))};t(43);var u=function(){var e=Object(l.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!0),s=Object(m.a)(c,2),o=s[0],u=s[1],p=function(){return r(!1)},d=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(l.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement(i.Link,{to:"hero",className:"navbar-logo",onClick:p,spy:!0,smooth:!0,duration:500},"MATHPOWERCLAY\xa0",n.a.createElement("img",{src:"https://i.imgur.com/JEodSva.png"})),n.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},n.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"hero",className:"nav-links",onClick:p,spy:!0,smooth:!0,duration:500},"HOME")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"cards",className:"nav-links",onClick:p,spy:!0,smooth:!0,duration:500},"POWER CLAY\xa0",n.a.createElement("img",{src:"https://i.imgur.com/UudgPWs.png"}))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"contact",className:"nav-links-mobile",onClick:p,spy:!0,smooth:!0,duration:500},"CONTACT"))),o&&n.a.createElement(E,{buttonStyle:"btn--outline",onClick:"contact"},"CONTACT"))))};t(9),t(44);var p=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards__item"},n.a.createElement(i.Link,{className:"cards__item__link",to:e.path,spy:!0,smooth:!0,duration:500},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cards",id:"cards"},n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("h1",null,"ART IN HEAVEN:"),n.a.createElement(i.Element,{id:"cards1",name:"cards1"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(p,{src:"https://i.imgur.com/KwznpHF.png",text:"POWERglow aka red clay",label:"POWERglow",path:"POWERglow"}),n.a.createElement(p,{src:"https://i.imgur.com/XVOa3sC.png",text:"KAOLIN WHITE aka POWERGREEN",label:"POWERgreen",path:"POWERgreen"}))),n.a.createElement(i.Element,{id:"cards2",name:"cards2"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(p,{src:"https://i.imgur.com/U9if9Wc.jpg",text:"POWERPINK aka PINK CLAY",label:"POWERpink",path:"POWERpink"}),n.a.createElement(p,{src:"https://i.imgur.com/oe52KpV.jpg",text:"ATLAS UNREFINED POWERCLAY",label:"ATLAS",path:"ATLAS"}),n.a.createElement(p,{src:"https://i.imgur.com/nnGQe4r.jpg",text:"POWERCLAY POWDER ROOM MAKE UP LINE ",label:"POWDERroom",path:"POWDERroom"})))))))};t(45);var g=function(){return n.a.createElement("div",{id:"hero",className:"hero-container"},n.a.createElement("h1",null,"POWER CLAY\xa0",n.a.createElement("img",{src:"https://i.imgur.com/4Hoofgg.png"})),n.a.createElement("p",{style:{textAlign:"center"}},"\ud835\ude7c\ud835\ude8a\ud835\ude97 \ud835\udea0\ud835\ude8a\ud835\ude9c \ud835\ude96\ud835\ude8a\ud835\ude8d\ud835\ude8e \ud835\ude98\ud835\ude8f \ud835\ude8c\ud835\ude95\ud835\ude8a\ud835\udea2 & \ud835\ude9d\ud835\ude91\ud835\ude8e \ud835\ude8a\ud835\ude97\ud835\ude9c\ud835\udea0\ud835\ude8e\ud835\ude9b \ud835\ude9d\ud835\ude98 \ud835\udea2\ud835\ude98\ud835\ude9e\ud835\ude9d\ud835\ude91 \ud835\ude8a\ud835\ude97\ud835\ude8d \ud835\ude91\ud835\ude8e\ud835\ude8a\ud835\ude95\ud835\ude92\ud835\ude97\ud835\ude90 \ud835\ude92\ud835\ude9c \ud835\ude8a\ud835\ude9b\ud835\ude9d + \ud835\ude8c\ud835\ude95\ud835\ude8a\ud835\udea2"," ",n.a.createElement("br",null),"\ud835\udc7e\ud835\udc8a\ud835\udc95\ud835\udc89 \ud835\udc73\ud835\udc90\ud835\udc97\ud835\udc86, \ud835\udc87\ud835\udc93\ud835\udc90\ud835\udc8e ",n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("a",{className:"ig-link",href:"https://www.instagram.com/maththeartist/",target:"_blank","aria-label":"Instagram"},"@maththeartist")," ","&"," ",n.a.createElement("a",{className:"ig-link",href:"https://www.instagram.com/shepowerland/",target:"_blank","aria-label":"Instagram"},"@shepowerland"),n.a.createElement("br",null),n.a.createElement("a",{className:"ig-link",href:"https://www.instagram.com/mathpowerclay/",target:"_blank","aria-label":"Instagram"},"@mathpowerclay"))),n.a.createElement("div",{className:"hero-btns"},n.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:"contact"},"CONTACT"),n.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:"cards"},"POWER CLAY\xa0",n.a.createElement("img",{src:"https://i.imgur.com/mBbBQCc.png"}))))};t(46);var h=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("section",{className:"social-media"},n.a.createElement("div",{className:"social-media-wrap"},n.a.createElement("div",{className:"footer-logo"},n.a.createElement(i.Link,{to:"hero",className:"social-logo",spy:!0,smooth:!0,duration:500},"MATHPOWERCLAY\xa0",n.a.createElement("img",{src:"https://i.imgur.com/JEodSva.png"}))),n.a.createElement("small",{className:"website-rights"},"mathpowerclay \xa9 2022"),n.a.createElement("div",{className:"social-icons",style:{textAlign:"center",alignContent:"center"}},n.a.createElement("a",{className:"social-icon-link instagram",href:"mailto:mathpowerland@gmail.com",target:"_blank","aria-label":"Email"},n.a.createElement("i",{className:"fa fa-envelope"})),n.a.createElement("a",{className:"social-icon-link instagram",href:"https://www.instagram.com/mathpowerclay/",target:"_blank","aria-label":"Instagram"},n.a.createElement("i",{className:"fab fa-instagram"}))))))};var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"POWERglow",className:"powerclay",style:{backgroundImage:"url('https://i.imgur.com/KwznpHF.png')"}},n.a.createElement("div",{className:"powerclay2"},n.a.createElement("h2",null,"POWERglow aka red clay"),n.a.createElement("br",null),n.a.createElement("h3",null,"3.5 kilograms 40$ "),n.a.createElement("h3",null,"($25 to 40 shipping? tbd)"),n.a.createElement("h4",null,"refined ventilated aka sundried. "),n.a.createElement("h4",null,n.a.createElement(i.Link,{to:"hero",spy:!0,smooth:!0,duration:500},n.a.createElement("u",null,"(CLICK HERE TO SEE definition and process of ventilated clay and its benefits)"))),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"DNA RESET"),n.a.createElement("li",null,"REMOVES radiation"),n.a.createElement("li",null,"detoxifier"),n.a.createElement("li",null,"increases COLLAGEN and removes cellulite!"),n.a.createElement("li",null,"increased cell turnover"),n.a.createElement("li",null,"destroys free radicals"),n.a.createElement("li",null,"tumor removal, reduction through aspiration"),n.a.createElement("li",null,"radiation absorpbtion"),n.a.createElement("li",null,"chemical burns"),n.a.createElement("li",null,"microwave weapons blocker"),n.a.createElement("li",null,"burns"),n.a.createElement("li",null,"bullet wounds"),n.a.createElement("li",null,"dislocated bones limbs"),n.a.createElement("li",null,"arthritis"),n.a.createElement("li",null,"skin tags"),n.a.createElement("li",null,"carpel tunnel syndrome"),n.a.createElement("li",null,"post chemo detox and support"),n.a.createElement("li",null,"and the list is growing\u2026")))),n.a.createElement("div",{id:"POWERgreen",className:"powerclay",style:{backgroundImage:"url('https://i.imgur.com/oxR0lCy.jpg')"}},n.a.createElement("div",{className:"powerclay2"},n.a.createElement("h2",null,"KAOLIN WHITE aka POWERGREEN"),n.a.createElement("br",null),n.a.createElement("h3",null,"super refined: 3.5 kilo 60$ ventilated"),n.a.createElement("h3",null,"semi refined: 3.5 kilo 50$ ventilated"),n.a.createElement("h3",null,"($25 to 40 shipping? tbd)"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"seconds flat painkiller"),n.a.createElement("li",null,"anti radiation"),n.a.createElement("li",null,"detoxifier"),n.a.createElement("li",null,"removes flare ups"),n.a.createElement("li",null,"heals and eradicates"),n.a.createElement("li",null,"herpes/cold sores"),n.a.createElement("li",null,"self induced maskne acne"),n.a.createElement("li",null,"varicella"),n.a.createElement("li",null,"measles"),n.a.createElement("li",null,"mumps"),n.a.createElement("li",null,"rubella"),n.a.createElement("li",null,"staph infection"),n.a.createElement("li",null,"ELIMINATES ROSACEA"),n.a.createElement("li",null,"chickenpox"),n.a.createElement("li",null,"small pox"),n.a.createElement("li",null,"psoriasis"),n.a.createElement("li",null,"soothes most allergic reactions"),n.a.createElement("li",null,"hives"),n.a.createElement("li",null,"etc")))),n.a.createElement("div",{id:"POWERpink",className:"powerclay",style:{backgroundImage:"url('https://i.imgur.com/U9if9Wc.jpg')"}},n.a.createElement("div",{className:"powerclay2"},n.a.createElement("h2",null,"POWERPINK aka PINK CLAY"),n.a.createElement("br",null),n.a.createElement("h3",null,"semi refined: 500 grams (half kilo) granules 50$"),n.a.createElement("h3",null,"super refined: 250 grams 35$ & 500 grams (half kilo) granules 55$"),n.a.createElement("h3",null,"($25 to 40 shipping? tbd)"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"reverse aging"),n.a.createElement("li",null,"cell repair"),n.a.createElement("li",null,"detoxifier"),n.a.createElement("li",null,"toxin pull"),n.a.createElement("li",null,"refreshes skin"),n.a.createElement("li",null,"makes skin EXTREMELY soft"),n.a.createElement("li",null,"wrinkle reducer"),n.a.createElement("li",null,"varicella"),n.a.createElement("li",null,"measles"),n.a.createElement("li",null,"mumps"),n.a.createElement("li",null,"rubella"),n.a.createElement("li",null,"staph infection"),n.a.createElement("li",null,"ELIMINATES ROSACEA"),n.a.createElement("li",null,"chickenpox"),n.a.createElement("li",null,"small pox"),n.a.createElement("li",null,"psoriasis"),n.a.createElement("li",null,"soothes most allergic reactions "),n.a.createElement("li",null,"hives"),n.a.createElement("li",null,"etc")))),n.a.createElement("div",{id:"ATLAS",className:"powerclay",style:{backgroundImage:"url('https://i.imgur.com/oe52KpV.jpg')"}},n.a.createElement("div",{className:"powerclay2"},n.a.createElement("h2",null,"ATLAS UNREFINED POWERCLAY"),n.a.createElement("br",null),n.a.createElement("h3",null,"Atlas unrefined is straight out of the ground with 1 step ventilated clay refinement large chunks sundried to 90% pure."),n.a.createElement("h3",null,"3.5 kilos red 25 $"),n.a.createElement("h3",null,"($25 to 40 shipping? tbd)"),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,"BEAUTY ROCK : WAKE UP MAKE UP")))),n.a.createElement("div",{id:"POWDERroom",className:"powerclay",style:{backgroundImage:"url('https://i.imgur.com/nnGQe4r.jpg')"}},n.a.createElement("div",{className:"powerclay2"},n.a.createElement("h2",null,"POWERCLAY POWDER ROOM MAKE UP LINE"),n.a.createElement("br",null),n.a.createElement("h3",null,"with shimmering metallic mica effects all natural, no petroleum byproducts, no artificial synthetic additives, binders, and or surfactants."),n.a.createElement("h3",null,"contact for pricing"),n.a.createElement("h3",null,"(shipping tbd)"),n.a.createElement("br",null))))};var N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"contact",className:"contact-container"},n.a.createElement("span",null,n.a.createElement("a",{className:"contact-link",href:"mailto:mathpowerland@gmail.com",target:"_blank","aria-label":"Instagram"},"EMAIL: mathpowerland@gmail.com")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",null,n.a.createElement("a",{className:"contact-link",href:"https://www.instagram.com/mathpowerclay/",target:"_blank","aria-label":"Instagram"},"INSTAGRAM: mathpowerclay\xa0"))))};var f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(d,null),n.a.createElement(b,null),n.a.createElement(N,null),n.a.createElement(h,null))},k=t(25),v=t(1);var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{basename:"/mathpowerclay"},n.a.createElement(u,null),n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/",exact:!0,component:f}),n.a.createElement(v.a,{path:"/powerclay",component:b}),n.a.createElement(v.a,{path:"/contact",component:N}))))};c.a.render(n.a.createElement(w,null),document.getElementById("root"))},9:function(e,a,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.e87f1a7e.chunk.js.map