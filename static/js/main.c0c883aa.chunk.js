(this.webpackJsonpprofessionalportfolio=this.webpackJsonpprofessionalportfolio||[]).push([[0],{10:function(e,t,c){},23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(24),n=c.n(a),A=(c(34),c(15)),l=c(2),r=(c(35),c(10),c(4)),j=c(12),o=c(0);var b=function(){var e=Object(i.useState)(!1),t=Object(A.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),n=Object(A.a)(a,2),b=(n[0],n[1]),h=function(){return s(!1)},d=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(i.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)(l.b,{to:"/",className:"navbar-logo",onClick:h,children:"Santiago Hernandez"}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return s(!c)},children:Object(o.jsx)(r.a,{icon:c?j.e:j.c})}),Object(o.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/home",className:"nav-links",onClick:h,children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"projects-page",className:"nav-links",onClick:h,children:"Projects"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/about",className:"nav-links",onClick:h,children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{to:"/contact",className:"nav-links",onClick:h,children:"Contact"})}),Object(o.jsx)("li",{})]})]})})})},h=c(5),d=(c(44),c(45),c.p+"static/media/video.8de99afd.mp4"),m=c.p+"static/media/Software_Resume.b059432c.pdf";var O=function(){return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("video",{src:d,autoPlay:!0,loop:!0,muted:!0}),Object(o.jsx)("h1",{children:"RELENTLESS"}),Object(o.jsx)("p",{children:"C++ Software Developer"}),Object(o.jsx)("p",{children:"Utilizing Unreal engine for VR and gaming applications."}),Object(o.jsx)("div",{className:"hero-btns",children:Object(o.jsx)("a",{href:m,download:"SantiagosResume",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)("button",{className:"btn btn--primary btn--large",type:"button",children:["Download Resume ",Object(o.jsx)(r.a,{icon:j.d})]})})})]})};var x=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(O,{})})},u=(c(46),c(47),c(6));var g=function(){return Object(o.jsxs)("footer",{className:"footer-wrap",children:[Object(o.jsxs)("div",{className:"waves",children:[Object(o.jsx)("div",{className:"wave",id:"wave1"}),Object(o.jsx)("div",{className:"wave",id:"wave2"}),Object(o.jsx)("div",{className:"wave",id:"wave3"}),Object(o.jsx)("div",{className:"wave",id:"wave4"})]}),Object(o.jsx)("section",{className:"social-media",children:Object(o.jsxs)("div",{className:"social-media-wrap",children:[Object(o.jsx)("div",{className:"footer-logo",children:Object(o.jsx)(l.b,{to:"/",className:"social-logo",children:"Santiago Hernandez"})}),Object(o.jsx)("small",{className:"website-rights",children:"Santiago \xa9 2022"}),Object(o.jsxs)("div",{className:"social-icons",children:[Object(o.jsx)(l.b,{className:"social-icon-link",to:{pathname:"https://www.linkedin.com/in/santiago-hernandez-120199"},target:"_blank","aria-label":"Linkedin",children:Object(o.jsx)(r.a,{icon:u.d})}),Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),Object(o.jsx)(l.b,{className:"social-icon-link",to:{pathname:"https://www.instagram.com/santy_hernandez_01/"},target:"_blank","aria-label":"Instagram",children:Object(o.jsx)(r.a,{icon:u.c})}),Object(o.jsx)(l.b,{className:"social-icon-link facebook",to:{pathname:"https://www.facebook.com/profile.php?id=100002036873433"},target:"_blank","aria-label":"Facebook",children:Object(o.jsx)(r.a,{icon:u.a})})]})]})})]})},p=c(26),f=c(27),N=c(14),v=c(29),w=c(28),k=function(e){Object(v.a)(c,e);var t=Object(w.a)(c);function c(e){var i;return Object(p.a)(this,c),(i=t.call(this,e)).state={feedback:"",name:"",email:""},i.handleFeedbackChange=i.handleFeedbackChange.bind(Object(N.a)(i)),i.handleNameChange=i.handleNameChange.bind(Object(N.a)(i)),i.handleEmailChange=i.handleEmailChange.bind(Object(N.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(N.a)(i)),i}return Object(f.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"text-mailing",children:[Object(o.jsx)("input",{placeholder:"Your Name",required:!0,onChange:this.handleNameChange,value:this.state.name,className:"footer-input"}),Object(o.jsx)("input",{placeholder:"Your Email",required:!0,onChange:this.handleEmailChange,value:this.state.email,className:"footer-input"}),Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{className:"footer-input",id:"test-mailing",onChange:this.handleFeedbackChange,placeholder:"Write message here",required:!0,value:this.state.feedback,style:{width:"100%",height:"150px"}})}),Object(o.jsx)("button",{id:"email-button",className:"btn btn--primary btn--large",type:"button",onClick:this.handleSubmit,children:"Send Email"})]})}},{key:"handleFeedbackChange",value:function(e){this.setState({feedback:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){this.sendFeedback("template_s36jpq2",{message:this.state.feedback,from_name:this.state.name,reply_to:this.state.email})}},{key:"sendFeedback",value:function(e,t){window.emailjs.send("service_yn8zl2l",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here are some thoughts on the error that occured:",e)}))}}]),c}(s.a.Component);var D=function(){return Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsxs)("section",{className:"contact-subscription",children:[Object(o.jsx)("p",{className:"contact-subscription-heading",children:'"Always find ways to improve"'}),Object(o.jsx)("p",{className:"contact-subscription-text",children:"Get in touch"}),Object(o.jsx)("p",{style:{color:"#fff",paddingBottom:"10px"},children:"Email: santiagohernandez120199@gmail.com"}),Object(o.jsx)("div",{className:"input-areas",children:Object(o.jsx)(k,{})})]}),Object(o.jsx)(g,{})]})},B=(c(23),c.p+"static/media/ZeroLatency.899954be.png"),P=c.p+"static/media/Cosplay.2f6328d7.jpg",C=[{image:c.p+"static/media/ChicagoPhoto.fa2c559a.png"},{image:B},{image:P}],E=function(e){var t=e.slides,c=Object(i.useState)(0),s=Object(A.a)(c,2),a=s[0],n=s[1],l=t.length;return console.log(a),!Array.isArray(t)||t.length<=0?null:Object(o.jsxs)("section",{className:"slider",children:[Object(o.jsxs)("section",{className:"arrows",children:[Object(o.jsx)(r.a,{icon:j.a,className:"left-arrow",onClick:function(){n(0===a?l-1:a-1)}}),Object(o.jsx)(r.a,{icon:j.b,className:"right-arrow",onClick:function(){n(a===l-1?0:a+1)}})]}),C.map((function(e,t){return Object(o.jsx)("div",{className:t===a?"slide active":"slide",children:t===a&&Object(o.jsx)("img",{src:e.image,alt:"My Life",className:"image"})},t)}))]})};var R=function(e){return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsxs)("div",{className:"About-page",children:[Object(o.jsx)("div",{className:"image-wrapper",children:Object(o.jsx)(E,{slides:C})}),Object(o.jsx)("div",{className:"about-text-wrapper",children:Object(o.jsxs)("section",{className:"about-information-text",children:[Object(o.jsxs)("section",{className:"About-wrapper",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("p",{className:"information",children:"Self-taught Virtual Reality Developer located in Houston pursuing an opportunity in XR Development."})]}),Object(o.jsxs)("section",{className:"Abilities",children:[Object(o.jsxs)("section",{className:"Skills-wrapper",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsxs)("ul",{className:"list",children:[Object(o.jsx)("li",{children:"C++"}),Object(o.jsx)("li",{children:"Unreal Engine"}),Object(o.jsx)("li",{children:"Blender"}),Object(o.jsx)("li",{children:"Substance Painter"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"React JS"}),Object(o.jsx)("li",{children:"Oral Presentations"})]})]}),Object(o.jsxs)("section",{className:"Hobbies-wrapper",children:[Object(o.jsx)("h3",{children:"Hobbies"}),Object(o.jsxs)("ul",{className:"list",children:[Object(o.jsx)("li",{children:"Cosplaying"}),Object(o.jsx)("li",{children:"Dancing"}),Object(o.jsx)("li",{children:"Piano"}),Object(o.jsx)("li",{children:"Rock Climbing"}),Object(o.jsx)("li",{children:"CodeWars"})]})]})]})]})})]}),Object(o.jsx)(g,{})]})};var y=function(e){return Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(l.b,{className:"cards__item__link",to:e.path,children:[Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{src:e.src,alt:e.label+" picture",className:"cards__item__img"})})}),Object(o.jsx)("div",{className:"cards_item_info",children:Object(o.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})},Q=(c(48),c(49),c.p+"static/media/PaintingPickerIcon.1c31dda2.png"),I=c.p+"static/media/PathFinding.c58ab273.png",L=c.p+"static/media/RenegadesLogo.a0797766.jpeg",F=c.p+"static/media/SimpleShooterIcon.f2bee9f1.png",S=c.p+"static/media/ToonTanksIcon.c8bc62bd.png";var H=function(){return Object(o.jsx)("div",{className:"project_cards_container",children:Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("div",{className:"cards_container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(y,{src:Q,text:"UE4 project focused on painting in VR",label:"VR Painter",path:"/paintingpicker"}),Object(o.jsx)(y,{src:"data:image/png;base64,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",text:"Explore Different forms of VR Locomotion",label:"VR Architecture Explorer",path:"/architectureexplorer"}),Object(o.jsx)(y,{src:S,text:"Command a tank to destroy turrets",label:"Toon Tanks",path:"/toontanks"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(y,{src:L,text:"Sword based Hero Game",label:"Renegade: Kai",path:"/Renegades"}),Object(o.jsx)(y,{src:I,text:"Pathfinding Algorithm Program",label:"Pathfinding Visualizer",path:"/pathfindingvisualizer"}),Object(o.jsx)(y,{src:F,text:"Shoot and kill all enemy AI to win",label:"Simple Shooter",path:"/simpleshooter"})]})]})})})})};function G(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"toon_tanks_img",children:" Toon Tanks"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:"3rd-Person Tank game.  The objective is to destroy all enemy turrets before your tank's destroyed."}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Creating Actor class to be used as a projectile base class."}),Object(o.jsx)("li",{children:"Creating GameMode classed."}),Object(o.jsx)("li",{children:"Creating Health Component."}),Object(o.jsx)("li",{children:"Creating Widget Blueprints."}),Object(o.jsx)("li",{children:"Spawning Actors at runtime."}),Object(o.jsx)("li",{children:"Spawning Particle System."}),Object(o.jsx)("li",{children:"Understanding UPROPERTY Specifiers."}),Object(o.jsx)("li",{children:"Using Dynamic Delegates."}),Object(o.jsx)("li",{children:"Using Timers for events based on elapsed time."}),Object(o.jsx)("li",{children:"Utilizing the Reflection System in Unreal for Casting."})]}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Draw calls causing FrameRate to drop dues to spline meshes."}),Object(o.jsx)("li",{children:"Creating unique ID's for each save slot."})]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/ToonTanks"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function z(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"simple_shooter_img",children:" Simple Shooter "})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:" 3rd-Person Shooter game build using Unreal Engine. Enemy AI will chase you down, take them out to win."}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Skeletal Animations."}),Object(o.jsx)("li",{children:"Using Animation Blueprints."}),Object(o.jsx)("li",{children:"Connecting Animations to gameplay."}),Object(o.jsx)("li",{children:"using sockets to interact with meshes."}),Object(o.jsx)("li",{children:"Making Gun Actors."}),Object(o.jsx)("li",{children:"Spawning Particle Effects."}),Object(o.jsx)("li",{children:"Using Behaviour Trees to create smart AI."})]}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"Figuring out how Behaviour Trees and Blackboards worked."})}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function V(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"renegades_img",children:" Renegade: Kai"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:"Virtual Reality Sword fighting game built using Unreal Engine."}),Object(o.jsx)("h3",{children:"Notable Features"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Survival Game Mode (currently programming)"}),Object(o.jsx)("li",{children:"Katana weapon made from Blender and Substance Painter"})]}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"3D game Asset Workflow"})}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"Utilizing Inverse Kinematics for VR body rigging."})}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/RenegadeKai"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function U(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"architecture_explorer_img",children:" Architecture Explorer"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:"Virtual Reality Locomotion Demo built using Unreal Engine. You can use various forms of locomotion to explore this map."}),Object(o.jsx)("h3",{children:"Notable Features"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"Locomotion: Teleportation, climbing, walking, and blinkers."})}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Motion Sickness in VR."}),Object(o.jsx)("li",{children:"Collisions in VR."}),Object(o.jsx)("li",{children:"How climbing works in VR."}),Object(o.jsx)("li",{children:"Faders and Timers for teleporting."}),Object(o.jsx)("li",{children:"Creating Haptic Effects."})]}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"VR Headset movement causing collider problems."})}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/ArchitectureExplorer"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function M(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"bull_cow_img",children:" Bull Cow"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:" Console Game built using Unreal Engine. Guess a random the random isogram given clues "}),Object(o.jsx)("h3",{children:"Notable Features"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:" Bull: There is a letter in the correct place."}),Object(o.jsx)("li",{children:" Cow: There is a correct letter in the wrong place."}),Object(o.jsx)("li",{children:"Canvas: Create New, Save, Load, and Select"}),Object(o.jsx)("li",{children:"3D models: Made utilizing Blender"}),Object(o.jsx)("li",{children:"Painting: Through the use of Static Mesh instances"})]}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Utilizing .txt files in game development"}),Object(o.jsx)("li",{children:" Player input funtions"}),Object(o.jsx)("li",{children:"Ergonomics of VR UI."}),Object(o.jsx)("li",{children:"Utilizing Figma for UI design."}),Object(o.jsx)("li",{children:"Unreal Motion Graphics (UMG) for UI Design."}),Object(o.jsx)("li",{children:"FrameRate in VR."}),Object(o.jsx)("li",{children:"Handling Performance Bottlenecks."})]}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Draw calls causing FrameRate to drop dues to spline meshes."}),Object(o.jsx)("li",{children:"Creating unique ID's for each save slot."})]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/LightPainter"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function T(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"painting_picker_img",children:" VR Painting"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:"Virtual Reality Painting game built using Unreal Engine. Create new canvas to paint, save, and select through a VR 3D User Interface."}),Object(o.jsx)("h3",{children:"Notable Features"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Canvas: Create New, Save, Load, and Select"}),Object(o.jsx)("li",{children:"3D models: Made utilizing Blender"}),Object(o.jsx)("li",{children:"Painting: Through the use of Static Mesh instances"})]}),Object(o.jsx)("h3",{children:"Lessons Learned"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Ergonomics of VR UI."}),Object(o.jsx)("li",{children:"Utilizing Figma for UI design."}),Object(o.jsx)("li",{children:"Unreal Motion Graphics (UMG) for UI Design."}),Object(o.jsx)("li",{children:"FrameRate in VR."}),Object(o.jsx)("li",{children:"Handling Performance Bottlenecks."})]}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Draw calls causing FrameRate to drop dues to spline meshes."}),Object(o.jsx)("li",{children:"Creating unique ID's for each save slot."})]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/LightPainter"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}function W(){return Object(o.jsxs)("div",{className:"projectPage",children:[Object(o.jsx)("div",{className:"piture_wrap",children:Object(o.jsx)("h1",{className:"path_finding_img",children:" Pathfinding Visualizer"})}),Object(o.jsxs)("section",{className:"aboutProject",children:[Object(o.jsx)("h2",{children:"Project Information"}),Object(o.jsx)("p",{className:"projectInfo",children:" Pathfinding Visualizer is a React based web application. Crates a graph that calculates the shortest route between two points."}),Object(o.jsx)("h3",{children:"Notable Features"}),Object(o.jsxs)("ul",{className:"projectInfoList",children:[Object(o.jsx)("li",{children:"Pathfinding Algorithm: A*Star."}),Object(o.jsx)("li",{children:"Walls: block out nodes."}),Object(o.jsx)("li",{children:"Currently Programming more Algorithms."})]}),Object(o.jsx)("h3",{children:"My Role"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"Animating a graph based utilizing React and CSS."})}),Object(o.jsx)("h3",{children:"Project Dificulties"}),Object(o.jsx)("ul",{className:"projectInfoList",children:Object(o.jsx)("li",{children:"Resizing node graph to take into account different screen sizes."})}),Object(o.jsxs)("h4",{children:[Object(o.jsx)(l.b,{className:"social-icon-link github",to:{pathname:"https://github.com/Vidssk/Pathfind_Visualizer"},target:"_blank","aria-label":"GitHub",children:Object(o.jsx)(r.a,{icon:u.b})}),"  GitHub"]})]})]})}var J=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{path:"/",exact:!0,component:x}),Object(o.jsx)(h.b,{path:"/home",exact:!0,component:x}),Object(o.jsx)(h.b,{path:"/contact",component:D}),Object(o.jsx)(h.b,{path:"/about",component:R}),Object(o.jsx)(h.b,{path:"/projects-page",component:H}),Object(o.jsx)(h.b,{path:"/toontanks",component:G}),Object(o.jsx)(h.b,{path:"/simpleshooter",component:z}),Object(o.jsx)(h.b,{path:"/renegades",component:V}),Object(o.jsx)(h.b,{path:"/architectureexplorer",component:U}),Object(o.jsx)(h.b,{path:"/bullcowgame",component:M}),Object(o.jsx)(h.b,{path:"/paintingpicker",component:T}),Object(o.jsx)(h.b,{path:"/pathfindingvisualizer",component:W}),Object(o.jsx)(h.b,{path:"*",children:Object(o.jsx)(h.a,{to:"/"})})]})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root")),K()}},[[50,1,2]]]);
//# sourceMappingURL=main.c0c883aa.chunk.js.map