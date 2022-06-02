// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;


}

function updateObjectWithKeyAndValue(employee, key, value) {
    
    const newObj = {...employee}
    newObj[key]
    return newObj;
  }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
 
function deleteFromEmployeeByKey(employee, key){

        const newObj = Object.assign({}, employee);
        delete newObj[key];
        return newObj;


}



function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }