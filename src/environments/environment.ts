// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  path: 'http://localhost:3000',
  pathSocket: 'http://localhost:5000',
  services: {
    saveCiudades: {
      isPublic: true,
      isToken: false,
      endpoint: '/cencosud-api/public/ins-coords',
      serviceName: 'saveCiudades'
    },
    getCiudades: {
      isPublic: true,
      isToken: false,
      endpoint: '/cencosud-api/public/get-clima',
      serviceName: 'getCiudades'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
