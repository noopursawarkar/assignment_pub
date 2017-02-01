# assignment_pub

Check out working demo on -
https://noopursawarkar.github.io/assignment_pub/app/index.html


Assumptions
1.	every minute api call should go (used $interval of angular for polling) 
2.	created one function with pagesize passed as function parameter to get results, which will call api (that param should be sent to api)
3.	created function which returns an array,sorted by last updated or sorted by last executed, this function will have another param as tag, which uses angular filter
4. table will show all returned data.
5. two buttons which will sort and filter data and update results in table.
