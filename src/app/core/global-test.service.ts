import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalTestService {

  private globalTestData = {
    config: { a: 1, b: 2 }
  };
  constructor() {
    console.log('init global test')
   }

  get config() {
    return this.globalTestData.config;
  }

  getConfig() {
    return this.globalTestData.config;
  }

}
