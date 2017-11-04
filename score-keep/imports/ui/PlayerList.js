import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player}/>;
  });
};

export default class PlayerList extends React.Component {
  renderPlayers() {
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }

  render() {
    return (
      <div>
      {this.renderPlayers()}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};