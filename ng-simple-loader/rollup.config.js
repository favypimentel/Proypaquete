export default {
   entry: 'dist/index.js',
   dest: 'dist/budles/Simpleloader.umd.js',   
   sourcceMap:false,
   format:'umd',
   moduleName: 'ng.simpleloader',
   globals:{
	   '@angular/core': 'ng.core',
	   'rxjs/Observable':'Rx',
	   'rxjs/BehaviourSubject':'Rx',
   }
	
}

