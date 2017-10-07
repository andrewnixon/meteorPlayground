import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function (){
  console.log('Started...');

  Players.insert({
    name: 'Marjorie',
    score: 99
  });

  console.log(Players.find().fetch());
});
