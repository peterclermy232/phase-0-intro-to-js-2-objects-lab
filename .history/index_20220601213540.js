// Write your solution in this file!
const employee = {
    //name: 'Sam',
    //streetAddress: '11 Broadway'

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;


}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
// not solve
function deleteFromEmployeeByKey(employee, key){

        const newObj = Employee.assign({}, employee);
        delete newObj[key];
        return newObj;


}



function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }