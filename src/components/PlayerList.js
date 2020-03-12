import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {

	return (
		<Consumer>
			{ context => (
				<React.Fragment>
				{context.players.map( (player, index) =>
					<Player
						key={player.id.toString()}
						index={index}
						isHighScore={context.actions.getHighScore() === player.score}
					/>
				)}
			</React.Fragment>
			)}
		</Consumer>
	);
}

export default PlayerList
