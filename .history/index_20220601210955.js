// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;


}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){

        const newObj = employee.assign({employee}, employee);
        delete newObj[key];
        return newObj;


}



function destructivelyDeleteFromObjectByKey(object, key) {
    delete empl[key];
    return object;
  }