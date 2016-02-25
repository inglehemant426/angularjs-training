describe('ExpenseCtrl Test Suite', function() {

  beforeEach(module('expenseManagerApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('default values are correct', function() {
    var $scope = {};
    var controller = $controller('ExpenseCtrl', { $scope: $scope });

    var currentDate = new Date().getDate();
    expect(currentDate).toEqual($scope.newListing.fullDate.getDate());
    expect($scope.editable).toBe(false);
       expect($scope.expVisible).toBe(false);
  });

  it('Unit test for adding expense', function() {
    var currentDate = new Date();
    var expense = {
      fullDate: currentDate,
      transactionId: 1,
      payer: 'TEST',
      payee: 'TEST',
      category: 'TEST',
      subCategory: 'TEST',
      amount: 100,
      modeOfPayment: 'TEST'
    };

    var $scope = {};
    var controller = $controller('ExpenseCtrl', { $scope: $scope });

    var noOfExpenses = $scope.expenseArray.length;
    $scope.addExpense(expense);

    expect($scope.expenseArray.length).toEqual(noOfExpenses + 1);
  });
    
    it('Unit test for compose expense', function() {
    var currentDate = new Date();
    var expense = {
      fullDate: currentDate,
        date: currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear(),
      transactionId: 1,
      payer: 'TEST',
      payee: 'TEST',
      category: 'TEST',
      subCategory: 'TEST',
      amount: 100,
      modeOfPayment: 'TEST'
    };

    var $scope = {};
    var controller = $controller('ExpenseCtrl', { $scope: $scope });

     
    $scope.compose(expense);

    expect($scope.editable).toBe(true);
  });
    
   


});
