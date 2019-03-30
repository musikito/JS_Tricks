/*
The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
*/



var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  function getFullName(item, index) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
  }