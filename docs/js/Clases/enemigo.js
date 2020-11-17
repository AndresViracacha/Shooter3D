function Enemigo() {
    var clock = new THREE.Clock();
    var explosionTexture = new THREE.ImageUtils.loadTexture('images/sans.png');
    var boomer = new TextureAnimator(explosionTexture, 4, 1, 24, 200); // texture, #horiz, #vert, #total, duration.
    var explosionMaterial = new THREE.MeshBasicMaterial({ map: explosionTexture, side: THREE.DoubleSide });
    explosionMaterial.transparent = true
    explosionMaterial.depthTest = true
    explosionMaterial.depthWrite = false
    var cubeGeometry = new THREE.PlaneGeometry(10, 12);
    cubeGeometry.name=randomi(0,10000000)
    this.cube = new THREE.Mesh(cubeGeometry, explosionMaterial);
    this.cube.name = "sans"
    this.cube.position.set(randomi(2,4), 0, 0);
    var cubes = this.cube;
    scene.add(this.cube);
    //Si se acerca mucho

    this.crear = function () {
        cubes.position.z++;
        //MIRAR SIEMPRE A LA CAMARA
        
        //Animacion objeto
        var delta = clock.getDelta();
        boomer.update(2500 * delta);
        //Si se acerca mucho
        if (cubes.position.z == 280) {
            scene.remove(cubes)
            contenedorCamara.children[0].name="adios"
        }
    }
}
function crearEnemigos(contenedorCamara) {
    if (i == 50) {
        enemigos.push(new Enemigo)
        i = 0;
    }
    if (enemigos.length > 0) {
        for (let i = 0; i < enemigos.length; i++) {
            enemigos[i].crear(contenedorCamara)
            //enemigos[i].cube.position.x = randomi(-15,15)
        }
    }
    i++;
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
