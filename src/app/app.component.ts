import { Component , AfterViewInit , OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA';

	  public ngOnInit()
  {
    $(document).ready(function(){
        $("button").click(function(){
           alert('rajib');
        });
    });
  }

  ngAfterViewInit (): void {

   }
}
