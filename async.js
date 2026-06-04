const studentDatabase = [
    {
        id:1,
        firstName:"Ampfarisaho",
        lastName:"Netshitongwe",
        email:"ampfanet15@gmail.com",
        course:"software engineering",
        age:25
    },
    {
        id:2,
        firstName:"Ronewa",
        lastName:"Muthivhi",
        email:"muthivhironewa@gmail.com",
        course:"Accounting science",
        age:21
    },
    {
        id:3,
        firstName:"David",
        lastName:"Ngobeni",
        email:"davidngobeni@gmail.com",
        course:"Bachelor Law",
        age:22
    },
    {
        id:4,
        firstName:"Phindulo",
        lastName:"Musenwa",
        email:"peendulamza@gmail.com",
        course:"Human resources",
        age:28
    },
    {
        id:5,
        firstName:"Nhlanhla",
        lastName:"Msiza",
        email:"msizanhlanhla@gmail.com",
        course:"Social work",
        age:24
    }
];

function runSynchronousExample(){

    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");

    alert(
        "Check the browser console (F12) to see the synchronous execution."
    );
}

function getStudents(){

    const studentDiv = document.getElementById("students");

    studentDiv.innerHTML =
        "<p>Loading students... Please wait 3 seconds.</p>";

    setTimeout(function(){

        let output = "<h3>Student Records</h3>";

        studentDatabase.forEach(student => {

            output += `
                <p>
                    ID: ${student.id}<br>
                    Name: ${student.firstName} ${student.lastName}<br>
                    Email: ${student.email}<br>
                    Course: ${student.course}<br>
                    Age: ${student.age}
                </p>
                <hr>
            `;
        });

        studentDiv.innerHTML = output;

    },3000);
}