import fs from 'fs/promises';
import path from 'path';

const searchRegex = /Multi\s?Upload(er|s)?/g;
const replacement = 'MultiPost';
const directoriesToSearch = ['src', 'server', 'public'];
const specificFiles = ['index.html', 'package.json', 'package-lock.json', 'README.md'];

async function walkDir(dir) {
    let results = [];
    try {
        const list = await fs.readdir(dir);
        for (const file of list) {
            const filePath = path.join(dir, file);
            const stat = await fs.stat(filePath);
            if (stat && stat.isDirectory()) {
                if (file !== 'node_modules' && file !== '.git') {
                    results = results.concat(await walkDir(filePath));
                }
            } else {
                if (filePath.match(/\.(js|jsx|ts|tsx|json|html|md|webmanifest)$/)) {
                    results.push(filePath);
                }
            }
        }
    } catch (e) {
        console.error(`Error reading ${dir}`, e);
    }
    return results;
}

async function processFiles() {
    let files = [];
    for (const file of specificFiles) {
        try {
            await fs.access(file);
            files.push(file);
        } catch (e) { } // Ignore if not exists
    }
    
    for (const dir of directoriesToSearch) {
        try {
            await fs.access(dir);
            files = files.concat(await walkDir(dir));
        } catch (e) {} // Ignore if not exists
    }

    const uniqueFiles = [...new Set(files)];
    
    for (const file of uniqueFiles) {
        const content = await fs.readFile(file, 'utf8');
        if (content.match(searchRegex)) {
            const newContent = content.replace(searchRegex, replacement);
            await fs.writeFile(file, newContent, 'utf8');
            console.log(`Updated: ${file}`);
        }
    }
}

processFiles().then(() => console.log('Rename complete.')).catch(console.error);
