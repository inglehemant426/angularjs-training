/*expense service - to fetch the data from json*/
expenseMngrApp.service("notificationSrv" , function ($http , $q) {
    var deferred = $q.defer();
    $http.get("data/notificationData.json").then(function (data) {
        deferred.resolve(data);
    });
    
    this.getNotificationDetails = function () {
        return deferred.promise;
    }
})


/*
expenseMngrApp.factory("notificationSrv", function ($http) {
    
        var notifyArrObj = [
            {
                category: "Interst",
                subCategory: "Fix deposit",
                transactionType: "Income",
                RecurringType: "Monthly"

        },
            {
                category: "Interst 111",
                subCategory: "Fix deposit 111",
                transactionType: "Income",
                RecurringType: "Monthly"

        }
        ];
    function getNotifyData() {
        
        return notifyArrObj;
    }
    // Now we are returning the value from factory
    return {
        getNotifyData : getNotifyData
    } 
});

*/
