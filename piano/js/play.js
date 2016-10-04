var playState={

	create: function(){
		game.world.setBounds(0,0,500,500)

		game.add.image(0,0, 'background');
		
		


		this.textLabel= game.add.text(game.width/2, game.height-50, 'Score: 0',
		{ font: '22px Arial', fill:'#000000'});
		game.global.score=0;
		this.textLabel.anchor.setTo(0.5,1);
		//game.global.score=0;

		var pictureLabel= game.add.image(game.width/2, game.height-50, 'alien');	
		pictureLabel.anchor.setTo(4.5,0.8);

		 //sprite1 = game.add.sprite(50, 60, 'tile');
  		 //game.physics.arcade.enable(sprite1);

		
		// game.physics.startSystem(Phaser.Physics. ARCADE);
		// game.renderer.renderSession.roundPixels=true;

		  this.enemies = game.add.group();
		this.enemies.enableBody = true;
		// game.physics.arcade.enable(this.enemies);
		for (var i = 0; i < 8; i++)
	    {
	        
	        var enemy = this.enemies.create(game.world.randomX, 8, 'tile');
	       
	        enemy.inputEnabled = true;
	       
	        // enemy.name = 'enemy'+i;
	       	// enemy.body.gravity.y = Math.floor(3+ Math.random() * 50);
	       

	        enemy.events.onInputDown.add(this.yourClickFunction, this);
	        enemy.myVar=i;


	        	//this.enemies.getAt(0).body.velocity.y = 100;
	       
	    }
		//enemy.i+=1;
		
		this.startLabel=game.add.sprite(game.width/2, game.height-50,'go');
		this.startLabel.anchor.setTo(0.5,1.6);
		this.startLabel.inputEnabled = true;
		this.startLabel.events.onInputDown.add(this.startGame,this);





	    this.ground = game.add.sprite(0, 500, 'line')
		game.physics.arcade.enable(this.ground);
        this.ground.scale.setTo(1, 1)
        this.ground.body.immovable = false;

		//  this.emitter=game.add.emitter(0,0,15);
  //        this.emitter.makeParticles('pixel');
  //        this.emitter.setYSpeed(-150,150);
  //        this.emitter.setXSpeed(-150,150);
  //        this.emitter.setScale(2,0,2,0,800);
  //        this.emitter.gravity=0;


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

		

      


	yourClickFunction: function(sprite, pointer) {
		
		sprite.alpha = 0;
		game.global.score +=5;
		this.textLabel.text='Score:' + game.global.score; 
		this.callme(sprite.myVar);
		 
		console.log(sprite.name);

	},


	callme: function(id) {
	 	switch(id) {
			case 1:  this.sprite1Sound.play(); break;
	 		case 2:  this.sprite2Sound.play(); break;
	 		case 3:  this.sprite3Sound.play(); break;
	 		case 4:  this.sprite4Sound.play(); break;
	 		case 5:  this.sprite11Sound.play(); break;
	 		case 6:  this.sprite22Sound.play();  break;
	 		case 7:  this.sprite33Sound.play(); break;
	 		case 8:  this.sprite44Sound.play(); break;
	 	}
	},
	update: function() {
		game.physics.arcade.overlap(this.enemies, this.ground, this.tileCrash, null, this);
		//this.enemies.getAt(1).body.velocity.y = 70;

	},
    startGame: function(){
		
      	this.changeGo(); 
      	//this.enemies();
      	//this.enemies.getAt(0).body.velocity.y = 100;
      	/*this.enemies.getAt(1).body.velocity.y = 80;
      	this.enemies.getAt(2).body.velocity.y = 60;
      	this.enemies.getAt(3).body.velocity.y = 40;
      	this.enemies.getAt(4).body.velocity.y = 50;
      	this.enemies.getAt(5).body.velocity.y = 20;
      	this.enemies.getAt(6).body.velocity.y = 40;
      	this.enemies.getAt(7).body.velocity.y = 30;*/
 
      	// this.enemy.i.body.gravity.y = 60;   	//tile.body.allowGravity=true;
     	
    },
	wrongTile: function() {
	 	game.state.start('score');
	},

	changeGo: function(){
	  this.startLabel.destroy();
	  this.enemies.getAt(0).body.velocity.y = 200;
	  this.enemies.getAt(1).body.velocity.y = 160;


      this.enemies.getAt(2).body.velocity.y = 130;
      this.enemies.getAt(3).body.velocity.y = 100;
      this.enemies.getAt(4).body.velocity.y = 70;
      this.enemies.getAt(5).body.velocity.y = 30;
      this.enemies.getAt(6).body.velocity.y = 20;
      this.enemies.getAt(7).body.velocity.y = 10;
	 // this.tile.enablegravity.y=60;


	},

	/*tileCrash: function(sprite1, sprite2){
		
		sprite2.kill();
		game.state.start('score');

	},*/



	tileCrash: function(){
		
	
		this.crash.play();
		//this.emitter.x=this.player.x;
		//this.emitter.y=this.player.y;
		//this.emitter.start(true,800,null,15);
		game.state.start('score');
		game.time.events.add(2000, this.wrongTile, this);
		//game.camera.shake(0.02, 300);
	//	game.state.start('menu');



	},

  	setting: function(){
		game.state.start('setting');
		//this.tile.body.enablegravity.y=60;
	},

	winGame: function(){
		
		var wonLabel= game.add.text(game.width/2, -50, 'You Won', {font: '50px Calibri', fill:'#000000'});
		wonLabel.anchor.setTo(0.5, 0.5);
		var tween=game.add.tween(wonLabel);
		game.add.tween(wonLabel).to({y:80},1000).easing(Phaser.Easing.Bounce.Out).start();

	},



};

