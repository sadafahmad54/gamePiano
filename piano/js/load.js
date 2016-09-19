var loadState={

	preload: function(){

		//var loadingLabel= game.add.text(game.width/2, 150, 'loading...', {font: '30px Arial', fill:'#ffffff'});
		//loadingLabel.anchor.setTo(0.5, 0.5);


	//	var progressBar=game.add.sprite(game.width/2, 200, 'progressBar');
	//	progressBar.anchor.setTo(0.5, 0.5);
		// game.load.setPreloadSprite('progressBar');

		game.load.spritesheet('player', 'assets/player2.png', 20,20);
		game.load.image('enemy', 'assets/enemy.png');
		game.load.image('coin', 'assets/coin.png');
		game.load.image('wallV', 'assets/wallVertical.png');
		game.load.image('wallH', 'assets/wallHorizontal.png');

		game.load.image('background', 'assets/background.png');
		game.load.image('cart', 'assets/cart.png');
		game.load.image('settings', 'assets/settings.png');
		game.load.image('symbol', 'assets/symbol.png');
		game.load.image('next', 'assets/next.png');
		game.load.image('score', 'assets/score.png');
		game.load.image('story', 'assets/story.png');
		game.load.image('skip', 'assets/skip.png');


		game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
		game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
		game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
	//	game.load.audio('music', ['assets/music.ogg', 'assets/music.mp3']);

	    	game.load.image('pixel', 'assets/pixel.png');






	},


	create: function(){
		console.log("load");
		game.state.start('land');
	},


};