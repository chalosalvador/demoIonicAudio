import { Component } from '@angular/core';

import { AudioProvider, IAudioTrack, ITrackConstraint } from 'ionic-audio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myTracks: ITrackConstraint[];
  allTracks: any[];
  selectedTrack: any;

  constructor(private _audioProvider: AudioProvider) {
    this.myTracks = [{
      src: 'assets/02_pno_comp_m1.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/02_pno_comp_m1.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },

    {
      src: 'assets/02_pno_comp_m1.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'assets/img/Stephane.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  // Play a single track simultaneously
  playSingleTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(0);
  }

  // Play multiple tracks simultaneously
  playMultipleTracks() {
    // use AudioProvider to control selected track
    this._audioProvider.play(0);
    this._audioProvider.play(1);
    this._audioProvider.play(2);
  }

  pauseSelectedTrack() {
     // use AudioProvider to control selected track
     this._audioProvider.pause(this.selectedTrack);
  }

}
