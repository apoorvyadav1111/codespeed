import { NextApiRequest, NextApiResponse } from 'next';

// get random file from data folder
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const fs = require('fs');
    const path = require('path');
    const { folder } = req.query;
    const dir = path.join(process.cwd(), 'data', folder);
    const files = fs.readdirSync(dir);
    const randomFile = files[Math.floor(Math.random() * files.length)];
    const file = fs.readFileSync(path.join(dir, randomFile), 'utf-8');
    res.status(200).json({ code: file });
};