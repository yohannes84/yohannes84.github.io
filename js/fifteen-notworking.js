$(document).ready(function(){
    
   // var element = document.getElementById('myElement');
    var element = $('#puzzlearea').children();
    init();
    //var children = element.children;

    function init(){

      
        for(var i=0; i<=element.length; i++){
           
            //using hint
            var div = element[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            $(element[i]).addClass('puzzlepiece');
            $(element[i]).attr('id',"peice_" + i)
            //div.className = "puzzlepiece";
            $(element[i]).css("left", x + 'px');
            $(element[i]).css("top", y + 'px');
            //div.style.left = x + 'px';
            //div.style.top = y + 'px';
            $(element[i]).css("background-image", "url(images/background.jpg)");
            //changing background image
            //div.style.backgroundImage = 'url("background.jpg")';
            $(element[i]).css("background-position", -x + 'px ' + (-y) + 'px');

            //changing background position
            // div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            //Attaching click event
            element[i].onmouseover =  highlight;
            element[i].onmouseout =  unhighlight;
            element[i].onclick =  peiceClick;
            //store x and y for later
            element.x = x;
            element.y = y; 
            

        }
    }

 // Check the next move is empty space 
 function validMove(tile) { 
    var neighbors = getNeighbors();
    if (neighbors.indexOf(tile.getAttribute("id")) != -1) {
      return true;
    } else {
      return false;
    }
  }

  // on mouse event callback
  function highlight() {
    if (validMove(this)) {
      this.classList.add("movablepiece");
    }
  }

  // on mouseleave event callback
  function unhighlight() {
    if (validMove(this)) {
      this.classList.remove("movablepiece");
    }
  }

  // Peice click event handler
  function peiceClick(){
    movePeice(this);
  }

  // Swaps the selected peice
  function movePeice(tile) {
    var tempEX = empty_x;
    var tempEY = empty_y;
    if (validMove(tile)) {
      empty_x = parseInt(tile.style.left) / 100; 
      empty_y = parseInt(tile.style.top) / 100;
      tile.style.top = 100 * tempEY + "px";
      tile.style.left = 100 * tempEX + "px";
      tile.setAttribute("id", "peice_" + tempEX + "_" + tempEY);
    }
  }

  // Shuffles the peices randomly  
  function shuffleButtonClick() {   
    for (var i = 0; i < 1000; i++) {
      var neighbors = getNeighbors();
      var rand = parseInt(Math.random() * neighbors.length);
      var tile = document.getElementById(neighbors[rand]);
      movePeice(tile);
    }
  }

  // Checks peice around selected tile to see if they're empty 
  function getNeighbors() {
    var up = "peice_" + empty_x + "_" + (empty_y - 1);
    var down = "peice_" + empty_x + "_" + (empty_y + 1);
    var left = "peice_" + (empty_x - 1) + "_" + empty_y;
    var right = "peice_" + (empty_x + 1) + "_" + empty_y;

    var peice = [up, down, left, right];
    var realpeice = [];

    for (var i = 0; i < peice.length; i++) {
      if (document.getElementById(peice[i]) != null) {
        realpeice.push(peice[i]);
      }
    }
    return realpeice;
  }
    
})