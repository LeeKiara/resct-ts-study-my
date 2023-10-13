// ecmaScirpt(es, js) module

// const person = {username:"Alice", age:30}
// person.username
// person.age
// const {username, age}= {username:"Alice", age:30}
// username, age

import module, { appName, greet, user } from "./module";
// 디폴트 모듈
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌
// import module from "./module";
import metadata from "./module";

// const module = require("./module")

// 타입 추론
// const name = "javascript!!~!!!";

// 타입 선언
let name : string;
name = "Javascript";

console.log(
  greet(`${name}-${appName}
  -${metadata.version}-${metadata.creator}
  -${user.name}-${user.age}`, "female")
  );

document.getElementById("root").innerHTML  = greet(`${name}-${appName}
-${metadata.version}-${metadata.creator}
-`);


  