// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
const employee = {
    name: 'Peter',
    streetAddress: '11 Broadway'
} 
updateEmployeeWithKeyAndValue(employee,'Sam','11 Broadway');
assert.deepEqual(obj, {name: 'Sam', streetAddress: '11 B'});