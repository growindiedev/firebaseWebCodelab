/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAhdj8wUMdUsNFCxmybdmh8Xahd4cXNDX8",
  authDomain: "friendlychat-74275.firebaseapp.com",
  projectId: "friendlychat-74275",
  storageBucket: "friendlychat-74275.appspot.com",
  messagingSenderId: "904211297552",
  appId: "1:904211297552:web:073bb52f46db8afef82195",
  measurementId: "G-LDBEG5CXSB",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
