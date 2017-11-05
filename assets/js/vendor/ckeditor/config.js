/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,panelbutton,colorbutton,colordialog,tableresize,lineutils,widget,find,showblocks,justify,pbckcode,font,lineheight,imageresize,imagerotate,indentblock,templates,format_buttons,autogrow,codemirror,btquicktable,image2';
	config.skin = 'bootstrapck';
	config.enterMode = CKEDITOR.ENTER_P;
	config.extraPlugins = '' +
		'jsplus_youtube,' +
		'jsplus_font_awesome,' +
		'jsplus_templates,' +
		'jsplus_bootstrap_advanced_blocks,' +
		'jsplus_backup,' +
		'jsplus_edit_tag,' +
		'jsplus_bootstrap_show_blocks,' +
		'jsplus_bootstrap_templates,' +
		'jsplus_bootstrap_block_conf,' +
		'jsplus_bootstrap_row_add_down,' +
		'jsplus_bootstrap_row_add_up,' +
		'jsplus_bootstrap_col_move_left,' +
		'jsplus_bootstrap_col_move_right,' +
		'jsplus_bootstrap_row_move_up,' +
		'jsplus_bootstrap_row_move_down,' +
		'jsplus_bootstrap_delete_col,' +
		'jsplus_bootstrap_delete_row,' +
		'jsplus_bootstrap_table_new,' +
		'jsplus_bootstrap_table_conf,' +
		'jsplus_bootstrap_table_row_conf,' +
		'jsplus_bootstrap_table_col_conf,' +
		'jsplus_bootstrap_table_cell_conf,' +
		'jsplus_bootstrap_table_row_move_up,' +
		'jsplus_bootstrap_table_row_move_down,' +
		'jsplus_bootstrap_table_col_move_left,' +
		'jsplus_bootstrap_table_col_move_right,' +
		'jsplus_bootstrap_table_add_row_up,' +
		'jsplus_bootstrap_table_add_row_down,' +
		'jsplus_bootstrap_table_add_col_left,' +
		'jsplus_bootstrap_table_add_col_right,' +
		'jsplus_bootstrap_table_add_cell_left,' +
		'jsplus_bootstrap_table_add_cell_right,' +
		'jsplus_bootstrap_table_delete_col,' +
		'jsplus_bootstrap_table_delete_row,' +
		'jsplus_bootstrap_table_delete_cell,' +
		'jsplus_bootstrap_table_merge_cells,' +
		'jsplus_bootstrap_table_merge_cell_right,' +
		'jsplus_bootstrap_table_merge_cell_down,' +
		'jsplus_bootstrap_table_split_cell_hor';
	config.contentsCss  = ['/themes/adminlte/vendor/bootstrap/dist/css/bootstrap.min.css'];
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{name: 'clipboard', groups: ['clipboard', 'undo']},
		{name: 'editing', groups: ['find', 'selection']},
		{name: 'links'},
		{name: 'insert'},
		{name: 'forms'},
		{name: 'tools', groups: ['cleanup']},
		{name: 'document', groups: ['mode', 'document', 'doctools', 'templates']},
		'/',
		{name: 'basicstyles', groups: ['basicstyles']},
		{name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
		{name: 'styles'},
		{name: 'colors'},
		{name: 'about'},
		{name: 'others'},
		{name: 'jsplusbt', groups: ['jsplus_bootstrap_show_blocks','jsplus_bootstrap_templates','jsplus_bootstrap_block_conf','jsplus_bootstrap_row_add_down','jsplus_bootstrap_row_add_up','jsplus_bootstrap_col_move_left','jsplus_bootstrap_col_move_right','jsplus_bootstrap_row_move_up','jsplus_bootstrap_row_move_down','jsplus_bootstrap_delete_col','jsplus_bootstrap_delete_row']},
		{name: 'jsplustb', groups: ['jsplus_bootstrap_table_new','jsplus_bootstrap_table_conf','jsplus_bootstrap_table_row_conf','jsplus_bootstrap_table_col_conf','jsplus_bootstrap_table_cell_conf','jsplus_bootstrap_table_row_move_up','jsplus_bootstrap_table_row_move_down','jsplus_bootstrap_table_col_move_left','jsplus_bootstrap_table_col_move_right','jsplus_bootstrap_table_add_row_up','jsplus_bootstrap_table_add_row_down','jsplus_bootstrap_table_add_col_left','jsplus_bootstrap_table_add_col_right','jsplus_bootstrap_table_add_cell_left','jsplus_bootstrap_table_add_cell_right','jsplus_bootstrap_table_delete_col','jsplus_bootstrap_table_delete_row','jsplus_bootstrap_table_delete_cell','jsplus_bootstrap_table_merge_cells','jsplus_bootstrap_table_merge_cell_right','jsplus_bootstrap_table_merge_cell_down','jsplus_bootstrap_table_split_cell_hor','jsplus_bootstrap_table_split_cell_vert']}
	];

	config.toolbar_basic = [
		['Bold','Italic','Underline','Strike']
	];

	config.autoGrow_minHeight = 400;
	config.autoGrow_maxHeight = 800;

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
	CKEDITOR.addCss( 'body { padding:25px 30px; }' );

	config.jsplus_youtube_apiKey = 'AIzaSyDHyIEDMgvsKsxOMB65fPlkEPz3nkK26y4';

	config.includeCKEditor = false;
	config.jsplus_bootstrap_advanced_blocks_enabled_by_default = false;
};
