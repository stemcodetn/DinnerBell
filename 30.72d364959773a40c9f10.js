(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{UIoA:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("Z2Br"),i=u("gIcY"),o=u("ZZ/e"),a=u("cdBk"),r=u("Yttj"),s=function(l,n,u,e){return new(u||(u=Promise))(function(t,i){function o(l){try{r(e.next(l))}catch(n){i(n)}}function a(l){try{r(e.throw(l))}catch(n){i(n)}}function r(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(o,a)}r((e=e.apply(l,n||[])).next())})},b=function(l,n){var u,e,t,i,o={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,e&&(t=2&i[0]?e.return:i[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,i[1])).done)return t;switch(e=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,e=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(t=(t=o.trys).length>0&&t[t.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){o.label=i[1];break}if(6===i[0]&&o.label<t[1]){o.label=t[1],t=i;break}if(t&&o.label<t[2]){o.label=t[2],o.ops.push(i);break}t[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(l,o)}catch(a){i=[6,a],e=0}finally{u=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=function(){function l(l,n,u,e,t,i,o){this.imagePicker=l,this.toastCtrl=n,this.loadingCtrl=u,this.router=e,this.formBuilder=t,this.firebaseService=i,this.webview=o}return l.prototype.ngOnInit=function(){this.resetFields()},l.prototype.resetFields=function(){this.image="./assets/imgs/default_image.jpg",this.validations_form=this.formBuilder.group({name:new i.d("",i.o.required),username:new i.d("",i.o.required),age:new i.d("",i.o.required),bio:new i.d("",i.o.required)})},l.prototype.onSubmit=function(l){var n=this;this.firebaseService.createProfile({name:l.name,username:l.username,age:l.age,bio:l.bio,image:this.image}).then(function(l){n.router.navigate(["/client"])})},l.prototype.openImagePicker=function(){var l=this;this.imagePicker.hasReadPermission().then(function(n){0==n?l.imagePicker.requestReadPermission():1==n&&l.imagePicker.getPictures({maximumImagesCount:1}).then(function(n){for(var u=0;u<n.length;u++)l.uploadImageToFirebase(n[u])},function(l){return console.log(l)})},function(l){console.log(l)})},l.prototype.uploadImageToFirebase=function(l){return s(this,void 0,void 0,function(){var n,u,e,t,i=this;return b(this,function(o){switch(o.label){case 0:return[4,this.loadingCtrl.create({message:"Please wait..."})];case 1:return n=o.sent(),[4,this.toastCtrl.create({message:"Image was updated successfully",duration:3e3})];case 2:return u=o.sent(),this.presentLoading(n),e=this.webview.convertFileSrc(l),t=Math.random().toString(36).substr(2,5),this.firebaseService.uploadImage(e,t).then(function(l){i.image=l,n.dismiss(),u.present()},function(l){console.log(l)}),[2]}})})},l.prototype.presentLoading=function(l){return s(this,void 0,void 0,function(){return b(this,function(n){switch(n.label){case 0:return[4,l.present()];case 1:return[2,n.sent()]}})})},l}(),g=function(){return function(){}}(),p=u("pMnS"),d=u("oBZk"),f=u("ZYCi"),h=e.ob({encapsulation:0,styles:[[".submit-btn[_ngcontent-%COMP%]{margin-top:40px}"]],data:{}});function m(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[],null,null,null,d.R,d.q)),e.pb(1,49152,null,0,o.B,[e.h,e.k],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[["color","secondary"]],null,null,null,d.bb,d.A)),e.pb(3,49152,null,0,o.Bb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.F,d.e)),e.pb(5,49152,null,0,o.l,[e.h,e.k],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","client"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,8).onClick(u)&&t),t},d.D,d.c)),e.pb(7,49152,null,0,o.g,[e.h,e.k],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,o.h,[[2,o.hb],o.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[],null,null,null,d.ab,d.z)),e.pb(10,49152,null,0,o.zb,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Profile"])),(l()(),e.qb(12,0,null,null,70,"ion-content",[["padding",""]],null,null,null,d.L,d.k)),e.pb(13,49152,null,0,o.u,[e.h,e.k],null,null),(l()(),e.qb(14,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,4,"ion-row",[["no-padding",""]],null,null,null,d.W,d.v)),e.pb(16,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.qb(17,0,null,0,2,"ion-col",[["offset","3"],["size","6"]],null,null,null,d.K,d.j)),e.pb(18,49152,null,0,o.t,[e.h,e.k],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.qb(19,0,null,0,0,"img",[["alt","this is the image"]],[[8,"src",4]],null,null,null,null)),(l()(),e.qb(20,0,null,null,6,"ion-row",[["no-padding",""]],null,null,null,d.W,d.v)),e.pb(21,49152,null,0,o.ib,[e.h,e.k],null,null),(l()(),e.qb(22,0,null,0,4,"ion-col",[["offset","3"],["size","6"]],null,null,null,d.K,d.j)),e.pb(23,49152,null,0,o.t,[e.h,e.k],{offset:[0,"offset"],size:[1,"size"]},null),(l()(),e.qb(24,0,null,0,2,"ion-button",[["expand","block"],["fill","outline"],["size","small"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.openImagePicker()&&e),e},d.E,d.d)),e.pb(25,49152,null,0,o.k,[e.h,e.k],{expand:[0,"expand"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Eb(-1,0,["Change Picture"])),(l()(),e.qb(27,0,null,0,55,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.zb(l,29).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.zb(l,29).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit(i.validations_form.value)&&t),t},null,null)),e.pb(28,16384,null,0,i.q,[],null,null),e.pb(29,540672,null,0,i.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Bb(2048,null,i.b,null,[i.f]),e.pb(31,16384,null,0,i.l,[[4,i.b]],null,null),(l()(),e.qb(32,0,null,null,11,"ion-item",[],null,null,null,d.U,d.t)),e.pb(33,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.qb(34,0,null,0,2,"ion-label",[["color","secondary"],["position","floating"]],null,null,null,d.V,d.u)),e.pb(35,49152,null,0,o.N,[e.h,e.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Eb(-1,0,["Full Name"])),(l()(),e.qb(37,0,null,0,6,"ion-input",[["formControlName","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,38)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,38)._handleInputEvent(u.target.value)&&t),t},d.T,d.s)),e.pb(38,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,i.i,function(l){return[l]},[o.Lb]),e.pb(40,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Bb(2048,null,i.j,null,[i.e]),e.pb(42,16384,null,0,i.k,[[4,i.j]],null,null),e.pb(43,49152,null,0,o.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.qb(44,0,null,null,11,"ion-item",[],null,null,null,d.U,d.t)),e.pb(45,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.qb(46,0,null,0,2,"ion-label",[["color","secondary"],["position","floating"]],null,null,null,d.V,d.u)),e.pb(47,49152,null,0,o.N,[e.h,e.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Eb(-1,0,["Username"])),(l()(),e.qb(49,0,null,0,6,"ion-input",[["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,50)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,50)._handleInputEvent(u.target.value)&&t),t},d.T,d.s)),e.pb(50,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,i.i,function(l){return[l]},[o.Lb]),e.pb(52,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Bb(2048,null,i.j,null,[i.e]),e.pb(54,16384,null,0,i.k,[[4,i.j]],null,null),e.pb(55,49152,null,0,o.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.qb(56,0,null,null,11,"ion-item",[],null,null,null,d.U,d.t)),e.pb(57,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.qb(58,0,null,0,2,"ion-label",[["color","secondary"],["position","floating"]],null,null,null,d.V,d.u)),e.pb(59,49152,null,0,o.N,[e.h,e.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Eb(-1,0,["Age"])),(l()(),e.qb(61,0,null,0,6,"ion-input",[["formControlName","age"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,62)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,62)._handleInputEvent(u.target.value)&&t),t},d.T,d.s)),e.pb(62,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,i.i,function(l){return[l]},[o.Lb]),e.pb(64,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Bb(2048,null,i.j,null,[i.e]),e.pb(66,16384,null,0,i.k,[[4,i.j]],null,null),e.pb(67,49152,null,0,o.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.qb(68,0,null,null,11,"ion-item",[],null,null,null,d.U,d.t)),e.pb(69,49152,null,0,o.H,[e.h,e.k],null,null),(l()(),e.qb(70,0,null,0,2,"ion-label",[["color","secondary"],["position","floating"]],null,null,null,d.V,d.u)),e.pb(71,49152,null,0,o.N,[e.h,e.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Eb(-1,0,["Bio"])),(l()(),e.qb(73,0,null,0,6,"ion-input",[["formControlName","bio"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,74)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,74)._handleInputEvent(u.target.value)&&t),t},d.T,d.s)),e.pb(74,16384,null,0,o.Lb,[e.k],null,null),e.Bb(1024,null,i.i,function(l){return[l]},[o.Lb]),e.pb(76,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.i],[2,i.s]],{name:[0,"name"]},null),e.Bb(2048,null,i.j,null,[i.e]),e.pb(78,16384,null,0,i.k,[[4,i.j]],null,null),e.pb(79,49152,null,0,o.G,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.qb(80,0,null,null,2,"ion-button",[["class","submit-btn"],["expand","block"],["type","submit"]],null,null,null,d.E,d.d)),e.pb(81,49152,null,0,o.k,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Eb(-1,0,["Save"]))],function(l,n){var u=n.component;l(n,3,0,"secondary"),l(n,7,0,"client"),l(n,8,0,"client"),l(n,18,0,"3","6"),l(n,23,0,"3","6"),l(n,25,0,"block","outline","small"),l(n,29,0,u.validations_form),l(n,35,0,"secondary","floating"),l(n,40,0,"name"),l(n,43,0,"text"),l(n,47,0,"secondary","floating"),l(n,52,0,"username"),l(n,55,0,"text"),l(n,59,0,"secondary","floating"),l(n,64,0,"age"),l(n,67,0,"text"),l(n,71,0,"secondary","floating"),l(n,76,0,"bio"),l(n,79,0,"text"),l(n,81,0,!u.validations_form.valid,"block","submit")},function(l,n){l(n,19,0,n.component.image),l(n,27,0,e.zb(n,31).ngClassUntouched,e.zb(n,31).ngClassTouched,e.zb(n,31).ngClassPristine,e.zb(n,31).ngClassDirty,e.zb(n,31).ngClassValid,e.zb(n,31).ngClassInvalid,e.zb(n,31).ngClassPending),l(n,37,0,e.zb(n,42).ngClassUntouched,e.zb(n,42).ngClassTouched,e.zb(n,42).ngClassPristine,e.zb(n,42).ngClassDirty,e.zb(n,42).ngClassValid,e.zb(n,42).ngClassInvalid,e.zb(n,42).ngClassPending),l(n,49,0,e.zb(n,54).ngClassUntouched,e.zb(n,54).ngClassTouched,e.zb(n,54).ngClassPristine,e.zb(n,54).ngClassDirty,e.zb(n,54).ngClassValid,e.zb(n,54).ngClassInvalid,e.zb(n,54).ngClassPending),l(n,61,0,e.zb(n,66).ngClassUntouched,e.zb(n,66).ngClassTouched,e.zb(n,66).ngClassPristine,e.zb(n,66).ngClassDirty,e.zb(n,66).ngClassValid,e.zb(n,66).ngClassInvalid,e.zb(n,66).ngClassPending),l(n,73,0,e.zb(n,78).ngClassUntouched,e.zb(n,78).ngClassTouched,e.zb(n,78).ngClassPristine,e.zb(n,78).ngClassDirty,e.zb(n,78).ngClassValid,e.zb(n,78).ngClassInvalid,e.zb(n,78).ngClassPending)})}function v(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-profile",[],null,null,null,m,h)),e.pb(1,114688,null,0,c,[a.a,o.Mb,o.Fb,f.m,i.c,t.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var k=e.mb("app-profile",c,v,{},{},[]),y=u("Ip0R");u.d(n,"ProfilePageModuleNgFactory",function(){return z});var z=e.nb(g,[],function(l){return e.wb([e.xb(512,e.j,e.cb,[[8,[p.a,k]],[3,e.j],e.x]),e.xb(4608,y.k,y.j,[e.u,[2,y.t]]),e.xb(4608,i.r,i.r,[]),e.xb(4608,i.c,i.c,[]),e.xb(4608,o.b,o.b,[e.z,e.g]),e.xb(4608,o.Gb,o.Gb,[o.b,e.j,e.q]),e.xb(4608,o.Jb,o.Jb,[o.b,e.j,e.q]),e.xb(4608,y.f,y.f,[y.g]),e.xb(1073742336,y.b,y.b,[]),e.xb(1073742336,i.p,i.p,[]),e.xb(1073742336,i.g,i.g,[]),e.xb(1073742336,i.n,i.n,[]),e.xb(1073742336,o.Db,o.Db,[]),e.xb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),e.xb(1073742336,g,g,[]),e.xb(1024,f.k,function(){return[[{path:"",component:c}]]},[])])})}}]);