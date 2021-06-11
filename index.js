// Write your solution in this file!
const employee = {name: "name",streetAddress: "street address"};

let updateEmployeeWithKeyAndValue = (employee,key,value) => Object.assign({},employee,{[key]:value});
let destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => Object.assign(employee,{[key]:value});
function deleteFromEmployeeByKey (employee, key) {
    let employeeClone = Object.assign({},employee);
    delete employeeClone[key];
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
