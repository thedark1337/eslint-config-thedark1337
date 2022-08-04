'use strict';

const { ESLint } = require('eslint');
const { readdirSync } = require('fs');
const path = require('path');
const eslint = new ESLint();

function getFiles(folders, extension) {
    const result = [];

    for (let i = 0; i < folders.length; i++) {
        readdirSync(folders[i]).forEach((item) => {
            if (path.extname(item) === extension) {
                result.push(path.resolve(`${folders[i]}/${item}`));
            }
        });
    }

    return result;
}

describe('Linting Files', () => {
    const files = getFiles(['./', './test'], '.js');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        it(`Should not have errors in ${file}`, async () => {
            const report = await eslint.lintFiles([file]);
            const formatter = await eslint.loadFormatter();

            if (report && report.length === 1 && report[0].errorCount > 0) {
                throw new Error(formatter.format(report));
            }

            return true;
        });
    }
});

