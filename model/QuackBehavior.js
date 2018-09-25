export default class QuackBehavior {
  constructor() {
    //console.log(this.fly);
    if (this.quack === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override quack method");
    }
  }
}
