var playState={


	

	create: function(){
		game.world.setBounds(0,0,500,400)
		game.add.image(0,0, 'background');

	///	this.createWorld();


		var textLabel= game.add.text(game.width/2, game.height-50, 'Score: 0',
		{ font: '22px Arial', fill:'#000000'});
		game.global.score=0;
		textLabel.anchor.setTo(0.5,1);
		//game.global.score=0;

		var pictureLabel= game.add.image(game.width/2, game.height-50, 'alien');	
		pictureLabel.anchor.setTo(4.5,1);

		
		game.physics.startSystem(Phaser.Physics. ARCADE);
		game.renderer.renderSession.roundPixels=true;
		
		
		var startLabel=game.add.sprite(game.width/2, game.height-50,'go');
		startLabel.anchor.setTo(0.5,1.5);
		startLabel.inputEnabled = true;
		startLabel.events.onInputDown.add(this.startGame,this);



	},


	removeGroup: function(){
		game.world.remove();

	},

     
     startGame: function(){
		
     	this.addTile1();
     	//tile.body.allowGravity=true;
     	//startLabel.visible=false;
        //this.instructionGroup.destroy();
     	//.visible=false;
     	//var startLabel= game.add.sprite(game.width/2, game.height-50,'go');	
		//startLabel.anchor.setTo(7.5,5);
     	//startLabel.alpha=10;
     	//startLabel.events.onInputDown.add(dropHandler, this);

     },





     addTile1: function(){


 		game.physics.arcade.gravity.y = 100;

    //  Sprite 1 will use the World (global) gravity
  		  sprite1 = game.add.sprite(50, 120, 'tile');

    	  sprite3 = game.add.sprite(270, 96, 'tile');

    // Enable physics on those sprites
   		 game.physics.enable( [ sprite1, sprite3], Phaser.Physics.ARCADE);

   		sprite1.body.collideWorldBounds = true;
    	sprite1.body.bounce.y = 1.0;
    	sprite1.body.gravity.y=60;    	
    	sprite1.inputEnabled = true;
		sprite1.input.useHandCursor = true;
		sprite1.events.onInputDown.add(this.destroySprite1, this);
		

    
    	sprite3.body.collideWorldBounds = true;
   	    sprite3.body.bounce.y = 1.0;
   		sprite3.body.gravity.y = 60;
   		sprite3.inputEnabled = true;
        sprite3.input.useHandCursor = true;
		sprite3.events.onInputDown.add(this.destroySprite3, this);


    

	},

	
	 addTile2: function(){


 		game.physics.arcade.gravity.y = 100;

    
    	  sprite2 = game.add.sprite(170, 96, 'tile');

    	  sprite4 = game.add.sprite(380, 96, 'tile');

    // Enable physics on those sprites
   		 game.physics.enable( [ sprite2,  sprite4 ], Phaser.Physics.ARCADE);

   		
		

    
    	sprite2.body.collideWorldBounds = true;
    	sprite2.body.bounce.y = 1.0;
    	sprite2.body.gravity.y = 70;
    	sprite2.inputEnabled = true;
        sprite2.input.useHandCursor = true;
        sprite2.events.onInputDown.add(this.destroySprite2, this);


        sprite4.body.collideWorldBounds = true;
    	sprite4.body.bounce.y = 1.0;
        sprite4.body.gravity.y=50;
        sprite4.inputEnabled = true;
        sprite4.input.useHandCursor = true;
        sprite4.events.onInputDown.add(this.destroySprite4, this);



	},


	update1: function(){
	
		this.addTile2();// 2nad 4 are added
	},	

	update2: function(){
	
		this.addTile1(); //3 and 1 are added
	},	


	destroySprite1: function(){
		 sprite1.destroy();
		 game.global.score +=5;
		//this.textLabel.text='Score:' + game.global.score;
		this.update1();// 2 and 4

	},
	destroySprite2: function(){
		 sprite2.destroy();
		  game.global.score +=5;
		//this.textLabel.text='Score:' + game.global.score;
		//this.update1(); //2 and 4

	},
	destroySprite3: function(){
		 sprite3.destroy();
		  game.global.score +=5;
		//this.textLabel.text='Score:' + game.global.score;
		this.update2();

	},
	destroySprite4: function(){
		 sprite4.destroy();
		  game.global.score +=5;
	//	this.textLabel.text='Score:' + game.global.score;
		//this.update2();

	},
   





	wrongTile: function() {
	 game.state.start('score');
	  },






};

