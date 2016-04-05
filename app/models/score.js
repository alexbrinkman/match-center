import DS from 'ember-data';

export default DS.Model.extend({

  team1Name: DS.attr('string'),
  team2Name: DS.attr('string'),

  court1Team1Name: DS.attr('string'),
  court1Team2Name: DS.attr('string'),
  court1Team1Serving: DS.attr('boolean'),
  court1Team1Set1: DS.attr('number'),
  court1Team2Set1: DS.attr('number'),
  court1Team1Set2: DS.attr('number'),
  court1Team2Set2: DS.attr('number'),
  court1Team1Set3: DS.attr('number'),
  court1Team2Set3: DS.attr('number'),

  court2Team1Name: DS.attr('string'),
  court2Team2Name: DS.attr('string'),
  court2Team1Serving: DS.attr('boolean'),
  court2Team1Set1: DS.attr('number'),
  court2Team2Set1: DS.attr('number'),
  court2Team1Set2: DS.attr('number'),
  court2Team2Set2: DS.attr('number'),
  court2Team1Set3: DS.attr('number'),
  court2Team2Set3: DS.attr('number'),

  court3Team1Name: DS.attr('string'),
  court3Team2Name: DS.attr('string'),
  court3Team1Serving: DS.attr('boolean'),
  court3Team1Set1: DS.attr('number'),
  court3Team2Set1: DS.attr('number'),
  court3Team1Set2: DS.attr('number'),
  court3Team2Set2: DS.attr('number'),
  court3Team1Set3: DS.attr('number'),
  court3Team2Set3: DS.attr('number'),

  court4Team1Name: DS.attr('string'),
  court4Team2Name: DS.attr('string'),
  court4Team1Serving: DS.attr('boolean'),
  court4Team1Set1: DS.attr('number'),
  court4Team2Set1: DS.attr('number'),
  court4Team1Set2: DS.attr('number'),
  court4Team2Set2: DS.attr('number'),
  court4Team1Set3: DS.attr('number'),
  court4Team2Set3: DS.attr('number'),

  court5Team1Name: DS.attr('string'),
  court5Team2Name: DS.attr('string'),
  court5Team1Serving: DS.attr('boolean'),
  court5Team1Set1: DS.attr('number'),
  court5Team2Set1: DS.attr('number'),
  court5Team1Set2: DS.attr('number'),
  court5Team2Set2: DS.attr('number'),
  court5Team1Set3: DS.attr('number'),
  court5Team2Set3: DS.attr('number')

});
