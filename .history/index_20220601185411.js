// Write your solution in this file!
const employee = {
    name: "S",
    streetAddress: "11 Broadway"
} 

function updateEmployeeWithKeyAndValue(employee,name , Sam){
   employee[name] = Sam;
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value){

    const newObj = employee.assign({}, {[key]:value});
    return newObj;
}


