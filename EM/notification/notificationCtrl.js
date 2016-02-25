/*notificationCtrl - to fetch the upcoming notification data*/
expenseMngrApp
    .controller("notificationCtrl", ["$scope", "notificationSrv", function ($scope, notificationSrv) {
        $scope.notifyArrObj;
        var promise = notificationSrv.getNotificationDetails();
        promise.then(function (data) {
            $scope.notifyArrObj = data.data;
        });

    }])
    .directive("notification", function () {
        return {
            template: '<div ng-repeat="val in notifyArrObj">Category: {{val.category}} , Sub category: {{val.subCategory}} , Transaction Type : {{val.transactionType}} , Recurring Type : {{val.RecurringType}}'
        };
    });