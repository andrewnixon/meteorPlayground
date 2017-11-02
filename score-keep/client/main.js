import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName){
    e.target.playerName.value = '';

    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    console.log('Players list', Players.find().fetch());
    var players = Players.find().fetch();

    let title = 'Score Keep';
    let name = 'Andrew';
    let jsx = (
      <div>
        {/* Render h1 tag with title var as text */}
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
