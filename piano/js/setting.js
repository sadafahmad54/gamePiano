var settingState={


	create: function(){

	game.add.image(0,0, 'background');
	music = game.add.audio('hello');
	music.play();

  //game.input.onDown.add(changeVolume, this);

  		var nameLabel= game.add.text(game.width/2, game.height-430, 'ADJUST VOLUME', {font: '35px Calibri', fill:'#000000'});
		nameLabel.anchor.setTo(0.5, 2);


		var volumeUp= game.add.image(game.width/2, game.height-50, 'up');
		volumeUp.anchor.setTo(-1,4);
		 volumeUp.inputEnabled = true;
		volumeUp.events.onInputDown.add(this.changeVolume, this);

		var volumeDown= game.add.image(game.width/2, game.height-50, 'down');
		volumeDown.anchor.setTo(2,4);
		volumeDown.inputEnabled = true;
		volumeDown.events.onInputDown.add(this.changeVolume, this);


		var picLabell= game.add.text(game.width/2, game.height-50, 'RETURN TO GAME', {font: '20px Calibri', fill:'#000000'});
		picLabell.anchor.setTo(-0.2,1.46);
		 picLabell.inputEnabled = true;
		 picLabell.events.onInputDown.add(this.returnGame, this);
		   
		var pictureLabel2= game.add.text(game.width/2, game.height-50,'RETURN TO MENU', {font: '20px Calibri', fill:'#000000'}  );	
		pictureLabel2.anchor.setTo(1.25,1.46);
		pictureLabel2.inputEnabled = true;
		pictureLabel2.events.onInputDown.add(this.returnMenu, this);
		   

	},

		

		returnGame: function(){
			
			game.state.start('play');
		},

		returnMenu: function(){
				
			game.state.start('menu');
		},


			
		changeVolume: function(pointer) {

  	  if (pointer.y < 100)
    {
        music.mute = false;
    }
 	   else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
  	  else
    {
        music.volume -= 0.1;
    }


		},

};