// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;

}

const employees = updateEmployeeWithKeyAndValue()
