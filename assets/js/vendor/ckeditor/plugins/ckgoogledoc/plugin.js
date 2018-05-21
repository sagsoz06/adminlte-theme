(function() {

  CKEDITOR.plugins.add('ckgoogledoc',
      {
        init: function(editor)
        {
          /* COMMAND */
          editor.addCommand('insertGoogledoc', new CKEDITOR.dialogCommand('ckgoogledocDialog'));

          /* BUTTON */
          editor.ui.addButton('CKGoogledoc',
              {
                label: 'Google docs',
                command: 'insertGoogledoc',
                icon: this.path + 'ckgoogledoc.png'
              });

          /* DIALOG */
          CKEDITOR.dialog.add('ckgoogledocDialog', function (editor)
          {
            return {
              title : 'Embedd Google Docs iFrame',
              minWidth : 300,
              minHeight : 200,
              contents :
                  [{
                    id : 'tab1',
                    label : 'Settings',
                    elements :
                        [{
                          type : 'text',
                          id : 'url',
                          label : 'Document URL',
                          validate : CKEDITOR.dialog.validate.notEmpty("Document URL should be provided and has to be a well formated URL")
                        },
                          {
                              type: 'button',
                              hidden: true,
                              id: 'id0',
                              label: editor.lang.common.browseServer,
                              filebrowser: {
                                  action: 'Browse',
                                  // target: 'tab1:id1',
                                  onSelect: function( fileUrl, data ) {
                                      var dialog = this.getDialog();
                                      dialog.getContentElement( 'tab1', 'url' ).setValue( fileUrl.substr(1) );
                                      return false;
                                  }
                              }
                          },
                          {
                            type : 'text',
                            id : 'width',
                            label : 'Document Width in pixels',
                            onShow : function() { this.setValue('100%'); },
                            validate : CKEDITOR.dialog.validate.notEmpty("Document width should be provided")
                          },
                          {
                            type : 'text',
                            id : 'height',
                            label : 'Document Height in pixels',
                            onShow : function() { this.setValue('780px'); },
                            validate : CKEDITOR.dialog.validate.notEmpty("Document height should be provided")
                          }]
                  }],
              onOk : function()
              {
                var dialog = this;
                var url = dialog.getValueOf('tab1', 'url');
                var width = dialog.getValueOf('tab1', 'width');
                var height = dialog.getValueOf('tab1', 'height');

                //var inplaceTag = '<iframe src="http://docs.google.com/viewer?url=' + encodeURIComponent(url) + '&embedded=true" style="border: none;width:'+width+';height:'+height+';">';

                var inplaceTag = '<iframe src="//www.jaletezer.k12.tr/ViewerJS/?zoom=page-width#/' + encodeURIComponent(url) + '" style="border: none;" width="'+width+'" height="'+height+'">';

                editor.insertHtml(inplaceTag);
              }
            };
//dialog.add
          });
//init:
        }
//plugin.add
      });
})();
