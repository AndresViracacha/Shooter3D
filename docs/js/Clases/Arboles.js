function Arbol() {
    var explosionTexture = new THREE.ImageUtils.loadTexture('images/arboles.png');
    var explosionMaterial = new THREE.MeshBasicMaterial({ map: explosionTexture, side: THREE.DoubleSide });
    explosionMaterial.transparent = true
    explosionMaterial.depthTest = true
    explosionMaterial.depthWrite = false
    var cubeGeometry = new THREE.PlaneGeometry(30, 36);
    this.cube = new THREE.Mesh(cubeGeometry, explosionMaterial);
    this.cube.position.set(0, 5, 0);
    var cubes = this.cube;
    scene.add(this.cube);
    this.crear = function (camera) {
        //MIRAR SIEMPRE A LA CAMARA
        var x = -cubes.position.x + camera.position.x;
        var z = -cubes.position.z + camera.position.z;
        var hipotenusa = Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2))
        var angulo = (Math.acos(z / hipotenusa));
        if (x < 0)
            angulo = -angulo
        cubes.rotation.y = angulo;
    }
}

function crearArboles(camera) {
    for (let i = 0; i < 10; i++) {
        arbolesd.push(new Arbol())
    }
    for (let i = 0; i < arbolesd.length; i++) {
        arbolesd[i].cube.position.x = i * 20 + 50
        arbolesd[i].cube.position.z = i * 10 + 50
        arbolesd[i].crear(camera)
    }
    for (let i = 0; i < 10; i++) {
        arbolesi.push(new Arbol())
    }
    for (let i = 0; i < arbolesi.length; i++) {
        arbolesi[i].cube.position.x = -i * 20 - 50
        arbolesi[i].cube.position.z = i * 10 + 50
    }
}

