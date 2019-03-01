// im very proud of myself for being able to make this and you should be too.
// essentially this creates a cool little drawing board thing for an artist or somthing.
var rdmcol = false;
function start(){
    keyDownMethod(keyDown);
    println("Press 'S' to change shape");
    println("Press 'C' to clear ART board");
    println("Press 'R' to enable RNDM color mode");
    var shtype = readLine("Choose Shape type: (square or ball): ");
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
	        }else if(e.keyCode == Keyboard.letter('s')){
	            shapeChange();
	        }else if(e.keyCode == Keyboard.letter('r')){
	            if(rdmcol == false){
	            ranm();
	            }else{
	                println("Random Colors: Inactive");
	                rdmcol = false;
	            }
	        }
	        function ranm(){
	            println("Random Colors: Active");
	            rdmcol = true;
	        }
	   function shapeChange(e){
	       if(shtype == "ball"){
	           mouseClickMethod(addSquare);
               mouseDragMethod(addSquare);
               setType();
	       }else{
	           mouseClickMethod(addBall);
	           mouseDragMethod(addBall);
	           setType();
	       }
	       function setType(){
	           if(shtype == "ball"){
	               println("Shape Changed to: Square");
	               shtype = "square";
	           }else{
	               println("Shape Changed to: Ball");
	               shtype = "ball";
	           }
	       }
	   }
}

}
