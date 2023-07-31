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

    {
      channelOwner: 'Markiplier',
      time: '8:22',
      channelPicture: 'assets/channel-pictures/channel-1.jpeg',
      videoTitle: 'Try not to laugh challenge #9',
      subscriberNumber: '35.2M subscribers',
      views: '19M views',
      timeLapse: '4 years ago',
      channelLink: 'https://www.youtube.com/c/markiplier',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-2.webp',
      videoLink: 'https://www.youtube.com/watch?v=mP0RAo9SKZk',
      profilePic: 'assets/channel-pictures/channel-2.jpeg',
    },

    {
      channelOwner: 'SSSniperWolf',
      time: '9:13',
      channelPicture: 'assets/channel-pictures/channel-3.jpeg',
      videoTitle: 'Crazy Tik Toks Taken Moments Before DISASTER',
      subscriberNumber: '33.8M subscribers',
      views: '12M views',
      timeLapse: '1 year ago',
      channelLink: 'https://www.youtube.com/user/SSSniperWolf',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-3.webp',
      videoLink: 'https://www.youtube.com/watch?v=FgjPQQeTh1w',
      profilePic: 'assets/channel-pictures/channel-3.jpeg',
    },

    {
      channelOwner: 'Veritasium',
      time: '22:09',
      channelPicture: 'assets/channel-pictures/channel-4.jpeg',
      videoTitle: 'The Simplest Math Problem No One Can Solve-Callatz...',
      subscriberNumber: '14M subscribers',
      views: '18M views',
      timeLapse: '4 months ago',
      channelLink: 'https://www.youtube.com/c/veritasium',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-4.webp',
      videoLink: 'https://www.youtube.com/watch?v=094y1Z2wpJg',
      profilePic: 'assets/channel-pictures/channel-4.jpeg',
    },

    {
      channelOwner: 'CS Dojo',
      time: '11:17',
      channelPicture: 'assets/channel-pictures/channel-5.jpeg',
      videoTitle: 'Kandanes Algorithm to Maximum Sum Subarray...',
      subscriberNumber: '1.91M subscribers',
      views: '519K',
      timeLapse: '5 years ago',
      channelLink: 'https://www.youtube.com/c/CSDojo',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-5.webp',
      videoLink: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
      profilePic: 'assets/channel-pictures/channel-5.jpeg',
    },

    {
      channelOwner: 'MrBeast',
      time: '19:59',
      channelPicture: 'assets/channel-pictures/channel-6.jpeg',
      videoTitle: 'Anything You Can Fit in the Circle, I will pay for...',
      subscriberNumber: '170M subscribers',
      views: '141M',
      timeLapse: '1 year ago',
      channelLink: 'https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-6.webp',
      videoLink: 'https://www.youtube.com/watch?v=yXWw0_UfSFg',
      profilePic: 'assets/channel-pictures/channel-6.jpeg',
    },

    {
      channelOwner: 'RealLifeLore',
      time: '10:13',
      channelPicture: 'assets/channel-pictures/channel-7.jpeg',
      videoTitle: 'Why Planes Do not Fly Over Tibet',
      subscriberNumber: '6.92M subscribers',
      views: '6.6M',
      timeLapse: '6 months ago',
      channelLink: 'https://www.youtube.com/@RealLifeLore',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-7.webp',
      videoLink: 'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
      profilePic: 'assets/channel-pictures/channel-7.jpeg',
    },

    {
      channelOwner: 'Tech Vision',
      time: '7:12',
      channelPicture: 'assets/channel-pictures/channel-8.jpeg',
      videoTitle: 'Inside the Biggest Passenger Plane in the World',
      subscriberNumber: '816K subscribers',
      views: '3.7M',
      timeLapse: '10 months ago',
      channelLink: 'https://www.youtube.com/@adin',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-8.webp',
      videoLink: 'https://www.youtube.com/watch?v=lFm4EM1juls',
      profilePic: 'assets/channel-pictures/channel-8.jpeg',
    },

    {
      channelOwner: 'ThenX',
      time: '13:17',
      channelPicture: 'assets/channel-pictures/channel-9.jpeg',
      videoTitle: 'The SECRET to Super Human STRENGTH',
      subscriberNumber: '7.67M subscribers',
      views: '20M',
      timeLapse: '3 years ago',
      channelLink: 'https://www.youtube.com/@OFFICIALTHENXSTUDIOS',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-9.webp',
      videoLink: 'https://www.youtube.com/watch?v=ixmxOlcrlUc',
      profilePic: 'assets/channel-pictures/channel-9.jpeg',
    },

    {
      channelOwner: 'Insider Business',
      time: '7:53',
      channelPicture: 'assets/channel-pictures/channel-10.jpeg',
      videoTitle: 'How The Worlds Largest Cruise Ship Makes 30,000 Meals Every Day',
      subscriberNumber: '7.92M subscribers',
      views: '14M',
      timeLapse: '1 year ago',
      channelLink: 'https://www.youtube.com/@InsiderBusiness',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-10.webp',
      videoLink: 'https://www.youtube.com/watch?v=R2vXbFp5C9o',
      profilePic: 'assets/channel-pictures/channel-10.jpeg',
    },

    {
      channelOwner: 'Destination Tips',
      time: '4:10',
      channelPicture: 'assets/channel-pictures/channel-11.jpeg',
      videoTitle: 'Dubais Crazy Underwater Train and Other Things #Only in Dubai',
      subscriberNumber: '282K subscribers',
      views: '3M',
      timeLapse: '1 year ago',
      channelLink: 'https://www.youtube.com/@Destinationtips',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-11.webp',
      videoLink: 'https://www.youtube.com/watch?v=0nZuYyXET3s',
      profilePic: 'assets/channel-pictures/channel-11.jpeg',
    },

    {
      channelOwner: 'TED-Ed',
      time: '4:51',
      channelPicture: 'assets/channel-pictures/channel-12.jpeg',
      videoTitle: 'What would happen if you did not drink water? - Mia Nacamulli',
      subscriberNumber: '18.8M subscribers',
      views: '12M',
      timeLapse: '5 years ago',
      channelLink: 'https://www.youtube.com/@TEDEd',
      thumbnailVideo: 'assets/thumbnail-images/thumbnail-12.webp',
      videoLink: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
      profilePic: 'assets/channel-pictures/channel-12.jpeg',
    }

  ];
}
