(function(){function aj(){return"ckeditor";}function g(aF){return aF.elementMode==3;}function A(aF){return aF.name.replace(/\[/,"_").replace(/\]/,"_");}function i(aF){return aF.container.$;}function c(aF){return aF.document.$;}function K(aF){return aF.getSnapshot();}function M(aG,aF){aG.loadSnapshot(aF);}function T(aG){if(aG.getSelection()==null){return null;}var aF=aG.getSelection().getStartElement();if(aF&&aF.$){return aF.$;}return null;}function P(){return CKEDITOR.basePath;}function av(){return h("jsplus_breadcrumbs");}function h(aF){return CKEDITOR.plugins.getPath(aF);}function J(){return CKEDITOR.version.charAt(0)=="3"?3:4;}function E(){return"";}function r(aH,aG){if(J()==3){var aF=(aG.indexOf("jsplus_breadcrumbs_")==-1)?("jsplus_breadcrumbs_"+aG):aG;if(typeof(aH.lang[aF])!=="undefined"){return aH.lang[aF];}else{console.log("(v3) editor.lang['jsplus_breadcrumbs'] not defined");}}else{if(typeof(aH.lang["jsplus_breadcrumbs"])!=="undefined"){if(typeof(aH.lang["jsplus_breadcrumbs"][aG])!=="undefined"){return aH.lang["jsplus_breadcrumbs"][aG];}else{console.log("editor.lang['jsplus_breadcrumbs']['"+aG+"'] not defined");}}else{console.log("editor.lang['jsplus_breadcrumbs'] not defined");}}return"";}function Q(aG,aF){return O(aG,"jsplus_breadcrumbs_"+aF);}function O(aG,aF){var aH=aG.config[aF];return aH;}function q(aF,aG){S("jsplus_breadcrumbs_"+aF,aG);}function S(aF,aG){CKEDITOR.config[aF]=aG;}function ap(aH,aG){var aF=CKEDITOR.dom.element.createFromHtml(aG);if(aF.type==CKEDITOR.NODE_TEXT){aH.insertText(aG);}else{aH.insertElement(aF);}}function o(){return"";}var N=0;var C=1;var H=2;function m(aF,aI,aG){var aH=null;if(aG==N){aH=CKEDITOR.TRISTATE_DISABLED;}else{if(aG==C){aH=CKEDITOR.TRISTATE_OFF;}else{if(aG==H){aH=CKEDITOR.TRISTATE_ON;}}}if(aH!=null&&aF.ui&&aF.ui.get(aI)){aF.ui.get(aI).setState(aH);}}function L(aF,aG){aF.on("selectionChange",function(aH){aG(aH.editor);});}function B(aG,aF,aH){if(aF=="beforeGetOutputHTML"){aG.on("toDataFormat",function(aI){return aH(aG,aI.data.dataValue);},null,null,4);return;}aG.on(aF,(function(){var aI=aG;return function(){aH(aI);};})());}function s(aH,aF,aK,aI,aJ,aG){aH.addCommand(aF,{exec:aJ});aH.ui.addButton(aF,{title:r(aH,aI.replace(/^jsplus_/,"")),label:r(aH,aI.replace(/^jsplus_/,"")),icon:av()+"icons/"+aK+".png",command:aK});}function n(aF){return aF.mode=="wysiwyg";}function ae(aG,aF,aH){CKEDITOR.plugins.add(aG,{icons:aG,lang:aF,init:function(aI){aH(aI);}});}function e(){JSDialog.Config.skin=null;JSDialog.Config.templateDialog='<div class="jsdialog_plugin_jsplus_breadcrumbs jsdialog_dlg cke_dialog cke_ltr">'+'<div class="cke_dialog_body">'+'<div class="jsdialog_title cke_dialog_title">'+'<div class="jsdialog_title_text"></div>'+'<a class="jsdialog_x cke_dialog_close_button" href="javascript:void(0)" style="-webkit-user-select: none;">'+'<span class="cke_label">X</span>'+"</a>"+"</div>"+'<div class="jsdialog_content_wrap cke_dialog_contents">'+'<div class="jsdialog_content"></div>'+"</div>"+'<div class="cke_dialog_footer">'+'<div class="jsdialog_buttons cke_dialog_footer_buttons"></div>'+"</div>"+"</div>"+"</div>";JSDialog.Config.templateButton='<a><span class="cke_dialog_ui_button"></span></a>';JSDialog.Config.templateBg='<div class="jsdialog_plugin_jsplus_breadcrumbs jsdialog_bg"></div>';JSDialog.Config.classButton="cke_dialog_ui_button";JSDialog.Config.classButtonOk="cke_dialog_ui_button_ok";JSDialog.Config.contentBorders=[3,1,15,1,51];if(typeof CKEDITOR.skinName==="undefined"){CKEDITOR.skinName=CKEDITOR.skin.name;}CKEDITOR.skin.loadPart("dialog");v(document,".jsdialog_plugin_jsplus_breadcrumbs.jsdialog_bg { background-color: white; opacity: 0.5; position: fixed; left: 0; top: 0; width: 100%; height: 3000px; z-index: 11111; display: none; }"+".jsdialog_plugin_jsplus_breadcrumbs.jsdialog_dlg { font-family: Arial; padding: 0; position: fixed; z-index: 11112; background-color: white; border-radius: 5px; overflow:hidden; display: none; }"+".jsdialog_plugin_jsplus_breadcrumbs.jsdialog_show { display: block; }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_contents { font-size: 16px; padding: 10px 0 10px 7px; display: table; overflow: hidden; }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_contents_inner { display: table-cell; vertical-align: middle; }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_icon { padding-left: 100px; min-height: 64px; background-position: 10px 10px; background-repeat: no-repeat; box-sizing: content-box; }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_icon_info { background-image: url(img/info.png); }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_icon_warning { background-image: url(img/warning.png); }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_icon_error { background-image: url(img/error.png); }"+".jsdialog_plugin_jsplus_breadcrumbs .jsdialog_message_icon_confirm { background-image: url(img/confirm.png); }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_contents { margin-top: 0; border-top: none; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_footer div { outline: none; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_footer_buttons > .cke_dialog_ui_button { margin-right: 5px; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_footer_buttons > .cke_dialog_ui_button:last-child { margin-right: 0; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_title { cursor: default; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_contents { padding: 0; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_ui_button { padding: inherit; }"+".jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_ui_button:hover, .jsdialog_plugin_jsplus_breadcrumbs .cke_dialog_ui_button:focus { text-decoration: none; }");
}function F(aF,aJ,aH){if(typeof aJ=="undefined"){aJ=true;}if(typeof aH=="undefined"){aH=" ";}if(typeof(aF)=="undefined"){return"";}var aK=1000;if(aF<aK){return aF+aH+(aJ?"b":"");}var aG=["K","M","G","T","P","E","Z","Y"];var aI=-1;do{aF/=aK;++aI;}while(aF>=aK);return aF.toFixed(1)+aH+aG[aI]+(aJ?"b":"");}function ac(aF){return aF.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}function ar(aF){return aF.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}function ai(aF){var aG=document.createElement("div");aG.innerHTML=aF;return aG.childNodes;}function ao(aF){return aF.getElementsByTagName("head")[0];}function an(aF){return aF.getElementsByTagName("body")[0];}function az(aH,aJ){var aF=aH.getElementsByTagName("link");var aI=false;for(var aG=aF.length-1;aG>=0;aG--){if(aF[aG].href==aJ){aF[aG].parentNode.removeChild(aF[aG]);}}}function Z(aI,aK){if(!aI){return;}var aF=aI.getElementsByTagName("link");var aJ=false;for(var aG=0;aG<aF.length;aG++){if(aF[aG].href.indexOf(aK)!=-1){aJ=true;}}if(!aJ){var aH=aI.createElement("link");aH.href=aK;aH.type="text/css";aH.rel="stylesheet";ao(aI).appendChild(aH);}}function j(aI,aK){if(!aI){return;}var aF=aI.getElementsByTagName("script");var aJ=false;for(var aH=0;aH<aF.length;aH++){if(aF[aH].src.indexOf(aK)!=-1){aJ=true;}}if(!aJ){var aG=aI.createElement("script");aG.src=aK;aG.type="text/javascript";ao(aI).appendChild(aG);}}function aA(aF,aH,aG){Z(c(aF),aH);if(document!=c(aF)&&aG){Z(document,aH);}}function ad(aF,aH,aG){j(c(aF),aH);if(document!=c(aF)&&aG){j(document,aH);}}function ak(aG,aF){var aH=c(aG);v(aH,aF);}function v(aH,aF){var aG=aH.createElement("style");ao(aH).appendChild(aG);aG.innerHTML=aF;}function aq(aG,aF){if(aD(aG,aF)){return;}aG.className=aG.className.length==0?aF:aG.className+" "+aF;}function aw(aH,aF){var aG=a(aH);while(aG.indexOf(aF)>-1){aG.splice(aG.indexOf(aF),1);}var aI=aG.join(" ").trim();if(aI.length>0){aH.className=aI;}else{if(aH.hasAttribute("class")){aH.removeAttribute("class");}}}function a(aF){if(typeof(aF.className)==="undefined"||aF.className==null){return[];}return aF.className.split(/\s+/);}function aD(aI,aF){var aH=a(aI);for(var aG=0;aG<aH.length;aG++){if(aH[aG].toLowerCase()==aF.toLowerCase()){return true;}}return false;}function aB(aH,aI){var aG=a(aH);for(var aF=0;aF<aG.length;aF++){if(aG[aF].indexOf(aI)===0){return true;}}return false;}function U(aH){if(typeof(aH.getAttribute("style"))==="undefined"||aH.getAttribute("style")==null||aH.getAttribute("style").trim().length==0){return{};}var aJ={};var aI=aH.getAttribute("style").split(/;/);for(var aG=0;aG<aI.length;aG++){var aK=aI[aG].trim();var aF=aK.indexOf(":");if(aF>-1){aJ[aK.substr(0,aF).trim()]=aK.substr(aF+1);}else{aJ[aK]="";}}return aJ;}function ag(aH,aG){var aI=U(aH);for(var aF in aI){var aJ=aI[aF];if(aF==aG){return aJ;}}return null;}function aa(aI,aH,aF){var aJ=U(aI);for(var aG in aJ){var aK=aJ[aG];if(aG==aH&&aK==aF){return true;}}return false;}function z(aH,aG,aF){var aI=U(aH);aI[aG]=aF;p(aH,aI);}function X(aG,aF){var aH=U(aG);delete aH[aF];p(aG,aH);}function p(aG,aI){var aH=[];for(var aF in aI){aH.push(aF+":"+aI[aF]);}if(aH.length>0){aG.setAttribute("style",aH.join(";"));}else{if(aG.hasAttribute("style")){aG.removeAttribute("style");}}}function u(aJ,aG){var aH;if(Object.prototype.toString.call(aG)==="[object Array]"){aH=aG;}else{aH=[aG];}for(var aI=0;aI<aH.length;aI++){aH[aI]=aH[aI].toLowerCase();}var aF=[];for(var aI=0;aI<aJ.childNodes.length;aI++){if(aJ.childNodes[aI].nodeType==1&&aH.indexOf(aJ.childNodes[aI].tagName.toLowerCase())>-1){aF.push(aJ.childNodes[aI]);}}return aF;}function af(){var aF=false;if(aF){var aJ=window.location.hostname;var aI=0;var aG;var aH;if(aJ.length!=0){for(aG=0,l=aJ.length;aG<l;aG++){aH=aJ.charCodeAt(aG);aI=((aI<<5)-aI)+aH;aI|=0;}}if(aI!=1548386045){alert(atob("VGhpcyBpcyBkZW1vIHZlcnNpb24gb25seS4gUGxlYXNlIHB1cmNoYXNlIGl0"));return false;}}}function b(){var aG=false;if(aG){var aM=window.location.hostname;var aL=0;var aH;var aI;if(aM.length!=0){for(aH=0,l=aM.length;aH<l;aH++){aI=aM.charCodeAt(aH);aL=((aL<<5)-aL)+aI;aL|=0;}}if(aL-1548000045!=386000){var aK=document.cookie.match(new RegExp("(?:^|; )"+"jdm_jsplus_breadcrumbs".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));var aJ=aK&&decodeURIComponent(aK[1])=="1";if(!aJ){var aF=new Date();aF.setTime(aF.getTime()+(30*1000));document.cookie="jdm_jsplus_breadcrumbs=1; expires="+aF.toGMTString();var aH=document.createElement("img");aH.src=atob("aHR0cDovL2Rva3NvZnQuY29tL21lZGlhL3NhbXBsZS9kLnBocA==")+"?p=jsplus_breadcrumbs&u="+encodeURIComponent(document.URL);}}}}var k=0;var al;var Y;if(k==0){q("separator"," →");al="jsplus_breadcrumbs";Y="jsplus_breadcrumbs_current";}else{if(k==1){al="breadcrumb";Y="active";}else{if(k==2){al="breadcrumbs";Y="current";}}}function at(aG){if(!aG){return null;}for(var aF=0;aF<3;aF++){if(!aG){return null;}if((aG.tagName=="OL"||aG.tagName=="UL"||aG.tagName=="NAV")&&aD(aG,al)){return aG;}aG=aG.parentNode;}return null;
}function am(aL,aQ,aP){var aH="";if(k==0){aH=";list-style:none;padding-left:0";}var aG="";if(aH.length>0){aG+=aH;}if(aP){aG+=";margin-bottom:0";}if(aG.length>0){aG=' style="'+aG+'"';}var aJ='<ul class="'+al+'"'+aG+">\n";for(var aI=0;aI<aQ.items.length;aI++){var aR=aQ.items[aI];var aK=[];if(aR.active){aK.push(Y);}if(k==2){if(aR.unavailable){aK.push("unavailable");}}var aF=aK.join(" ");var aO="";if(k==0&&aI<aQ.items.length-1){aO+=ac(Q(aL,"separator"));}var aN="";if(k==0){aN=' style="display:inline-block;"';}var aM="";if(aP){if(k==0){aM=' style="color:rgb(7, 130, 193);text-decoration:underline"';}else{if(k==1){aM=' style="color:#2a6496"';}}}htmlItem="\t<li"+(aF.length>0?(' class="'+aF+'"'):"")+aN+">\n";htmlItem+='\t\t<a href="'+(aP?"#":aR.href)+'"'+aM+">"+aR.title+"</a>"+aO+"\n";htmlItem+="</li>\n";aJ+=htmlItem;}aJ+="</ol>\n";return aJ;}function au(aI,aG){var aK={};aK.items=[];var aN=aG.getElementsByTagName("li");for(var aH=0;aH<aN.length;aH++){var aL=aN[aH];var aM={};aM.title=aL.innerText;if(k==0){var aO=Q(aI,"separator");if(aM.title.indexOf(aO,this.length-aO.length)!==-1){aM.title=aM.title.substr(0,aM.title.length-aO.length);}}var aF=aL.getElementsByTagName("a");if(aF.length>0){var aJ=aF[0];aM.href=aJ.getAttribute("href");}else{aM.href="#";}aM.active=aD(aL,Y);if(k==2){aM.unavailable=aD(aL,"unavailable");}aK.items.push(aM);}return aK;}function ax(aH){var aF={};aF.items=[];var aK=true;var aG=0;do{var aJ=document.getElementById("jsplus_breadcrumbs_item_wrap_"+aG+"_"+A(aH));if(aJ){var aI={};aI.active=aJ.getElementsByClassName("jsplus_breadcrumbs_active")[0].checked;if(k==2){aI.unavailable=aJ.getElementsByClassName("jsplus_breadcrumbs_unavailable")[0].checked;}aI.title=aJ.getElementsByClassName("jsplus_breadcrumbs_title")[0].value;aI.href=aJ.getElementsByClassName("jsplus_breadcrumbs_href")[0].value;aF.items.push(aI);}else{aK=false;}aG++;}while(aK);return aF;}function aC(aG,aF){return am(aG,ax(aG),aF);}function ab(aH){var aF=aC(aH,true);var aG=document.getElementById("jsplus_breadcrumbs_preview_"+A(aH));aG.innerHTML=aF;}function I(aG){var aF=document.getElementById("jsplus_breadcrumbs_tbody_"+A(aG));aF.innerHTML="";}function D(aJ,aK){var aG=ax(aJ);var aF=aG.items.length==0||aG.items[aG.items.length-1].active;var aI={title:aK,href:"#",active:aF};if(k==2){aI.unavailable=false;}if(aF){for(var aH=0;aH<aG.items.length;aH++){aG.items[aH].active=false;}}aG.items.push(aI);R(aJ,aG);}function f(aH){var aJ=true;var aF=0;var aG;do{var aI=document.getElementById("jsplus_breadcrumbs_item_wrap_"+aF+"_"+A(aH));if(aI){aG=aI.getElementsByClassName("jsplus_breadcrumbs_active")[0];aG.onchange=(function(){var aK=aH;var aL=aG;return function(){t(aK,aL);};})();if(k==2){aG=aI.getElementsByClassName("jsplus_breadcrumbs_unavailable")[0];aG.onchange=(function(){var aK=aH;return function(){ab(aK);};})();}aG=aI.getElementsByClassName("jsplus_breadcrumbs_title")[0];aG.onkeyup=(function(){var aK=aH;return function(){ab(aK);};})();aG=aI.getElementsByClassName("jsplus_breadcrumbs_delete")[0];aG.onclick=(function(){var aK=aH;var aL=aG;return function(){aE(aK,aL);};})();}else{aJ=false;}aF++;}while(aJ);document.getElementById("jsplus_breadcrumbs_add_"+A(aH)).onclick=(function(){var aK=aH;return function(){W(aK);};})();}function W(aF){D(aF,"New item");f(aF);ab(aF);}function aE(aI,aH){var aG=ax(aI);if(aG.items.length==0){alert("Unable to remove the last item");return;}var aJ=aH.parentNode.parentNode.getAttribute("data-number");var aF=aG.items.length-1==aJ&&aG.items[aJ].active;aG.items.splice(aJ,1);if(aF&&aG.items.length>0){aG.items[aJ-1].active=true;}R(aI,aG);f(aI);ab(aI);}function t(aH,aI){var aK=true;var aF=0;do{var aJ=document.getElementById("jsplus_breadcrumbs_item_wrap_"+aF+"_"+A(aH));if(aJ){if(aF!=aI.parentNode.parentNode.getAttribute("data-number")){var aG=aJ.getElementsByClassName("jsplus_breadcrumbs_active")[0];aG.onchange=null;aG.checked=false;aG.onchange=(function(){var aL=aH;var aM=aG;return function(){t(aL,aM);};})();}}else{aK=false;}aF++;}while(aK);ab(aH);}var w=[];function ay(aH,aG){w[A(aH)]=aG;var aF=au(aH,aG);R(aH,aF);}function R(aI,aF){I(aI);var aH="";for(var aG=0;aG<aF.items.length;aG++){var aJ=aF.items[aG];var aK=d(aI,aG,aJ.title,aJ.href,aJ.active,aJ.unavailable);aH+=aK;}document.getElementById("jsplus_breadcrumbs_tbody_"+A(aI)).innerHTML=aH;ab(aI);f(aI);}function ah(aF){w[A(aF)]=null;I(aF);D(aF,r(aF,"sample_title_1"));D(aF,r(aF,"sample_title_2"));D(aF,r(aF,"sample_title_3"));f(aF);}function x(aG,aF){var aI=document.createElement("div");aI.innerHTML=aF;var aH=aI.childNodes[0];aG.setAttribute("style",aH.getAttribute("style"));aG.setAttribute("class",aH.getAttribute("class"));aG.innerHTML=aH.innerHTML;}function d(aJ,aG,aL,aF,aN,aK){var aH=175;var aM="";if(k==2){aM='<td style="width:21px;vertical-align: middle;padding:1px 0 8px 4px">'+'<input class="jsplus_breadcrumbs_unavailable" style="margin:4px 0 0 0" type="checkbox" '+(aK?"checked='checked'":"")+"/>"+"</td>";aH-=20;}var aI='<tr data-number="'+aG+'" id="jsplus_breadcrumbs_item_wrap_'+aG+"_"+A(aJ)+'" style="background-color:transparent">'+'<td style="width:21px;vertical-align: middle;padding:1px 0 8px 4px">'+'<input class="jsplus_breadcrumbs_active" style="margin:4px 0 0 0" type="checkbox" '+(aN?"checked='checked'":"")+"/>"+"</td>"+aM+'<td style="width:180px;padding:0"><input class="jsplus_breadcrumbs_title" style="width:175px;margin:0 5px 0 0;padding:3px 4px;border:1px solid silver;font-size:12px" value="'+ac(aL)+'"></td>'+'<td style="padding:0"><input class="jsplus_breadcrumbs_href" style="width:93%;padding:3px 4px;border:1px solid silver;font-size:12px" value="'+ac(aF)+'"></td>'+'<td style="width:25px;padding:0"><div class="jsplus_breadcrumbs_delete" style="width:22px;height:22px;text-align:center;color:white;border-radius:2px;background-color:lightcoral;font-size:17px;font-weight:bold;cursor:pointer" title="'+"Delete"+'">-</div></td>'+"</tr>";
return aI;}function V(aH){var aG=175;var aI="";if(k==2){aI='<th style="width:25px;padding:0 0 6px 0"><div style="width:20px;height:17px;text-align:center;color:white;padding-top:3px;border-radius:2px;background-color:orangered;cursor:default;font-size:12px;box-sizing:content-box" title="'+r(aH,"option_unavailable")+'">U</div></th>';aG-=20;}var aF='<style type="text/css">'+"</style>"+'<div style="font-size:14px">'+'<div style="overflow-y: auto; overflow-x:hidden;max-height:180px;padding:0 10px 10px 10px;">'+'<table style="width:485px;margin-left:0;margin-right:7px;margin-bottom:0;border-width:0">'+'<thead style="background-color: transparent">'+"<tr>"+'<th style="padding:0 0 6px 0;width:25px"><div style="width:20px;height:17px;text-align:center;color:white;padding-top:3px;border-radius:2px;background-color:rgb(102, 188, 255);cursor:default;font-size:12px;box-sizing:content-box" title="'+r(aH,"option_current")+'">C</div></th>'+aI+'<th style="padding:0 0 6px 0;text-align:center;width:180px;font-size: 15px;line-height: 22px;vertical-align: middle;">'+r(aH,"option_title")+"</th>"+'<th style="padding:0 0 6px 0;text-align:center;font-size: 15px;line-height: 22px;vertical-align: middle;">'+r(aH,"option_link")+"</th>"+'<th style="padding:0 0 6px 0;width:25px"></th>'+"</tr>"+"</thead>"+'<tbody id="jsplus_breadcrumbs_tbody_'+A(aH)+'">'+"</tbody>"+"</table>"+"</div>"+'<div style="width:100%;text-align:right;padding-top:15px;font-size:16px;">'+'<a href="#" id="jsplus_breadcrumbs_add_'+A(aH)+'" style="margin-right:20px;border-radius:2px;padding:4px 8px;background-color:rgb(31, 219, 31);color:white;font-size:12px;">'+r(aH,"button_add")+"</a>"+"</div>"+'<div style="font-size:13px;padding-left:12px">'+r(aH,"preview")+":"+"</div>"+'<div class="jsplus_breadcrumbs_preview" id="jsplus_breadcrumbs_preview_'+A(aH)+'" style="overflow:hidden;min-height:60px;max-width:480px;min-width:480px;width:495px;margin:5px 12px;box-sizing: border-box;padding:20px 10px;text-align:center;border:1px solid silver;color:#428bca">'+"</div>"+"</div>";return aF;}function G(aG){var aF=T(aG);aF=at(aF);if(aF){ay(aG,aF);}else{ah(aG);}ab(aG);}function y(aG){var aF=aC(aG);if(!w[A(aG)]){ap(aG,aF);}else{x(w[A(aG)],aF);}}CKEDITOR.plugins.add("jsplus_breadcrumbs",{lang:"en",icons:"jsplus_breadcrumbs",init:function(aF){CKEDITOR.dialog.add("jsplus_breadcrumbs"+A(aF),function(aG){return{title:r(aG,"jsplus_breadcrumbs_title"),minWidth:250,minHeight:250,resizable:false,contents:[{id:"tab1_jsplus_breadcrumbs_"+A(aG),label:"",title:"",expand:true,padding:0,elements:[{id:"elementId"+A(aG),type:"html",html:V(aG)}]}],buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton],onShow:function(){G(aG);},onOk:function(){y(aG);}};});if(aF.addMenuItems){aF.addMenuItems({"jsplus_breadcrumbs":{label:r(aF,"jsplus_breadcrumbs_title"),command:"jsplus_breadcrumbs",group:"table",order:5}});}if(aF.contextMenu){aF.contextMenu.addListener(function(aG){if(at(aG)!=null){return{"jsplus_breadcrumbs":CKEDITOR.TRISTATE_ON};}});}aF.addCommand("jsplus_breadcrumbs",new CKEDITOR.dialogCommand("jsplus_breadcrumbs"+A(aF)));aF.ui.addButton("jsplus_breadcrumbs",{title:r(aF,"jsplus_breadcrumbs_title"),icon:this.path+"icons/jsplus_breadcrumbs.png",command:"jsplus_breadcrumbs"});}});})();