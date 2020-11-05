function Arbol() {
    var explosionTexture = new THREE.ImageUtils.loadTexture('images/arboles.png');
    var explosionMaterial = new THREE.MeshBasicMaterial({ map: explosionTexture, side: THREE.DoubleSide });
    explosionMaterial.transparent = true
    explosionMaterial.depthTest = true
    explosionMaterial.depthWrite = false
    var tamaño= 20
    var cubeGeometry = new THREE.PlaneGeometry(tamaño*5, tamaño*6);
    this.cube = new THREE.Mesh(cubeGeometry, explosionMaterial);
    this.cube.position.set(0, 12, 0);
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

function crearArboles(cameras) {
    for (let i = 0; i < 10; i++) {
        arbolesd.push(new Arbol())
    }
    for (let i = 0; i < arbolesd.length; i++) {
        arbolesd[i].cube.position.x = i * 10 + 60
        arbolesd[i].cube.position.z = i * 30 + 60
        arbolesd[i].crear(cameras)
    }
    for (let i = 0; i < 10; i++) {
        arbolesi.push(new Arbol())
    }
    for (let i = 0; i < arbolesi.length; i++) {
        arbolesi[i].cube.position.x = -i * 10 - 60
        arbolesi[i].cube.position.z = i * 30 + 60
        arbolesi[i].crear(cameras)
    }
}

