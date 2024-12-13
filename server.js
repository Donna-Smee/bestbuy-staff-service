// server.js

require('dotenv').config();  // Load environment variables from the .env file
const express = require('express');
const app = express();

// Use the PORT from the environment variables or fallback to 3000
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory store for staff data
let staffData = [
    {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        department: "Engineering",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        department: "Product",
        email: "jane.smith@example.com"
    }
];

// Create a new staff member
app.post('/staff', (req, res) => {
    const { name, position, department, email } = req.body;

    if (!name || !position || !department || !email) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newStaff = {
        id: staffData.length + 1,
        name,
        position,
        department,
        email
    };

    staffData.push(newStaff);
    res.status(201).json(newStaff);
});

// Get all staff members
app.get('/staff', (req, res) => {
    res.status(200).json(staffData);
});

// Get a single staff member by ID
app.get('/staff/:id', (req, res) => {
    const { id } = req.params;
    const staff = staffData.find(s => s.id === parseInt(id));

    if (!staff) {
        return res.status(404).json({ message: 'Staff not found' });
    }

    res.status(200).json(staff);
});

// Update a staff member by ID
app.put('/staff/:id', (req, res) => {
    const { id } = req.params;
    const { name, position, department, email } = req.body;

    const staffIndex = staffData.findIndex(s => s.id === parseInt(id));
    if (staffIndex === -1) {
        return res.status(404).json({ message: 'Staff not found' });
    }

    const updatedStaff = {
        ...staffData[staffIndex],
        name: name || staffData[staffIndex].name,
        position: position || staffData[staffIndex].position,
        department: department || staffData[staffIndex].department,
        email: email || staffData[staffIndex].email
    };

    staffData[staffIndex] = updatedStaff;
    res.status(200).json(updatedStaff);
});

// Delete a staff member by ID
app.delete('/staff/:id', (req, res) => {
    const { id } = req.params;
    const staffIndex = staffData.findIndex(s => s.id === parseInt(id));

    if (staffIndex === -1) {
        return res.status(404).json({ message: 'Staff not found' });
    }

    staffData.splice(staffIndex, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
