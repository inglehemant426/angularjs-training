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
            $scope.expenseArray;
            var promise = expenseService.getExpenseDetails();
            promise.then(function (data) {
                $scope.expenseArray = data.data;
                console.log("ex : " + $scope.expenseArray);
                for (var a in $scope.expenseArray) {
                    //console.log($scope.expenseArray[a]["date"]);

                    var newdate = new Date($scope.expenseArray[a]["date"]);
                    console.log("newdate :" + newdate);
                }
            });

            /*---- Edit expense function ---*/

            $scope.composeData = {};
            $scope.editable = false;

            $scope.compose = function (transaction) {
                $scope.editable = true;
                $scope.composeData = transaction;
                console.log($scope.composeData.date);
            };

            $scope.saveComposition = function () {  
                    $scope.editable = false;
                }
                /*--- Adding Expense function ---*/

            $scope.newListing = {};
            $scope.addExpense = function () {
                console.log("date in obj form :" + $scope.newListing.date);
                var newdt = new Date($scope.newListing.date);
                var newdtDay = newdt.getDay();
                var newdtMonth = newdt.getMonth();
                var newdtYear = newdt.getFullYear();
                newdtMonth++;
                if (newdtMonth < 9) {
                    newdtMonth = "0" + newdtMonth;
                }
                if (newdtDay < 9) {
                    newdtDay = "0" + newdtDay;
                }
                $scope.newListing.date = ((newdtMonth) + " - " + (newdtDay) + " - " + newdtYear);
                console.log("date in converted form :" + $scope.newListing.date);
                console.log($scope.newListing);
                $scope.expenseArray.push($scope.newListing);
                $scope.newListing = {};
                $scope.expVisible = false;
            }
            $scope.expVisible = false;
            $scope.AddNewExpenseBtn = function () {
                $scope.expVisible = true;
            }

            // Removing expense
            $scope.removeExpense = function (index) {
                $scope.expenseArray.splice(index, 1);
            }

    }]);
})();