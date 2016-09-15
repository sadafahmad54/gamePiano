var menuState={


	create: function(){

	game.add.image(0,0, 'background');
	var nameLabel= game.add.text(game.width/2, game.height-450, 'SELECT SONG', {font: '30px Calibri', fill:'#000000'});
	nameLabel.anchor.setTo(0.5, 1);
	//var tween=game.add.tween(nameLabel);
	//game.add.tween(nameLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();
	

	//game.add.image(200,200, 'symbol');
		//var scoreLabel= game.add.text(game.width/2, game.height/2, 'score:' + game.global.score, {font: '15px Calibri', fill:'#000000'});
		//scoreLabel.anchor.setTo(0.5, 0.5);


		var startLabel= game.add.text(game.width/2, game.height-350, 'Adele: Hello', {font: '20px Calibri', fill:'#808080'});
		startLabel.anchor.setTo(1.9,2);
		


		//startLabel.events.onInputOver.add(over, this);
		 //startLabel.events.onInputDown.add(down, this);



		var startLabel= game.add.text(game.width/2, game.height-310, 'JLo: Dance Again', {font: '20px Calibri', fill:'#808080'});
		startLabel.anchor.setTo(1.4, 2);
		var startLabel= game.add.text(game.width/2, game.height-270, 'Sia: Cheap Thrills', {font: '20px Calibri', fill:'#808080'});
		startLabel.anchor.setTo(1.4, 2);
		var startLabel= game.add.text(game.width/2, game.height-230, 'Justin Beiber: Sorry', {font: '20px Calibri', fill:'#808080'});
		startLabel.anchor.setTo(1.2, 2);
		//game.add.tween(startLabel).to({angel:-2},500).to({angel:2},1000).to({angel:0},500).loop().start();

		var nameLabel= game.add.text(game.width/2, game.height-180, 'Level 01', {font: '30px Calibri', fill:'#000000'});
	nameLabel.anchor.setTo(0.5, 1);


		var startLabel= game.add.image(game.width/2, game.height-50, 'cart');
		startLabel.anchor.setTo(-5.5,0.7);
		var startLabel= game.add.image(game.width/2, game.height-50, 'settings');	
		startLabel.anchor.setTo(6.5,0.7);
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
		//console.log("menuState");

	},

		start: function(){
			console.log("..start");
			game.state.start('play');
		},




};