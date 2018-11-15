export default class ConfigStore {
  constructor() {
    // in miliseconds
    this.splashTime = 4000
    this.splashImg = require('../images/logo-1-splash.jpg')
  }

  get SplashImg() {
    return this.splashImg
  }

  get SplashTime() {
    return this.splashTime
  }

}
