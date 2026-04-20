const fs = require('fs');
const readline = require('readline');

async function processFile(inputFile, outputFile) {
    console.log(`Processing ${inputFile}...`);
    const fileStream = fs.createReadStream(inputFile);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const outStream = fs.createWriteStream(outputFile);
    let isFirstLine = true;

    for await (const line of rl) {
        // Simple regex to match "insert into table (cols) values (vals);"
        const match = line.match(/insert into [A-Za-z0-9_.]+\s*\(([^)]+)\)\s*values\s*\((.+)\);/i);
        
        if (match) {
            const cols = match[1].split(',').map(c => c.trim());
            
            // A super simple parser for values (assumes no complex strings with commas/parentheses)
            // A robust one would handle escaped characters, but assuming standard dump format:
            // Since splitting by comma is hard for values that have commas inside strings, we can 
            // use a regex to extract values correctly. Wait, simpler approach: just take original text for now.
            // Let's just output it as raw row for now, or just the values.
            
            if (isFirstLine) {
                outStream.write('| ' + cols.join(' | ') + ' |\n');
                outStream.write('| ' + cols.map(() => '---').join(' | ') + ' |\n');
                isFirstLine = false;
            }
            
            // To handle simple SQL dumps we can try to split values without complex regex
            let valsStr = match[2];
            // Just replace N'...' with '...' and split by comma approx.
            // For a basic MD table, we might just put the raw `valsStr` if parsing is too complex
            // Let's just do a basic split for now
            let vals = [];
            let inString = false;
            let currentVal = '';
            for(let i=0; i<valsStr.length; i++) {
                if(valsStr[i] === "'") {
                    inString = !inString;
                }
                if(valsStr[i] === ',' && !inString) {
                    vals.push(currentVal.trim());
                    currentVal = '';
                } else {
                    currentVal += valsStr[i];
                }
            }
            vals.push(currentVal.trim());
            
            outStream.write('| ' + vals.join(' | ') + ' |\n');
        }
    }
    
    outStream.end();
    console.log(`Done processing ${inputFile}`);
}

async function main() {
    await processFile('GDIC.sql', 'GDIC.md');
    await processFile('GLINKSREL.sql', 'GLINKSREL.md');
}

main().catch(console.error);
