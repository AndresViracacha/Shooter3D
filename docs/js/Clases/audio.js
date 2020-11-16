function Audio() {
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