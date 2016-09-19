var storyState={

	

	



	create: function(){
	
	
	   game.add.image(0,0, 'story');
	   

		var picLabel= game.add.image(game.width/2, game.height-30, 'skip');
		picLabel.anchor.setTo(-1,1);
		 picLabel.inputEnabled = true;
		 picLabel.events.onInputDown.add(this.setting, this);

		game.time.events.add(Phaser.Timer.SECOND * 10, this.fadeState, this);

		game.stage.backgroundColor= '#ffffff';

		game.physics.startSystem(Phaser.Physics. ARCADE);
		game.renderer.renderSession.roundPixels=true;



		
	},
         
         fadeState: function(){
           game.state.start('menu');

         },
	setting: function(){
			
			game.state.start('menu');
		},


		
	
};