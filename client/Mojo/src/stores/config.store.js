
import logoImg from '../images/logo.png';


export default class ConfigStore {
  constructor() {
    this.splashTime = 1000
    this.splashImg = logoImg
  }

  get SplashImg() {
    return this.splashImg
  }

  get SplashTime() {
    return this.splashTime
  }

}
