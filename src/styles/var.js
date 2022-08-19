import fs from 'fs';
import lessToJs from 'less-vars-to-js';
import path from 'path';

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './var.less'), 'utf8'));

export default themeVariables;
