(self.webpackChunklandeshauptstaedte=self.webpackChunklandeshauptstaedte||[]).push([[648],{648:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ion_datetime:()=>Z,ion_picker:()=>K,ion_picker_column:()=>et});var o=i(2322),r=i(7505),n=i(1843),a=i(1558),s=i(4843),l=i(9691),d=i(3320);const h=(t,e,i,o)=>{if(t!==N&&t!==I){if(t===V)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===$)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===S||t===Y||t===T||t===E||t===P||t===A)return w(e);if(t===C)return D(e);if(t===z)return(o.monthNames?o.monthNames:L)[e-1];if(t===F)return(o.monthShortNames?o.monthShortNames:J)[e-1];if(t===O||t===H){if(0===e)return"12";if(e>12&&(e-=12),t===O&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===N?(o.dayNames?o.dayNames:W)[e]:(o.dayShortNames?o.dayShortNames:B)[e]}catch(r){}},c=(t,e,i,o=0,r=0)=>parseInt(`1${D(t)}${w(e)}${w(i)}${w(o)}${w(r)}`,10),p=t=>c(t.year,t.month,t.day,t.hour,t.minute),m=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,u=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,g=t=>{let e=null;if(null!=t&&""!==t&&(e=u.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=m.exec(t)),null===e)return;for(let o=1;o<8;o++)e[o]=void 0!==e[o]?parseInt(e[o],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}},f=(t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),o=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-o.getTime()},b=(t,e)=>e===V||e===$?t.hour<12?"am":"pm":e===O||e===H?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[k(e)],k=t=>{for(const e in j)if(j[e].f===t)return j[e].k},v=t=>{let e="";return void 0!==t.year?(e=D(t.year),void 0!==t.month&&(e+="-"+w(t.month),void 0!==t.day&&(e+="-"+w(t.day),void 0!==t.hour&&(e+=`T${w(t.hour)}:${w(t.minute)}:${w(t.second)}`,t.millisecond>0&&(e+="."+M(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+w(Math.floor(Math.abs(t.tzOffset/60)))+":"+w(t.tzOffset%60))))):void 0!==t.hour&&(e=w(t.hour)+":"+w(t.minute),void 0!==t.second&&(e+=":"+w(t.second),void 0!==t.millisecond&&(e+="."+M(t.millisecond)))),e},x=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},y=(t,e)=>{let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t],0===i.length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i},w=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),M=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),D=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),C="YYYY",S="YY",z="MMMM",F="MMM",Y="MM",N="DDDD",I="DDD",T="DD",E="HH",O="hh",H="h",P="mm",A="ss",V="A",$="a",j=[{f:C,k:"year"},{f:z,k:"month"},{f:N,k:"day"},{f:F,k:"month"},{f:I,k:"day"},{f:S,k:"year"},{f:Y,k:"month"},{f:T,k:"day"},{f:E,k:"hour"},{f:O,k:"hour"},{f:P,k:"minute"},{f:A,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:H,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:V,k:"ampm"},{f:$,k:"ampm"}],W=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],L=["January","February","March","April","May","June","July","August","September","October","November","December"],J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],q=[O,H,P,"m",A,"s"],Z=class{constructor(t){(0,o.r)(this,t),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-dt-"+G++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:x(this.monthNames,"monthNames"),monthShortNames:x(this.monthShortNames,"monthShortNames"),dayNames:x(this.dayNames,"dayNames"),dayShortNames:x(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),e=await a.p.create(t);this.isExpanded=!0,e.onDidDismiss().then(()=>{this.isExpanded=!1,this.setFocus()}),(0,n.a)(e,"ionPickerColChange",async t=>{const i=t.detail,o={};o[i.name]={value:i.options[i.selectedIndex].value},"ampm"!==i.name&&void 0!==this.datetimeValue.ampm&&(o.ampm={value:this.datetimeValue.ampm}),this.updateDatetimeValue(o),e.columns=this.generateColumns()}),await e.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,e,i)=>{if(!e||"string"==typeof e){const t=((t="",e="")=>{null==t&&(t=""),10!==t.length&&7!==t.length&&4!==t.length||(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,o=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-f(o,e)):o})(e,this.displayTimezone);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=g(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){void 0!==e.ampm&&void 0!==e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,t.ampm=e.ampm.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const o in t)t.hasOwnProperty(o)&&delete t[o]})(this.datetimeValue,t)}generatePickerOptions(){const t=(0,r.b)(this);this.locale={monthNames:x(this.monthNames,"monthNames"),monthShortNames:x(this.monthShortNames,"monthShortNames"),dayNames:x(this.dayNames,"dayNames"),dayShortNames:x(this.dayShortNames,"dayShortNames")};const e=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),i=e.buttons;return i&&0!==i.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const e=new Date(v(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?f(e,this.displayTimezone)/1e3/60*-1:-1*e.getTimezoneOffset(),this.value=v(this.datetimeValue)}}]),e}generateColumns(){let t=this.pickerFormat||this.displayFormat||_;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const e=(t=>{const e=[];t=t.replace(/[^\w\s]/gi," "),j.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,o)=>{j.forEach(r=>{if(t===r.f){if((t===V||t===$)&&(e.indexOf(H)<0&&e.indexOf(O)<0||-1===q.indexOf(i[o-1])))return;e.push(t)}})}),e})(t).map(t=>{const e=k(t);let i;i=this[e+"Values"]?y(this[e+"Values"],e):((t,e,i)=>{const o=[];if(t===C||t===S){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)o.push(t)}else if(t===z||t===F||t===Y||"M"===t||t===O||t===H)for(let r=1;r<13;r++)o.push(r);else if(t===N||t===I||t===T||"D"===t)for(let r=1;r<32;r++)o.push(r);else if(t===E||"H"===t)for(let r=0;r<24;r++)o.push(r);else if(t===P||"m"===t)for(let r=0;r<60;r++)o.push(r);else if(t===A||"s"===t)for(let r=0;r<60;r++)o.push(r);else t!==V&&t!==$||o.push("am","pm");return o})(t,this.datetimeMin,this.datetimeMax);const o=i.map(e=>({value:e,text:h(t,e,void 0,this.locale)})),r=((t,e)=>{const i=b(t,e);if(void 0!==i)return e!==V&&e!==$||(t.ampm=i),i;const o=g((new Date).toISOString());return b(o,e)})(this.datetimeValue,t),n=o.findIndex(t=>t.value===r);return{name:e,selectedIndex:n>=0?n:0,options:o}}),i=this.datetimeMin,o=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,o[t]=0}),this.validateColumns(U(e))}validateColumns(t){const e=new Date,i=p(this.datetimeMin),o=p(this.datetimeMax),r=t.find(t=>"year"===t.name);let n=e.getFullYear();if(r){r.options.find(t=>t.value===e.getFullYear())||(n=r.options[0].value);const t=r.selectedIndex;if(void 0!==t){const e=r.options[t];e&&(n=e.value)}}const a=this.validateColumn(t,"month",1,i,o,[n,0,0,0,0],[n,12,31,23,59]),s=4===(d=a)||6===d||9===d||11===d?30:2===d?(l=n)%4==0&&l%100!=0||l%400==0?29:28:31;var l,d;const h=this.validateColumn(t,"day",2,i,o,[n,a,0,0,0],[n,a,s,23,59]),c=this.validateColumn(t,"hour",3,i,o,[n,a,h,0,0],[n,a,h,23,59]);return this.validateColumn(t,"minute",4,i,o,[n,a,h,c,0],[n,a,h,c,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=y(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=g(this.min),i=this.datetimeMax=g(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=void 0===i.hour?23:i.hour,e.minute=e.minute||0,i.minute=void 0===i.minute?59:i.minute,e.second=e.second||0,i.second=void 0===i.second?59:i.second,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}validateColumn(t,e,i,o,r,a,s){const l=t.find(t=>t.name===e);if(!l)return 0;const d=a.slice(),h=s.slice(),p=l.options;let m=p.length-1,u=0;for(let n=0;n<p.length;n++){const t=p[n],e=t.value;d[i]=t.value,h[i]=t.value,(t.disabled=e<a[i]||e>s[i]||c(h[0],h[1],h[2],h[3],h[4])<o||c(d[0],d[1],d[2],d[3],d[4])>r)||(m=Math.min(m,n),u=Math.max(u,n))}const g=l.selectedIndex=(0,n.j)(m,l.selectedIndex,u),f=l.options[g];return f?f.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const o=[];let r=!1;if(j.forEach((n,a)=>{if(t.indexOf(n.f)>-1){const s="{"+a+"}",l=h(n.f,e[n.k],e,i);r||void 0===l||null==e[n.k]||(r=!0),o.push(s,l||""),t=t.replace(n.f,s)}}),r){for(let e=0;e<o.length;e+=2)t=t.replace(o[e],o[e+1]);return t}})(this.displayFormat||this.pickerFormat||_,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:e,disabled:i,readonly:a,isExpanded:l,el:d,placeholder:h}=this,c=(0,r.b)(this),p=t+"-lbl",m=(0,n.h)(d),u=void 0===e&&null!=h,g=void 0===e?null!=h?h:"":e,f=void 0===e?null!=h?"placeholder":void 0:"text";return m&&(m.id=p),(0,n.e)(!0,d,this.name,this.value,this.disabled),(0,o.h)(o.H,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-expanded":`${l}`,"aria-haspopup":"true","aria-labelledby":m?p:null,class:{[c]:!0,"datetime-disabled":i,"datetime-readonly":a,"datetime-placeholder":u,"in-item":(0,s.h)("ion-item",d)}},(0,o.h)("div",{class:"datetime-text",part:f},g),(0,o.h)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},U=t=>{const e=[];let i,o;for(let r=0;r<t.length;r++){i=t[r],e.push(0);for(const t of i.options)o=t.text.length,o>e[r]&&(e[r]=o)}return 2===e.length?(o=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*o+"px"):3===e.length&&(o=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=17*e[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*o+"px",t[2].align="left"),t},_="MMM D, YYYY";let G=0;Z.style={ios:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}",md:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"};const R=t=>{const e=(0,l.c)(),i=(0,l.c)(),o=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,o])},X=t=>{const e=(0,l.c)(),i=(0,l.c)(),o=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),o.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,o])},K=class{constructor(t){(0,o.r)(this,t),this.didPresent=(0,o.e)(this,"ionPickerDidPresent",7),this.willPresent=(0,o.e)(this,"ionPickerWillPresent",7),this.willDismiss=(0,o.e)(this,"ionPickerWillDismiss",7),this.didDismiss=(0,o.e)(this,"ionPickerDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,a.B)},this.dispatchCancelHandler=t=>{if((0,a.i)(t.detail.role)){const t=this.buttons.find(t=>"cancel"===t.role);this.callButtonHandler(t)}}}connectedCallback(){(0,a.e)(this.el)}async present(){await(0,a.d)(this,"pickerEnter",R,R,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,a.f)(this,t,e,"pickerLeave",X,X)}onDidDismiss(){return(0,a.g)(this.el,"ionPickerDidDismiss")}onWillDismiss(){return(0,a.g)(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}async buttonClick(t){const e=t.role;return(0,a.i)(e)?this.dismiss(void 0,e):await this.callButtonHandler(t)?this.dismiss(this.getSelected(),t.role):Promise.resolve()}async callButtonHandler(t){return!t||!1!==await(0,a.s)(t.handler,this.getSelected())}getSelected(){const t={};return this.columns.forEach((e,i)=>{const o=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:o?o.text:void 0,value:o?o.value:void 0,columnIndex:i}}),t}render(){const t=(0,r.b)(this);return(0,o.h)(o.H,{"aria-modal":"true",tabindex:"-1",class:Object.assign({[t]:!0,[`picker-${t}`]:!0},(0,s.g)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler},(0,o.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,o.h)("div",{tabindex:"0"}),(0,o.h)("div",{class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},(0,o.h)("div",{class:"picker-toolbar"},this.buttons.map(t=>(0,o.h)("div",{class:Q(t)},(0,o.h)("button",{type:"button",onClick:()=>this.buttonClick(t),class:tt(t)},t.text)))),(0,o.h)("div",{class:"picker-columns"},(0,o.h)("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(t=>(0,o.h)("ion-picker-column",{col:t})),(0,o.h)("div",{class:"picker-below-highlight"}))),(0,o.h)("div",{tabindex:"0"}))}get el(){return(0,o.i)(this)}},Q=t=>({[`picker-toolbar-${t.role}`]:void 0!==t.role,"picker-toolbar-button":!0}),tt=t=>Object.assign({"picker-button":!0,"ion-activatable":!0},(0,s.g)(t.cssClass));K.style={ios:".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}",md:".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"};const et=class{constructor(t){(0,o.r)(this,t),this.ionPickerColChange=(0,o.e)(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}colChanged(){this.refresh()}async connectedCallback(){let t=0,e=.81;"ios"===(0,r.b)(this)&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e,this.gesture=(await Promise.resolve().then(i.bind(i,8520))).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh()}disconnectedCallback(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let o=0,r=0;const{col:n,rotateFactor:a}=this,s=n.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",h=`scale(${this.scaleFactor})`,c=this.optsEl.children;for(let d=0;d<c.length;d++){const i=c[d],p=n.options[d],m=d*this.optHeight+t;let u="";if(0!==a){const t=m*a;Math.abs(t)<=90?(o=0,r=90,u=`rotateX(${t}deg) `):o=-9999}else r=0,o=m;const g=s===d;u+=`translate3d(0px,${o}px,${r}px) `,1===this.scaleFactor||g||(u+=h),this.noAnimate?(p.duration=0,i.style.transitionDuration=""):e!==p.duration&&(p.duration=e,i.style.transitionDuration=l),u!==p.transform&&(p.transform=u,i.style.transform=u),g!==p.selected&&(p.selected=g,g?i.classList.add(it):i.classList.remove(it))}this.col.prevSelected=s,i&&(this.y=t),this.lastIndex!==s&&((0,d.b)(),this.lastIndex=s)}decelerate(){if(0!==this.velocity){this.velocity*=ot,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),(0,d.h)())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation(),(0,d.a)(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,o=0;for(let r=0;r<e.length;r++)e[r].disabled||(i=Math.min(i,r),o=Math.max(o,r));this.minY=-i*this.optHeight,this.maxY=-o*this.optHeight}onMove(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=(0,n.j)(-rt,23*t.velocityY,rt),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),nt)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const e=t.deltaY>0,i=Math.abs(this.y)%this.optHeight/this.optHeight;e&&i>.5?this.velocity=-1*Math.abs(this.velocity):!e&&i<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t){let e=this.col.options.length-1,i=0;const o=this.col.options;for(let n=0;n<o.length;n++)o[n].disabled||(e=Math.min(e,n),i=Math.max(i,n));if(0!==this.velocity)return;const r=(0,n.j)(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==r||t){const t=r*this.optHeight*-1;this.velocity=0,this.update(t,nt,!0)}}render(){const t=this.col,e=(0,r.b)(this);return(0,o.h)(o.H,{class:{[e]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}},t.prefix&&(0,o.h)("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),(0,o.h)("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:t=>this.optsEl=t},t.options.map((t,e)=>(0,o.h)("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":e},t.text))),t.suffix&&(0,o.h)("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return(0,o.i)(this)}static get watchers(){return{col:["colChanged"]}}},it="picker-opt-selected",ot=.97,rt=90,nt=150;et.style={ios:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}",md:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"}}}]);