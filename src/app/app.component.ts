import { Component, OnInit,Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable,from} from 'rxjs'
import {map, startWith} from 'rxjs/operators';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  mydata = new FormControl();
  filterdOption:Observable<string[]>= from([])
  data:string[]=["One","two","three","four","five"]
 

  ngOnInit():void{
    this.filterdOption = this.mydata.valueChanges.pipe(startWith(''),map((value)=>this.filterValues(value)))

  }
  filterValues(value: string): string[] {
    let filterd_value = value.toLowerCase();

    return this.data.filter(option => option.toLowerCase().includes(filterd_value));
  }
}
