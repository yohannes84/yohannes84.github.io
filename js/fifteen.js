


"use strict"; //this activates strict mode 

//globally declared variables 
var gamePiece;
var notify;
var timer;
var spaceY;
var spaceX;


window.onload = function () {

    var puzzleArea = document.getElementById('puzzlearea');
    gamePiece = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea

    for (var i = 0; i < gamePiece.length; i++) //applies features to each puzzle piece 

    {

        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        $(gamePiece[i]).addClass('puzzlepiece');
        $(gamePiece[i]).css("left", (i % 4 * 100) + 'px');
        $(gamePiece[i]).css("top", (parseInt(i / 4) * 100) + 'px');
        $(gamePiece[i]).css("background-image", "url(images/background.jpg)");
        $(gamePiece[i]).css("background-position", -x + 'px ' + (-y) + 'px');

        gamePiece[i].onmouseover = function () //aplies features when mouse moves over puzzle pieces

        {
            if (checkMove(parseInt(this.innerHTML))) //checks whenever a move is made

            {
                $(this).css("border", "3px solid red");
                $(this).css("color", "#FF0000");
                $(this).css("textDecoration", "underline");
            }

        };

        gamePiece[i].onmouseout = function () //activates whenever mouse moves out of puzzle piece

        {
            $(this).css("border", "2px solid black")

            $(this).css("color", "#000000");

            $(this).css("textDecoration", "none");


        };

        gamePiece[i].onclick = function () //activates when mouse clicks on a puzzle piece

        {

            if (checkMove(parseInt(this.innerHTML))) //checks whether or not the puzzle piece can move into an empty space

            {
                swap(this.innerHTML - 1); //moves into an empty space if true
                if (finish()) //checks when the all the 15 pieces are in its right space

                {

                    win(); //alerts the player that they have won the game

                }

                return;

            }

        };

    }


    var shuffle = document.getElementById('shufflebutton'); //initializes the shuffle button

    spaceX = '300px';
    spaceY = '300px';

    shuffle.onclick = function () //activates whenever the shuffle button is clicked

    {

        for (var i = 0; i < 300; i++) {

            var rand = parseInt(Math.random() * 100) % 4; //generates a random number for shuffling each piece

            if (rand == 0) {

                var temp = up(spaceX, spaceY);

                if (temp != -1) {

                    swap(temp);

                }

            }

            if (rand == 1) {

                var temp = down(spaceX, spaceY);

                if (temp != -1) {

                    swap(temp);

                }

            }



            if (rand == 2) {

                var temp = left(spaceX, spaceY);

                if (temp != -1) {

                    swap(temp);

                }

            }


            if (rand == 3) {

                var temp = right(spaceX, spaceY);

                if (temp != -1) {

                    swap(temp);

                }

            }

        }

    };

};



function checkMove(position) // returns true whenever a piece can be moved into an empty space

{

    if (left(spaceX, spaceY) == (position - 1)) {

        return true;

    }

    if (down(spaceX, spaceY) == (position - 1)) {

        return true;

    }

    if (up(spaceX, spaceY) == (position - 1)) {

        return true;

    }

    if (right(spaceX, spaceY) == (position - 1)) {

        return true;

    }

}

function Notify() //notifies the user 

{

    notify--; //decrements the value of 

    if (notify == 0) //if the value reaches the end then

    {

        alert('Winner! ... Shuffle and Play Again'); //announce the payer win the game 
        return;
    }

    else (notify % 2)

    {

        var body = document.getElementsByTagName('body');
    }

    timer = setTimeout(Notify, 100); //notifies the user for 2 secs
}

function win() //notifies user that they have won

{

    notify = 10; //initializes notify variable
    timer = setTimeout(Notify, 100);

}

function finish() //checks when the game reaches its end

{

    var flag = true;

    for (var i = 0; i < gamePiece.length; i++) //for each puzzle piece 
    {

        var top = parseInt($(gamePiece[i]).css("top"));

        var left = parseInt($(gamePiece[i]).css("left"));


        if (left != (i % 4 * 100) || top != parseInt(i / 4) * 100) //checks if each piece matches its left and top position

        {

            flag = false;

            break;

        }

    }

    return flag;

}

function left(x, y) //calculates how far to the left a puzzlepiece should position

{

    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordX > 0) {

        for (var i = 0; i < gamePiece.length; i++) {

            if (parseInt($(gamePiece[i]).css("left")) + 100 == cordX && parseInt($(gamePiece[i]).css("top")) == cordY) {

                return i;

            }

        }

    }

    else {

        return -1;

    }

}
function right(x, y) //calculates how far to the right a puzzlepiece should position
{

    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordX < 300) {

        for (var i = 0; i < gamePiece.length; i++) {

            if (parseInt($(gamePiece[i]).css("left")) - 100 == cordX && parseInt($(gamePiece[i]).css("top")) == cordY) {

                return i;

            }

        }

    }

    else {

        return -1;

    }

}
function up(x, y) //calculates how far up a puzzlepiece should position
{

    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordY > 0) {

        for (var i = 0; i < gamePiece.length; i++) {

            if (parseInt($(gamePiece[i]).css("top")) + 100 == cordY && parseInt($(gamePiece[i]).css("left")) == cordX) {

                return i;

            }

        }

    }

    else {

        return -1;

    }

}
function down(x, y) //calculates how far down a puzzlepiece should position

{

    var cordX = parseInt(x);

    var cordY = parseInt(y);

    if (cordY < 300) {

        for (var i = 0; i < gamePiece.length; i++) {

            if (parseInt($(gamePiece[i]).css("top")) - 100 == cordY && parseInt($(gamePiece[i]).css("left")) == cordX) {

                return i;

            }

        }

    }

    else {

        return -1;

    }

}
//swaps the game piece by with an empty space
function swap(position) 
{

    var temp = $(gamePiece[position]).css("top");

    $(gamePiece[position]).css("top", spaceY);

    spaceY = temp;

    temp = $(gamePiece[position]).css("left");

    $(gamePiece[position]).css("left", spaceX);

    spaceX = temp;
}

