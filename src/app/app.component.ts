import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from './video/video.component';
import { NgFor } from '@angular/common';
import { VideoModel } from './app.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, SidebarComponent, VideoComponent, NgFor],
})
export class AppComponent {
  title = 'youtube-clone';

  videos = [
    {
      channelOwner: 'Marques Brownlee',
      time: '14:20',
      channelPicture: 'assets/channel-pictures/channel-1.jpeg',
      videoTitle: 'Talking Tech and AI with Google CEO Sundar Pichai!',
      subscriberNumber: '15M subscribers',
      views: '3.4M',
      timeLapse: '6 months ago',
      channelLink: 'https://www.youtube.com/c/mkbhd',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-1.webp',
      videoLink: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
      profilePic: 'assets/channel-pictures/channel-1.jpeg',
    },
  ];
}
