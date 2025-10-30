// グローバルスコープ
var globalVar = "私はグローバル変数です";
let globalLet = "私もグローバルですが、let でスコープされています";
const globalConst = "私はグローバル定数です";


{
// ブロックスコープ
var blockVar = "私はブロックスコープの var です";
let blockLet = "私はブロックスコープの let です";
const blockConst = "私はブロックスコープの const です";
}
// グローバルスコープ
console.log(globalVar); // 出力: "I'm a global variable"
console.log(globalLet); // 出力: "I'm also global, but scoped with let"
console.log(globalConst); // 出力: "I'm a global constant"

//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
var functionVar = "私はブロックスコープの変数です";
let functionLet = "私はブロックスコープのletです";
const functionConst = "私はブロックスコープのconstです";
}
show();

console.log(functionVar); // ReferenceErrorをスローします
console.log(functionLet); // ReferenceErrorをスローします
console.log(functionConst); // ReferenceErrorをスローします