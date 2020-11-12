function Audio() {
    /* var listener = new THREE.AudioListener();
    camera.add(listener);
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load('audio/megalovaniamini.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });  */
    this.beginsnd = new Howl({
        src: ['audio/megalovaniamini.mp3'],
        loop: true,
        volume: 0.4
    });
    this.gosnd = new Howl({
        src: ['audio/gameover.mp3'],
        loop: true,
        volume: 0.4
    });
}