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
		game.load.image('bubble', 'assets/bubble.png');
		game.load.image('menu', 'assets/menu.png');
		game.load.image('rgame', 'assets/rgame.png');
		game.load.image('rmenu', 'assets/rmenu.png');
		game.load.image('tile', 'assets/tile.jpg');
		game.load.image('go', 'assets/go.png');
		game.load.image('alien', 'assets/alien.png');
		game.load.image('line', 'assets/line.png');
		game.load.image('up', 'assets/up.png');
		game.load.image('down', 'assets/down.png');
		game.load.image('down', 'assets/down.png');
		game.load.image('wrongtile', 'assets/wrongtile.png');



		game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
		game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3']);
		game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
		game.load.audio('sprite1', 'assets/sprite1.mp3');
		game.load.audio('sprite2', 'assets/sprite2.mp3');
		game.load.audio('sprite3', 'assets/sprite3.mp3');
		game.load.audio('sprite4', 'assets/sprite4.mp3');
		game.load.audio('sprite11', 'assets/sprite11.mp3');
		game.load.audio('sprite22', 'assets/sprite22.mp3');
		game.load.audio('sprite33', 'assets/sprite33.mp3');
		game.load.audio('sprite44', 'assets/sprite44.mp3');
		game.load.audio('crash', 'assets/crash.mp3');








	//	game.load.audio('music', ['assets/music.ogg', 'assets/music.mp3']);

	    	game.load.image('pixel', 'assets/pixel.png');






	},


	create: function(){
		console.log("load");
		game.state.start('land');
	},


};