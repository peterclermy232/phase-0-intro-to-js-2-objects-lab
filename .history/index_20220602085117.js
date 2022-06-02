// Write your solution in this file!
const employeess = {
    name: 'Sam',
    streetAddress: '11 Broadway'

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;


}

function updateObjectWithKeyAndValue(employee,  value) {
    
    //const newObj = Object.assign({}, employee, {[key]: value});
    //return newObj;
    console.log(employee,'name');
    console.log(value,'street');
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