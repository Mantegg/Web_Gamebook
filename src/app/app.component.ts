import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as storyData from '../assets/story.json'; // Import the JSON file directly
import { GamebookComponent } from './gamebook/gamebook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GamebookComponent],
  templateUrl: `app.component.html`,
  styleUrls: [`app.component.css`]
})

export class AppComponent {
  
}