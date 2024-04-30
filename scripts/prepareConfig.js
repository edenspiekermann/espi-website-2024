const fs = require('fs');
const dotenv = require('dotenv');

const path = require('path');
const result = dotenv.config({ path: path.join(__dirname, '../.env.local') });

if(result.error) {
  throw result.error;
}

const template = fs.readFileSync('graphql.config.yml', 'utf8');
const output = template.replace('$DATO_TOKEN', process.env.DATO_TOKEN);

if (output.includes(process.env.DATO_TOKEN)) {
    console.log('Token replaced in yml file!');
} else {
    console.log('Token replacement failed.');
}


fs.writeFileSync('config.yml', output);
