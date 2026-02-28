import fs from 'fs';
import path from 'path';
import https from 'https';

const RESOURCE_ID = '39f455bf-6db0-4926-859d-017f34eacbcb'; // A dataset ID as an example
const URL = `https://data.gov.il/api/3/action/datastore_search?resource_id=${RESOURCE_ID}&limit=100`;

function fetchData() {
    return new Promise((resolve, reject) => {
        https.get(URL, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    try {
        console.log('Fetching sample data from data.gov.il...');
        const data = await fetchData();

        // We expect { result: { records: [...] } }
        const records = data?.result?.records || [];

        const outputPath = path.join(process.cwd(), 'data', 'imports_sample.json');
        fs.writeFileSync(outputPath, JSON.stringify(records, null, 2), 'utf8');

        console.log(`Successfully wrote ${records.length} records to data/imports_sample.json`);
    } catch (error) {
        console.error('Error fetching data:', error);
        process.exit(1);
    }
}

main().catch(console.error);
