var scoreState={


	create: function(){

	game.add.image(0,0, 'background');
	var nameLabel= game.add.text(game.width/2, game.height-450, 'YOU SCORED', {font: '30px Calibri', fill:'#000000'});
	nameLabel.anchor.setTo(0.5, 2);

	var sprite= game.add.sprite(game.width/2, game.height-340, 'score');
		sprite.anchor.setTo(0.5,2);
		var textLabel=game.add.text(0.5,2,game.global.score,{font: '30px Calibri', fill:'#ffffff'});
		sprite.addChild(textLabel);
		 
		var nameLabel= game.add.text(game.width/2, game.height-180, 'SONG: HELLO', {font: '30px Calibri', fill:'#000000'});
	nameLabel.anchor.setTo(0.5, 3);

		var nextLabel= game.add.image(game.width/2, game.height-50, 'next');
		nextLabel.anchor.setTo(0.5,2);
		 nextLabel.inputEnabled = true;
		 nextLabel.events.onInputDown.add(this.setting, this);
		var picLabel= game.add.image(game.width/2, game.height-50, 'settings');
		picLabel.anchor.setTo(-6.5,0.7);
		 picLabel.inputEnabled = true;
		 picLabel.events.onInputDown.add(this.setting, this);
		   
		var pictureLabel= game.add.image(game.width/2, game.height-50, 'cart');	
		pictureLabel.anchor.setTo(7.5,0.7);
		 
		

	},

		

		setting: function(){
			console.log("..start");
			//game.stage.image=('cart', 'assets/cart.png');	
			//game.stage.image=('settings' , 'assets/settings.png');	
			game.state.start('menu');
		},



};