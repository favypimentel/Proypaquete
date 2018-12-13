import {SimpleLoaderService} from './ng-simple-loader.service';
import {Component} from '@angular/core';


@Component({
	
	selector: 'ng-simple-loader',
	template:`<div class= "spiner" *ngIf=simpleloader.show$ | async" >
	          <div class= "double-bounce1"> </div>
			  <div class= "double-bounce2"> </div>
	 </div>
	´ ,
	styles:[
	`.spinner{ ...}´
	
	]
})

export class SimpleLoaderComponent{
	constructor (public simpleloader: SimpleLoaderService){}
}