var settingState={


	create: function(){

	game.add.image(0,0, 'menu');
	
		var picLabell= game.add.image(game.width/2, game.height-50, 'rgame');
		picLabell.anchor.setTo(-0.2,1.46);
		 picLabell.inputEnabled = true;
		 picLabell.events.onInputDown.add(this.returnGame, this);
		   
		var pictureLabel2= game.add.image(game.width/2, game.height-50, 'rmenu');	
		pictureLabel2.anchor.setTo(1.25,1.46);
		pictureLabel2.inputEnabled = true;
		pictureLabel2.events.onInputDown.add(this.returnMenu, this);
		   

	},

		

		returnGame: function(){
			//console.log("..start");
			//game.stage.image=('cart', 'assets/cart.png');	
			//game.stage.image=('settings' , 'assets/settings.png');	
			game.state.start('play');
		},

		returnMenu: function(){
			//console.log("..start");
			//game.stage.image=('cart', 'assets/cart.png');	
			//game.stage.image=('settings' , 'assets/settings.png');	
			game.state.start('menu');
		},



};