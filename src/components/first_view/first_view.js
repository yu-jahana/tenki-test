/*
/* module
**/
const print = require("../article/article");
print("Hello");

/*
/* es2015
**/
class Test {
  constructor(msg) {
    document.write(msg);
  }
}
let test = new Test('webpack');