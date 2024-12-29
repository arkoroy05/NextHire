const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { User, EducationAndSkills, Projects } = require('./db');

app.use(cors());
app.use(express.json());

// Helper function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// User creation endpoint
app.post("/user-info", async (req, res) => {
    try {
        const { name, phoneNumber, email, experience } = req.body;
        
        // Create user
        const user = await User.create({
            name,
            phoneNumber,
            email,
            experience
        });
        
        res.json({ 
            message: "User created successfully",
            user,
            userId: user._id // Explicitly return userId for frontend reference
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Education and Skills endpoint
app.post("/form", async (req, res) => {
    try {
        const { userId, education, skills } = req.body;
        
        // Validate userId
        if (!isValidObjectId(userId)) {
            return res.status(400).json({ error: "Invalid userId format" });
        }

        // Check if user exists
        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if education/skills already exist for this user
        const existingRecord = await EducationAndSkills.findOne({ userId });
        if (existingRecord) {
            return res.status(400).json({ 
                error: "Education and skills record already exists for this user",
                suggestion: "Use PUT /form/:userId to update existing record"
            });
        }

        // Create education and skills record
        const educationAndSkills = await EducationAndSkills.create({
            userId: userExists._id, // Use the validated user._id
            education,
            skills
        });

        res.json({
            message: "Education and skills added successfully",
            educationAndSkills
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Projects endpoint
app.post("/projects", async (req, res) => {
    try {
        const { userId, projectName, description, link } = req.body;
        
        // Validate userId
        if (!isValidObjectId(userId)) {
            return res.status(400).json({ error: "Invalid user" });
        }

        // Check if user exists
        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create project
        const project = await Projects.create({
            userId: userExists._id, // Use the validated user._id
            projectName,
            description,
            link
        });

        res.json({
            message: "Project added successfully",
            project
        });
    } catch (error) {
        res.status(500).json({ error: "we might have some issues" });
    }
});

// Get user data endpoint
app.get("/user", async (req, res) => {
    try {
        const { userId } = req.query;

        // Validate userId
        if (!isValidObjectId(userId)) {
            return res.status(400).json({ error: "Invalid userId format" });
        }

        // Use Promise.all for parallel queries
        const [user, projects, educationAndSkills] = await Promise.all([
            User.findById(userId),
            Projects.find({ userId }).lean(),
            EducationAndSkills.findOne({ userId }).lean()
        ]);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            user,
            projects: projects || [],
            educationAndSkills: educationAndSkills || null
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);    
});