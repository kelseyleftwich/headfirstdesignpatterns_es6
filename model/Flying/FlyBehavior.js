export default class FlyBehavior {
  constructor() {
    //console.log(this.fly);
    if (this.fly === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override fly method");
    }
  }
}
