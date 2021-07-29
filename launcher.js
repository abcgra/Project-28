class Launcher{

    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.05
        }
        this.pointB=pointB
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }
    fly(){
        this.launcher.bodyA=null
    }
    attach(body){
        this.launcher.bodyA=body
    }
    display(){
        if (this.launcher.bodyA){
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
}



