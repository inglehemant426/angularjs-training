/**
 * @desc Controller for the expenses
 * @namespace ExpenseCtrl
 */

(function () {
    'use strict';
    expenseMngrApp.controller('ExpenseCtrl', ['$scope', 'expenseService',
    function ($scope, expenseService) {

            /**
             * @desc Array of expenses object
             * @memberOf ExpenseCtrl
             */
            $scope.expenseArray=[];
            var promise = expenseService.getExpenseDetails();
            promise.then(function (data) {
                $scope.expenseArray = data.data;
            });

            $scope.composeData = {};
            $scope.editable = false;

            $scope.compose = function (transaction) {
                $scope.expVisible = false;
                $scope.editable = true;
                $scope.composeData = transaction;
                $scope.composeData.fullDate = getDateObj(transaction.date);
            };

          /**
           * @desc Function to save composition
           * @memberOf ExpenseCtrl
           */
            $scope.saveComposition = function (transaction) {
                    $scope.editable = false;
              $scope.composeData.date = getShortDate(transaction.fullDate);
                };

            var currentDate = new Date();
            $scope.newListing = {
              fullDate: currentDate,
              transactionId: 1,
              payer: '',
              payee: '',
              category: '',
              subCategory: '',
              amount: 100,
              modeOfPayment: ''
            };

          /**
           * @desc Function to add Expense
           * @memberOf ExpenseCtrl
           */
            $scope.addExpense = function (newListing) {
                $scope.expenseArray.push(newListing);
                newListing.fullDate = getShortDate(newListing.fullDate);
                newListing.date = '' + newListing.fullDate;
                $scope.newListing = {};
                $scope.expVisible = false;
            };

            $scope.expVisible = false;

            $scope.AddNewExpenseBtn = function () {
                $scope.expVisible = true;
              $scope.editable = false;
            };

          /**
           * @desc Function to remove Expense
           * @memberOf ExpenseCtrl
           */
            $scope.removeExpense = function (index) {
                $scope.expenseArray.splice(index, 1);
            };

          function getDateObj  (dateString) {
            var dateArray = dateString.split('-');
              return  new Date( dateArray[2], dateArray[1]-1, dateArray[0] );
          }
          function getShortDate (date) {
            return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
          }

    }]);
})();