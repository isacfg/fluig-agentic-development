const fs = require('fs');
const readline = require('readline');

function splitSqlValues(str) {
    let vals = [];
    let current = '';
    let inString = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "'") {
            inString = !inString;
            current += str[i]; // keeping the quote temporarily
        } else if (str[i] === ',' && !inString) {
            vals.push(current.trim());
            current = '';
        } else {
            current += str[i];
        }
    }
    vals.push(current.trim());
    // remove enclosing N'...' or '...'
    return vals.map(v => {
        let val = v;
        if (val.startsWith("N'")) {
            val = val.substring(2);
            if (val.endsWith("'")) val = val.substring(0, val.length - 1);
        } else if (val.startsWith("'")) {
            val = val.substring(1);
            if (val.endsWith("'")) val = val.substring(0, val.length - 1);
        }
        return val;
    });
}

async function processGLINKSREL(inputFile, outputFile) {
    console.log(`Processing ${inputFile}...`);
    const fileStream = fs.createReadStream(inputFile);
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
    const outStream = fs.createWriteStream(outputFile);

    for await (const line of rl) {
        const match = line.match(/insert into [A-Za-z0-9_.]+\s*\(([^)]+)\)\s*values\s*\((.+)\);/i);
        if (match) {
            const cols = match[1].split(',').map(c => c.trim());
            const vals = splitSqlValues(match[2]);
            
            let obj = {};
            cols.forEach((col, idx) => {
                obj[col] = vals[idx];
            });

            outStream.write(`### Relação: ${obj.MASTERTABLE || 'N/A'} -> ${obj.CHILDTABLE || 'N/A'}\n`);
            outStream.write(`- **Tabela Mestre:** ${obj.MASTERTABLE || 'Vazio'}\n`);
            outStream.write(`- **Tabela Filha:** ${obj.CHILDTABLE}\n`);
            outStream.write(`- **Campo Mestre:** ${obj.MASTERFIELD}\n`);
            outStream.write(`- **Campo Filho:** ${obj.CHILDFIELD}\n\n`);
        }
    }
    outStream.end();
    console.log(`Done processing ${inputFile}`);
}

async function processGDIC(inputFile, outputFile) {
    console.log(`Processing ${inputFile}...`);
    const fileStream = fs.createReadStream(inputFile);
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
    const outStream = fs.createWriteStream(outputFile);

    for await (const line of rl) {
        const match = line.match(/insert into [A-Za-z0-9_.]+\s*\(([^)]+)\)\s*values\s*\((.+)\);/i);
        if (match) {
            const cols = match[1].split(',').map(c => c.trim());
            const vals = splitSqlValues(match[2]);
            
            let obj = {};
            cols.forEach((col, idx) => {
                obj[col] = vals[idx];
            });

            if (obj.COLUNA === '#') {
                outStream.write(`## Tabela: ${obj.TABELA}\n`);
                outStream.write(`- **Descrição Geral:** ${obj.DESCRICAO}\n`);
                outStream.write(`- **Aplicações:** ${obj.APLICACOES}\n\n`);
            } else {
                outStream.write(`### Coluna: ${obj.COLUNA} (Tabela: ${obj.TABELA})\n`);
                outStream.write(`- **Descrição:** ${obj.DESCRICAO}\n`);
                outStream.write(`- **Aplicações:** ${obj.APLICACOES}\n\n`);
            }
        }
    }
    outStream.end();
    console.log(`Done processing ${inputFile}`);
}

async function main() {
    await processGLINKSREL('GLINKSREL.sql', 'GLINKSREL.md');
    await processGDIC('GDIC.sql', 'GDIC.md');
}

main().catch(console.error);
