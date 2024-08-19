import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navLabel = '';
  articleNumber = '000001';
  articleTitle = 'Hiking' + '\n' + 'Through' + '\n' + 'Canyons';
  authorProfileImg = '';
  authorName = 'Kathy Cuevas';
  articleTopic = '';
  articleIntro = '';
  linkToFullArticle = '';
}
