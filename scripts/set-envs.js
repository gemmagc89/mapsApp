const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  maplibre_key: "${ process.env['MAPLIBRE_KEY'] }",
  maptiler_key: "${ process.env['MAPTILER_KEY'] }",
};
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync(targetPath, envFileContent);


