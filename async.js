
const students = [
    {
        id: 1,
        firstName: "Ampfarisaho",
        lastName: "Netshitongwe",
        email: "ampfarisahonetshtongwe@gmail.com",
        course: "JavaScript"
    },
    {
        id: 2,
        firstName: "Phindulo",
        lastName: "Musengwa",
        email: "peendulamza@gmail.com",
        course: "HTML"
    },
    {
        id: 3,
        firstName: "David",
        lastName: "Ngobeni",
        email: "davidngobeni@gmail.com",
        course: "CSS"
    },
    {
        id: 4,
        firstName: "Elsie",
        lastName: "Msiza",
        email: "sierranhlanhla@gmail.com",
        course: "React"
    },
    {
        id: 5,
        firstName: "Ronewa",
        lastName: "Muthivhi",
        email: "muthivhironewa@gmail.com",
        course: "NodeJS"
    }
];

window.onload = function () {
    const container = document.getElementById("studentList");

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";

        card.innerHTML = `
            <p><b>ID:</b> ${student.id}</p>
            <p><b>Name:</b> ${student.firstName} ${student.lastName}</p>
            <p><b>Email:</b> ${student.email}</p>
            <p><b>Course:</b> ${student.course}</p>
        `;

        container.appendChild(card);
    });
};