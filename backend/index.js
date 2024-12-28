const express = require('express');
const app = express();
const cors = require('cors');
const {User,EducationAndSkills,Projects} = require('./db');


app.use(cors());
app.use(express.json());

app.post("/user-info",async(req,res)=>{
    try{
        const{name,phoneNumber,email,experience} = req.body;
        const user = await User.create({name,phoneNumber,email,experience});
        res.json({user});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.post("/form", async (req, res) => {
    try {
        const {userId, education, skills} = req.body;
        
        if (!userId || !education || !skills) {
            return res.status(400).json({error: "Missing required fields"});
        }
        
        const user = await EducationAndSkills.create({userId, education, skills});
        res.json({user});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
app.post("/projects", async(req,res) => {
    try {
        const {userId, projectName, description, link} = req.body;
        if (!userId || !projectName || !description) {
            return res.status(400).json({error: "Missing required fields"});
        }
        const project = await Projects.create({userId, projectName, description, link});
        res.json({project});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get("/user",async(req,res)=>{
    try{
        const userId = req.query.userId;
        const user= await User.findById(userId);
        const projects = await Projects.find(userId);
        const educationAndSkills = await EducationAndSkills.findOne(userId);
        res.json({user,projects,educationAndSkills});
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}) 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);    
});