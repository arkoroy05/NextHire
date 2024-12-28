const mongoose = require('mongoose');

mongoose.connect('uri goes here')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    education: [{
        level: [{
            type: String,
            enum: ['highschool', 'college', 'bachelor', 'master', 'phd'],   
        }],
        instituteName: String,
        CGPA: String
    }],
    languages:[
        {
            type:String,
            required:true,
            enum:[
                "JavaScript",
                "Python",
                "Java",
                "C#",
                "C++",
                "Ruby",
                "PHP",
                "TypeScript",
                "Swift",
                "Kotlin",
                "Go",
                "Rust",
                "Dart",
                "Scala",
                "R",
                "SQL",
                "Perl",
                "MATLAB",
                "Shell",
                "Lua",
                "Groovy",
                "Haskell",
                "Elixir",
                "Julia",
                "F#",
                "Objective-C",
                "Visual Basic",
                "Assembly",
                "COBOL",
                "Fortran"
              ]
        }
    ],
    frameworks:[
        {
            type:String,
            required:true,
            enum:[
                "JavaScript",
                "Python",
                "Java",
                "C#",
                "C++",
                "Ruby",
                "PHP",
                "TypeScript",
                "Swift",
                "Kotlin",
                "Go",
                "Rust",
                "Dart",
                "Scala",
                "R",
                "SQL",
                "Perl",
                "MATLAB",
                "Shell",
                "Lua",
                "Groovy",
                "Haskell",
                "Elixir",
                "Julia",
                "F#",
                "Objective-C",
                "Visual Basic",
                "Assembly",
                "COBOL",
                "Fortran"
              ]
        }
    ],
    libraries:[
        {
            type:String,
            required:true,
            enum:  [
                "React",
                "Angular",
                "Vue.js",
                "Svelte",
                "Next.js",
                "Nuxt.js",
                "Express",
                "Django",
                "Flask",
                "FastAPI",
                "Ruby on Rails",
                "Spring Boot",
                "Laravel",
                "ASP.NET Core",
                "Meteor",
                "Ember.js",
                "Backbone.js",
                "Symfony",
                "CakePHP",
                "CodeIgniter",
                "Play Framework",
                "Koa",
                "Gin",
                "Phoenix",
                "Hapi.js",
                "Gatsby",
                "Gridsome",
                "Electron",
                "Quasar",
                "Ionic"
              ]
        }
    ]   

})
