/**
 * @desc Service for the expenses
 * @namespace expenseService
 */

(function () {
    'use strict';

expenseMngrApp.service("expenseService" , function ($http , $q) {

    var deferred = $q.defer();
    $http.get("data/expenseData.json").then(function (data) {
        deferred.resolve(data);
    });

    /**
     * @desc Function to get Expense Details
     * @memberOf expenseService
     */
    this.getExpenseDetails = function () {
        return deferred.promise;
    }
})
})();