var swfobject=function(){function aq(){if(!at){try{var e=aC.getElementsByTagName("body")[0].appendChild(aC.createElement("span"));e.parentNode.removeChild(e);}catch(d){return;}at=!0;for(var e=an.length,i=0;i<e;i++){an[i]();}}}function Z(d){at?d():an[an.length]=d;}function Y(e){if(typeof ay.addEventListener!=aA){ay.addEventListener("load",e,!1);}else{if(typeof aC.addEventListener!=aA){aC.addEventListener("load",e,!1);}else{if(typeof ay.attachEvent!=aA){c(ay,"onload",e);}else{if("function"==typeof ay.onload){var d=ay.onload;ay.onload=function(){d();e();};}else{ay.onload=e;}}}}}function b(){var e=aC.getElementsByTagName("body")[0],d=aC.createElement(au);d.setAttribute("type",am);var l=e.appendChild(d);if(l){var i=0;(function(){if(typeof l.GetVariable!=aA){var m=l.GetVariable("$version");m&&(m=m.split(" ")[1].split(","),aB.pv=[parseInt(m[0],10),parseInt(m[1],10),parseInt(m[2],10)]);}else{if(10>i){i++;setTimeout(arguments.callee,10);return;}}e.removeChild(d);l=null;ah();})();}else{ah();}}function ah(){var s=aw.length;if(0<s){for(var r=0;r<s;r++){var q=aw[r].id,n=aw[r].callbackFn,m={success:!1,id:q};if(0<aB.pv[0]){var p=ax(q);if(p){if(al(aw[r].swfVersion)&&!(aB.wk&&312>aB.wk)){ar(q,!0),n&&(m.success=!0,m.ref=ag(q),n(m));}else{if(aw[r].expressInstall&&af()){m={};m.data=aw[r].expressInstall;m.width=p.getAttribute("width")||"0";m.height=p.getAttribute("height")||"0";p.getAttribute("class")&&(m.styleclass=p.getAttribute("class"));p.getAttribute("align")&&(m.align=p.getAttribute("align"));for(var l={},p=p.getElementsByTagName("param"),i=p.length,e=0;e<i;e++){"movie"!=p[e].getAttribute("name").toLowerCase()&&(l[p[e].getAttribute("name")]=p[e].getAttribute("value"));}ae(m,l,q,n);}else{a(p),n&&n(m);}}}}else{if(ar(q,!0),n){if((q=ag(q))&&typeof q.SetVariable!=aA){m.success=!0,m.ref=q;}n(m);}}}}}function ag(e){var d=null;if((e=ax(e))&&"OBJECT"==e.nodeName){typeof e.SetVariable!=aA?d=e:(e=e.getElementsByTagName(au)[0])&&(d=e);}return d;}function af(){return !ak&&al("6.0.65")&&(aB.win||aB.mac)&&!(aB.wk&&312>aB.wk);}function ae(e,d,m,l){ak=!0;ad=l||null;X={success:!1,id:m};var i=ax(m);if(i){"OBJECT"==i.nodeName?(ao=ac(i),aj=null):(ao=i,aj=m);e.id=o;if(typeof e.width==aA||!/%$/.test(e.width)&&310>parseInt(e.width,10)){e.width="310";}if(typeof e.height==aA||!/%$/.test(e.height)&&137>parseInt(e.height,10)){e.height="137";}aC.title=aC.title.slice(0,47)+" - Flash Player Installation";l=aB.ie&&aB.win?"ActiveX":"PlugIn";l="MMredirectURL="+ay.location.toString().replace(/&/g,"%26")+"&MMplayerType="+l+"&MMdoctitle="+aC.title;d.flashvars=typeof d.flashvars!=aA?d.flashvars+("&"+l):l;aB.ie&&(aB.win&&4!=i.readyState)&&(l=aC.createElement("div"),m+="SWFObjectNew",l.setAttribute("id",m),i.parentNode.insertBefore(l,i),i.style.display="none",function(){i.readyState==4?i.parentNode.removeChild(i):setTimeout(arguments.callee,10);}());ab(e,d,m);}}function a(e){if(aB.ie&&aB.win&&4!=e.readyState){var d=aC.createElement("div");e.parentNode.insertBefore(d,e);d.parentNode.replaceChild(ac(e),d);e.style.display="none";(function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10);})();}else{e.parentNode.replaceChild(ac(e),e);}}function ac(e){var d=aC.createElement("div");if(aB.win&&aB.ie){d.innerHTML=e.innerHTML;}else{if(e=e.getElementsByTagName(au)[0]){if(e=e.childNodes){for(var l=e.length,i=0;i<l;i++){!(1==e[i].nodeType&&"PARAM"==e[i].nodeName)&&8!=e[i].nodeType&&d.appendChild(e[i].cloneNode(!0));}}}}return d;}function ab(r,q,p){var n,m=ax(p);if(aB.wk&&312>aB.wk){return n;}if(m){if(typeof r.id==aA&&(r.id=p),aB.ie&&aB.win){var d="",l;for(l in r){r[l]!=Object.prototype[l]&&("data"==l.toLowerCase()?q.movie=r[l]:"styleclass"==l.toLowerCase()?d+=' class="'+r[l]+'"':"classid"!=l.toLowerCase()&&(d+=" "+l+'="'+r[l]+'"'));}l="";for(var i in q){q[i]!=Object.prototype[i]&&(l+='<param name="'+i+'" value="'+q[i]+'" />');}m.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+d+">"+l+"</object>";ai[ai.length]=r.id;n=ax(r.id);}else{i=aC.createElement(au);i.setAttribute("type",am);for(var e in r){r[e]!=Object.prototype[e]&&("styleclass"==e.toLowerCase()?i.setAttribute("class",r[e]):"classid"!=e.toLowerCase()&&i.setAttribute(e,r[e]));}for(d in q){q[d]!=Object.prototype[d]&&"movie"!=d.toLowerCase()&&(r=i,l=d,e=q[d],p=aC.createElement("param"),p.setAttribute("name",l),p.setAttribute("value",e),r.appendChild(p));}m.parentNode.replaceChild(i,m);n=i;}}return n;}function k(e){var d=ax(e);d&&"OBJECT"==d.nodeName&&(aB.ie&&aB.win?(d.style.display="none",function(){if(4==d.readyState){var l=ax(e);if(l){for(var i in l){"function"==typeof l[i]&&(l[i]=null);}l.parentNode.removeChild(l);}}else{setTimeout(arguments.callee,10);}}()):d.parentNode.removeChild(d));}function ax(e){var d=null;try{d=aC.getElementById(e);}catch(i){}return d;}function c(e,d,i){e.attachEvent(d,i);ap[ap.length]=[e,d,i];}function al(e){var d=aB.pv,e=e.split(".");e[0]=parseInt(e[0],10);e[1]=parseInt(e[1],10)||0;e[2]=parseInt(e[2],10)||0;return d[0]>e[0]||d[0]==e[0]&&d[1]>e[1]||d[0]==e[0]&&d[1]==e[1]&&d[2]>=e[2]?!0:!1;
}function j(e,d,m,l){if(!aB.ie||!aB.mac){var i=aC.getElementsByTagName("head")[0];if(i){m=m&&"string"==typeof m?m:"screen";l&&(aa=az=null);if(!az||aa!=m){l=aC.createElement("style"),l.setAttribute("type","text/css"),l.setAttribute("media",m),az=i.appendChild(l),aB.ie&&(aB.win&&typeof aC.styleSheets!=aA&&0<aC.styleSheets.length)&&(az=aC.styleSheets[aC.styleSheets.length-1]),aa=m;}aB.ie&&aB.win?az&&typeof az.addRule==au&&az.addRule(e,d):az&&typeof aC.createTextNode!=aA&&az.appendChild(aC.createTextNode(e+" {"+d+"}"));}}}function ar(e,d){if(h){var i=d?"visible":"hidden";at&&ax(e)?ax(e).style.visibility=i:j("#"+e,"visibility:"+i);}}function g(d){return null!=/[\\\"<>\.;]/.exec(d)&&typeof encodeURIComponent!=aA?encodeURIComponent(d):d;}var aA="undefined",au="object",am="application/x-shockwave-flash",o="SWFObjectExprInst",ay=window,aC=document,av=navigator,f=!1,an=[function(){f?b():ah();}],aw=[],ai=[],ap=[],ao,aj,ad,X,at=!1,ak=!1,az,aa,h=!0,aB=function(){var s=typeof aC.getElementById!=aA&&typeof aC.getElementsByTagName!=aA&&typeof aC.createElement!=aA,r=av.userAgent.toLowerCase(),q=av.platform.toLowerCase(),n=q?/win/.test(q):/win/.test(r),q=q?/mac/.test(q):/mac/.test(r),r=/webkit/.test(r)?parseFloat(r.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,m=!+"\v1",p=[0,0,0],l=null;if(typeof av.plugins!=aA&&typeof av.plugins["Shockwave Flash"]==au){if((l=av.plugins["Shockwave Flash"].description)&&!(typeof av.mimeTypes!=aA&&av.mimeTypes[am]&&!av.mimeTypes[am].enabledPlugin)){f=!0,m=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),p[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),p[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),p[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof ay.ActiveXObject!=aA){try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(i&&(l=i.GetVariable("$version"))){m=!0,l=l.split(" ")[1].split(","),p=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)];}}catch(d){}}}return{w3:s,pv:p,wk:r,ie:m,win:n,mac:q};}();(function(){aB.w3&&((typeof aC.readyState!=aA&&"complete"==aC.readyState||typeof aC.readyState==aA&&(aC.getElementsByTagName("body")[0]||aC.body))&&aq(),at||(typeof aC.addEventListener!=aA&&aC.addEventListener("DOMContentLoaded",aq,!1),aB.ie&&aB.win&&(aC.attachEvent("onreadystatechange",function(){"complete"==aC.readyState&&(aC.detachEvent("onreadystatechange",arguments.callee),aq());}),ay==top&&function(){if(!at){try{aC.documentElement.doScroll("left");}catch(d){setTimeout(arguments.callee,0);return;}aq();}}()),aB.wk&&function(){at||(/loaded|complete/.test(aC.readyState)?aq():setTimeout(arguments.callee,0));}(),Y(aq)));})();(function(){aB.ie&&aB.win&&window.attachEvent("onunload",function(){for(var e=ap.length,d=0;d<e;d++){ap[d][0].detachEvent(ap[d][1],ap[d][2]);}e=ai.length;for(d=0;d<e;d++){k(ai[d]);}for(var l in aB){aB[l]=null;}aB=null;for(var i in swfobject){swfobject[i]=null;}swfobject=null;});})();return{registerObject:function(i,e,n,l){if(aB.w3&&i&&e){var m={};m.id=i;m.swfVersion=e;m.expressInstall=n;m.callbackFn=l;aw[aw.length]=m;ar(i,!1);}else{l&&l({success:!1,id:i});}},getObjectById:function(d){if(aB.w3){return ag(d);}},embedSWF:function(w,v,u,t,s,e,r,q,p,l){var i={success:!1,id:v};aB.w3&&!(aB.wk&&312>aB.wk)&&w&&v&&u&&t&&s?(ar(v,!1),Z(function(){u+="";t+="";var x={};if(p&&typeof p===au){for(var d in p){x[d]=p[d];}}x.data=w;x.width=u;x.height=t;d={};if(q&&typeof q===au){for(var n in q){d[n]=q[n];}}if(r&&typeof r===au){for(var m in r){d.flashvars=typeof d.flashvars!=aA?d.flashvars+("&"+m+"="+r[m]):m+"="+r[m];}}if(al(s)){n=ab(x,d,v),x.id==v&&ar(v,!0),i.success=!0,i.ref=n;}else{if(e&&af()){x.data=e;ae(x,d,v,l);return;}ar(v,!0);}l&&l(i);})):l&&l(i);},switchOffAutoHideShow:function(){h=!1;},ua:aB,getFlashPlayerVersion:function(){return{major:aB.pv[0],minor:aB.pv[1],release:aB.pv[2]};},hasFlashPlayerVersion:al,createSWF:function(e,d,i){if(aB.w3){return ab(e,d,i);}},showExpressInstall:function(i,e,m,l){aB.w3&&af()&&ae(i,e,m,l);},removeSWF:function(d){aB.w3&&k(d);},createCSS:function(i,e,m,l){aB.w3&&j(i,e,m,l);},addDomLoadEvent:Z,addLoadEvent:Y,getQueryParamValue:function(e){var d=aC.location.search||aC.location.hash;if(d){/\?/.test(d)&&(d=d.split("?")[1]);if(null==e){return g(d);}for(var d=d.split("&"),i=0;i<d.length;i++){if(d[i].substring(0,d[i].indexOf("="))==e){return g(d[i].substring(d[i].indexOf("=")+1));}}}return"";},expressInstallCallback:function(){if(ak){var d=ax(o);d&&ao&&(d.parentNode.replaceChild(ao,d),aj&&(ar(aj,!0),aB.ie&&aB.win&&(ao.style.display="block")),ad&&ad(X));ak=!1;}}};}();