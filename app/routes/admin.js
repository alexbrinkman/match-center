import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('score', '-KDGrD844M5xeHXJdWAa');
  }
});