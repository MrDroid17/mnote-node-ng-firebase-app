// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'https://angular-firebase-storage-b50a7.firebaseapp.com',
  firebaseConfig : {
    apiKey: 'AIzaSyBvj5vyeHiIZYmrwk0a6Z0MrGPdaE8w1mE',
    authDomain: 'angular-firebase-storage-b50a7.firebaseapp.com',
    databaseURL: 'https://angular-firebase-storage-b50a7.firebaseio.com',
    projectId: 'angular-firebase-storage-b50a7',
    storageBucket: 'angular-firebase-storage-b50a7.appspot.com',
    messagingSenderId: '447656612162'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
