const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Arko:Arko1234@nexthirecluster.8zu9u.mongodb.net/');

// Main User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true ,maxlength: 30},
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    experience: { type: Number, required: true }, // in years
});

// Education and Skills Schema

const educationAndSkillsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign key
    education: [
        {
            level: {
                type: String,
                enum: ['High School', 'College', "Bachelor's Degree", "Master's Degree", 'Ph.D.'],
                required: true,
            },
            instituteName: { type: String, required: true },
            CGPA: { type: String, required: true },
        },
    ],
    skills: {
        languages: [
            {
                type: String,
                enum: [
                    "JavaScript", "Python", "Java", "C#", "C++", "Ruby", "PHP",
                    "TypeScript", "Swift", "Kotlin", "Go", "Rust", "Dart",
                    "Scala", "R", "SQL", "Perl", "MATLAB", "Shell", "Lua",
                    "Groovy", "Haskell", "Elixir", "Julia", "F#", "Objective-C",
                    "Visual Basic", "Assembly", "COBOL", "Fortran"
                ],
            },
        ],
        frameworks: [
            {
                type: String,
                enum: [
                    "React", "Angular", "Vue.js", "Svelte", "Next.js", "Nuxt.js",
                    "Express", "Django", "Flask", "FastAPI", "Ruby on Rails",
                    "Spring Boot", "Laravel", "ASP.NET Core", "Meteor", "Ember.js",
                    "Backbone.js", "Symfony", "CakePHP", "CodeIgniter", "Play Framework",
                    "Koa", "Gin", "Phoenix", "Hapi.js", "Gatsby", "Gridsome",
                    "Electron", "Quasar", "Ionic"
                ],
            },
        ],
        libraries: [
            {
                type: String,
                enum: [
                    "React", "Angular", "Vue.js", "jQuery", "Lodash", "Express",
                    "Django", "Flask", "NumPy", "Pandas", "Matplotlib", "TensorFlow",
                    "PyTorch", "Keras", "Scikit-learn", "BeautifulSoup", "Requests",
                    "FastAPI", "Next.js", "Tailwind CSS", "Bootstrap", "Axios",
                    "Redux", "Socket.IO", "Three.js", "Chart.js", "Moment.js",
                    "Prisma", "PostgreSQL", "Firebase"
                ],
            },
        ],
        developerTools: [
            {
                type: String,
                enum: [
                    'Visual Studio Code', 'Git', 'Docker', 'Jenkins', 'Jira',
                ],
            },
        ],
    },
});

// Projects Schema
const projectsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign key
    projectName: { type: String, required: true },
    description: { type: String, required: true , maxlength: 500},
    link: { type: String }, 
});

// Models
const User = mongoose.model('User', userSchema);
const EducationAndSkills = mongoose.model('EducationAndSkills', educationAndSkillsSchema);
const Projects = mongoose.model('Projects', projectsSchema);

module.exports = { User, EducationAndSkills, Projects };
