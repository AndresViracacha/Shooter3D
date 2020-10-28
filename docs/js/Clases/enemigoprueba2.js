function Enemigo() {
    var explosionTexture = new THREE.ImageUtils.loadTexture('images/sans.png');
    var boomer = new TextureAnimator(explosionTexture, 4, 1, 24, 200); // texture, #horiz, #vert, #total, duration.
    var explosionMaterial = new THREE.MeshBasicMaterial({ map: explosionTexture, side: THREE.DoubleSide });
    explosionMaterial.transparent = true
    var cubeGeometry = new THREE.PlaneGeometry(100, 120);
    this.cube = new THREE.Mesh(cubeGeometry, explosionMaterial);
    this.cube.position.set(0, 50, 0);
    scene.add(this.cube);

    var cubes=this.cube;
    this.animate = function (clock,camera) {
        var x = -cubes.position.x + camera.position.x;
        var z = -cubes.position.z + camera.position.z;
        var hipotenusa = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2))
        var angulo = (Math.acos(z / hipotenusa));
        if (x < 0) {
            angulo = -angulo
        }
        //console.log(angulo / (Math.PI / 180))
        cubes.rotation.y = angulo;
        var delta = clock.getDelta();
        boomer.update(100000 * delta);
    }
}
function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) {
    // note: texture passed by reference, will be updated by the update function.

    this.tilesHorizontal = tilesHoriz;
    this.tilesVertical = tilesVert;
    // how many images does this spritesheet contain?
    //  usually equals tilesHoriz * tilesVert, but not necessarily,
    //  if there at blank tiles at the bottom of the spritesheet. 
    this.numberOfTiles = numTiles;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical);

    // how long should each image be displayed?
    this.tileDisplayDuration = tileDispDuration;

    // how long has the current image been displayed?
    this.currentDisplayTime = 0;

    // which image is currently being displayed?
    this.currentTile = 0;

    this.update = function (milliSec) {
        this.currentDisplayTime += milliSec;
        while (this.currentDisplayTime > this.tileDisplayDuration) {
            this.currentDisplayTime -= this.tileDisplayDuration;
            this.currentTile++;
            if (this.currentTile == this.numberOfTiles)
                this.currentTile = 0;
            var currentColumn = this.currentTile % this.tilesHorizontal;
            texture.offset.x = currentColumn / this.tilesHorizontal;
            var currentRow = Math.floor(this.currentTile / this.tilesHorizontal);
            texture.offset.y = currentRow / this.tilesVertical;
        }
    };
}	