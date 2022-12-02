// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA_PsUK09zrMjy3SNSpSH4RJX4ewIZFgg4',
    authDomain: 'ttsd-dpost.firebaseapp.com',
    projectId: 'ttsd-dpost',
    storageBucket: 'ttsd-dpost.appspot.com',
    messagingSenderId: '514719997534',
    appId: '1:514719997534:web:6a4122bf7d48be6df31ecf'
  },
  apiBaseUrl: 'https://api.dpost.online',
  stateNotifierUrl: 'https://state-notifier.dpost.online/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
