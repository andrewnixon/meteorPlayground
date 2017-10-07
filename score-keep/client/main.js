import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(function() {
  console.log('Players list', Players.find().fetch());
});

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function (){
  let title = 'Score Keep';
  let name = 'Andrew';
  let jsx = (
    <div>
      {/* Render h1 tag with title var as text */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is a second paragraph.</p>
      {renderPlayers(players)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
