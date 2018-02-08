// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyClRuFq7jkksIeW7-G3tfCAd4_BFPeontU",
    authDomain: "employeedatadb.firebaseapp.com",
    databaseURL: "https://employeedatadb.firebaseio.com",
    projectId: "employeedatadb",
    storageBucket: "employeedatadb.appspot.com",
    messagingSenderId: "237859068656"
  }
};
