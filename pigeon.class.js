class Pigeon {
    constructor(parent,nom) {
        this.dom=document.createElement("img");
        this.dom.src = "pigeon.gif";
        this.dom.style.width = "50px";
        this.dom.style.height = "50px";
        this.dom.style.position = "absolute";
        this.dom.style.top = "0px";
        this.dom.style.left = "0px";
        this.dom.alt=nom;
        parent.appendChild(this.dom);
        this.vx = mtrand(-10, 10);
        this.vy = mtrand(-10, 10);
        this.etat = "vivant";
        this.timer = setInterval(()=>this.deplacer(), 40);
        this.dom.addEventListener("click", ()=>this.kill());
    }

    kill() {
        this.dom.src="pigeondead.jpg";
        this.etat="mort";
        this.vx=0;
        this.vy=5;
    }
    
    deplacer() {
        let x=parseInt(this.dom.style.left);
        let y=parseInt(this.dom.style.top);
        x += this.vx;
        y += this.vy;
        if (x>window.innerWidth)
            this.vx=-this.vx;
        else if (x<0)
        this.vx=-this.vx;
        
        if (y>window.innerHeight) {
            if (this.etat=="mort")
                this.vy=0;        
            this.vy=-this.vy;
        } else if (y<0)
        this.vy=-this.vy;
    
        this.dom.style.left=x + "px";
        this.dom.style.top=y + "px";
    }

}