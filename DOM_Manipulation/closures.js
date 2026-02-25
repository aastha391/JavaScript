
let name="Preeti"
function outer(){
    let name="Parul"
    function inner(){
        let name="Sakshi"
        console.log(name);
    }
    return inner;
}

let inner=outer();
inner() //this is the concept of closure even if we think that the variable name must be destroyed after the scope but actually the variable required for inner function is binded with it copy is not made but it is binded and reference is shared
