import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SimpleLoaderService{
	show$ = BehaviorSubject<boolean>(false);
	show () {
		this.show$.next(true);
	}
	hide(){
		this.show$.next(false);
	}
}