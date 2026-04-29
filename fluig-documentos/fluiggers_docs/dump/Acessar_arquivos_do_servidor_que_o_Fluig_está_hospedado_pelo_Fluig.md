# Acessar arquivos do servidor que o Fluig está hospedado pelo Fluig

> **Fonte:** [https://fluiggers.com.br/t/acessar-arquivos-do-servidor-que-o-fluig-esta-hospedado-pelo-fluig/3412](https://fluiggers.com.br/t/acessar-arquivos-do-servidor-que-o-fluig-esta-hospedado-pelo-fluig/3412)
> **Categoria:** ECM / GED
> **Criado em:** 11/09/2025, 13:57
> **Visualizações:** 43 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Pietro** (@pietro) — 11/09/2025, 13:57

Boa tarde pessoal, tudo certo?

Tenho um caso aqui em que preciso de dados de outro serviço, mas esse serviço não tem acesso por API, e comumente ele fornece informação para outros por pastas compartilhadas.

Pensei em, via Samba (meu fluig esta no linux) compartilhar uma pasta minha com esse serviço e ler os dados dessa pasta para pegar os arquivos que ele me enviar, teria alguma forma padrão da plataforma?

Testei manualmente editar um arquivo do proprio volume e devolve erro que o arquivo foi editado externamente, acredito que não seria o ideal manter esse método.

Acredito que via Java (dataset) teria como, mas gostaria de ver se já não existe algo do gênero antes de criar do zero.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/09/2025, 15:57 | ❤️ 1

O Fluig salva um CRC pra saber se o arquivo foi modificado, então se alterar externamente dá esse problema mesmo.

Nesse [Post](https://fluiggers.com.br/t/erro-de-documento-modificado-externamente-ao-fluig/1441/2) comentam sobre isso. Que basta editar as propriedades do arquivo, via API mesmo, que o Fluig já recalcula o CRC.

Mas se o seu outro serviço não consegue executar a API terá uma dificuldade com isso.

---

## Resposta #2

**Pietro** (@pietro) — 12/09/2025, 08:28

Bom dia,

Acabei fazendo um dataset usando [java.io](http://java.io) e java.nio, vou deixar aqui caso alguém tenha utilidade um dia, a formatação é pra XLS e XLSX, não testei com outros arquivos, mas a base de leitura é até a linha 52 ‘newInputStream’, após isso é só formatar como precisar.

Só precisa rever as regras perante o seu ambiente, tem algumas regras do meu servidor ali dentro, ai quem for usar precisa retirar.

[dsGetArchiveInServer.js](https://fluiggers.com.br/uploads/short-url/yEaPHaYTDsngJd4g0kJrgeii8DL.js) (5,3,KB)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/09/2025, 09:44 | ❤️ 1

[@pietro](/u/pietro), Infelizmente o arquivo não ficou acessível. Acho que tá com algum problema de permissão no fórum.

Uma coisa legal desse fórum é que dá pra postar o código direto no post e deixar formatado.

Basta colocar o código entre “cercas” que indicam a linguagem. No caso do JS é só clicar no botão de fences e escrever o código dentro da demarcação.

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d279ebe8bff0f7d17a1e6b1dc000d2ce581bff10.png)

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Pietro** (@pietro) — 12/09/2025, 14:47 | ❤️ 1

To ligado, é MD, mas achei que tava ok só o arquivo, foi por praticidade mesmo kkkk.

Segue o código ai, caso alguém queria usar/adaptar.

```javascript
/**
 * Dataset: ds_le_xls_arquivo
 * Lê um arquivo Excel (XLS/XLSX) do filesystem (somente caminhos sob /opt/).
 *
 * Constraint
 *  - caminho: caminho absoluto do arquivo, ex.: /opt/fluig_bi/testes/planilha.xlsx
 *
 * Observações:
 *  - Ignora linhas totalmente vazias após o cabeçalho.
 *  - Se ter cabeçalhos vazios, gera nomes "col1", "col2"
 *  - Se ter cabeçalhos repetidos, torna-os únicos adicionando sufixos _2, _3...
 */

function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();

    try {
        var Files = Packages.java.nio.file.Files;
        var Paths = Packages.java.nio.file.Paths;
        var StandardOpenOption = Packages.java.nio.file.StandardOpenOption;
        var WorkbookFactory = Packages.org.apache.poi.ss.usermodel.WorkbookFactory;
        var DataFormatter = Packages.org.apache.poi.ss.usermodel.DataFormatter;
        var Locale = Packages.java.util.Locale;

        // -------- utils --------
        function getConstraint(name) {
            if (!constraints) return null;
            for (var i = 0; i < constraints.length; i++) {
                if (String(constraints[i].fieldName) === String(name)) {
                    return String(constraints[i].initialValue);
                }
            }
            return null;
        }

        function assert(cond, msg) { if (!cond) throw msg; }

        // -------- ler constraint / validar caminho --------
        var caminho = getConstraint("caminho");

        assert(caminho && caminho.length > 0, "Informe a constraint obrigatória 'caminho'.");
        assert(caminho.indexOf("\u0000") < 0, "Caminho inválido.");
        assert(caminho.indexOf("..") < 0, "Caminho não pode conter '..'.");
        assert(caminho.indexOf("/opt/") === 0, "Por segurança, apenas caminhos sob /opt/ são permitidos.");

        var path = Paths.get(caminho);
        assert(Files.exists(path), "Arquivo não encontrado: " + caminho);
        assert(Files.isReadable(path), "Sem permissão de leitura no arquivo: " + caminho);

        // -------- abrir workbook --------
        var is = Files.newInputStream(path, StandardOpenOption.READ);
        var wb = null;
        try {
            wb = WorkbookFactory.create(is); // detecta xls/xlsx
        } catch (e) {
            if (is) try { is.close(); } catch (ex) { }
            throw "Falha ao abrir arquivo como Excel (XLS/XLSX). Verifique o formato. Erro: " + e;
        } finally {
            try { if (is) is.close(); } catch (ex2) { }
        }

        var sheet = wb.getNumberOfSheets() > 0 ? wb.getSheetAt(0) : null;
        assert(sheet !== null, "Workbook sem abas (sheets).");

        // -------- formatter: converte qualquer tipo de célula em String "como exibido" --------
        var fmt = new DataFormatter(Locale.forLanguageTag("pt-BR"));

        // -------- localizar primeira linha (cabeçalho) --------
        var headerRow = sheet.getRow(sheet.getFirstRowNum());
        assert(headerRow !== null, "Planilha vazia: sem cabeçalho.");

        // extrair cabeçalhos
        var firstCell = headerRow.getFirstCellNum();
        var lastCell = headerRow.getLastCellNum();
        assert(lastCell > firstCell, "Cabeçalho sem colunas.");

        var headers = [];
        var seen = {}; // para evitar nomes duplicados
        var colIndexMap = []; // pos -> nome

        for (var c = firstCell; c < lastCell; c++) {
            var cell = headerRow.getCell(c);
            var raw = cell ? String(fmt.formatCellValue(cell)).trim() : "";
            var base = raw && raw.length ? String(raw) : ("col" + (c - firstCell + 1));
            var name = sanitizeColumnName(base);

            // tornar único se repetido
            if (seen[name]) {
                var k = 2;
                while (seen[name + "_" + k]) k++;
                name = name + "_" + k;
            }
            seen[name] = true;

            headers.push(name);
            colIndexMap.push(name);
        }
        log.info(headers.join(" | "))
        // criar colunas no dataset
        for (var i = 0; i < headers.length; i++) {

            ds.addColumn(headers[i]);
        }

        // -------- iterar linhas de dados --------
        var firstDataRowIdx = sheet.getFirstRowNum() + 1;
        var lastRowIdx = sheet.getLastRowNum();

        for (var r = firstDataRowIdx; r <= lastRowIdx; r++) {
            var row = sheet.getRow(r);
            if (row === null) continue;

            var allEmpty = true;
            var values = java.lang.reflect.Array.newInstance(java.lang.String, headers.length);

            for (var c2 = 0; c2 < headers.length; c2++) {
                var cell2 = row.getCell(c2);
                var val = cell2 ? String(fmt.formatCellValue(cell2)) : "";
                if (val && String(val).trim().length) allEmpty = false;
                values[c2] = val;
            }

            if (allEmpty) continue; // pula linha totalmente vazia
            ds.addRow(values);
        }

        // liberar workbook (POI) — ajuda GC
        try { wb.close(); } catch (ignore) { }


    } catch (error) {
        ds.addColumn('error');
        ds.addRow([error]);
    }
    return ds;
}

function sanitizeColumnName(name) {
    var Normalizer = Packages.java.text.Normalizer;
    try {
        if (name == null) return "null";
        var s = String(name);
        s = String(Normalizer.normalize(s, Normalizer.Form.NFD));
        s = s.replace(/[\u0300-\u036f]/g, "")
             .replace(/[^a-zA-Z0-9_]/g, "_")
             .replace(/_+/g, "_")
             .replace(/^_+|_+$/g, "")
             .toLowerCase();

        return s.length ? s : "col";
    } catch (error) {
        log.error("Erro ao normalizar cabeçalho: " + error);
        var f = String(name || "col")
            .replace(/[^\x00-\x7F]/g, "")
            .replace(/[^a-zA-Z0-9_]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_+|_+$/g, "")
            .toLowerCase();

        return f.length ? f : "col";
    }
}
```

---
