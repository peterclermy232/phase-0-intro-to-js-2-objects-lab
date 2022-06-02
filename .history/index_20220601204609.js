// Write your solution in this file!
const employee = {
    name: 'Sam',

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;


}

const employees = {
    name: 'Sam',
    streetAddress: ''
}

const employeess = updateEmployeeWithKeyAndValue(
    employees, 'streetAddress', '11 Broadway'
);

employeess;
employeess