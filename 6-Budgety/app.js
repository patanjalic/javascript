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
    var Expense=function(id,desc,value) {
        this.id=id;
        this.desc=desc;
        this.value=value;
    };
    var Income=function(id,desc,value) {
        this.id=id;
        this.desc=desc;
        this.value=value;
    };
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.values[type] = sum;
    }
    var data={
        allItems:{
            inc:[],
            exp:[]
        },
        values:{
            inc:0,
            exp:0
        },
        budget:0,
        percentage:-1
    };
    return {
        addItem: function(type,desc,val) {
            var newItem,ID;
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            if(type === 'exp') {
                newItem = new Expense(ID,desc,val);
            } else if(type === 'inc') {
                newItem = new Income(ID,desc,val);
            }
            if(data.allItems[type].length == 0) {
                newItem.id = 0;
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        calculateBudget: function() {
            //calculate income and expense
            calculateTotal('inc');
            calculateTotal('exp');
            //budget = income - expenses
            data.budget = data.values.inc - data.values.exp;

            //calculate percentage of expenses
            if(data.values.inc !== 0) {
                data.percentage = Math.round(data.values.exp/data.values.inc * 100);
            }
        },
        getBudget: function() {
            return {
                income:data.values.inc,
                budget:data.budget,
                percentage:data.percentage,
                expenses:data.values.exp
            }
        },
        testing: function() {
            console.log(data);
        }
    };
})();

var UIController = (function() {
    var DOMStrings = {
        addType: '.add__type',
        addDescription: '.add__description',
        addValue: '.add__value',
        addButton: '.add__btn',
        incomeList: '.income__list',
        expenseList: '.expenses__list'
    }
    return {
        getItem: function() {
            return {
                type:document.querySelector(DOMStrings.addType).value,
                description:document.querySelector(DOMStrings.addDescription).value,
                value:parseFloat(document.querySelector(DOMStrings.addValue).value)
            }
        },
        getDOMStrings: function() {
            return DOMStrings;
        },
        addListItem: function(obj,type) {
            var html,newHtml,element;
            //depending on type modify either expense or income dom
            if(type === 'inc') {
                element = DOMStrings.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMStrings.expenseList;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.desc);
            newHtml = newHtml.replace('%value%',obj.value);
            //add it to income list
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.addDescription+', '+DOMStrings.addValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current,index,array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        }

    }
})();

var controller = (function(budgetCtrl,UICtrl) {
    var setupEventListeners = function() {
        var DOMs = UICtrl.getDOMStrings();
        document.querySelector(DOMs.addButton).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13) {
                ctrlAddItem();
            }
        });
    }

    var updateBudget = function() {
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        console.log(budget);
    }
    var ctrlAddItem = function() {
        var input = UICtrl.getItem();
        console.log(input);
        //validate input
        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //add the item now to the data structure
            var addedItem = budgetCtrl.addItem(input.type,input.description,input.value);
            budgetCtrl.testing();
            UICtrl.addListItem(addedItem,input.type);
            //clear the fields after adding item
            UICtrl.clearFields();
            //update budget
            updateBudget();
        }
    }
    return {
        init: function() {
            console.log('application started');
            setupEventListeners();
        }
    }
})(budgetController,UIController);

controller.init();
