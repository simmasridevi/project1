 // Registration Page Logic
const empForm = document.getElementById('empForm');
if(empForm) {
    empForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('empName').value;
        let id = document.getElementById('empId').value;
        let dept = document.getElementById('dept').value;
        
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push({name, id, dept});
        localStorage.setItem('employees', JSON.stringify(employees));
        
        alert('Employee Registered Successfully!');
        empForm.reset();
        window.location.href = 'dashboard.html';
    });
}

// Dashboard Page Logic - Print data
const empTable = document.getElementById('empTable');
if(empTable) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.forEach(emp => {
        let row = empTable.insertRow();
        row.insertCell(0).innerText = emp.name;
        row.insertCell(1).innerText = emp.id;
        row.insertCell(2).innerText = emp.dept;
    });
}