Ext.define('OnlineJudges.store.Settings', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Direct'
    ],

    config: {
        storeId: 'Settings',
        proxy: {
            type: 'direct',
            directFn: 'Ext.php.Settings.getAll',
            paramsAsHash: false,
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'data'
            }
        },
        fields: ['Term',
            {
                name: 'StudentsPerJudge',
                type: 'int'
            }, 'Date','Time','Location','Subject','EmailText','SrProjectToken',
            {
                name: 'AllowJudgesToLogin',
                type: 'int'
            },
            {
                name: 'GradesPosted',
                type: 'int'
            }, 'MapImage'
        ]
    }
});