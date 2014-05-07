import Txl = require("../tixel");

class TitleMap extends Txl.TileMap {
    constructor() {
        super("assets/textures/tilemap.png");
 
        this.loadMap("assets/data/galvus.map");
    }
    
    mapLoaded() {
        this.entity.position.set(-this.width/2, 0, -2);
    }
    
    update(delta:number) {
        this.entity.children.forEach((tile) => {
            tile.rotation.x += (tile.position.x % 3 - 1 )* 0.01 * delta;
            tile.rotation.y += (tile.position.y % 3 - 1 )* 0.01 * delta;
        });
    
        this.lerp += delta;
        var dX = Txl.Utils.easing.easeInBounce(this.lerp, 0, -300, 5000);
        this.entity.position.y = dX;
    } 
    lerp:number = 0;
}

class Galvus extends Txl.Scene {
    constructor() {
        super();
        this.addEntity(new Txl.Entity(new TitleMap()));
    }
}


export = Galvus;