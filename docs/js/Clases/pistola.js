function Pistola() {
    var loader = new THREE.FBXLoader(manager);
        //tiene 36 caras|
        loader.load('Modelos3d/Pistola.fbx', function (objects) {
            objects.name = "jelo";
            objects.rotation.y = -Math.PI;
            objects.scale.set(1, 1, 1);
            scene.add(objects);
            contenedorPistola.add(objects)
        });
        //añadimos el arma y la colocamos
        scene.add(contenedorPistola)
        contenedorPistola.position.set(3, -4, -5)
        contenedorCamara.add(camera)
        contenedorCamara.add(contenedorPistola)
        contenedorCamara.position.z = 300
        contenedorCamara.position.x = 5
}