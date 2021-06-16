import module1 from "sample/module1";
import _ from "lodash";
import module2 from "sample/module2";

console.log("requiring both module1 and module 2", { module1, module2 });

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', module2? module2: "Module2 could not be required. Please check error in the console"], ' ');

    return element;
}

document.body.appendChild(component());