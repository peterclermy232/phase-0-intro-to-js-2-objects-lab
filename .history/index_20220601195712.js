// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
} 

function updateEmployeeWithKeyAndValue(employee,key , value){
   employee[key] = value;
    return employee;

}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {employee};
    newObj[key] = value;
    return newObj;
}

const employees = updateEmployeeWithKeyAndValue(
    employee, "Sam", 
)