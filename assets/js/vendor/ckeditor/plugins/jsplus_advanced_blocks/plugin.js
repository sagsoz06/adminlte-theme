(function(){var d=0;var e=[{},{classes:"(span[0-9]+|offset[0-9]+|col-xs-[0-9]+|col-md-[0-9]+|col-sm-[0-9]+|col-lg-[0-9]+|col-xs-offset-[0-9]+|col-md-offset-[0-9]+|col-sm-offset-[0-9]+|col-lg-offset-[0-9]+|row-fluid|row)",eye:/visible-print|visible-lg|visible-md|visible-sm|visible-xs|hidden-print|hidden-lg|hidden-md|hidden-sm|hidden-xs/i,sizesReg:/col-(md|lg|sm|xs)/i,offsetReg:/col-(lg|md|sm)-offset/i,rowClassesReg:/row-fluid|row/i,colClassesReg:/span[0-9]+|offset[0-9]+|col-xs-[0-9]+|col-md-[0-9]+|col-sm-[0-9]+|col-lg-[0-9]+|col-xs-offset-[0-9]+|col-md-offset-[0-9]+|col-sm-offset-[0-9]+|col-lg-offset-[0-9]+/i},{classes:"(large-[0-9]+|medium-[0-9]+|small-[0-9]+|large-offset-[0-9]+|medium-offset-[0-9]+|small-offset-[0-9]+|row)",eye:/show-for-small-only|show-for-medium-up|show-for-medium-only|show-for-large-up|show-for-large-only|show-for-xlarge-up|show-for-xlarge-only|show-for-xxlarge-up|show-for-landscape|show-for-portrait/i,sizesReg:/(large|medium|small)/i,offsetReg:/(large|medium|small)-offset/i,rowClassesReg:/row/i,colClassesReg:/large-[0-9]+|medium-[0-9]+|small-[0-9]+|large-offset-[0-9]+|medium-offset-[0-9]+|small-offset-[0-9]+|columns/i}];var c=["p","span","div","th","td"];var a=function(g){return g.name.replace(/\[/,"_").replace(/\]/,"_");};var b=function(g,h){if(typeof(window["jsplus_advanced_blocks"])=="undefined"){window["jsplus_advanced_blocks"]=[];}window["jsplus_advanced_blocks"][g]=h;};var f=function(g){if(typeof(window["jsplus_advanced_blocks"])=="undefined"||typeof(window["jsplus_advanced_blocks"][g])=="undefined"){return null;}return window["jsplus_advanced_blocks"][g];};CKEDITOR.plugins.add("jsplus_advanced_blocks",{icons:"jsplus_advanced_blocks",lang:"en",init:function(g){if(typeof g.lang["jsplus_advanced_blocks"]["jsplus_advanced_blocks"]!="undefined"){g.lang["jsplus_advanced_blocks"]=g.lang["jsplus_advanced_blocks"]["jsplus_advanced_blocks"];}var n=function(aj,al){var ag=aj.getElementsByTagName("link");var ak=false;for(var ah=0;ah<ag.length;ah++){if(ag[ah].href.indexOf(al)!=-1){ak=true;}}if(!ak){var ai=aj.createElement("link");ai.href=al;ai.type="text/css";ai.rel="stylesheet";aj.head.appendChild(ai);}};var D=function(ah,ag){n(g.document.$,ah);if(ag){n(document,ah);}};var L=function(ag){var ai=g.document.$;var ah=ai.createElement("style");ai.head.appendChild(ah);ah.innerHTML=ag;};var T=function(){var ag=".jsplus_advanced_blocks_show p,"+".jsplus_advanced_blocks_show div,"+".jsplus_advanced_blocks_show span"+"{ "+"min-width:"+g.config["jsplus_advanced_blocks_min_div_width"]+";"+"min-height:"+g.config["jsplus_advanced_blocks_min_div_height"]+";"+"margin: "+g.config["jsplus_advanced_blocks_margin_top"]+"px "+g.config["jsplus_advanced_blocks_margin_right"]+"px "+g.config["jsplus_advanced_blocks_margin_bottom"]+"px "+g.config["jsplus_advanced_blocks_margin_left"]+"px;"+"}";if(!g.config["jsplus_advanced_blocks_highlight_blocks"]){ag+=".jsplus_advanced_blocks_show[data-jsplus_advanced_blocks-X-selected] { background-color: transparent !important; }";}};var p=function(){return g.elementMode==3;};var k=function(){if(p()){return g.element;}else{return g.document.getBody();}};var ac=function(){return k().$;};var r=function(){return CKEDITOR.version.charAt(0)=="4";};var A=function(ah,ag){if(R(ah,ag)){return;}ah.className=ah.className.length==0?ag:ah.className+" "+ag;};var s=function(ai,ag){var ah=F(ai);while(ah.indexOf(ag)>-1){ah.splice(ah.indexOf(ag),1);}var aj=ah.join(" ").trim();if(aj.length>0){ai.className=aj;}else{if(ai.hasAttribute("class")){ai.removeAttribute("class");}}};var F=function(ag){if(typeof(ag.className)==="undefined"||ag.className==null){return[];}return ag.className.split(/\s+/);};var R=function(aj,ag){var ai=F(aj);for(var ah=0;ah<ai.length;ah++){if(ai[ah].toLowerCase()==ag.toLowerCase()){return true;}}return false;};var ad=function(ai,aj){var ah=F(ai);for(var ag=0;ag<ah.length;ag++){if(ah[ag].indexOf(aj)===0){return true;}}return false;};var ab=false;var K=function(){var ah=ac();ae(ah,false);A(ah,"jsplus_advanced_blocks_show");var ag=k();ag.on("mousedown",w);g.on("selectionChange",q);g.window.on("keydown",z);ab=true;window["jsplus_advanced_blocks_turner"][g.name]["isOn"]=true;};var S=function(){E();var ag=B;K();H(ag);};var E=function(){var aj=k();aj.removeListener("mousedown",w);g.removeListener("selectionChange",q);v();var ai=ac();s(ai,"jsplus_advanced_blocks_show");var ak=ai.getElementsByClassName("jsplus_advanced_blocks_temper_place");for(var ag=ak.length-1;ag>=0;ag--){var ah=ak[ag];ah.parentElement.removeChild(ah);}Q(ai);window["jsplus_advanced_blocks_turner"][g.name]["isOn"]=false;ab=false;};if(typeof(window["jsplus_advanced_blocks_turner"])=="undefined"){window["jsplus_advanced_blocks_turner"]=[];}if(typeof(window["jsplus_advanced_blocks_turner"][g.name])=="undefined"){window["jsplus_advanced_blocks_turner"][g.name]=[];}window["jsplus_advanced_blocks_turner"][g.name]["isOn"]=false;window["jsplus_advanced_blocks_turner"][g.name]["on"]=K;window["jsplus_advanced_blocks_turner"][g.name]["off"]=E;
var Q=function(aj){if(aj.nodeType!=1){return;}var ai=F(aj);var ak="";for(var ah=0;ah<ai.length;ah++){if(ak.length>0){ak+=" ";}if(ai[ah].indexOf("jsplus_advanced_blocks")!==0){ak+=ai[ah];}}aj.className=ak.trim();var ag=aj.childNodes;for(var ah=0;ah<ag.length;ah++){Q(ag[ah]);}};var q=function(ag){H(g.elementPath().elements[0]?g.elementPath().elements[0].$:false);};var w=function(ah){if(!ab){return;}var ag=ah.data.$.target||ah.data.$.srcElement;H(ag);};var ae=function(aj,ah){if(aj.nodeType!=1){return;}if(ad(aj,"jsplus_advanced_blocks")){return;}if(ah&&c.indexOf(aj.tagName.toLowerCase())>=0){U(aj);}var ag=aj.childNodes;for(var ai=0;ai<ag.length;ai++){ae(ag[ai],true);}};var M=function(aj){var ai=null;for(var ah=aj.childNodes.length-1;ah>=0;ah--){if(R(aj.childNodes[ah],"jsplus_advanced_blocks_temper_place")){aj.childNodes[ah].parentElement.removeChild(aj.childNodes[ah]);}}var ag=F(aj);for(var ah=ag.length-1;ah>=0;ah--){if(ag[ah].indexOf("jsplus_advanced_blocks-top-offset-")>-1){ag.splice(ah,1);}}aj.classes=ag.join(" ").trim();};var U=function(al){if(R(al,"glyphicon")){return;}var aj=al.tagName.toLowerCase();var ap=g.document.$;var ao=ap.createElement("a");ao.className="jsplus_advanced_blocks_temper_place";ao.setAttribute("contenteditable",false);al.appendChild(ao);var am=7;switch(d){case 0:V(aj,ao);break;case 1:case 2:var ah=h(e[d].classes,al.className);var ai=g.config["jsplus_advanced_blocks_multiline_titles"]?"clearex":"delimer";if(e[d].eye.test(al.className)){var ar=aj;if(aj=="div"){if(e[d].rowClassesReg.test(al.className)){ar="row";}else{if(e[d].colClassesReg.test(al.className)){ar="col";}}}else{if(aj!="span"&&aj!="table"&&aj!="p"){ar="div";}}V("eye-"+ar,ao);}if(ah&&ah.length){var an={},aq="",ag="";for(var ak in ah){ag=ah[ak].toLowerCase();if(aq=e[d].sizesReg.exec(ag)){if(!an[aq[0]]){an[aq[0]]=[];}if(!~an[aq[0]].indexOf(ag)){an[aq[0]].push(ag);}}else{an[ag]=[ag];}}for(aq in an){an[aq].sort();for(var ak in an[aq]){if(an[aq][ak].match(e[d].offsetReg)&&an[aq].length==1&&g.config["jsplus_advanced_blocks_multiline_titles"]){V(an[aq][ak],ao,true);}else{V(an[aq][ak],ao);}}V(ai,ao);if(ai=="clearex"){am+=7;}}}else{V("delimer",ao);V(aj,ao);}break;}V("clearex",ao);A(al,"jsplus_advanced_blocks-top-offset-"+am);return ao;};var V=function(ak,aj,ah){var ai=g.document.$,ag=ai.createElement("i");ag.className="jsplus_advanced_blocks_temper_block jsplus_advanced_blocks_"+ak.replace(/[0-9]+/g,"x")+" jsplus_advanced_blocks_"+ak;ag.setAttribute("title",ak);ag.setAttribute("contenteditable",false);aj.appendChild(ag);if(ah){ag.style.marginLeft=(parseInt(ag.offsetWidth)+3)+"px";}};var X=function(ag){var ah=ag;var ai=ac();while(true){if(ah.tagName.toLowerCase()=="table"){return ah;}if(ah.parentElement==null||ah.parentElement==ai){return null;}ah=ah.parentElement;}};var B=null;var aa=null;var H=function(ai){while(ai!=null&&!(ai.nodeType==1&&ad(ai,"jsplus_advanced_blocks-top-offset-"))){ai=ai.parentNode;}if(ai==null||!ad(ai,"jsplus_advanced_blocks_temper_block_menu")){u();}if(ai==ac()||ai==null){v();return;}if(ad(ai,"jsplus_advanced_blocks_temper_block")){ai=ai.parentElement.parentElement;}else{if(ad(ai,"jsplus_advanced_blocks_temper_place")){ai=ai.parentElement;}}if(B==ai){return;}v();B=ai;A(B,"jsplus_advanced_blocks-selected");var ak=g.document.$;var ag=[ak.createElement("a"),ak.createElement("a"),ak.createElement("a"),ak.createElement("a"),ak.createElement("a")];var al=[];var aj=null;if(ai.tagName.toLowerCase()=="td"||ai.tagName.toLowerCase()=="th"){aj=X(ai);if(aj!=null){al=[ag[0],null,null,ag[3],ag[4]];ag[0]=null;ag[3]=null;ag[4]=null;}}Z(ai,ag);if(al.length>0){Z(aj,al);}if(window["jsplus_blocks_select_"+a(g)]){for(var ah=0;ah<window["jsplus_blocks_select_"+a(g)].length;ah++){window["jsplus_blocks_select_"+a(g)][ah](g,B);}}};var Y=function(){var ag=["div","span","p","tag","code","table","cols"];aa=g.document.$.createElement("a");aa.setAttribute("contenteditable",false);aa.className="jsplus_advanced_blocks_temper_block_menu";for(var ai in ag){var ah=g.document.$.createElement("a");ah.setAttribute("contenteditable",false);ah.className="jsplus_advanced_blocks_temper_block_menu_item jsplus_advanced_blocks_temper_block_menu_item_"+ag[ai];ah.onmousedown=function(al){var ak=al||window.event;var aj=al.srcElement||al.target;P(aj);ak.preventDefault();ak.stopPropagation();};aa.appendChild(ah);}};var O=function(ah){var ag=ah.parentElement;if(R(ah,"jsplus_advanced_blocks_temper_block_plus4")){g.fire("jsplus_advanced_blocks_delete",{parent:ag});}else{u();ag.appendChild(aa);j(ah,C(ah,g.document.$,g.document.getWindow()),ah.className.match(/plus([0-3]{1})/)[1],ag);}};var Z=function(ag,ai){for(var ah in ai){if(ai[ah]==null){continue;}ai[ah].className="jsplus_advanced_blocks_temper_block_plus jsplus_advanced_blocks_temper_block_plus"+ah+" jsplus_advanced_blocks_"+name;ai[ah].setAttribute("contenteditable",false);ai[ah].addEventListener("mousedown",function(aj){var ak=aj||window.event;O(this,ag);ak.preventDefault();ak.stopPropagation();},false);ag.appendChild(ai[ah]);
}};var J=function(ai){if(ai==null){return;}var ah=ai.getElementsByClassName("jsplus_advanced_blocks_temper_block_menu");for(var ag=ah.length-1;ag>=0;ag--){ah[ag].parentElement.removeChild(ah[ag]);}ah=ai.getElementsByClassName("jsplus_advanced_blocks_temper_block_plus");for(var ag=ah.length-1;ag>=0;ag--){ah[ag].parentElement.removeChild(ah[ag]);}};var v=function(){if(B!=null){s(B,"jsplus_advanced_blocks-selected");J(B);if(B.tagName.toLowerCase()=="td"||B.tagName.toLowerCase()=="th"){var ah=X(B);J(ah);}B=null;if(window["jsplus_blocks_select_"+a(g)]){for(var ag=0;ag<window["jsplus_blocks_select_"+a(g)].length;ag++){window["jsplus_blocks_select_"+a(g)][ag](g,null);}}}};var u=function(){if(aa.parentElement!=null){aa.parentElement.removeChild(aa);}aa.removeAttribute("active");};var P=function(ai){var al=g.document.$;var ag="div";var an=null;var ah=ai.parentElement.parentElement;var am=aa.getAttribute("active");if(ah.nodeType==1&&["td","th"].indexOf(ah.tagName.toLowerCase())>-1&&(am==0||am==3)){ah=X(ah);}u();switch(true){case !!~ai.className.search(/item_(div|p|span)/):an=al.createElement(ag=ai.className.match(/item_(div|p|span)/)[1]);an.innerHTML=ag;l(an,ah,am);break;case !!~ai.className.search(/item_(tag)/):b("selectedElement",ah);b("selectedPosition",am);g.openDialog("jsplus_advanced_blocks_insert_tag_"+g.name);break;case !!~ai.className.search(/item_(code)/):b("selectedElement",ah);b("selectedPosition",am);g.openDialog("jsplus_advanced_blocks_insert_code_"+g.name);break;case !!~ai.className.search(/item_(table)/):b("selectedElement",ah);b("selectedPosition",am);g.openDialog("jsplus_advanced_blocks_insert_table_"+g.name);break;case !!~ai.className.search(/item_(cols)/):var aj=d==1?"jsplus_bootstrap_templates":"jsplus_foundation_templates";window[aj+"_callback"]=[];b("selectedElement",ah);b("selectedPosition",am);var ak=CKEDITOR.tools.addFunction(function(ao){var ap=CKEDITOR.dom.element.createFromHtml(ao);l(ap.$,f("selectedElement"));});window[aj+"_callback"]["func"]=ak;g.openDialog(aj+"-"+g.name);break;}};var af=function(ak,aj){var ah=F(ak);var al=d==1?new RegExp("^(col|visible|hidden)-(lg|md|sm|xs)"):new RegExp("^((large|medium|small)|((show|hide)-for-(small|medium|large|xlarge|xxlarge|landscape|portrait)))");for(var ai=ah.length-1;ai>=0;ai--){if(al.test(ah[ai])){ah.splice(ai,1);}}ah=ah.concat(aj);for(var ai=ah.length-1;ai>=0;ai--){for(var ag=ai-1;ag>=0;ag--){if(ah[ag]==ah[ai]){ah.splice(ai,1);break;}}}ak.className=ah.join(" ").trim();S();};if(false){g.ui.addButton("jsplus_advanced_blocks",{command:"jsplus_advanced_blocks",icon:this.path+"icons/jsplus_advanced_blocks.png",title:g.lang["jsplus_advanced_blocks"].title});}g.on("contentDom",function(){D(CKEDITOR.basePath+CKEDITOR.plugins.basePath+"jsplus_advanced_blocks/style.css",true);Y();if(!p()||f("styleEmbedded")!=null){var ag=T();L(ag);if(p()){b("styleEmbedded",true);}}});var W=function(){if(g.mode=="source"||!ab){return;}S();};var N=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(N){var I=new N(function(ah){if(!ab){return;}for(var ai=0;ai<ah.length;ai++){var ag=ah[ai];if(ag.type=="attributes"){if(ag.attributeName.toLowerCase()=="class"&&!ad(ag.target,"jsplus_advanced_blocks")){M(ag.target);U(ag.target);}}else{if(ag.type=="childList"){for(var aj=0;aj<ag.addedNodes.length;aj++){if(!ad(ag.addedNodes[aj],"jsplus_advanced_blocks")){ae(ag.addedNodes[aj],true);}}}}}});}else{console.log("You are using old browser, Advanced Blocks functionality is restricted under it.");}g.on("contentDom",function(){if(I){var ag=setInterval(function(){if(typeof g.document==="object"){I.observe(ac(),{childList:true,subtree:true});clearInterval(ag);}},100);}g.document.on("drop",W);g.document.getBody().on("drop",W);});if(!window["jsplus_blocks_change_"+a(g)]){window["jsplus_blocks_change_"+a(g)]=[];}window["jsplus_blocks_change_"+a(g)]=function(ai,ah,ag){af(ah,ag);};var C=function(aj,aq,ap){var am=aj.getBoundingClientRect();var an=aq.body;var ah=aq.documentElement;var ag=ap.pageYOffset||ah.scrollTop||an.scrollTop;var ak=ap.pageXOffset||ah.scrollLeft||an.scrollLeft;var al=ah.clientTop||an.clientTop||0;var ao=ah.clientLeft||an.clientLeft||0;var ar=am.top+ag-al;var ai=am.left+ak-ao+am.width;return{top:Math.round(ar),left:Math.round(ai)};};var h=function(aj,ak){var ah=new RegExp(aj,"ig");var ag=ak.match(ah);matchArray=new Array();for(var ai in ag){nonGlobalRegex=new RegExp(aj);nonGlobalMatch=ag[ai].match(nonGlobalRegex);matchArray.push(nonGlobalMatch[1]);}return matchArray;};var G=function(ag){};var j=function(aj,ak,an,ag){if(aa.getAttribute("active")==an){aa.removeAttribute("active");return;}aa.setAttribute("active",parseInt(an));aa.style.left=aa.style.right=aa.style.top=aa.style.bottom="auto";var am=false;if(an==1||an==2){if(aj.parentElement.tagName.toLowerCase()=="p"||aj.parentElement.tagName.toLowerCase()=="span"){am=true;}}if(an==0||an==3){var ai=aj.parentElement;if(ai.parentElement==null||["h1","h2","h3","h4","h5","h6","p","b","big","i","small","tt","abbr","acronym","cite","code","dfn","em","kbd","strong","samp","var","a","bdo","br","img","map","object","q","script","span","sub","sup","button","input","label","select","textarea"].indexOf(ai.parentElement.tagName.toLowerCase())!==-1){am=true;
}}var ah=aa.getElementsByClassName("jsplus_advanced_blocks_temper_block_menu_item_div");ah[0].style.display=am?"none":"block";var al=true;if((d==1&&typeof(CKEDITOR.plugins.loaded["jsplus_bootstrap_templates"])!="undefined"&&CKEDITOR.plugins.loaded["jsplus_bootstrap_templates"]==1)||(d==2&&typeof(CKEDITOR.plugins.loaded["jsplus_foundation_templates"])!="undefined"&&CKEDITOR.plugins.loaded["jsplus_foundation_templates"]==1)){if(!am){al=false;}}ah=aa.getElementsByClassName("jsplus_advanced_blocks_temper_block_menu_item_cols");ah[0].style.display=al?"none":"block";switch(parseInt(an)){case 0:aa.style.left=(-aa.offsetWidth-1)+"px";break;case 1:aa.style.left="0px";aa.style.left="0px";break;case 2:aa.style.right="0px";break;case 3:aa.style.right=(-aa.offsetWidth-1)+"px";break;}switch(parseInt(an)){case 1:case 0:aa.style.top=(aj.offsetHeight+1)+"px";aa.style.marginBottom="0px";break;case 3:case 2:aa.style.bottom="1px";aa.style.marginBottom="-"+aa.offsetHeight+"px";break;}};var l=function(ai,ah,ag){var aj=ag?parseInt(ag):parseInt(f("selectedPosition"));if((ah.tagName=="td"||ah.tagName=="th")&&(aj==0||aj==3)){ah=X(ah);if(ah==null){return;}}switch(aj){case 0:ah.parentNode.insertBefore(ai,ah);break;case 1:ah.insertBefore(ai,ah.firstChild);break;case 2:ah.appendChild(ai);break;case 3:ah.parentNode.insertBefore(ai,ah.nextSibling);break;}g.fire("jsplus_advanced_blocks_on_change_selective");aa.removeAttribute("active");};var t=0;var i=false;var o=g.addCommand("jsplus_advanced_blocks",{readOnly:1,preserveState:true,editorFocus:false,exec:function(ag){this.toggleState();if(this.state==CKEDITOR.TRISTATE_ON){K();}else{E();}}});g.on("toDataFormat",function(ag){ag.data.dataValue=ag.data.dataValue.replace(RegExp('<link href="([^"]*?)/plugins/jsplus_advanced_blocks/style.css" rel="stylesheet" type="text/css" />',"g"),"").replace(RegExp('[\\n\\r\\s]*<i[^>]+class="jsplus_advanced_blocks_temper_block[^>]+></i>[\\n\\r\\s]*',"g"),"").replace(RegExp('[\\n\\r\\s]*<a[^>]+class="jsplus_advanced_blocks_temper_block[^>]+></a>[\\n\\r\\s]*',"g"),"").replace(RegExp('[\\n\\r\\s]*<a[^>]+class="jsplus_advanced_blocks_temper_place[^>]+></a>[\\n\\r\\s]*',"g"),"").replace(RegExp("jsplus_advanced_blocks[-a-z0-9]*","g"),"").replace(RegExp('<style type="text/css">undefined[s\n\r\t]*</style>',"g"),"");},null,null,4);g.on("mode",function(){if(g.mode=="wysiwyg"&&ab){S();}});function x(an,am){var ak=[an],aj,al,ai=false,ah=false;while(aj=ak.pop()){if(aj.nodeType!=3&&aj.tagName&&~am.indexOf(aj.tagName.toLowerCase())){return true;}else{var ag=aj.childNodes.length;while(ag--){ak.push(aj.childNodes[ag]);}}}return false;}g.on("jsplus_advanced_blocks_delete",function(aj){if(aj.data.parent){aj.data.parent.removeAttribute("data-jsplus_advanced_blocks-X-selected");g.fire("saveSnapshot");if(window["jsplus_blocks_select_"+a(g)]){for(var ah=0;ah<window["jsplus_blocks_select_"+a(g)].length;ah++){window["jsplus_blocks_select_"+a(g)][ah](g,null);}}var ak=aj.data.parent.parentNode,ag=aj.data.parent.tagName?aj.data.parent.tagName.toLowerCase():"";ak.removeChild(aj.data.parent);if((ag=="td"||ag=="th")&&ak){while(ak.tagName.toLowerCase()!="table"&&ak.tagName.toLowerCase()!="tr"&&ak.parentNode){ak=ak.parentNode;}if(!x(ak,["td","th"])){var ai=ak.parentNode;while(ai.tagName.toLowerCase()!="table"&&ai.parentNode){ai=ai.parentNode;}ak.parentNode.removeChild(ak);if(!x(ai,["td","th"])){ai.parentNode.removeChild(ai);}}}t=0;}});var z=function(ah){var ag=ah.keyCode||ah.data.$.keyCode;switch(parseInt(ag)){case 46:break;}};window.addEventListener("keydown",z,true);var m=function m(ah,aq){var ag=0,an=g.document.$.createRange();an.setStart(ah,0);var am=[ah],ai,aj,ak=false,ap=false;while(!ap&&(ai=am.pop())){if(ai.nodeType==3){aj=ai;var ao=ag+ai.length;if(!ak&&aq>=ag&&aq<=ao){an.setStart(ai,aq-ag);ak=true;}if(ak&&aq>=ag&&aq<=ao){an.setEnd(ai,aq-ag);ap=true;}ag=ao;}else{var al=ai.childNodes.length;while(al--){am.push(ai.childNodes[al]);}}}if(!ak&&aj){an.setStart(aj,ag);an.setEnd(aj,ag);}var ar=g.document.getWindow().$.getSelection();ar.removeAllRanges();ar.addRange(an);};g.on("instanceReady",function(){if(g.config["jsplus_advanced_blocks_enabled_by_default"]){o.exec(g);}g.on("beforeSetMode",v);});g.ui.addButton("jsplus_advanced_blocks",{label:"jsplus_advanced_blocks",command:"jsplus_advanced_blocks",icon:this.path+"icons/jsplus_advanced_blocks.png",toolbar:"tools,20",title:g.lang["jsplus_advanced_blocks"].title});g.on("instanceReady",function(aj){var ak=g.ui.spaceId("path"),ah,ag=function(){if(!ah){ah=CKEDITOR.document.getById(ak);}return ah;};var ai=ag();if(typeof ai!="undefined"&&ai!=null){ai.$.addEventListener("click",function(ao){var al=ao||window.event;var an=al.target||al.srcElement;var am=parseInt(an.id.match(/_([0-9]+)$/)[1]);if(g._.elementsPath&&g._.elementsPath.list&&g._.elementsPath.list[am]){H(g._.elementsPath.list[am].$);}});}});CKEDITOR.dialog.add("jsplus_advanced_blocks_insert_tag_"+g.name,function(ag){return{title:ag.lang["jsplus_advanced_blocks"].dlg_insert_tag_title,minWidth:400,minHeight:200,contents:[{id:"tab_basic_"+ag.name,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"tagName_"+ag.name,"default":"div",label:ag.lang["jsplus_advanced_blocks"].dlg_insert_tag_label_name,required:true,style:"margin-bottom: 10px"},{type:"text",id:"tagId_"+ag.name,label:"ID:",style:"margin-bottom: 10px"},{type:"text",id:"tagClass_"+ag.name,label:"Class:",style:"margin-bottom: 10px"},{type:"text",id:"tagStyle_"+ag.name,label:"Style:",style:"margin-bottom: 10px"}]}]}]}],onCancel:function(){b("selectedElement",null);
},onOk:function(){var ai=this.getValueOf("tab_basic_"+ag.name,"tagName_"+ag.name);if(ai.length<1){return false;}var aj=ai.replace(/[^a-z0-9]/ig,"").toLowerCase();var ah=ag.document.$.createElement(aj?aj:"div");ah.className=this.getValueOf("tab_basic_"+ag.name,"tagClass_"+ag.name);ah.setAttribute("style",this.getValueOf("tab_basic_"+ag.name,"tagStyle_"+ag.name));ah.setAttribute("id",this.getValueOf("tab_basic_"+ag.name,"tagId_"+ag.name));ah.innerHTML=ai;l(ah,f("selectedElement"));b("selectedElement",null);}};});var y="";CKEDITOR.dialog.add("jsplus_advanced_blocks_insert_table_"+g.name,function(al){var ar=al.config["jsplus_advanced_blocks_gui_width"]||6,ak=al.config["jsplus_advanced_blocks_gui_height"]||3,an=false,aj,ag,ao,ai,ah,am,ap,aq;return{title:al.lang["jsplus_advanced_blocks"].dlg_insert_table_title,minWidth:250,minHeight:160,contents:[{id:"tab_basic12_"+al.name,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"html",id:"tableHTML",html:'<table border="0" cellspacing="0" cellpadding="0">'+"<tr>"+"<td>"+'<div id="jsplus_advanced_blocks-box_'+al.name+'">'+'<table border="0" cellpadding="1" cellspacing="1">'+(function(){tb="";var at=Math.round(140/ar);for(var av=1;av<=ak;av++){tb+='<tr id="jsplus_advanced_blocks-tr_'+al.name+av+'">';for(var au=1;au<=ar;au++){tb+='<td id="jsplus_advanced_blocks-td_'+al.name+"_"+av+"-"+au+'" style="border:1px solid #c3d9ff; background-color:#ddeafb;width:'+at+"px;height:"+at+'px;"></td>';}tb+="</tr>";}return tb;})()+"</table>"+"</div>"+'<div id="jsplus_advanced_blocks-sizer_'+al.name+'" style="text-align:center">1:1</div>'+"</td>"+'<td style="vertical-align:top;">&nbsp;&nbsp;&nbsp;</td>'+'<td style="vertical-align:top;">'+"<table>"+"<tr>"+'<td><input style="width:50px;" class="cke_dialog_ui_input_text" value="1" type="number" id="jsplus_advanced_blocks-rows_'+al.name+'"/></td>'+"<td>&nbsp;x&nbsp;</td>"+'<td><input style="width:50px;" class="cke_dialog_ui_input_text" value="1" type="number" id="jsplus_advanced_blocks-cols_'+al.name+'"/></td>'+"</tr>"+"<tr>"+'<td colspan="3" style="width:20px;vertical-align:middle;padding-top:7px;">'+"<label>"+'<input type="checkbox" id="jsplus_advanced_blocks-headers_'+al.name+'" style="width: 13px;height: 13px;padding: 0;margin: 0;vertical-align: bottom;position: relative;top: -1px;margin-right: 5px;"/>'+al.lang["jsplus_advanced_blocks"].dlg_insert_table_label_header+"</label>"+"</td>"+"</tr>"+(!d?"<tr>"+'<td colspan="3" style="width:20px;vertical-align:middle;padding-top:7px;">'+"<label>"+'<input type="checkbox" id="jsplus_advanced_blocks-width_'+al.name+'" style="width: 13px;height: 13px;padding: 0;margin: 0;vertical-align: bottom;position: relative;top: -1px;margin-right: 5px;"/>'+al.lang["jsplus_advanced_blocks"].dlg_insert_table_label_width_100+"</label>"+"</td>"+"</tr>":"")+(d==1?"<tr>"+'<td colspan="3" style="width:20px;vertical-align:middle;padding-top:7px;">'+"<label>"+'<input type="checkbox" id="jsplus_advanced_blocks-striped_'+al.name+'" style="width: 13px;height: 13px;padding: 0;margin: 0;vertical-align: bottom;position: relative;top: -1px;margin-right: 5px;"/>'+al.lang["jsplus_advanced_blocks"].dlg_insert_table_label_stripped+"</label>"+"</td>"+"</tr>"+"<tr>"+'<td colspan="3" style="width:20px;vertical-align:middle;padding-top:7px;">'+"<label>"+'<input type="checkbox" id="jsplus_advanced_blocks-bordered_'+al.name+'" style="width: 13px;height: 13px;padding: 0;margin: 0;vertical-align: bottom;position: relative;top: -1px;margin-right: 5px;"/>'+al.lang["jsplus_advanced_blocks"].dlg_insert_table_label_bordered+"</label>"+"</td>"+"</tr>"+"<tr>"+'<td colspan="3" style="width:20px;vertical-align:middle;padding-top:7px;">'+"<label>"+'<input type="checkbox" id="jsplus_advanced_blocks-condenced_'+al.name+'" style="width: 13px;height: 13px;padding: 0;margin: 0;vertical-align: bottom;position: relative;top: -1px;margin-right: 5px;"/>'+al.lang["jsplus_advanced_blocks"].dlg_insert_table_label_condenced+"</label>"+"</td>"+"</tr>":"")+"</table>"+"</td>"+"</tr>"+"</table>"}]}]}]}],onCancel:function(){b("selectedElement",null);},onShow:function(){an=true;},onLoad:function(){aj=document.getElementById("jsplus_advanced_blocks-box_"+al.name);ag=document.getElementById("jsplus_advanced_blocks-sizer_"+al.name);ao=document.getElementById("jsplus_advanced_blocks-cols_"+al.name);ai=document.getElementById("jsplus_advanced_blocks-rows_"+al.name);headers=document.getElementById("jsplus_advanced_blocks-headers_"+al.name);ah=document.getElementById("jsplus_advanced_blocks-width_"+al.name);am=document.getElementById("jsplus_advanced_blocks-striped_"+al.name);ap=document.getElementById("jsplus_advanced_blocks-bordered_"+al.name);aq=document.getElementById("jsplus_advanced_blocks-condenced_"+al.name);ao.onblur=ai.onblur=function(){var at=parseInt(this.value.replace(/[^0-9]/g,""));this.value=(!isNaN(at)&&at>0)?at:1;};aj.onmouseover=function(au){if(!an){return false;}var ax=au||window.event;var at=(ax.srcElement||ax.target);
if(at.tagName.toLowerCase()=="td"){var ay=/_([0-9]+)-([0-9]+)$/.exec(at.id);for(var aw=1;aw<=ak;aw++){for(var av=1;av<=ar;av++){document.getElementById("jsplus_advanced_blocks-td_"+al.name+"_"+aw+"-"+av).style.backgroundColor=(aw<=parseInt(ay[1])&&av<=parseInt(ay[2]))?"#abcfff":"#ddeafb";}}ag.innerHTML=ay[1]+":"+ay[2];ai.value=parseInt(ay[1]);ao.value=parseInt(ay[2]);}};aj.onmousedown=function(au){var ax=au||window.event;var at=(ax.srcElement||ax.target);if(at.tagName.toLowerCase()=="td"){var ay=/_([0-9]+)-([0-9]+)$/.exec(at.id);an=false;for(var aw=1;aw<=ak;aw++){for(var av=1;av<=ar;av++){document.getElementById("jsplus_advanced_blocks-td_"+al.name+"_"+aw+"-"+av).style.backgroundColor=(aw<=parseInt(ay[1])&&av<=parseInt(ay[2]))?"#abcfff":"#ddeafb";}}ag.innerHTML=ay[1]+":"+ay[2];ai.value=parseInt(ay[1]);ao.value=parseInt(ay[2]);}};},onOk:function(){var aB=[(!isNaN(parseInt(ai.value))&&parseInt(ai.value)>0)?parseInt(ai.value):1,(!isNaN(parseInt(ao.value))&&parseInt(ao.value)>0)?parseInt(ao.value):1];var aA=al.document.$.createElement("table");var az;var au;var at;if(headers.checked){var ay=al.document.$.createElement("thead");aA.appendChild(ay);for(var aw=0;aw<aB[1];aw++){at=al.document.$.createElement("th");at.innerHTML="th";ay.appendChild(at);}}var ax=al.document.$.createElement("tbody");aA.appendChild(ax);for(var aw=0;aw<aB[0];aw++){az=al.document.$.createElement("tr");for(var av=0;av<aB[1];av++){au=al.document.$.createElement("td");au.innerHTML="td";az.appendChild(au);}ax.appendChild(az);}switch(d){case 0:if(ah.checked){aA.style.width="100%";}break;case 1:aA.className="table ";if(am.checked){aA.className+="table-striped ";}if(ap.checked){aA.className+="table-bordered ";}if(aq.checked){aA.className+="table-condensed ";}aA.className=aA.className.trim();break;}l(aA,f("selectedElement"));b("selectedElement",null);}};});CKEDITOR.dialog.add("jsplus_advanced_blocks_insert_code_"+g.name,function(ag){return{title:ag.lang["jsplus_advanced_blocks"].dlg_insert_code_title,minWidth:400,minHeight:160,contents:[{id:"tab_basic1_"+ag.name,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"textarea",id:"codeHTML_"+ag.name,"default":"<div>div</div>",label:ag.lang["jsplus_advanced_blocks"].dlg_insert_code_label,inputStyle:"resize:vertical;white-space: nowrap;font-size:13px; line-height:14px;min-height:160px;",required:true}]}]}]}],onCancel:function(){b("selectedElement",null);},onLoad:function(){var ai=document.getElementById(this.getContentElement("tab_basic1_"+ag.name,"codeHTML_"+ag.name)._.inputId);var ah=function(){var aj=this.value.split(/[\n\r]/).length;this.style.height=(aj>10?(aj*16):160)+"px";};ai.addEventListener("keyup",ah);ai.addEventListener("mouseup",ah);},onOk:function(){var ai=this.getValueOf("tab_basic1_"+ag.name,"codeHTML_"+ag.name);if(ai.length<1){return false;}var ah=ag.document.$.createElement("div");ah.innerHTML=this.getValueOf("tab_basic1_"+ag.name,"codeHTML_"+ag.name);l(ah.firstChild,f("selectedElement"));b("selectedElement",null);}};});}});CKEDITOR.config["jsplus_advanced_blocks_margin"]=false;CKEDITOR.config["jsplus_advanced_blocks_use_buttons"]=true;CKEDITOR.config["jsplus_advanced_blocks_highlight_blocks"]=true;CKEDITOR.config["jsplus_advanced_blocks_margin_top"]=5;CKEDITOR.config["jsplus_advanced_blocks_margin_right"]=0;CKEDITOR.config["jsplus_advanced_blocks_margin_bottom"]=5;CKEDITOR.config["jsplus_advanced_blocks_margin_left"]=0;CKEDITOR.config["jsplus_advanced_blocks_multiline_titles"]=true;CKEDITOR.config["jsplus_advanced_blocks_gui_width"]=6;CKEDITOR.config["jsplus_advanced_blocks_gui_height"]=6;CKEDITOR.config["jsplus_advanced_blocks_enabled_by_default"]=true;CKEDITOR.config["jsplus_advanced_blocks_big_icons"]=true;CKEDITOR.config["jsplus_advanced_blocks_min_div_width"]=40;CKEDITOR.config["jsplus_advanced_blocks_min_div_height"]=40;})();