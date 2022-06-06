// Write your solution in this file!
const employee ={
    name:"Eric" ,
    streetAdress:"Nairobi"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {

   var newEmployee = {...employee}

   newEmployee.name ="Sam";
   newEmployee.streetAddress ="11 Broadway";

   return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee.streetAddress ="12 Broadway"

    return employee
}

function deleteFromEmployeeByKey(employee, key) {

    var newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
