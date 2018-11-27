class Helper {
  playPauseAndUpdate(song) {
    const time = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(time));

    player.playPause(song);
  }
}

const helper = new Helper();
