        // var myStore = Ext.create('Ext.data.Store', {
        //     storeId: 'MyStore',
        //     fields: ['txt']
        // }); // create()
        // alert(myStore);

Ext.define('OnlineJudges.view.admin.SendInvitation', {
    //extend: 'Ext.form.Panel',


    // NEW: Turning view into a List
    extend: 'Ext.List',
    // itemTpl: '{txt}',
    // store: 'AddJudgesList',
    // itemTpl: '<br><br><br><br><div class="x-container x-field-checkbox x-label-align-left x-field x-field-labeled" style="background:none">TEST TEST TEST  {txt}</div>',
    //itemTpl: '{txt}',
    // items: [{
    //     xtype: 'titlebar',
    //     margin: '.5em .5em 1.5em',
    //     // docked: 'top',
    //     items: [{
    //         text: 'Add item',
    //         handler: function () {
    //             var now = new Date(),
    //                 value = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    //             myStore.add({txt: value});
    //         } // handler
    //     }] // items (titlebar)
    // }], // items (list)


    alias: 'widget.adminSendInvitation',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    // NEW: Commenting old code
    config: {
        //itemTpl: '{txt}',
        itemTpl: [
            '<div class="x-container  x-form-field">',
            '   <div class="x-input x-field-input" style="font-size: 12px">',
                '{txt}',
                '</div>',
                '<div class="x-input x-field-input" style="font-size: 12px">',
                '<input class="x-input x-input-email" placeHolder="email@example.com" ></input>',
                '</div>',
                '<div class="x-input x-field-input" style="font-size: 12px">',
                '<input class="x-input x-input-email" placeHolder="First Name" ></input>',
                '</div>',
                '<div class="x-input x-field-input" style="font-size: 12px">',
                '<input class="x-input x-input-email" placeHolder="Last Name" ></input>',
                '</div>',
            '</div>'
        ],
        items:[
            ///// NEW
            // {
            //     xtype: 'titlebar',
            //     docked: 'top',
            //     items: [{
            //         text: 'Add item',
            //         handler: function () {
            //             var now = new Date(),
            //                  value = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
            //             var store = Ext.getStore('AddJudgesList');
            //             console.log("SIZE:" + store.getCount());
            //             store.add({txt: value});
            //             //store.add("Hello");
            //             console.log("VALUE " + JSON.stringify(store.getAt(store.getCount()-1).getData()));
            //         } // handler
            //     }] // items (titlebar)
            // },


            // // ORIGINAL 
            // {
            //     xtype: 'fieldset',
            //     margin: '.5em .5em 1.5em',
            //     title: 'Judge Information',
            //     defaults:{
            //         xtype: 'textfield'
            //     },
            //     items: [
            //         {
            //             xtype: 'emailfield',
            //             name: 'email',
            //             placeHolder: 'email@example.com'
            //         },
            //         {
            //             placeHolder: 'First Name',
            //             name: 'firstName'
            //         },
            //         {
            //             placeHolder: 'Last Name',
            //             name: 'lastName'
            //         }
            //     ]
            // }

        ],
        listeners: {
            load: function(store, records) {
                store.each(function(records, index){
                    records.set('index', index)
                },
                store
            )
                console.log(JSON.stringify(store.getAt(store.getCount()-1).getData()));
            },
            itemtap: function (item, num, ev, record) {
                var inviteStore = Ext.getStore('InvitationEmails');
                var flag = record.get('InvitationSelected');
                if (flag === true) {
                        // inviteStore[record.data.Email]= null;
                        // record.set('InvitationSelected', false);
                        console.log(record);
                     } else {
                        console.log(record);
                        // inviteStore[record.data.Email]= (record.data);
                        //  record.set('InvitationSelected', true);
                    }
                }            
        },
        store: 'AddJudgesList',

        // NEW: adding a store and grouping
        // grouped: true,
        // indexBar: true,
        // store: 'Judges',
        // onItemDisclosure: false,
        //disableSelection: true
    }

});