var waterline = require('waterline');
var sailsMySQLAdapter = require('sails-mysql')

var categoryCollection = waterline.Collection.extend({
    identity: 'category',
    datastore: 'default',
    primaryKey: 'category_id',

    attributes: {
        category_id: {
            type: 'integer',
            autoIncrement: true
        },
        name: {type: 'string'}
    }
});


waterline.registerModel(categoryCollection)

var config = 