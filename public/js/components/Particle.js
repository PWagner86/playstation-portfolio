export default class Particle{
    
    width;
    height;
    ctx;
    x;
    y;
    xspeed = ((Math.random() + 0.1) * 0.7);
    yspeed = ((Math.random() + 0.1) * 0.7);
    particleColor = '#ffffff';

    constructor(ctx, width, height){
        this.width = width;
        this.height = height;
        this.x = Math.floor(Math.random() * (100 - this.width));
        this.y = Math.floor(Math.random() * (this.height / 5));
        this.ctx = ctx;
    }

    float(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        if(this.x > this.width || this.y > this.height){
            this.x = Math.floor(Math.random() * (100 - this.width));
            this.y = Math.floor(Math.random() * (this.height / 5));
        };
    };

    show(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, Math.floor((Math.random() + 1) * 3) , 0, 2 * Math.PI);
        this.ctx.fillStyle = this.particleColor;
        this.ctx.fill();
    }
}