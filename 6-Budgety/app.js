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

var budgetController = (function() {

})();

var UIController = (function() {
    var DOMStrings = {
        addType: '.add__type',
        addDescription: '.add__description',
        addValue: '.add__value',
        addButton: '.add__btn'
    }
    return {
        getItem: function() {
            return {
                type:document.querySelector(DOMStrings.addType).value,
                description:document.querySelector(DOMStrings.addDescription).value,
                value:document.querySelector(DOMStrings.addValue).value
            }
        },
        getDOMStrings: function() {
            return DOMStrings;
        }

    }
})();

var controller = (function(budgetCtrl,UICtrl) {
    var DOMs = UICtrl.getDOMStrings();
    var ctrlAddItem = function() {
        var input = UICtrl.getItem();
        console.log(input);
    }
    document.querySelector(DOMs.addButton).addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13) {
            ctrlAddItem();
        }
    });
})(budgetController,UIController);
