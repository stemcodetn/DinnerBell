(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"1MZ3":function(n,e,r){"use strict";r.r(e),r.d(e,"IonSpinner",function(){return o});var t=r("cBjU"),i=r("yIUm"),s={lines:{dur:1e3,lines:12,fn:function(n,e,r){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/r-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,r){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/r-n+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(n,e,r){var t=n*e/r-n+"ms",i=2*Math.PI*e/r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(n,e,r){var t=e/r,i=n*t-n+"ms",s=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}}},o=function(){function n(){this.paused=!1}return n.prototype.getName=function(){return this.name||this.config.get("spinner")||("ios"===this.mode?"lines":"crescent")},n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(i.c)(this.color),(n={},n["spinner-"+this.getName()]=!0,n["spinner-paused"]=!!this.paused||this.config.getBoolean("_testing"),n))}},n.prototype.render=function(){var n=this.getName(),e=s[n]||s.lines,r="number"==typeof this.duration&&this.duration>10?this.duration:e.dur,t=[];if(void 0!==e.circles)for(var i=0;i<e.circles;i++)t.push(a(e,r,i,e.circles));else if(void 0!==e.lines)for(i=0;i<e.lines;i++)t.push(c(e,r,i,e.lines));return t},Object.defineProperty(n,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-spinner-h{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-h{color:var(--ion-color-base)}svg.sc-ion-spinner{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl].sc-ion-spinner-h   svg.sc-ion-spinner, [dir=rtl]   .sc-ion-spinner-h   svg.sc-ion-spinner{right:0}.spinner-lines.sc-ion-spinner-h   line.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   line.sc-ion-spinner{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-h   svg.sc-ion-spinner, .spinner-lines-small.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}.spinner-bubbles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}.spinner-circles.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}.spinner-crescent.sc-ion-spinner-h   circle.sc-ion-spinner{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}.spinner-dots.sc-ion-spinner-h   circle.sc-ion-spinner{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}[dir=rtl].spinner-dots.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.spinner-paused.sc-ion-spinner-h   svg.sc-ion-spinner{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"},enumerable:!0,configurable:!0}),n}();function a(n,e,r,i){var s=n.fn(e,r,i);return s.style["animation-duration"]=e+"ms",Object(t.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(t.b)("circle",{transform:"translate(32,32)",r:s.r}))}function c(n,e,r,i){var s=n.fn(e,r,i);return s.style["animation-duration"]=e+"ms",Object(t.b)("svg",{viewBox:"0 0 64 64",style:s.style},Object(t.b)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}}}]);