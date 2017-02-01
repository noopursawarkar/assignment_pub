app.controller("bidController", ["$scope", "bidService", "$interval", "orderByFilter", function (scope, service, interval, orderBy) {

    var sortAsc=false;
    function callApi() {    
        
        service.getData(10).then(function (d) {
            scope.responsedata = d.data;
        }, function (err) {
            console.log("Error, while fetching the data");
        })        
    };

    //Apply Filter based on tag
    function filterBytag(data,val) {
        return data.filter(function (item) {
            return item.tags.indexOf(val) != -1;
        });

    };

    //Apply Sorting based on param
    scope.sortData = function (sortBy, filterBy) {
        sortAsc=!sortAsc;        
        var filterdData = filterBytag(scope.responsedata,filterBy);
        scope.responsedata = orderBy(filterdData, 'datetimes.'+sortBy, sortAsc);     
    };

    callApi();  

    //Polling API call to get updates every minute - (websockets serves best in such cases)
    interval(callApi, 60000);

}])