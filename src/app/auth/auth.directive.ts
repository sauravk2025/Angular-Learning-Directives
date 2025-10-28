import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';


//structural directive

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({alias:"appAuth"})

  private authService = inject(AuthService)
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)
  

  constructor() {
    effect(()=>{
      if(this.authService.activePermission() == this.userType())
      {
        console.log(this.userType())
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }
      else{
        console.log("othet")
        this.viewContainerRef.clear()
      }
    })

    console.log(this.authService,this.templateRef,this.viewContainerRef)
   }

}
