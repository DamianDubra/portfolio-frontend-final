import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyA-wTn4qD6oMlHoCdmUwVjh16s0UaX7pJg",
  authDomain: "portfoliodamian-cd1ba.firebaseapp.com",
  projectId: "portfoliodamian-cd1ba",
  storageBucket: "portfoliodamian-cd1ba.appspot.com",
  messagingSenderId: "739312333040",
  appId: "1:739312333040:web:95f502733a0bce632f5235",
  measurementId: "G-795NSMYLCG"
};

initializeApp(firebaseConfig);
getAnalytics();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));