var bootState={

		preload: function(){
		game.load.image('background', 'assets/background.png');	
		game.load.image('symbol' , 'assets/symbol.png');

	},



	create: function(){

	game.add.image(0,0, 'background');
	var nameLabel= game.add.text(game.width/2, -50, 'Tug of Tiles', {font: '50px Calibri', fill:'#000000'});
	nameLabel.anchor.setTo(0.5, 0.5);
	//var tween=game.add.tween(nameLabel);
	game.add.tween(nameLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();
	

	game.add.image(200,200, 'symbol');
		//var scoreLabel= game.add.text(game.width/2, game.height/2, 'score:' + game.global.score, {font: '15px Calibri', fill:'#000000'});
		//scoreLabel.anchor.setTo(0.5, 0.5);


		var startLabel= game.add.text(game.width/2, game.height-100, 'Created By:', {font: '15px Calibri', fill:'#000000'});
		startLabel.anchor.setTo(0.5, 0.5);
		var startLabel= game.add.text(game.width/2, game.height-80, 'Sadaf Ahmad', {font: '15px Calibri', fill:'#000000'});
		startLabel.anchor.setTo(0.5, 0.5);




//picture of symbol
		game.stage.backgroundColor= '#ffffff';
		game.physics.startSystem(Phaser.Physics. ARCADE);
		game.renderer.renderSession.roundPixels=true;
		game.state.start('load');

	},

};