/**************************************************************\
 * This scripts generates and updates the Typescript models   *
 * from the current gridscale Open API specification          *
 *                                                            *
 * Usage: run it with node >=14.14 and it does everything     *
 * for you!                                                   *
 * Find the result in src/src/Objects/model                   *
\**************************************************************/

const http = require('https');
const fs = require('fs');
const jsYaml = require('js-yaml');
const OpenAPI = require('openapi-typescript-codegen');

const specFile = __dirname + '/spec.yaml';
const specUrl = "https://gridscale.io/en/api-documentation/spec.yaml";
const distDir = __dirname + '/../src/Specs';

// first download the current API Spec
const file = fs.createWriteStream(specFile);
console.log('Downloading '+ specUrl + ' ...');
http.get(specUrl, function (response) {
    response.pipe(file);
    file.on('finish', function () {
        console.log('Download finished, generating ...');
        // cleanly close the file on finish...
        file.close(() => {

            // read in the yaml file (yes, the openAPI lib can also parse yaml but we want to fix a thing)
            const yaml = jsYaml.load(fs.readFileSync(specFile, 'utf8'));
            if (yaml.definitions) {
                // add a `type`="object" property to the definitions that have no type
                for (var x in yaml.definitions) {
                    if (yaml.definitions.hasOwnProperty(x)) {
                        if (yaml.definitions[x].type === undefined) {
                            yaml.definitions[x].type = 'object';
                        } 
                    }
                }
            }
            

            // clean the dist dir
            fs.rmSync(distDir, { recursive: true });


            // ...then generate the types
            OpenAPI.generate({
                exportModels: true,
                exportSchemas: true,
                exportCore: false,
                exportServices: false,
                input: yaml,
                output: distDir,
            }).then(() => {
                console.log('Done!');
            });
            
        });
    });
}).on('error', function (err) { // Handle errors
    fs.unlink(specFile); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
});



