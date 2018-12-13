import {SimpleLoaderService} from './ng-simple-loader.service';
import {MgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MgSimpleLoaderComponent} from './ng-simple-loader.component';

@NgModule({
	
	imports:[
	CommonModule
	],
	declarations:[
	NgSimpleLoaderComponent
	],
	exports:[
NgSimpleLoaderComponent
	],
	providers:[
	SimpleLoaderService
	]
	
	
})

export class SimpleLoaderModule{}