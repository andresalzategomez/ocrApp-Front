// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	// firebase: {
	// 	apiKey: "AIzaSyCXORnHRdtp4As7T4_SKBhe_rjCE9kSw4s",
	// 	authDomain: "prueba-393fe.firebaseapp.com",
	// 	databaseURL: "https://prueba-393fe-default-rtdb.firebaseio.com/",
	// 	projectId: "prueba-393fe",
	// 	storageBucket: "prueba-393fe.appspot.com",
	// 	messagingSenderId: "664207183696",
	// 	appId: "1:664207183696:web:cde392b48e8804271fe655",
	// 	measurementId: "G-GK5YZ09C7X"
	// },
	url_destino:'http://127.0.0.1:3001',
	API_URL_OCR:'/v1/api/ocr',
	tenant: "OCR-TENANT"
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
