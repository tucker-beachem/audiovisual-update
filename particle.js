class Particle{
    constructor(r){
        this.r = r
        this.col = [0, 140 ,255]
        this.alpha = [255]
        this.size = 10
    }


    makeDisappear(){
        this.alpha -= 50
    }

    render(idx){
        const x = this.r * sin(idx)
        const y = this.r * cos(idx)
        noStroke();
        fill(this.col.concat([this.alpha]))
        ellipse(x, y, this.size)
    }

}