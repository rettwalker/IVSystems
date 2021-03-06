/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({
    id:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    },
    username:{
      type:'string',
      unique:true
    }

    /* e.g.
    nickname: 'string'
    */

  }),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
