import Ember from 'ember';

export default Ember.Controller.extend({

  actions : {

    update : function () {
      var model = this.get('content');
      model.save();
    },

    valueUp : function (field) {
      var model = this.get('content');
      var value = model.get(field) + 1;
      model.set(field, value);
      model.save();
    },

    valueDown : function (field) {
      var model = this.get('content');
      var value = model.get(field) - 1;

      if (value < 0) {
        value = 0;
      }

      model.set(field, value);
      model.save();
    },

    set : function (field, value) {
      var model = this.get('content');
      model.set(field, value);
      model.save();
    }

  }

});
