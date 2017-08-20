
function testScope5() {
    console.log(name);
    if(true) {
        var name = 'john smith';
        var age = 20;
    }
    console.log(name+' '+age);
}

testScope5();

function testScope6() {
    if(true) {
        let name = 'john smith';
        const age = 20;
    }
    console.log(name+' '+age); // will not work because let and const are block scoped, change scope
}

testScope6();

