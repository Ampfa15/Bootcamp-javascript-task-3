const studentDatabase = [
    {
        id: 1,
        firstName: "Ampfarisaho",
        lastName: "Netshitongwe",
        email: "ampfarisahonetshtongwe@gmail.com",
        course: "JavaScript",
        age: 24
    },
    {
        id: 2,
        firstName: "Phindulo",
        lastName: "Musengwa",
        email: "peendulamza@gmail.com",
        course: "HTML",
        age: 28
    },
    {
        id: 3,
        firstName: "David",
        lastName: "Ngobeni",
        email: "davidngobeni@gmail.com",
        course: "CSS",
        age: 21
    },
    {
        id: 4,
        firstName: "Elsie",
        lastName: "Msiza",
        email: "sierranhlanhla@gmail.com",
        course: "React",
        age: 23
    },
    {
        id: 5,
        firstName: "Ronewa",
        lastName: "Muthivhi",
        email: "muthivhironewa@gmail.com",
        course: "NodeJS",
        age: 25
    }
];

// Question 1 

function synchronousDemo() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}

synchronousDemo();

// Question 2 

function displayStudents() {

    console.log("Loading student records...");

    setTimeout(() => {

        console.log("Student Records:");

        studentDatabase.forEach(student => {
            console.log(student);
        });

    }, 3000);
}

displayStudents();