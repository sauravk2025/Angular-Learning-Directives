import { Component, ViewEncapsulation } from '@angular/core';
import { SafeLinkDirective } from "../safe-link.directive";


@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective],
  encapsulation:ViewEncapsulation.None
})
export class LearningResourcesComponent {}
