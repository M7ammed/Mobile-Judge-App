Ext.define('OnlineJudges.store.InvitationEmails', {
    extend: 'Ext.data.Store',

    requires:[
        'Ext.data.proxy.Direct'
    ],

    config: {
        storeId: 'InvitationEmails',
        proxy: {
            type: 'direct',
            directFn: 'Ext.php.Invites.send',
            paramsAsHash: false,
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'data'
            }
        },
        fields: ['id','Email','FirstName','LastName',
            {
                name:'Response',
                type:'boolean'
            }
        ],
        sorters: ['FirstName','LastName'],
        grouper: function(record) {
            return record.get('FirstName')[0].toUpperCase();
        }
    }
});