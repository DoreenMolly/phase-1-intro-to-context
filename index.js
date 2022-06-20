// Your code here
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    }
    function createEmployeeRecords(arr){
        
        return arr.map((rec) =>{
            return  createEmployeeRecord(rec)
        })
    }
    function createTimeInEvent(emplDetails, time){
        const [date, hour] = time.split(' ')
        emplDetails.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date,
        })
        return emplDetails
    }
    function  createTimeOutEvent(empDetails, time){
        let [date, hour] = time.split(' ')
        empDetails.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date,
        })
        return empDetails
    }
    function hoursWorkedOnDate(employee, dates) {
        let timeIn = employee.timeInEvents.find(event =>
            event.date == dates)
        let timeOut = employee.timeOutEvents.find(event =>
            event.date == dates)
        let totalTime = (timeOut.hour - timeIn.hour) / 100
        return totalTime;
      }
      function wagesEarnedOnDate(employee, dates) {
        let hours = hoursWorkedOnDate(employee, dates)
        return employee.payPerHour * hours;
      }
      function allWagesFor(emp) {
        return emp.timeInEvents.reduce((sum, ev) => {
            return sum + wagesEarnedOnDate(emp, ev.date)
        }, 0)
      }
      function calculatePayroll(empDetails) {
        return empDetails.reduce((sum, employee) => {
            return sum + allWagesFor(employee)
        }, 0)
      }