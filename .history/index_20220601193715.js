// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;

}

function updateEmployeeWithKeyAndValue(employees, key, value){
    let employees = {
        name: "Sam",
        streetAddress: "11 Broadway"
    } 
    const newObj = employees.assign({}, employees, {[key]: value});
    return newObj;
}