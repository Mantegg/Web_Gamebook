import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as storyData from '../../assets/story.json'; // Import the JSON file directly

interface Choice {
  text: string;
  nextPageId: number | null;
}

interface Page {
  id: number;
  text: string;
  choices: Choice[];
}

interface StoryData {
  pages: Page[];
}

@Component({
  selector: 'gamebook-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `gamebook.component.html`,
  styleUrls: [`gamebook.component.css`]
})
export class GamebookComponent implements OnInit {
  title = 'Angular Gamebook';

  pagesMap: { [id: number]: Page } = {};
  currentPage: Page | null = null;

  constructor() {}

  ngOnInit() {
    // Directly assign the imported JSON data to pagesMap
    const data = storyData as StoryData; // Type assertion
    this.pagesMap = {};
    for (const page of data.pages) {
      this.pagesMap[page.id] = page;
    }
    this.currentPage = this.pagesMap[1]; // Start with the first page
  }

  goToPage(nextPageId: number | null) {
    if (nextPageId && this.pagesMap[nextPageId]) {
      this.currentPage = this.pagesMap[nextPageId];
    }
  }

  restart() {
    this.currentPage = this.pagesMap[1]; // Reset to the first page
  }

  // Method to convert text with \n and \t to HTML
  formatText(text: string): string {
    return text.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Replace tabs with spaces
  }
}