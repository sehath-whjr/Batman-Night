class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.image = loadAnimation("images/Walking_Frame/walking_1.png", 
        "images/Walking_Frame/walking_2.png", 
        "images/Walking_Frame/walking_3.png", 
        "images/Walking_Frame/walking_4.png", 
        "images/Walking_Frame/walking_5.png", 
        "images/Walking_Frame/walking_6.png", 
        "images/Walking_Frame/walking_7.png", 
        "images/Walking_Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y,25,options);
        this.radius = 25;
        World.add(world, this.umbrella);
    }
    display(){
        imageMode(CENTER);
        animation(this.image, this.umbrella.position.x, this.umbrella.position.y + 70, 300, 300);
    }
}