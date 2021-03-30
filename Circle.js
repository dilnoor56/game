class Circle{
	constructor(x,y,r)
	{
        var c_options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, c_options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
           // rubberpos.x=mouseX
		   rubberpos.velocityX=0
		   rubberpos.velocityY=0
			if(keyDown("space")) {
				rubberpos.y=rubberpos.y-2.70
			}
			/*if(rubberpos.y<200){
				rubberpos.y=200
				this.body.velocityY = this.body.velocityY + 0.8
			}*/
			if(keyCode===LEFT_ARROW){
				rubberpos.x=rubberpos.x-1 

			}
			if(keyCode===RIGHT_ARROW){
				rubberpos.x=rubberpos.x+1
				console.log("xposition",rubberpos.x)
			}
			if(rubberpos.x<10){
				rubberpos.x=10
			}
			if( rubberpos.x>1190){
				rubberpos.x=1190		
			}
			if(rubberpos.y>550){
				rubberpos.y=550
			}
			//add gravity
			this.body.velocityY = this.body.velocityY + 0.8
		  
            var angle=this.body.angle	
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(angle)
			strokeWeight(4);
			stroke("white");
			fill("white");
            ellipseMode(CENTER)
			ellipse(0,0,this.r)
			pop()
	}
    
}
