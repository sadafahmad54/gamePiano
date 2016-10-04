



var game = new Phaser.Game(500, 600, Phaser.AUTO, "gameDiv");

	game.global= {
	score:0000
};
	game.state.add('boot', bootState);
	
	game.state.add('load', loadState);
	game.state.add('land', landState);
	game.state.add('story', storyState);
	game.state.add('menu', menuState);
	game.state.add('setting', settingState);
	
	game.state.add('play', playState);
	game.state.add('score', scoreState);
	game.state.start('boot');

