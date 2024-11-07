// Reading asynchronously form the file
import { readFile } from 'fs/promises';

const data = await readFile('document.txt', 'utf-8');
console.log(data);
