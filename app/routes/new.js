import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var newScore = this.store.createRecord('score', {

      team1Name: "",
      team2Name: "",

      court1Team1Name: "",
      court1Team2Name: "",
      court1Team1Serving: true,
      court1Team1Set1: 0,
      court1Team2Set1: 0,
      court1Team1Set2: 0,
      court1Team2Set2: 0,
      court1Team1Set3: 0,
      court1Team2Set3: 0,

      court2Team1Name: "",
      court2Team2Name: "",
      court2Team1Serving: true,
      court2Team1Set1: 0,
      court2Team2Set1: 0,
      court2Team1Set2: 0,
      court2Team2Set2: 0,
      court2Team1Set3: 0,
      court2Team2Set3: 0,

      court3Team1Name: "",
      court3Team2Name: "",
      court3Team1Serving: true,
      court3Team1Set1: 0,
      court3Team2Set1: 0,
      court3Team1Set2: 0,
      court3Team2Set2: 0,
      court3Team1Set3: 0,
      court3Team2Set3: 0,

      court4Team1Name: "",
      court4Team2Name: "",
      court4Team1Serving: true,
      court4Team1Set1: 0,
      court4Team2Set1: 0,
      court4Team1Set2: 0,
      court4Team2Set2: 0,
      court4Team1Set3: 0,
      court4Team2Set3: 0,

      court5Team1Name: "",
      court5Team2Name: "",
      court5Team1Serving: true,
      court5Team1Set1: 0,
      court5Team2Set1: 0,
      court5Team1Set2: 0,
      court5Team2Set2: 0,
      court5Team1Set3: 0,
      court5Team2Set3: 0
    });

    newScore.save();

  }
});