(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{HUQl:function(e,n,i){"use strict";i.r(n),i.d(n,"IonLoading",function(){return p}),i.d(n,"IonLoadingController",function(){return u});var t=i("B5Ai"),o=i("cBjU"),r=i("M4MB"),a=i("yIUm");function s(e,n){var i=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var o=new e;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(i.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))}function d(e,n){var i=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var o=new e;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(i.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))}function c(e,n){var i=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var o=new e;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(i.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))}function l(e,n){var i=new e,t=new e;t.addElement(n.querySelector("ion-backdrop"));var o=new e;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(i.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))}var p=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentWillLoad=function(){void 0===this.spinner&&(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},e.prototype.onBackdropTap=function(){this.dismiss(void 0,r.a)},e.prototype.present=function(){return t.a(this,void 0,void 0,function(){var e=this;return t.c(this,function(n){switch(n.label){case 0:return[4,Object(r.c)(this,"loadingEnter",s,c,void 0)];case 1:return n.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration+10)),[2]}})})},e.prototype.dismiss=function(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.d)(this,e,n,"loadingLeave",d,l)},e.prototype.onDidDismiss=function(){return Object(r.e)(this.el,"ionLoadingDidDismiss")},e.prototype.onWillDismiss=function(){return Object(r.e)(this.el,"ionLoadingWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:4e4+this.overlayIndex},class:Object.assign({},Object(a.a)(this.cssClass),{"loading-translucent":this.translucent})}},e.prototype.render=function(){return[Object(o.b)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.b)("div",{class:"loading-wrapper",role:"dialog"},this.spinner&&Object(o.b)("div",{class:"loading-spinner"},Object(o.b)("ion-spinner",{name:this.spinner})),this.message&&Object(o.b)("div",{class:"loading-content"},this.message))]},Object.defineProperty(e,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}.loading-translucent.sc-ion-loading-ios-h   .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),u=function(){function e(){}return e.prototype.create=function(e){return Object(r.f)(this.doc.createElement("ion-loading"),e)},e.prototype.dismiss=function(e,n,i){return Object(r.g)(this.doc,e,n,"ion-loading",i)},e.prototype.getTop=function(){return t.a(this,void 0,void 0,function(){return t.c(this,function(e){return[2,Object(r.h)(this.doc,"ion-loading")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);