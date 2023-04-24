import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {

  const firebaseConfig = {
    // Your firebase config
  };

  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();
  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

  const db = getFirestore(app);
  nuxtApp.vueApp.provide('db', db);
  nuxtApp.provide('db', db);

  const storage = getStorage(app)
  nuxtApp.vueApp.provide('storage', storage);
  nuxtApp.provide('storage', storage);
});