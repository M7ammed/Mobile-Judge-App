Ext.define('OnlineJudges.view.admin.Invitations', {
    extend:'Ext.dataview.List',
    alias: 'widget.adminInvitations',

    requires:[
        'Ext.plugin.PullRefresh'
    ],

    config: {
        xtype: 'list',
        title: 'Invitations',
        itemTpl: [        
             '<div class="x-container x-field-checkbox x-label-align-left x-field x-field-labeled" style="background:none">',
             '<div class="x-form-label" style="background:none;padding: 0">',
                 '<div>{FirstName} {LastName}</div>',
                 '<div style="font-size: 12px">Email: {Email}</div>',
                 '<div style="font-size: 12px">RSVP: ',
                   '<tpl if="Response === true">ACCEPTED',
                   '<tpl elseif="Response === false">DECLINED',
                   '<tpl else>PENDING...</tpl>',
                 '</div>',
             '</div>',
             '<div class="x-component-outer">',
                 '<div class="x-unsized x-field-input" style="border:0;background:none;">',
                     '<input type="checkbox" <tpl if=\'InvitationSelected === true\'>checked="checked"</tpl> class="x-input-el x-input-checkbox">',
                     '<div class="x-field-mask"></div>',
                 '</div>',
             '</div>',
         '</div>'

        ],
        //NEW: Selection listener and storing selected judges
        listeners: {
            itemtap: function (item, num, ev, record) {
                var inviteStore = Ext.getStore('InvitationEmails');
                var flag = record.get('InvitationSelected');
                if (flag === true) {
                        inviteStore[record.data.Email]= null;
                        record.set('InvitationSelected', false);
                     } else {
                        //console.log(record);
                        inviteStore[record.data.Email]= (record.data);
                         record.set('InvitationSelected', true);
                    }
                }
        },
        mode: 'MULTI',
        grouped: true,
        indexBar: true,
        store: 'Invitations',
        onItemDisclosure: false,
        disableSelection: true,
        plugins: [{type: 'pullrefresh'}]
    }
});


