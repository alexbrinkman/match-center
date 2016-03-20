import DS from 'ember-data';

export default DS.Model.extend({

  team1Name: DS.attr('string'),
  team2Name: DS.attr('string'),

  court1Team1Set1: DS.attr('number'),
  court1Team2Set1: DS.attr('number'),
  court1Team1Set2: DS.attr('number'),
  court1Team2Set2: DS.attr('number'),
  court1Team1Set3: DS.attr('number'),
  court1Team2Set3: DS.attr('number'),

  court2Team1Set1: DS.attr('number'),
  court2Team2Set1: DS.attr('number'),
  court2Team1Set2: DS.attr('number'),
  court2Team2Set2: DS.attr('number'),
  court2Team1Set3: DS.attr('number'),
  court2Team2Set3: DS.attr('number'),

  court3Team1Set1: DS.attr('number'),
  court3Team2Set1: DS.attr('number'),
  court3Team1Set2: DS.attr('number'),
  court3Team2Set2: DS.attr('number'),
  court3Team1Set3: DS.attr('number'),
  court3Team2Set3: DS.attr('number'),

  court4Team1Set1: DS.attr('number'),
  court4Team2Set1: DS.attr('number'),
  court4Team1Set2: DS.attr('number'),
  court4Team2Set2: DS.attr('number'),
  court4Team1Set3: DS.attr('number'),
  court4Team2Set3: DS.attr('number'),

  court5Team1Set1: DS.attr('number'),
  court5Team2Set1: DS.attr('number'),
  court5Team1Set2: DS.attr('number'),
  court5Team2Set2: DS.attr('number'),
  court5Team1Set3: DS.attr('number'),
  court5Team2Set3: DS.attr('number')

});
