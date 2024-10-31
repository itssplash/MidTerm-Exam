const express = require('express');
const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: 'Abhinav',
        Grade: 'A',
        Email: 'abhinaavv007@gmail.com'
    }
];

// GET all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET a student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

// POST a new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        Grade: req.body.Grade,
        Email: req.body.Email
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT to update an existing student by ID
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');

    student.name = req.body.name || student.name;
    student.Grade = req.body.Grade || student.Grade;
    student.Email = req.body.Email || student.Email;

    res.json(student);
});

// DELETE a student by ID
app.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send('Student not found');
    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`REST Example is running on ${port}`));

