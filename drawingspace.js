// im very proud of myself for being able to make this and you should be too.
// essentially this creates a cool little drawing board thing for an artist or somthing.
function start(){
    keyDownMethod(keyDown);
    println("Press 'C' to clear ART board");
    var shtype = readLine("Choose Shape type: (square or ball): ");
    var rdmcol = readBoolean("Enable Random Color Mode? (True/False): ");
    if (shtype == "ball"){
    mouseClickMethod(addBall);
    mouseDragMethod(addBall);
    }else{
        mouseClickMethod(addSquare);
        mouseDragMethod(addSquare);
    }
    function addBall(e) {
	var ball = new Circle(20);
	ball.setPosition(e.getX(), e.getY());
	add(ball);
	if(rdmcol == true){
	    ball.setColor(Randomizer.nextColor());
	}
	}
	  function addSquare(c){
	    var square = new Rectangle(30,30);
	    square.setPosition(c.getX(), c.getY());
	    add(square);
	    if(rdmcol == true){
	        square.setColor(Randomizer.nextColor());
	    }
	    }
	    	    function keyDown(e){
	        if(e.keyCode == Keyboard.letter('c')){
	            println("Clearing the ART board ");
	            removeAll();
	        }
}

}
