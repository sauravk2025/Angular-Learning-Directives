import { Component, computed, inject, signal } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import {AuthDirective} from './auth/auth.directive'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, JsonPipe, NgIf,AuthDirective]
})
export class AppComponent {

    private authService = inject(AuthService);

    isAdmin = computed(()=>{ return this.authService.activePermission() == 'admin'})
}
