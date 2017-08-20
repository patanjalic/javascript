init();

function init() {
    var month = new Date().getMonth();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    console.log(months[month]);
    document.querySelector('.budget__title--month').textContent = months[month];
    document.querySelector('.budget__value').textContent = '0';
    document.querySelector('.budget__income--value').textContent = '0';
    document.querySelector('.budget__expenses--value').textContent = '0';
    document.querySelector('.budget__expenses--percentage').style.visibility = 'hidden';
}

var budgetController = (function() {
    var Expense=function(id,desc,value) {
        this.id=id;
        this.desc=desc;
        this.value=value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0) {
            this.percentage = Math.round(this.value/totalIncome * 100);
        }
    }
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }
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
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(current){
                current.calcPercentage(data.values.inc);
            });
        },
        getPercentages: function() {
            var percentages = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return percentages;
        },
        getBudget: function() {
            return {
                income:data.values.inc,
                budget:data.budget,
                percentage:data.percentage,
                expenses:data.values.exp
            }
        },
        deleteItem: function(type,id) {
            var ids,index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            })
            index = ids.indexOf(id);
            if(index !== -1) {
                data.allItems[type].splice(index,1);
            }
            console.log(data.allItems);
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
        expenseList: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLable: '.budget__expenses--percentage',
        container: '.container',
        expPercentageLabel: '.item__percentage'
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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMStrings.expenseList;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.desc);
            newHtml = newHtml.replace('%value%',obj.value);
            //add it to income list
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        deleteListItem: function(selectId) {
            var element = document.getElementById(selectId);
            element.parentNode.removeChild(element);
        },
        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.addDescription+', '+DOMStrings.addValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current,index,array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        },
        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.income;
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.expenses;

            if(obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLable).textContent = obj.percentage+'%';
                document.querySelector(DOMStrings.percentageLable).style.visibility = 'visible';
            } else {
                document.querySelector(DOMStrings.percentageLable).textContent = '';
            }
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expPercentageLabel);
            var nodeListForeach = function(list,callback) {
                for(var i = 0; i < list.length; i++) {
                    callback(list[i],i);
                }
            }
            nodeListForeach(fields,function(current,index) {
                if(percentages[index] > 0) {
                    current.textContent = percentages[index]+'%';
                } else{
                    current.textContent = '---';
                }
            });
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
        document.querySelector(DOMs.container).addEventListener('click',ctrlDelItem);
    }

    var updateBudget = function() {
        budgetCtrl.calculateBudget();
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
            var budget = budgetCtrl.getBudget();
            UICtrl.displayBudget(budget);

            budgetCtrl.calculatePercentages();
            var percentages = budgetCtrl.getPercentages();
            UICtrl.displayPercentages(percentages);
        }
    }
    var ctrlDelItem = function(event) {
        var item,type,id,split;
        item = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(item);
        if(item) {
            split = item.split('-');
            type = split[0];
            id = split[1];

            //delete item from datastructure
            budgetCtrl.deleteItem(type,parseInt(id));
            //delete item from UI
            UICtrl.deleteListItem(item);
            //update UI budget
            updateBudget();
            var budget = budgetCtrl.getBudget();
            UICtrl.displayBudget(budget);
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
