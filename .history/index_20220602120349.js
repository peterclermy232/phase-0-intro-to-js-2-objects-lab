// Write your solution in this file!
const employee = {

} 

function updateEmployeeWithKeyAndValue(employee,key , value){
  
    return employee[k];


}

// function updateObjectWithKeyAndValue(employee, key, value) {
    // 
    // const newObj = {...employee}
    // newObj[key] = value;
    // return newObj;
//   }
// 

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