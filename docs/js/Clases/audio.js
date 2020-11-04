function Audio(){
    var listener = new THREE.AudioListener();
    camera.add(listener);
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load('audio/UndertaleMegalovania.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });   
}