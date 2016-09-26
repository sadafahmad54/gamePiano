var storyState={

	

	



	create: function(){
	
	
	   game.add.image(0,0, 'story');
	   

		var picLabel= game.add.image(game.width/2, game.height-30, 'skip');
		picLabel.anchor.setTo(-1,1);
		 picLabel.inputEnabled = true;
		 picLabel.events.onInputDown.add(this.fadeState, this);

		game.time.events.add(Phaser.Timer.SECOND * 10, this.fadeState, this);

		game.stage.backgroundColor= '#ffffff';

		game.physics.startSystem(Phaser.Physics. ARCADE);
		game.renderer.renderSession.roundPixels=true;




		  //	Emitters have a center point and a width/height, which extends from their center point to the left/right and up/down
    this.emitter = game.add.emitter(game.world.centerX, 500, 100);

    //	This emitter will have a width of 800px, so a particle can emit from anywhere in the range emitter.x += emitter.width / 2
    this.emitter.width = 400;

    this.emitter.makeParticles('bubble');

    this.emitter.minParticleSpeed.set(0, 50);
    this.emitter.maxParticleSpeed.set(0, 50);

    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0.3, 0.8);
    this.emitter.setScale(0.5, 0.5, 1, 1);
    this.emitter.gravity = -50;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    this.emitter.start(false, 5000, 100);




		
	},
         
         fadeState: function(){
           game.state.start('menu');

         },
	setting: function(){
			
			game.state.start('setting');
		},


		
	
};