import { NextApiRequest, NextApiResponse } from 'next';

const lang2folder: {[key:string]:string}= {
    "C++": "cpp",
    "Python": "python",
    "Java": "java",
    "JavaScript": "javascript",
    "C#": "csharp",
    "PHP": "php",
    "Ruby": "ruby",
    "Swift": "swift",
    "Go": "go",
    "Rust": "rust",
    "C": "c",
}
// get random file from data folder
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const fs = require('fs');
    const path = require('path');
    const { folder } = req.query;
    
    const lang = folder as string;
    console.log(lang);
    if (!lang2folder[lang]) {
        res.status(400).json({ error: 'Invalid language' });
        return;
    }
    const lang_folder = lang2folder[lang];
    const dir = path.join(process.cwd(), 'data', lang_folder);
    const files = fs.readdirSync(dir);
    const randomFile = files[Math.floor(Math.random() * files.length)];
    const file = fs.readFileSync(path.join(dir, randomFile), 'utf-8');
    res.status(200).json({ code: file });
};