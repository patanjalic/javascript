init();

function init() {
    var month = new Date().getMonth();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    console.log(months[month]);
    document.querySelector('.budget__title--month').textContent = months[month];
    document.querySelector('.budget__value').textContent = '0';
    document.querySelector('.budget__income--value').textContent = '0';
    document.querySelector('.budget__expenses--value').textContent = '0';
    document.querySelector('.budget__expenses--percentage').textContent = '0%';
}

document.querySelector('.add__btn').addEventListener('click',function() {
    console.log('add button clicked');
    console.log(document.querySelector('.add__description').value);
    console.log(document.querySelector('.add__value').value);
});

var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return a+x;
    }

    return {
        publicTest: function(a) {
            var addition = add(a);
            console.log(addition);
            return addition;
        }
    }
})();

var UIController = (function() {
    //ui controller code
})();

var controller = (function(budgetCtrl,UICtrl) {
    var z = budgetCtrl.publicTest(6);
    return {
        anotherPublic: function() {
            console.log(z);
            return z;
        }
    }
})(budgetController,UIController);
