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

const employees = updateEmployeeWithKeyAndValue(
    employee, 'streetAddress', '11 Broadway'
);

employee;