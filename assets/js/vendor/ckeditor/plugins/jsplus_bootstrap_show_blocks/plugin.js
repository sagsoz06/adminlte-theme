(function(){function an(){return"ckeditor";}function d(ar){return ar.elementMode==3;}function am(ar){return ar.name.replace(/\[/,"_").replace(/\]/,"_");}function ap(ar){return ar.container.$;}function f(ar){return ar.document.$;}function ah(ar){return ar.getSnapshot();}function A(at,ar){at.loadSnapshot(ar);}function w(at){if(at.getSelection()==null){return null;}var ar=at.getSelection().getStartElement();if(ar&&ar.$){return ar.$;}return null;}function r(){return CKEDITOR.basePath;}function Z(){return b("jsplus_bootstrap_show_blocks");}function b(ar){return CKEDITOR.plugins.getPath(ar);}function H(){return CKEDITOR.version.charAt(0)=="3"?3:4;}function v(){return"";}function Y(au,at){if(H()==3){var ar=(at.indexOf("jsplus_bootstrap_show_blocks_")==-1)?("jsplus_bootstrap_show_blocks_"+at):at;if(typeof(au.lang[ar])!=="undefined"){return au.lang[ar];}else{console.log("(v3) editor.lang['jsplus_bootstrap_show_blocks'] not defined");}}else{if(typeof(au.lang["jsplus_bootstrap_show_blocks"])!=="undefined"){if(typeof(au.lang["jsplus_bootstrap_show_blocks"][at])!=="undefined"){return au.lang["jsplus_bootstrap_show_blocks"][at];}else{console.log("editor.lang['jsplus_bootstrap_show_blocks']['"+at+"'] not defined");}}else{console.log("editor.lang['jsplus_bootstrap_show_blocks'] not defined");}}return"";}function y(at,ar){return J(at,"jsplus_bootstrap_show_blocks_"+ar);}function J(at,ar){var au=at.config[ar];return au;}function ai(ar,at){ao("jsplus_bootstrap_show_blocks_"+ar,at);}function ao(ar,at){CKEDITOR.config[ar]=at;}function C(au,at){var ar=CKEDITOR.dom.element.createFromHtml(at);if(ar.type==CKEDITOR.NODE_TEXT){au.insertText(at);}else{au.insertElement(ar);}}function O(){return"";}var P=0;var h=1;var ad=2;function o(ar,av,at){var au=null;if(at==P){au=CKEDITOR.TRISTATE_DISABLED;}else{if(at==h){au=CKEDITOR.TRISTATE_OFF;}else{if(at==ad){au=CKEDITOR.TRISTATE_ON;}}}if(au!=null&&ar.ui&&ar.ui.get(av)){ar.ui.get(av).setState(au);}}function M(ar,at){ar.on("selectionChange",function(au){at(au.editor);});}function ae(at,ar,au){if(ar=="beforeGetOutputHTML"){at.on("toDataFormat",function(av){return au(at,av.data.dataValue);},null,null,4);return;}if(ar=="keyDown"){at.on("key",(function(){var aw=at;var av=au;return function(ax){av(aw,ax.data.keyCode,ax);};})());return;}at.on(ar,(function(){var av=at;return function(){au(av);};})());}function Q(ar){ar.cancel();}function U(av,ar,ay,aw,ax,au,at){if(at&&at!=null&&J(av,at)===true){ay+="_bw";}av.addCommand(ar,{exec:ax});av.ui.addButton(ar,{title:Y(av,aw.replace(/^jsplus_/,"")),label:Y(av,aw.replace(/^jsplus_/,"")),icon:Z()+"icons/"+ay+".png",command:ar});}function I(ar){return ar.mode=="wysiwyg";}function W(at,ar,au){CKEDITOR.plugins.add(at,{icons:at,lang:ar,init:function(av){au(av);}});}function T(){JSDialog.Config.skin=null;JSDialog.Config.templateDialog='<div class="jsdialog_plugin_jsplus_bootstrap_show_blocks jsdialog_dlg cke_dialog cke_ltr">'+'<div class="cke_dialog_body">'+'<div class="jsdialog_title cke_dialog_title">'+'<div class="jsdialog_title_text"></div>'+'<a class="jsdialog_x cke_dialog_close_button" href="javascript:void(0)" style="-webkit-user-select: none;">'+'<span class="cke_label">X</span>'+"</a>"+"</div>"+'<div class="jsdialog_content_wrap cke_dialog_contents">'+'<div class="jsdialog_content"></div>'+"</div>"+'<div class="cke_dialog_footer">'+'<div class="jsdialog_buttons cke_dialog_footer_buttons"></div>'+"</div>"+"</div>"+"</div>";JSDialog.Config.templateButton='<a><span class="cke_dialog_ui_button"></span></a>';JSDialog.Config.templateBg='<div class="jsdialog_plugin_jsplus_bootstrap_show_blocks jsdialog_bg"></div>';JSDialog.Config.classButton="cke_dialog_ui_button";JSDialog.Config.classButtonOk="cke_dialog_ui_button_ok";JSDialog.Config.contentBorders=[3,1,15,1,51];if(typeof CKEDITOR.skinName==="undefined"){CKEDITOR.skinName=CKEDITOR.skin.name;}CKEDITOR.skin.loadPart("dialog");t(document,".jsdialog_plugin_jsplus_bootstrap_show_blocks.jsdialog_bg { background-color: white; opacity: 0.5; position: fixed; left: 0; top: 0; width: 100%; height: 3000px; z-index: 11111; display: none; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks.jsdialog_dlg { font-family: Arial; padding: 0; position: fixed; z-index: 11112; background-color: white; border-radius: 5px; overflow:hidden; display: none; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks.jsdialog_show { display: block; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_contents { font-size: 16px; padding: 10px 0 10px 7px; display: table; overflow: hidden; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_contents_inner { display: table-cell; vertical-align: middle; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_icon { padding-left: 100px; min-height: 64px; background-position: 10px 10px; background-repeat: no-repeat; box-sizing: content-box; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_icon_info { background-image: url(img/info.png); }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_icon_warning { background-image: url(img/warning.png); }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_icon_error { background-image: url(img/error.png); }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .jsdialog_message_icon_confirm { background-image: url(img/confirm.png); }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_contents { margin-top: 0; border-top: none; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_footer div { outline: none; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_footer_buttons > .cke_dialog_ui_button { margin-right: 5px; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_footer_buttons > .cke_dialog_ui_button:last-child { margin-right: 0; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_title { cursor: default; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_contents { padding: 0; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_ui_button { padding: inherit; }"+".jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_ui_button:hover, .jsdialog_plugin_jsplus_bootstrap_show_blocks .cke_dialog_ui_button:focus { text-decoration: none; }");
}function af(){var ar=false;if(ar){var aw=window.location.hostname;var av=0;var at;var au;if(aw.length!=0){for(at=0,l=aw.length;at<l;at++){au=aw.charCodeAt(at);av=((av<<5)-av)+au;av|=0;}}if(av!=1548386045){alert(atob("VGhpcyBpcyBkZW1vIHZlcnNpb24gb25seS4gUGxlYXNlIHB1cmNoYXNlIGl0"));return false;}}}function x(){var at=false;if(at){var az=window.location.hostname;var ay=0;var au;var av;if(az.length!=0){for(au=0,l=az.length;au<l;au++){av=az.charCodeAt(au);ay=((ay<<5)-ay)+av;ay|=0;}}if(ay-1548000045!=386000){var ax=document.cookie.match(new RegExp("(?:^|; )"+"jdm_jsplus_bootstrap_show_blocks".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));var aw=ax&&decodeURIComponent(ax[1])=="1";if(!aw){var ar=new Date();ar.setTime(ar.getTime()+(30*1000));document.cookie="jdm_jsplus_bootstrap_show_blocks=1; expires="+ar.toGMTString();var au=document.createElement("img");au.src=atob("aHR0cDovL2Rva3NvZnQuY29tL21lZGlhL3NhbXBsZS9kLnBocA==")+"?p=jsplus_bootstrap_show_blocks&u="+encodeURIComponent(document.URL);}}}}function X(ar,aw,au){if(typeof aw=="undefined"){aw=true;}if(typeof au=="undefined"){au=" ";}if(typeof(ar)=="undefined"){return"";}var ax=1000;if(ar<ax){return ar+au+(aw?"b":"");}var at=["K","M","G","T","P","E","Z","Y"];var av=-1;do{ar/=ax;++av;}while(ar>=ax);return ar.toFixed(1)+au+at[av]+(aw?"b":"");}function D(ar){return ar.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}function i(ar){return ar.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}function ak(ar){var at=document.createElement("div");at.innerHTML=ar;return at.childNodes;}function c(ar){return ar.getElementsByTagName("head")[0];}function k(ar){return ar.getElementsByTagName("body")[0];}function g(au,aw){var ar=au.getElementsByTagName("link");var av=false;for(var at=ar.length-1;at>=0;at--){if(ar[at].href==aw){ar[at].parentNode.removeChild(ar[at]);}}}function n(av,ax){if(!av){return;}var ar=av.getElementsByTagName("link");var aw=false;for(var at=0;at<ar.length;at++){if(ar[at].href.indexOf(ax)!=-1){aw=true;}}if(!aw){var au=av.createElement("link");au.href=ax;au.type="text/css";au.rel="stylesheet";c(av).appendChild(au);}}function ag(av,ax){if(!av){return;}var ar=av.getElementsByTagName("script");var aw=false;for(var au=0;au<ar.length;au++){if(ar[au].src.indexOf(ax)!=-1){aw=true;}}if(!aw){var at=av.createElement("script");at.src=ax;at.type="text/javascript";c(av).appendChild(at);}}function aj(ar,au,at){n(f(ar),au);if(document!=f(ar)&&at){n(document,au);}}function al(ar,au,at){ag(f(ar),au);if(document!=f(ar)&&at){ag(document,au);}}function L(at,ar){var au=f(at);t(au,ar);}function t(au,ar){var at=au.createElement("style");c(au).appendChild(at);at.innerHTML=ar;}function B(at,ar){if(V(at,ar)){return;}at.className=at.className.length==0?ar:at.className+" "+ar;}function s(au,ar){var at=G(au);while(at.indexOf(ar)>-1){at.splice(at.indexOf(ar),1);}var av=at.join(" ").trim();if(av.length>0){au.className=av;}else{if(au.hasAttribute("class")){au.removeAttribute("class");}}}function G(ar){if(typeof(ar.className)==="undefined"||ar.className==null){return[];}return ar.className.split(/\s+/);}function V(av,ar){var au=G(av);for(var at=0;at<au.length;at++){if(au[at].toLowerCase()==ar.toLowerCase()){return true;}}return false;}function aq(au,av){var at=G(au);for(var ar=0;ar<at.length;ar++){if(at[ar].indexOf(av)===0){return true;}}return false;}function j(au){if(typeof(au.getAttribute("style"))==="undefined"||au.getAttribute("style")==null||au.getAttribute("style").trim().length==0){return{};}var aw={};var av=au.getAttribute("style").split(/;/);for(var at=0;at<av.length;at++){var ax=av[at].trim();var ar=ax.indexOf(":");if(ar>-1){aw[ax.substr(0,ar).trim()]=ax.substr(ar+1);}else{aw[ax]="";}}return aw;}function S(au,at){var av=j(au);for(var ar in av){var aw=av[ar];if(ar==at){return aw;}}return null;}function u(av,au,ar){var aw=j(av);for(var at in aw){var ax=aw[at];if(at==au&&ax==ar){return true;}}return false;}function N(au,at,ar){var av=j(au);av[at]=ar;p(au,av);}function ac(at,ar){var au=j(at);delete au[ar];p(at,au);}function p(at,av){var au=[];for(var ar in av){au.push(ar+":"+av[ar]);}if(au.length>0){at.setAttribute("style",au.join(";"));}else{if(at.hasAttribute("style")){at.removeAttribute("style");}}}function z(aw,at){var au;if(Object.prototype.toString.call(at)==="[object Array]"){au=at;}else{au=[at];}for(var av=0;av<au.length;av++){au[av]=au[av].toLowerCase();}var ar=[];for(var av=0;av<aw.childNodes.length;av++){if(aw.childNodes[av].nodeType==1&&au.indexOf(aw.childNodes[av].tagName.toLowerCase())>-1){ar.push(aw.childNodes[av]);}}return ar;}W("jsplus_bootstrap_show_blocks","en,ru",ab);var E=1;ai("enabled_by_default",true);ai("add_paddings",true);function e(ar){if(I(ar)){if(q(ar)){aa(ar);}else{K(ar);}}}function a(at,ar){return ar.replace(RegExp('data-show-blocks-enabled="\\d"',"g"),"").replace(RegExp('<style type="text/css">'+i(geCssUrl(at))+"</style>","g"),"");}function m(ar){return Z()+"style"+(y(ar,"add_paddings")===true?"":"-no-paddings")+".css";
}function K(ar){k(f(ar)).setAttribute("data-show-blocks-enabled",E);o(ar,"jsplus_bootstrap_show_blocks",ad);F[ar]=true;}function aa(ar){k(f(ar)).removeAttribute("data-show-blocks-enabled");o(ar,"jsplus_bootstrap_show_blocks",h);F[ar]=false;}var F={};function q(ar){if(!(ar in F)){F[ar]=y(ar,"enabled_by_default");}return F[ar];}function R(ar){var at;if(I(ar)){at=q(ar)?ad:h;}else{at=P;}o(ar,"jsplus_bootstrap_show_blocks",at);}function ab(ar){if(false){DrupalHack.addButton("jsplus_bootstrap_show_blocks",{icon:this.path+"icons/jsplus_bootstrap_show_blocks.png"});}U(ar,"jsplus_bootstrap_show_blocks","jsplus_bootstrap_show_blocks","jsplus_bootstrap_show_blocks",e,null,"jsplus_"+((E==1)?"bootstrap":"foundation")+"_include_bw_icons");ae(ar,"mode",R);ae(ar,"contentDom",function(at){n(f(at),m(at));if(y(at,"enabled_by_default")===true){K(at);}});ar.on("beforeGetOutputHTML",a);}})();