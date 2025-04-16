import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularWithMaterializeCss';

  ngOnInit(): void {
    M.AutoInit();
    this.materializeFunctions()
  }

  public materializeFunctions() {
    $('.dropdown-trigger').dropdown();
    // here you can call your other materialize functions
  }
}
