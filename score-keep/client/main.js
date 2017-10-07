import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Marjorie',
  score: 99
}, {
  _id: '2',
  name: 'Beatrice',
  score: -1
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}, {
  _id: '4',
  name: 'Arthur',
  score: 56
}];

Meteor.startup(function (){
  let title = 'Score Keep';
  let name = 'Andrew';
  let jsx = (
    <div>
      {/* Render h1 tag with title var as text */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is a second paragraph.</p>
      {[<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>]}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
