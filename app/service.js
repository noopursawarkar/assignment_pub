app.service("bidService", function ($http, $httpBackend) {

    this.getData = function (arrlength) {

        // mocking API response
        var mockData = [
        { "id": 1, "name": "Client ABC", "price": 12.50, "datetimes": { updated: "2016-01-02T23:28:56.782Z", lastExecuted: "2016-04-01T23:29:11.045Z" }, tags: ["this", "that", "other"] },
        { "id": 2, "name": "Client XYZ", "price": 34.50, "datetimes": { updated: "2016-01-05T23:28:56.782Z", lastExecuted: "2016-04-06T23:29:11.045Z" }, tags: ["this", "that", "other"] },
        { "id": 3, "name": "Client UTC", "price": 11.50, "datetimes": { updated: "2016-01-01T23:28:56.782Z", lastExecuted: "2016-04-03T23:29:11.045Z" }, tags: ["this", "that", "ss"] }
        ];


        //sending page size to API to get results, good to handle paging on server side.   
        $httpBackend.whenGET('api/bidconfig/?pageSize=' + arrlength)
        .respond(function () {
            return [200,mockData];
        });
        return $http.get("api/bidconfig/?pageSize=" + arrlength);        
    };
})