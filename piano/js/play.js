var playState={


	

	create: function(){
		game.world.setBounds(0,0,500,500)

		game.add.image(0,0, 'background');
		
		this.ground = game.add.sprite(0, 500, 'line')
		game.physics.arcade.enable(this.ground);
		this.ground.body.immovable =true;
        this.ground.scale.setTo(1, 1);
       
       //this.ground.enableBody=true;
        

       


		this.textLabel= game.add.text(game.width/2, game.height-50, 'Score: 0',
		{ font: '22px Arial', fill:'#000000'});
		game.global.score=0;
		this.textLabel.anchor.setTo(0.5,1);
		//game.global.score=0;

		var pictureLabel= game.add.image(game.width/2, game.height-50, 'alien');	
		pictureLabel.anchor.setTo(4.5,0.8);


		
		game.physics.startSystem(Phaser.Physics. ARCADE);
		game.renderer.renderSession.roundPixels=true;
		
		
		this.startLabel=game.add.sprite(game.width/2, game.height-50,'go');
		this.startLabel.anchor.setTo(0.5,1.6);
		this.startLabel.inputEnabled = true;
		this.startLabel.events.onInputDown.add(this.startGame,this);


		 this.sprite1 = game.add.sprite(50, 60, 'tile');
		 this.sprite1.alpha=0;
  		 game.physics.enable( this.sprite1, Phaser.Physics.ARCADE);
  		 this.sprite1.inputEnabled = true;
  		 this.sprite1.input.useHandCursor = true;
		 this.sprite1.events.onInputDown.add(this.destroySprite1, this);


		this.sprite2 = game.add.sprite(270, 60, 'tile');
		this.sprite2.alpha=0;
  		game.physics.enable( this.sprite2, Phaser.Physics.ARCADE);
    	this.sprite2.inputEnabled = true;
        this.sprite2.input.useHandCursor = true;
        this.sprite2.events.onInputDown.add(this.destroySprite2, this);


        this.sprite3 = game.add.sprite(170, 50, 'tile');
        this.sprite3.alpha=0;
   		game.physics.enable(this.sprite3, Phaser.Physics.ARCADE);   		 
   		this.sprite3.inputEnabled = true;
        this.sprite3.input.useHandCursor = true;
		this.sprite3.events.onInputDown.add(this.destroySprite3, this);


		this.sprite4 = game.add.sprite(380, 50, 'tile');
		this.sprite4.alpha=0;
   		game.physics.enable(this.sprite4 , Phaser.Physics.ARCADE);      
        this.sprite4.inputEnabled = true;
        this.sprite4.input.useHandCursor = true;
        this.sprite4.events.onInputDown.add(this.destroySprite4, this);


        this.sprite11 = game.add.sprite(50, 60, 'tile');
		this.sprite11.alpha=0;
  		game.physics.enable( this.sprite11, Phaser.Physics.ARCADE);
  		this.sprite11.inputEnabled = true;
  		this.sprite11.input.useHandCursor = true;
		this.sprite11.events.onInputDown.add(this.destroySprite11, this);


		this.sprite22 = game.add.sprite(270, 60, 'tile');
		this.sprite22.alpha=0;
  		game.physics.enable( this.sprite22, Phaser.Physics.ARCADE);
    	this.sprite22.inputEnabled = true;
        this.sprite22.input.useHandCursor = true;
        this.sprite22.events.onInputDown.add(this.destroySprite22, this);


        this.sprite33 = game.add.sprite(170, 50, 'tile');
        this.sprite33.alpha=0;
   		game.physics.enable(this.sprite33, Phaser.Physics.ARCADE);   		 
   		this.sprite33.inputEnabled = true;
        this.sprite33.input.useHandCursor = true;
		this.sprite33.events.onInputDown.add(this.destroySprite33, this);


		this.sprite44 = game.add.sprite(380, 50, 'tile');
		this.sprite44.alpha=0;
   		game.physics.enable(this.sprite44 , Phaser.Physics.ARCADE);      
        this.sprite44.inputEnabled = true;
        this.sprite44.input.useHandCursor = true;
        this.sprite44.events.onInputDown.add(this.destroySprite44, this);



        this.wrongSprite = game.add.sprite(380, 50, 'wrongtile');
		this.wrongSprite.alpha=0;
   		game.physics.enable(this.wrongSprite , Phaser.Physics.ARCADE);      
        this.wrongSprite.inputEnabled = true;
        this.wrongSprite.input.useHandCursor = true;
        this.wrongSprite.events.onInputDown.add(this.wrongTile, this);




		this.sprite1Sound=game.add.audio('sprite1');
		this.sprite2Sound=game.add.audio('sprite2');
		this.sprite3Sound=game.add.audio('sprite3');
		this.sprite4Sound=game.add.audio('sprite4');
		this.sprite11Sound=game.add.audio('sprite11');
		this.sprite22Sound=game.add.audio('sprite22');
		this.sprite33Sound=game.add.audio('sprite33');
		this.sprite44Sound=game.add.audio('sprite44');
		this.crash=game.add.audio('crash');
		



	},


	/*removeGroup: function(){
		game.world.remove();

	},*/

     
     startGame: function(){
		
     	this.addTile1();
     	this.changeGo();     	//tile.body.allowGravity=true;
     	
     },


   



     addTile1: function(){


 		    	this.sprite1.alpha=1;
 		    	this.sprite1.body.velocity.y=100;    	
    	

	},

	addTile11: function(){

				 this.sprite11.alpha=1;
				 this.sprite11.body.gravity.y=120;    	

	},

	
	 addTile2: function(){
	 			this.sprite2.alpha=1;
	 			this.sprite2.body.gravity.y = 100;
    	

	},

	 addTile22: function(){

	 			this.sprite22.alpha=1;
	 			this.sprite22.body.gravity.y = 120;

	},


	 addTile3: function(){
	 			this.sprite3.alpha=1;
 				this.sprite3.body.gravity.y = 100;
 				this.wrongSprite.alpha=1;
 				this.wrongSprite.body.gravity.y =100;
  		

	},


	addTile33: function(){

				this.sprite33.alpha=1;
 				this.sprite33.body.gravity.y = 120;
  	
    

	},


	 addTile4: function(){
	 			this.wrongSprite.alpha=0;
	 			this.sprite4.alpha=1;
	 			this.sprite4.body.gravity.y=100;

 		

 		
    	

	},

	 addTile44: function(){

	 			this.sprite44.alpha=1;
	 			this.sprite44.body.gravity.y=100;


	},

	  update: function(){
     	game.physics.arcade.collide(this.sprite1, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite2, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite3, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite4, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite11, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite22, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite33, this.ground, this.tileCrash, null, this);
     	game.physics.arcade.collide(this.sprite44, this.ground, this.tileCrash, null, this);
		
		console.log("update");
		
		

	},
	


	destroySprite1: function(){
		 this.sprite1.destroy();
		 this.sprite1Sound.play();
 	
		 game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		this.addTile2();
		//this.update1();// 2 and 4

	},
	destroySprite11: function(){
		 this.sprite11.destroy();
		 this.sprite11Sound.play();
 	
		 game.global.score +=100;
		 this.textLabel.text='Score:' + game.global.score;
		 this.addTile22();
		//this.update11();// 2 and 4

	},
	destroySprite2: function(){
		 this.sprite2.destroy();
		 this.sprite2Sound.play();
		 game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		this.addTile3();
		//this.update2(); //2 and 4

	},
	destroySprite22: function(){
		 this.sprite22.destroy();
		 this.sprite22Sound.play();
		 game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		 this.addTile33();
		//this.update22(); //2 and 4

	},
	destroySprite3: function(){
		 this.sprite3.destroy();
		 this.sprite3Sound.play();
		  game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		 this.addTile4();
		//this.update3();

	},
	destroySprite33: function(){
		 this.sprite33.destroy();
		 this.sprite33Sound.play();
		  game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		 this.addTile44();
		//this.update33();

	},
	destroySprite4: function(){
		 this.sprite4.destroy();
		 this.sprite4Sound.play();
		  game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		this.addTile11();
		//this.update4();

	},
		destroySprite44: function(){
		 this.sprite44.destroy();
		 this.sprite44Sound.play();
		 game.global.score +=100;
		this.textLabel.text='Score:' + game.global.score;
		this.winGame();
		game.time.events.add(2000, this.wrongTile, this);

	},
   





	wrongTile: function() {
			
			
	 		game.state.start('score');
	  },

	  changeGo: function(){
	  this.startLabel.destroy();


	  },



	tileCrash: function(sprite1){
		
	
		this.crash.play();
		//game.camera.shake(0.02, 100);
		//game.state.start('score');
		game.time.events.add(1000, this.wrongTile, this);
		
	//	game.state.start('menu');



	},

	  setting: function(){
			
			game.state.start('setting');
		},


	winGame: function(){
		
			var wonLabel= game.add.text(game.width/2, -50, 'You Won', {font: '50px Calibri', fill:'#000000'});
			wonLabel.anchor.setTo(0.5, 0.5);
			var tween=game.add.tween(wonLabel);
			game.add.tween(wonLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();
	



	},



};

