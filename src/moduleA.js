console.log("Module A log 1");
import {fname as f, greet, obj} from "./moduleB.js";
//greet = "Hi"; // Not allowed to change.
obj.name = "Ross";
console.log("Module A log 2");
console.log(`${greet} ${f} ${obj.name}`);

