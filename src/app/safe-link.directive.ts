import { Directive, ElementRef, inject, input } from "@angular/core";

//attribute directive

@Directive({
        selector:"a[appSafeLink]", //to apply as attribute selector 
        standalone:true,
        host :{
            '(click)':'onConfirmLeavePage($event)',
            class:'hi'
        }
    })


export class SafeLinkDirective
{
    
    queryParams = input('myapp',{alias:'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    

    constructor()
    {
        console.log("inside diretcive")
        console.log(this.hostElementRef)
    }

    onConfirmLeavePage(event:PointerEvent)
    {
        const wantToLeave = window.confirm('Do you want to leave the app?') //return boolean    
        console.log(wantToLeave);
        console.log((event.target as HTMLAnchorElement).href);
        

        if (wantToLeave)
        {   this.hostElementRef.nativeElement.href+=`?from=${this.queryParams()}`;
            //(event.target as HTMLAnchorElement).href+=`?from=${this.queryParams()}` //dynamically setting href property of HTML <A>TAG
            return //dont do anything and leave
        }
        event?.preventDefault() // default is to leave.
    
    }



}