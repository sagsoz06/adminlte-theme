/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,panelbutton,colorbutton,colordialog,tableresize,lineutils,widget,btgrid,find,showblocks,justify,pbckcode,font,lineheight,imageresize,imagerotate,indentblock,templates,format_buttons,autogrow,codemirror,lightbox,btquicktable,image2';
	config.skin = 'moonocolor';
	config.enterMode = CKEDITOR.ENTER_P;
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{name: 'clipboard', groups: ['clipboard', 'undo']},
		{name: 'editing', groups: ['find', 'selection', 'spellchecker']},
		{name: 'links'},
		{name: 'insert'},
		{name: 'forms'},
		{name: 'tools', groups: ['cleanup']},
		{name: 'document', groups: ['mode', 'document', 'doctools', 'templates']},
		{name: 'others'},
		'/',
		{name: 'basicstyles', groups: ['basicstyles']},
		{name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
		{name: 'styles'},
		{name: 'colors'},
		{name: 'about'}
	];

	config.autoGrow_minHeight = 300;
	config.autoGrow_maxHeight = 600;

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.allowedContent = true;
	config.filebrowserBrowseUrl = Asgard.mediaGridCkEditor;
	config.defaultLanguage = Asgard.currentLanguage;
	config.language = Asgard.currentLanguage;

	CKEDITOR.config.extraAllowedContent = 'a[data-lightbox,data-title,data-lightbox-saved]';
};
