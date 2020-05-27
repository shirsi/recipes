import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Recipe description',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
