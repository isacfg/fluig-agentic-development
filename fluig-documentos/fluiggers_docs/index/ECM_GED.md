# ECM_GED

> **50 tópicos**

---

## Sumário

- [API - Fazer upload de vídeo](#api-fazer-upload-de-vdeo)
- [Acessar arquivos do servidor que o Fluig está hospedado pelo Fluig](#acessar-arquivos-do-servidor-que-o-fluig-est-hospedado-pelo-fluig)
- [Acesso Externo a Pasta](#acesso-externo-a-pasta)
- [Attachment fluig](#attachment-fluig)
- [Atualizar pastas do GED via webservices](#atualizar-pastas-do-ged-via-webservices)
- [Autorização no upload de pastas](#autorizao-no-upload-de-pastas)
- [BPM e ECM Onde ficam os documentos criados nos processos?](#bpm-e-ecm-onde-ficam-os-documentos-criados-nos-processos)
- [Backup Arquivos ECM](#backup-arquivos-ecm)
- [Carregamento de Campos de formulário](#carregamento-de-campos-de-formulrio)
- [Carregando documento do Form para uma pasta no GED (ECM)](#carregando-documento-do-form-para-uma-pasta-no-ged-ecm)
- [Chamada a API REST ao concluir preenchimento de form](#chamada-a-api-rest-ao-concluir-preenchimento-de-form)
- [Como alterar o rótulo da linha do documento](#como-alterar-o-rtulo-da-linha-do-documento)
- [Como armar un ifreme de una carpeta de documentos sin que aparezca el menu](#como-armar-un-ifreme-de-una-carpeta-de-documentos-sin-que-aparezca-el-menu)
- [Como configurar metadados](#como-configurar-metadados)
- [Como descompactar arquivo .zip e salvar no GED](#como-descompactar-arquivo-zip-e-salvar-no-ged)
- [Conversor de vídeo automático](#conversor-de-vdeo-automtico)
- [Converter buffer de arquivo para base64 com Java](#converter-buffer-de-arquivo-para-base64-com-java)
- [Copiar uma pasta dentro de Formularios do Fluig para outro servidor](#copiar-uma-pasta-dentro-de-formularios-do-fluig-para-outro-servidor)
- [Criando documento com docAPI, e setando ExpirationDate](#criando-documento-com-docapi-e-setando-expirationdate)
- [Dataset Customizado sem permissão para consultar Dataset Interno](#dataset-customizado-sem-permisso-para-consultar-dataset-interno)
- ["Diretório de publicação não pode ser criado" ao publicar via RM usando FTP](#diretrio-de-publicao-no-pode-ser-criado-ao-publicar-via-rm-usando-ftp)
- [Duvidas Processo documentos](#duvidas-processo-documentos)
- [ECM - Mudar versão de documentos](#ecm-mudar-verso-de-documentos)
- [ECM / BPM Documentos sumidos](#ecm-bpm-documentos-sumidos)
- [Editar a descrição de documentos](#editar-a-descrio-de-documentos)
- [Erro "Documento inexistente ou permissão insuficiente"](#erro-documento-inexistente-ou-permisso-insuficiente)
- [Erro de "Documento modificado externamente ao Fluig"](#erro-de-documento-modificado-externamente-ao-fluig)
- [Expiração de Documentos - Alteração Global](#expirao-de-documentos-alterao-global)
- [FLUIG- Política de Uso - LGP](#fluig-poltica-de-uso-lgp)
- [FLUIG ECM - Dúvida sobre arquivos](#fluig-ecm-dvida-sobre-arquivos)
- [GED e id de documentos](#ged-e-id-de-documentos)
- [Gereando mais de uma versao ativa de documentos](#gereando-mais-de-uma-versao-ativa-de-documentos)
- [Ler arquivo em formulário](#ler-arquivo-em-formulrio)
- [Log customizado de usuário](#log-customizado-de-usurio)
- [Permissão de alteração de documento](#permisso-de-alterao-de-documento)
- [Permissão dinâmica de grupos a documentos do GED](#permisso-dinmica-de-grupos-a-documentos-do-ged)
- [Permissões ECM - Permissão de modificação](#permisses-ecm-permisso-de-modificao)
- [Permissões em pastas](#permisses-em-pastas)
- [Recuperando o caminho de um documento no GED ou anexo ao processo](#recuperando-o-caminho-de-um-documento-no-ged-ou-anexo-ao-processo)
- [Refletindo informações do protheus para o Fluig via dataset](#refletindo-informaes-do-protheus-para-o-fluig-via-dataset)
- [Relatório de Acesso aos arquivos](#relatrio-de-acesso-aos-arquivos)
- [Remover mensagem de ERRO](#remover-mensagem-de-erro)
- [Salvar relatórios do RM dentro do GED de forma automática](#salvar-relatrios-do-rm-dentro-do-ged-de-forma-automtica)
- [Será que o problema é o endereço que aparece no Fakepath?](#ser-que-o-problema-o-endereo-que-aparece-no-fakepath)
- [Sobre a categoria ECM / GED](#sobre-a-categoria-ecm-ged)
- [Subprocesso com campo pai X filho](#subprocesso-com-campo-pai-x-filho)
- [Upload cancelado](#upload-cancelado)
- [Usuário sem permissão para visualizar este documento](#usurio-sem-permisso-para-visualizar-este-documento)
- [Vizualizar arquivo ECM Fluig](#vizualizar-arquivo-ecm-fluig)
- [docApi + attachments](#docapi-attachments)

---

# API - Fazer upload de vídeo

> **Fonte:** [https://fluiggers.com.br/t/api-fazer-upload-de-video/2555](https://fluiggers.com.br/t/api-fazer-upload-de-video/2555)
> **Categoria:** ECM / GED
> **Criado em:** 02/02/2024, 11:38
> **Visualizações:** 166 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Hector** (@honetto) — 02/02/2024, 11:38

Olá a todos.
Estou tendo um problema ao tentar carregar um vídeo por meio da API.
Tenho uma função encarregada de carregar e publicar arquivos, que funciona bem com imagens e arquivos de texto, mas, ao tentar carregar vídeos, retorna o erro: Can’t create an ImageOutputStream
Esta é a minha função:
var uploadUrl = ‘[https://serverName/content-management/api/v2/documents/upload/](https://serverName/content-management/api/v2/documents/upload/)’ + fileName + ‘/’ + 847 + ‘/publish’;

Se você tiver alguma recomendação sobre como lidar com arquivos de vídeo, eu agradeceria.

Muito obrigado.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 02/02/2024, 13:29

Boa tarde,

Tem uma postagem minha que falo de um conversor de videos que fiz pego um video que fou publicado no fluig altero ele devolvo ao fluig. pode te dar algum norte. Procura no forum esse artigo

---

---

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

---

# Acesso Externo a Pasta

> **Fonte:** [https://fluiggers.com.br/t/acesso-externo-a-pasta/1148](https://fluiggers.com.br/t/acesso-externo-a-pasta/1148)
> **Categoria:** ECM / GED
> **Criado em:** 21/06/2022, 16:35
> **Visualizações:** 430 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 21/06/2022, 16:35 | ❤️ 1

Olá Pessoal, Boa Tarde
Tudo Bem?

Há alguma maneira de eu dar acesso externo a uma pessoa em uma pasta do FLUIG? É que eu preciso dar acesso ao nosso escritório externo de contabilidade

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 28/06/2022, 17:22 | ❤️ 1

Olá [@daniela.troggian](/u/daniela.troggian)

Tu pode utilizar o FTP do Fluig.
[https://tdn.totvs.com/display/public/fluig/Utilizando+o+protocolo+FTP+na+plataforma](https://tdn.totvs.com/display/public/fluig/Utilizando+o+protocolo+FTP+na+plataforma)

---

---

# Attachment fluig

> **Fonte:** [https://fluiggers.com.br/t/attachment-fluig/3176](https://fluiggers.com.br/t/attachment-fluig/3176)
> **Categoria:** ECM / GED
> **Tags:** `processo`, `ecm`
> **Criado em:** 26/02/2025, 09:03
> **Visualizações:** 40 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Silva** (@GuilhermeSilva) — 26/02/2025, 09:03

Bom dia galera, tudo certo?

eu preciso de algumas referências do uso do Attachment fluig.
Basicamente estou desenvolvendo um fluxo que consiste nesse exemplo:
RH Anexou documento, vai ser enviado para pasta de RH; Gestor Anexou documento, Vai para pasta de Gestor.

A documentação não tem muita coisa sobre o uso do Attachment, principalmente nesse contexto que estou desenvolvendo, alguém poderia me ajudar?

---

---

# Atualizar pastas do GED via webservices

> **Fonte:** [https://fluiggers.com.br/t/atualizar-pastas-do-ged-via-webservices/383](https://fluiggers.com.br/t/atualizar-pastas-do-ged-via-webservices/383)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`
> **Criado em:** 20/04/2021, 17:27
> **Visualizações:** 418 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Alexandre Pedro** (@Aline_Jaime) — 20/04/2021, 17:27

Boa tarde, pessoal!

Alguém sabe algum webservice ou api para atualizar pastas já criadas no GED ?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 21/04/2021, 12:15

Bom dia
[Api antiga do fluig](https://api.fluig.com./old/)

---

---

# Autorização no upload de pastas

> **Fonte:** [https://fluiggers.com.br/t/autorizacao-no-upload-de-pastas/519](https://fluiggers.com.br/t/autorizacao-no-upload-de-pastas/519)
> **Categoria:** ECM / GED
> **Criado em:** 17/06/2021, 16:13
> **Visualizações:** 345 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Marcelo** (@MHPA23) — 17/06/2021, 16:13

Olá a todos!

Estou com uma dúvida e espero que alguém compartilhe esse conhecimento. Eu preciso saber se há alguma forma de fazer o upload de uma pasta passar por aprovação, ou não deixar o upload ser feito, pois preciso que todos os arquivos passem por aprovação.

Tenho um conhecimento médio em código, então caso tenha alguma solução com JavaScript, aceito de braços abertos.

---

---

# BPM e ECM Onde ficam os documentos criados nos processos?

> **Fonte:** [https://fluiggers.com.br/t/bpm-e-ecm-onde-ficam-os-documentos-criados-nos-processos/905](https://fluiggers.com.br/t/bpm-e-ecm-onde-ficam-os-documentos-criados-nos-processos/905)
> **Categoria:** ECM / GED
> **Criado em:** 02/02/2022, 10:11
> **Visualizações:** 945 | **Likes:** 7 | **Respostas:** 4

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 02/02/2022, 10:11

Pergunta de iniciante mesmo! Onde ficam os documentos gerados por formulários de processos? Eu imaginava que ficava na pasta Volume, dentro de Forms, ou Public, mas acabei de criar um documento via processos com etapas de aprovação e não encontrei, pela numeração, em lugar nenhum da árvore.

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 03/02/2022, 15:23 | ❤️ 1

Eu faço isso em um fluxo que precisa ser carimbado de forma digital, o caminho é:
C:empresas{nomedaempresa}{iddodocumento}{versao}\\arquivo.pdf
A versão do arquivo e o id dele tem nos detalhes do documento. Se quiser fazer isso por dataset tem uma função que recupera os arquivos de forma dinamica:

```auto
var resultadoArquivos = parent.ECM.workflowView.attachments;
var arquivos = [];

for (var i = 0; i < resultadoArquivos.values.length; i++) {
		arquivos.push('file:///D:/EMPRESAS/NOME_EMPRESA/public/' + resultadoArquivos.values[i].NR_DOCUMENTO + '/' + resultadoArquivos.values[i].NR_VERSAO + '/' + resultadoArquivos.values[i].NM_ARQUIVO_FISICO);
	}
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 04/02/2022, 07:49 | ❤️ 1

Caro [@mauriciolanner](/u/mauriciolanner) , obrigado por sua resposta.
Eu, via código, listo os documentos.
Sem código, vejo na pasta Documentos.

Mas, minha curiosidade é saber onde ficam fisicamente os arquivos, anexos, etc.
Pensei que estivessem em Volume, como dito, mas já vi que não é.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2022, 09:25 | ❤️ 2

Depende…

Se você está falando dos documentos gerados que são os formulários (afinal no GED eles são tratados como documentos) então fica no banco de dados, afinal são só os dados.

Já os arquivos físicos enviados como Anexo ficam no Volume configurado no seu Fluig.

Ao menos aqui na empresa nós criamos o Volume do Fluig em E:\\fluig. Então para chegar aos arquivos físicos é só ir em E:\\fluig\\public e então seguir como o [@mauriciolanner](/u/mauriciolanner) indicou, \\nr\_documento\\versao\\nome\_arquivo

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 04/02/2022, 11:38 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) saberia me dizer em qual tabela ficaria o registro dos documentos criados por Processos?

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Mauricio Freitas** (@mauriciolanner) — 04/02/2022, 12:49 | ❤️ 1

eu busco por esse select
`select D.NM_ARQUIVO_FISICO, A.NR_DOCUMENTO, D.NR_VERSAO from ANEXO_PROCES as A join DOCUMENTO as D on A.NR_DOCUMENTO = D.NR_DOCUMENTO where A.NUM_PROCES =`

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 04/02/2022, 12:55 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mauriciolanner/48/664_2.png) mauriciolanner:
>
> > select D.NM\_ARQUIVO\_FISICO, A.NR\_DOCUMENTO, D.NR\_VERSAO from ANEXO\_PROCES as A join DOCUMENTO as D on A.NR\_DOCUMENTO = D.NR\_DOCUMENTO where A.NUM\_PROCES =

Obrigado, [@mauriciolanner](/u/mauriciolanner)

---

---

# Backup Arquivos ECM

> **Fonte:** [https://fluiggers.com.br/t/backup-arquivos-ecm/1072](https://fluiggers.com.br/t/backup-arquivos-ecm/1072)
> **Categoria:** ECM / GED
> **Criado em:** 09/05/2022, 13:34
> **Visualizações:** 806 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Daniela** (@daniela.troggian) — 09/05/2022, 13:34

Pessoal, Bom Dia:
Tudo bem?
Gostaria de saber se vocês sabem como funciona o backup do Fluig em relação a arquivos e pastas do ECM.
Sei que há a lixeira e que nela podemos definir quanto tempo os arquivos poderão ficar lá
e que ela pode ser bloqueada para que o usuário não tenha acesso
Porém a dúvida é: a única forma de se restaurar um arquivo ou pasta é a lixeira, correto?
Ou há alguma outra forma de se ter backup?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 10/05/2022, 13:40 | ❤️ 1

Olá [@daniela.troggian](/u/daniela.troggian)

Fluig não possui ferramentas de backup, a lixeira faz parte do CARD de GED/ECM, geralmente os clientes removem a permissão de acesso a lixeira dos usuários deixando ela disponível apenas para usuários administradores, podendo restaurar documentos apagados de forma equivocada por usuários de forma rápida e fácil.
Caso eu apague um documento da lixeira, eu consigo restaurar um BACKUP do mesmo?
A resposta pode ser SIM e NÃO.
Uma fez que estarei trabalhando com backups da aplicação, onde se faz necessário realizar um restore (restaurar um back-up) do banco de dados da aplicação Fluig no momento em que o documento ainda permanecia publicado no GED/ECM ou na Lixeira além do Restore do diretório Volume esse responsável por armazenar os arquivos dos documentos publicados.
Esse restore pode impactar em outras operações realizadas durante o período pós eliminação.

Espero ter ajudado.

---

## Resposta #2

**Daniela** (@daniela.troggian) — 10/05/2022, 16:38

Oi:

Obrigado Igor. É que esta questão é uma solicitação do meu departamento de infraestrutura. Eles tem receio de que o arquivo seja apagado da lixeira e gostariam uma forma de fazer backup da lixeira inteira, como se fosse um backup incremental. Pelo o que eu entendi a forma de se recuperar é via banco então.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 19/05/2022, 12:43

[@daniela.troggian](/u/daniela.troggian)

Via banco e via backup da pasta VOLUME, geralmente os clientes habilitam um recursos chamado SHADOW COPY nesta pasta utilizada para armazenar o que chamamos de VOLUME da aplicação Fluig, o VOLUME armazena todo os documentos que a partir de relacionamentos com o banco de dados e a interface da plataforma são publicados ou consultados nesse diretório.

Vale fazer uma leitura dos 2 links abaixo

[https://tdn.totvs.com/pages/releaseview.action?pageId=239019289](https://tdn.totvs.com/pages/releaseview.action?pageId=239019289)

[https://tdn.totvs.com/pages/releaseview.action?pageId=233766796](https://tdn.totvs.com/pages/releaseview.action?pageId=233766796)

---

---

# Carregamento de Campos de formulário

> **Fonte:** [https://fluiggers.com.br/t/carregamento-de-campos-de-formulario/3517](https://fluiggers.com.br/t/carregamento-de-campos-de-formulario/3517)
> **Categoria:** ECM / GED
> **Tags:** `form`
> **Criado em:** 05/12/2025, 17:12
> **Visualizações:** 26 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Giovanni Gustavo** (@Giovanni_Gustavo) — 05/12/2025, 17:12

![image](https://fluiggers.com.br/uploads/default/optimized/2X/1/17b61c437db43d4d480a97c297f395cf838c11db_2_690x146.png)

seleciono o formulário, porem, não aparece os campos.

alguem pode me ajudar.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 05/12/2025, 21:47

Olá [@Giovanni\_Gustavo](/u/giovanni_gustavo) podem ser varios fatores, versão do fluig, versão do plugin! coloque mais detalhes sobre a versao do seu ambiente, versão do seu plugin! tente baixar o eclipse portable feito pelo pessoal da comunidade Fluiggers

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png)
>
> [Download Eclipse Portable + Fluig Studio pronto para uso!](https://fluiggers.com.br/t/download-eclipse-portable-fluig-studio-pronto-para-uso/1119) [IDEs (Ferramentas de Desenvolvimento)](https://fluiggers.com.br/c/ides-ferramentas-de-desenvolvimento/16)
>
> > (Update 09/10/2024 - Versão atualizada com o último plugin do Fluig Studio) Salve, nação! Segue versão do eclipse Neon portable para download, já com JRE e plugin do Fluig: Opção 1 (torrent): [EclipsePortable.zip.torrent](https://fluiggers.com.br/uploads/short-url/miFiv3lmvLQVN5W3kmV5nvWCMcu.torrent) (39,7,KB) Opção 2 (onedrive) [EclipsePortable.zip](https://1drv.ms/u/s!ApXgDZkDc9BTgq60GWEHbwVGtloGUoQ?e=jZ2miM) Opção 3 (Google Drive) slight_smile

---

## Resposta #2

**Giovanni Gustavo** (@Giovanni_Gustavo) — 09/12/2025, 10:43

Bom dia, Deu certo, realmente era a versão do plugin!
baixei a versão 1.8.2.4
e funcionou normalmente.
Muito obrigado :right_facing_fist: :left_facing_fist:

---

---

# Carregando documento do Form para uma pasta no GED (ECM)

> **Fonte:** [https://fluiggers.com.br/t/carregando-documento-do-form-para-uma-pasta-no-ged-ecm/3260](https://fluiggers.com.br/t/carregando-documento-do-form-para-uma-pasta-no-ged-ecm/3260)
> **Categoria:** ECM / GED
> **Criado em:** 25/04/2025, 16:30
> **Visualizações:** 64 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Iago** (@iago.oliveira) — 25/04/2025, 16:30

Olá pessoal. Estou tentando utilizar uma API para que em um formulário de um processo, o usuário possa anexar o arquivo em uma pasta no GED. Preciso publicar esse arquivo antes do usuário enviar a solicitação pois irei usar o arquivo publicado no GED para carregar uma “cotação” dos itens desse arquivo. Porém, ao enviar, no console apresenta esse erro: 500 (Internal Server Error)

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c9e1e0d277b95f0c38ac422f4e2028cfcd90281f.png)

A pasta está com permissão para todos.

html:

```auto
<h2>Upload para Pasta no Fluig</h2>
            <div class="form-group">
                <label for="fileDesc">Descrição do Arquivo</label>
                <input type="text" id="fileDesc" name="fileDesc" class="form-control" placeholder="Informe a descrição">
            </div>
            <div class="form-group">
                <label for="fileInput">Escolha o Arquivo</label>
                <input type="file" id="fileInput" name="fileInput" class="form-control">
            </div>
            <button class="btn btn-primary" onclick="enviarArquivo()">Enviar</button>
```

JS:

```javascript
function enviarArquivo() {
            var fileInput = document.getElementById("fileInput");
            var description = document.getElementById("fileDesc").value;
            var parentFolderId = 7043;

            var file = fileInput.files[0];

            if (!file) {
                FLUIGC.toast({ title: 'Erro', message: 'Selecione um arquivo.', type: 'danger' });
                return;
            }

            var formData = new FormData();
            formData.append("description", description);
            formData.append("parentId", parentFolderId);
            formData.append("attachments", file);
            formData.append("documentType", "1"); // Documento interno
            formData.append("privateDocument", "false");

            $.ajax({
                url: "/api/public/ecm/document/createDocument",
//            	url: '/ecm/upload',
                type: "POST",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    FLUIGC.toast({ title: 'Sucesso', message: 'Arquivo enviado com sucesso!', type: 'success' });
                    console.log("Documento criado:", data);
                },
                error: function (xhr, status, error) {
                    console.error("Erro ao enviar:", xhr.responseText); // Detalha a resposta do erro do servidor
                    FLUIGC.toast({ title: 'Erro', message: 'Falha ao enviar o arquivo.', type: 'danger' });
                }
            });
        }
```

Até vi alguns tópcos aqui no fórum mas ainda não consegui chegar na solução. Alguém poderia me ajudar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/04/2025, 11:48

Nessa nova API ainda não tentei enviar arquivo. Aqui acabei fazendo na antiga e nela continua até hoje, hehehe.

[gist.github.com](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

#### [https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

##### criar\_documento\_fluig.js

```JavaScript
// Foram usadas as bibliotecas blob-stream e pdfkit

async function generatePdf() {
    const usuario = "login",
          senha = "senha",
          matricula_usuario = 'admin',
          pdf = new PDFDocument(),
          stream = pdf.pipe(blobStream()),
          fileName = 'Nome_Do_Arquivo.pdf',
          folderId = await findOrCreateFolderId("nova_pasta");
```
Este arquivo está truncado. [exibir original](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

---

---

# Chamada a API REST ao concluir preenchimento de form

> **Fonte:** [https://fluiggers.com.br/t/chamada-a-api-rest-ao-concluir-preenchimento-de-form/446](https://fluiggers.com.br/t/chamada-a-api-rest-ao-concluir-preenchimento-de-form/446)
> **Categoria:** ECM / GED
> **Criado em:** 18/05/2021, 09:43
> **Visualizações:** 1172 | **Likes:** 2 | **Respostas:** 7

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 18/05/2021, 09:43

Bom dia,

Galera, alguém já precisou adicionar um evento (de click, por exemplo) ao botão de “Confirmar” quando tiver preenchendo o formulário?

![image](https://fluiggers.com.br/uploads/default/original/1X/79afef07266fe30d8179151836e10395918591f5.png).

O que eu quero seria executar uma chamada a uma API ao clicar nesse botão, só que tenho as seguintes dúvidas:

1.  Como adicionar o evento nele? Se eu pegar o id ou classe que é gerado, é seguro? se isso mudar um dia?
2.  Eu consigo fazer com que essa chamada a API seja feita antes que ação padrão do botão seja feita?

Eu pensei em criar outro botão, que executaria tudo o que o botão “Confirmar” faz e adicionar o que quero, porém não vejo como fazer no momento.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 10:01

Você esta usando o componente **FLUIGC.message.confirm** ?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 18/05/2021, 10:05

Não conheço, do que se trata?

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 10:08

É um componente do Fluig que você encontra em [TOTVS Fluig Developer](https://style.fluig.com/javascript.html#alerts-examples). Trata-se de um modal de confirmação, eu normalmente uso ele para que o usuário confirme se quer ou não deletar uma determinada linha de uma tabela Pai x Filho.

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 18/05/2021, 10:51

Não existe um evento para isso? tipo, executar uma ação antes da confirmação do usuário? Tentei aqui o afterProcessing e afterSaveNew, sem sucesso até agora.

---

## Resposta #5

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 11:07

Para poder te ajudar melhor, preciso saber mais detalhes. Eu não estou entendendo onde esta esse seu botão “Confirmar”.

Visualmente posso perceber que é um botão presente em algum modal, é isso mesmo?

---

## Resposta #6

**Daniel ** (@daniel_fmartins) — 18/05/2021, 11:14 | ❤️ 1

![image](https://fluiggers.com.br/uploads/default/optimized/1X/e4e78df8f5d31eac49901404f5898a8474abfec0_2_690x305.png)

Esse é rascunho que estou utilizando.

É a criação de um registro normal no ECM.

Porém, necessito fazer uma integração com uma api REST.

Hoje, o momento ideal para essa integração ocorrer é no momento que ele confirma.

Assim, eu consultaria a API, ela me retornaria, eu setava os campos e o fluig salvava esses campos normalmente.

Uma solução alternativa que vejo seria, criar outro botão que faria a integração e setava os dados. Aí o botão de “Confirmar” ficaria fazendo seu trabalho normalmente.

Mas só faria isso, se não conseguisse fazer o que estou tentando, pois entendo que fica um pouco redundante.

Deu pra entender?

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 11:24 | ❤️ 1

Simm agora eu entendi perfeitamente.

bem você pode utilizar um script de formulário, especificamente um chamado **inputFields**, ele é executado no momento em que seu formulário é salvo. Com isso será possível acessar essa sua API e guardar o resultado em algum campo usando o **form.setValue(“nomeDoCampo”, “Valor do campo”);**

---

## Resposta #8

**Daniel ** (@daniel_fmartins) — 18/05/2021, 11:41

Valeu cara, aparenteminte vai resolver. Brigadão.

---

## Resposta #9

**system** (@system) — 19/05/2021, 03:42

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---

---

# Como alterar o rótulo da linha do documento

> **Fonte:** [https://fluiggers.com.br/t/como-alterar-o-rotulo-da-linha-do-documento/929](https://fluiggers.com.br/t/como-alterar-o-rotulo-da-linha-do-documento/929)
> **Categoria:** ECM / GED
> **Criado em:** 15/02/2022, 13:01
> **Visualizações:** 339 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 15/02/2022, 13:01

Eu estou alterando um documento da área de GED via Webservice. Não encontrei alteração via REST.

Mas, está funcionando bem.
Meu problema é alterar o campo ‘documentDescription’, mas acho que o WSDL com a instrução ‘updateCardData’ que estou usando não serve para isto.

A montagem do XML onde escrevi ‘ISTO AQUI É IGNORADO’ no código abaixo é o que eu gostaria de fazer funcionar.

Qual seria o jeito para conseguir isto?

```auto
let cardId = jQuery("#idTxtAlterarNumDoc").val();
		let novoNome = jQuery("#idTxtAlterarNome").val();
        let url = parent.WCMAPI.serverURL + "/webdesk/ECMCardService?wsdl";
        let xmlItem = "<item>";
        xmlItem += "    <field>namTxtNome</field>";
        xmlItem += "    <value>" + novoNome + "</value>";
        xmlItem += "</item>";
//---ISTO AQUI É IGNORADO
        xmlItem +="<item><field>documentDescription</field><value>"+novoNome+"</value></item>";
//---
        let xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">'
            +'<soapenv:Header/>'
            +'<soapenv:Body>'
                +'<ws:updateCardData>'
                +'<companyId>' + top.WCMAPI.organizationId + '</companyId>'
                +'<username></username>'
                +'<password></password>'
                +'<cardId>' + cardId + '</cardId>'
                +'<cardData>'
                    + xmlItem
                +'</cardData>'
                +'</ws:updateCardData>'
            +'</soapenv:Body>'
            +'</soapenv:Envelope>';
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = (this.responseText);
                console.log(response);
            }
        };
        xhr.open("POST", url, false);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=ISO-8859-1');
        xhr.send(xml);
```

---

---

# Como armar un ifreme de una carpeta de documentos sin que aparezca el menu

> **Fonte:** [https://fluiggers.com.br/t/como-armar-un-ifreme-de-una-carpeta-de-documentos-sin-que-aparezca-el-menu/3065](https://fluiggers.com.br/t/como-armar-un-ifreme-de-una-carpeta-de-documentos-sin-que-aparezca-el-menu/3065)
> **Categoria:** ECM / GED
> **Criado em:** 14/11/2024, 13:15
> **Visualizações:** 21 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Cristian Castro** (@Cristian_Castro) — 14/11/2024, 13:15

Buenos dias, estoy queriendo poner en una pagina de fluig un ifreme con una carpeta especifica para que se visualicen los documentos, el problema es que cuando lo meto dentro de un ifreme también se visualiza el menú y el navegador, yo quiero que quede embebido. ¿De alguna manera puedo lograr esto?

Adjunto como me queda el ifreme y como necesito que quede.

![Screenshot_1](https://fluiggers.com.br/uploads/default/optimized/2X/2/2703ba46313334c3b1d920fb2ac496a1a92881b1_2_690x223.jpeg)

Gracias,

---

---

# Como configurar metadados

> **Fonte:** [https://fluiggers.com.br/t/como-configurar-metadados/2822](https://fluiggers.com.br/t/como-configurar-metadados/2822)
> **Categoria:** ECM / GED
> **Criado em:** 29/05/2024, 14:34
> **Visualizações:** 63 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**pedro** (@pedro) — 29/05/2024, 14:34

Boa tarde, pessoal! Alguém aqui sabe como configurar metadados no fluig, ou tem alguma documentação que pode me auxiliar?

---

---

# Como descompactar arquivo .zip e salvar no GED

> **Fonte:** [https://fluiggers.com.br/t/como-descompactar-arquivo-zip-e-salvar-no-ged/2814](https://fluiggers.com.br/t/como-descompactar-arquivo-zip-e-salvar-no-ged/2814)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`, `ecm`, `ged`, `arquivo`
> **Criado em:** 24/05/2024, 17:45
> **Visualizações:** 73 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**RafaelMD** (@RafaelMD) — 24/05/2024, 17:45

Em uma das atividades do meu processo devo receber um arquivo compactado com alguns PDFs, o usuário faz o upload desse .zip e movimenta o processo para uma atividade de serviço que salva esse arquivo no GED.
É possível descompactar esse arquivo e então salvar esses PDFs no GED?

*OBS.: Existe um tópico de 2021, " [Obter PDF de dentro do arquivo ZIP](https://fluiggers.com.br/t/obter-pdf-de-dentro-do-arquivo-zip/493)", em que isso é discutido, mas uma das soluções (a de pegar o blob desse arquivo e usar a biblioteca zip.js para descompactá-lo) não teve um retorno se foi possível usá-la para resolver o problema.*

---

---

# Conversor de vídeo automático

> **Fonte:** [https://fluiggers.com.br/t/conversor-de-video-automatico/47](https://fluiggers.com.br/t/conversor-de-video-automatico/47)
> **Categoria:** ECM / GED
> **Criado em:** 11/03/2021, 14:52
> **Visualizações:** 784 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 11/03/2021, 14:52 | ❤️ 3

Utilizando o handbreakcli e um script node.js converta todos os vídeos enviados para a plataforma de forma automatica.

Para isto crie um arquivo script.js cole o código abaixo nele e execute.
Ele vai chamar o handbrek\_cli command line e pronto;
Lembre-se de trocar as chaves de oauth no script.

```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 2221; //porta padrão
const fs = require('fs');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Serviço conversor de video funcionando!' }));

router.post('/convertFile', (req, res) =>{
	const filename = req.body.filename;
	const id = req.body.id;
	if(filename!=null && filename!=""){
		const nodeCmd = require('node-cmd');
		//nodeCmd.get('handbrakecli --help', (err, data, stderr) => {
		nodeCmd.get('handbrakecli -Z "Gmail Medium 5 Minutes 480p30" -i "e:\\volume\\public\\'+id+'\\1000\\'+filename+'" -o "'+'e:\\volume\\public\\'+id+'\\1000\\'+filename+'.mp4"', (err, data, stderr) => {
			console.log(stderr);
			console.log("Comando executado: "+'handbrakecli -Z "Gmail Medium 5 Minutes 480p30" -i "e:\\volume\\public\\'+id+'\\1000\\'+filename+'" -o "'+'e:\\volume\\public\\'+id+'\\1000\\'+filename+'.mp4"');
			fs.unlink("e:\\volume\\public\\"+id+"\\1000\\"+filename, (err) => {
				if (err) console.log('path/file.txt was not deleted');
			});
			fs.rename("e:\\volume\\public\\"+id+"\\1000\\"+filename+".mp4", "e:\\volume\\public\\"+id+"\\1000\\"+filename, function(err) {
				if ( err ) console.log('ERROR: ' + err);
			});
			var timestamp = Math.floor(new Date().getTime()/1000);
			console.log(timestamp);
			var request = require("request");

			var crypto = require("crypto");
			var nonce = crypto.randomBytes(20).toString('hex');
			var parametros={
				oauth_consumer_key: 'xxxxxx',//Trocar aqui
				oauth_token: 'xxxxxx',//Trocar aqui
				oauth_signature_method: 'HMAC-SHA1',
				oauth_timestamp: timestamp,
				oauth_nonce: nonce,
				oauth_version: '1.0'
			};
			var oauthSignature=require("oauth-signature");
			var assinatura = oauthSignature.generate("POST", "http://portal.torratorra.com.br/api/public/ecm/document/updateDescription", parametros, "minhaconsumersecret", "meutoken",{ encodeSignature: false});//Trocar meu token e minhaconsumer

			var options = {
				method: 'POST',
				url: 'http://portal.torratorra.com.br/api/public/ecm/document/updateDescription',
				qs:{
					oauth_consumer_key: 'xxxxxx',//Trocar aqui
					oauth_token: 'xxxxxxx',//Trocar aqui
					oauth_signature_method: 'HMAC-SHA1',
					oauth_timestamp: timestamp,
					oauth_nonce: nonce,
					oauth_version: '1.0',
					oauth_signature: assinatura
				},
				headers: {
					'cache-control': 'no-cache',
					'Cache-Control': 'no-cache',
					'Content-Type': 'application/json'
				},
				body: {
					"id": id,
					"description": "Convertido " + filename
				},
				json: true
			};

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);
			  console.log(body);
			});
			res.json({ success: true, "Filename": filename,"Data":data});
		});
	}else{
		res.json({ Error: "Parametro não foi enviado."})
	}
})

app.use('/', router);
app.listen(port);
```

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 11/03/2021, 15:06

top [@Daniel\_Sales](/u/daniel_sales) :blue_heart: :ok_hand: :+1:

---

## Resposta #2

**Emmanoel Silva** (@manelzada) — 14/07/2022, 13:18

Está me retornando um signature\_invalid, pode me ajudar com isso?

---

---

# Converter buffer de arquivo para base64 com Java

> **Fonte:** [https://fluiggers.com.br/t/converter-buffer-de-arquivo-para-base64-com-java/566](https://fluiggers.com.br/t/converter-buffer-de-arquivo-para-base64-com-java/566)
> **Categoria:** ECM / GED
> **Tags:** `java`
> **Criado em:** 19/07/2021, 18:08
> **Visualizações:** 2419 | **Likes:** 10 | **Respostas:** 10

---

## Pergunta original

**Sérgio Machado** (@sergio.machado) — 19/07/2021, 18:08

Fala Pessoal tudo bem?

Estou trabalhando em um projeto que ao finalizar a solicitação, preciso ler vários campos passar para um modelo de relatório e gravar o PDF em uma pasta no GED.

O maior desafio seria gerar esse PDF pelo back-end, sem interferência do usuário, estava pensando em criar um serviço em Nodejs que me retornasse um base64 ou o caminho físico do arquivo. Mas como meu tempo esta muito curto, resolvi procurar na internet, foi aí que achei o **[JsReport](https://jsreport.net)** que segue a mesma lógica que eu estava pensando em montar só que de uma forma bem mais robusta.

Ele roda até mesmo em Docker, mas no meu caso eu instalei como windows service, dessa forma sempre que eu iniciar minha maquina o serviço vai ser levantado de forma automática.

Ele devolve como resposta da minha requisição o próprio PDF renderizado, como é exibido na imagem abaixo, e não é possível setar o formato de recebimento do arquivo.

![Image 002](https://fluiggers.com.br/uploads/default/optimized/1X/ab734c8078513b0ebaf2c3ee87315ce2d62375ee_2_690x271.png)

E no log do fluig é exibido uma string gigantesca, a mesma string de quando você abre o arquivo com o bloco de notas.

![Image 001](https://fluiggers.com.br/uploads/default/original/1X/775688801f7a4f84bfe8e61cc20601565ca9d513.png)

Vasculhando o fórum dele o Autor diz que isso é um Buffer do arquivo. Ele dá até um exemplo para quem deseja enviar por email *new Buffer(response)* usando JavaScript. Mas o new Buffer não é suportado nos scripts de workflow.

Então vamos lá ao problema. Como eu faço para converter esse Buffer para base64 usando Java?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/07/2021, 19:08 | ❤️ 2

Talvez seja isso que você quer. Eu criei um serviço externo que efetua a consulta no Fluig e então gera um PDF. No Fluig, numa atividade Serviço, eu baixo esse arquivo pra então criar o documento e anexar ao processo.

A função que utilizo é essa:

```javascript
function downloadProcessFormAsPdf() {
    var urlDownload = new java.net.URL(FluigPdfURL + "/endpoint.php?"
        + "user=usuario"
        + "&password=senha"
        + "&processId=" + getValue("WKNumProces")
    );

    var is 			= urlDownload.openStream();
    var bytesBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
    var baos 		= new java.io.ByteArrayOutputStream();
    var len 		= 0;

    while ((len = is.read(bytesBuffer, 0, bytesBuffer.length)) != -1) {
        baos.write(bytesBuffer, 0, len);
    }

    var fileContents = baos.toByteArray();
    baos.close();
    return fileContents;
}
```

Essa variável fileContents é um byte array, aí você pode fazer `var base64String = java.util.Base64.getEncoder().encodeToString(fileContents);` pra obter o base64.

Você pode ver o código completo aqui (nele eu crio o arquivo e tbm o anexo ao processo)

[gist.github.com](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

#### [https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

##### fluig\_gerar\_pdf\_anexar\_processo.js

```JavaScript
/*
 * Necessário criar um serviço SOAP no Fluig (Painel de controle -> Desenvolvimento -> Serviços)
 * com o nome ECMDocumentService apontando para o /webdesk/ECMDocumentService?wsdl
 *
 * Mais informações: https://tdn.totvs.com/pages/releaseview.action?pageId=73084007
 */

/**
 * Cria o PDF do formulário
 *
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 20/07/2021, 08:50 | ❤️ 2

Bom dia [@sergio.machado](/u/sergio.machado),

Se você possui uma API da pra usar consumindo um serviço e setando o tipo do retorno, depois só converte para base64.

Segue exemplo que funcionou para o meu caso, caso te ajude:

```auto
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn('MSG');
    dataset.addColumn("STATUS");

    try {

        var ID_REF = constraints[0].initialValue;

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'seu serviço',
            endpoint: 'seu endpoint',
            method: 'get',
            timeoutService: '100',
            options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
                useSSL: true
            },
            headers: {
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment; filename=arquivo_gerado.pdf'
            }
        }

        var vo = clientService.invoke(JSON.stringify(data));

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            dataset.addRow(new Array("Retorno está vazio", false));
        } else {
            var statusHtml = vo.getHttpStatusResult();

            if (statusHtml == 200) {//VERIFIQUE SE ESSE É O SEU STATUS POSITIVO
                //ARQUIVO OK
                var stringValue = vo.getResult();
                if (stringValue.length() == 1) { stringValue = "0" + stringValue; }
                var str = new java.lang.String(stringValue); // Encode


               // dataset.addRow(new Array(str, true));
               var filecontent = java.util.Base64.getEncoder().encodeToString(str.getBytes("ISO-8859-1"));



                try {

                    dataset.addRow(new Array(filecontent, true));
                } catch (e) {
                    dataset.addRow(new Array(e.message, false));
                }
            }
        }
    } catch (err) {
        dataset.addRow(new Array(err, false));
    }
    return dataset;

}
```

O ID\_REF é caso você queira mandar um ID para pesquisar no seu endpoint.

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 17:44

Muito obrigado Burno, me diz uma coisa, esse teu serviço acessando essa URL no navegador ele abre o próprio PDF?

Pergunto isso pois essa api que estou usando, no header da resposta da requisição é retornado um link para o PDF, testei usando esse link, mas não deu certo. Também não lembro exatamente o erro, mais tarde posto aqui pra você ver.

---

## Resposta #4

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 17:52

Muito obrigado Willian, com esse teu exemplo consegui gerar o base64, no meu caso precisei apenas passar na requisição

```auto
options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
            },
```

Agora estou enfrentando um outro problema, como você faz para passar o retorno desse dataset para o setFilecontent?

Fiz muitos testes aqui e sempre cai nesse erro

```auto
InternalError: Can't find method com.totvs.technology.ecm.dm.ws.Attachment.setFilecontent(java.lang.String)
```

O interessante é que se eu copio o base64 gerado, e faço um teste pelo SoapUi exatamente com as mesmas informações, o arquivo é criado com sucesso, agora se eu colo essa string direto em setFilecontent ou coloco em uma variável, cai nesse erro aí colei acima, bem estranho essas coisas.

Nunca tive problema antes com isso, sempre que eu preciso ler um arquivo físico da maquina e transformar em base64, eu utilizo esse código aqui e funciona 100%.

```auto
var byteArray = java.nio.file.Files.readAllBytes(java.nio.file.Paths.get("CAMINHO DO SEU ARQUIVO")); // Transforma o conteúdo do arquivo para base64
```

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2021, 23:14

[@sergio.machado](/u/sergio.machado) , sim. O meu serviço retorna o PDF. Se abrir com um navegador, por exemplo, o PDF é exibido diretamente nele.

Teria que funcionar se você indicasse também o caminho direto ao PDF (seguindo esse link que você comentou que é devolvido).

---

## Resposta #6

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 23:26

Pois é, achei bem estranho, amanha irei testar novamente, talvez eu tenha deixado passar algum detalhe na primeira vez que testei, fiz tantos testes que você nem imagina rs.

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 23/07/2021, 08:47 | ❤️ 1

Bom dia [@sergio.machado](/u/sergio.machado)

Era pra ele já devolver o formato fileContent, pode ser que por ser devolução de dataset ele altere o formato.

Só me esclarece, você quer gravar o arquivo de retorno da API no Fluig isso? Se for isso eu tenho esse cara que eu criei ele utiliza os serviços SOAP do Fluig.

Antes de usar você precisa criar no Painel de controle do Fluig o serviço “ECMDocumentService”

```auto
{sua url}/webdesk/ECMDocumentService?wsdl
```

Depois sete alguns parâmetros no dataset (USUARIO, SENHA,ETC…)

```auto
function createDataset(fields, constraints, sortFields) {
		var dataset = DatasetBuilder.newDataset();
			dataset.addColumn('MSG');
			dataset.addColumn("STATUS");

		try{


        var ID_REF = constraints[0].initialValue;
        var FOLDER =  constraints[1].initialValue; //NUMERO DA PASTA AONDE SERÁ GRAVADO O ARQUIVO
        var DESCRIPTION =  constraints[2].initialValue; //DESCRICAO DO ARQUIVO
        var NAME =  constraints[3].initialValue; //NOME DO ARQUIVO

        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'seu serviço',
            endpoint: 'seu endpoint',
            method: 'get',
            timeoutService: '100',
            options: {
                encoding: 'ISO-8859-1',
                mediaType: 'application/pdf',
                useSSL: true
            },
            headers: {
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment; filename=arquivo_gerado.pdf'
            }
        }


	    var vo = clientService.invoke(JSON.stringify(data));

	    if (vo.getResult() == null || vo.getResult().isEmpty()) {
		      dataset.addRow(new Array("Retorno está vazio",false));
	    } else {
			  var statusHtml = 	vo.getHttpStatusResult();

			  if(statusHtml==200){
					//ARQUIVO OK
					var stringValue =  vo.getResult();
					if (stringValue.length() == 1) { stringValue = "0" + stringValue; }
					var str = new java.lang.String(stringValue); // Encode
				    var filecontent = java.util.Base64.getEncoder().encodeToString(str.getBytes("ISO-8859-1"));

					var parentDocumentId = FOLDER;
					var documentDescription =  DESCRIPTION;
					var fileName = NAME+".pdf";
					var fileSize = 1;

					try {
		            	var response = processResult(callService(parentDocumentId,documentDescription,fileName,fileSize,filecontent));
		            	dataset.addRow( new Array(JSONUtil.toJSON( response ), true) );
					} catch(e) {
						dataset.addRow( new Array(e.message, false) );
					}
		 	 	}else{
		 	 		dataset.addRow( new Array("Status:"+statusHtml, false) );
		 	 	}
			}
	    } catch(err) {
	       dataset.addRow(new Array(err, false));
	    }
	return dataset;

}
// * ============================================================================================================================
// * @DESCRIPTION:      Chamada da configuração e execução do serviço
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function callService(parentDocumentId,documentDescription,fileName, fileSize,filecontent ){

	var company 	=	getValue("WKCompany");
	var user 		=	'SEU USUARIO'; //INSIRA SEU USUARIO
	var password 	=	'SEU PASSWORD'; //INSIRA SEU PASSWORD

	var serviceHelper 	= ServiceManager.getService("ECMDocumentService");//INSIRA SEU SERVIÇO ECMDocumentService
	var serviceLocator 	= serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService");
	var service 		= serviceLocator.getDocumentServicePort();
	var response 		= service.createSimpleDocument(
								user,
								password,
								company,
								parentDocumentId,
								user,
								documentDescription,
								fillAttachmentArray(serviceHelper, fileName, fileSize,filecontent)
							);

	return response;
}

// * ============================================================================================================================
// * @DESCRIPTION:      Instância de AttachmentArray
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function fillAttachmentArray(serviceHelper, fileName, fileSize,filecontent) {
	var result = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.AttachmentArray");
		result.getItem().add( fillAttachment( serviceHelper,fileName, fileSize,filecontent ) );
	return result;
}

// * ============================================================================================================================
// * @DESCRIPTION:      Instância de Attachment
// * @PARAMS:           {}
// * @RETURN:           {}
// * ============================================================================================================================
function fillAttachment( serviceHelper, fileName, fileSize,filecontent) {
	var attachment =  serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.Attachment");
		attachment.setFileName( fileName );
		attachment.setFileSize( fileSize );
		attachment.setAttach(false);
		attachment.setPrincipal(false);
    try{
		var	bytes = java.util.Base64.getDecoder().decode( new String( filecontent ) );
    	attachment.setFilecontent(bytes);
    }catch(e){
    	log.info('RESPOSTA ----> REQ UNI [ERR] '+e );
    }

    return attachment;
}
function processResult( result ) {
	result = result.getItem();
	var retornoArr = new Array();
	for (var i = 0; i < result.size(); i++) {
		retornoArr.push( JSONUtil.toJSON( result.get(i) ) );
	}
	return retornoArr;
}
```

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2021, 09:05 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/sergio.machado/48/659_2.png) sergio.machado:
>
> > `InternalError: Can't find method com.totvs.technology.ecm.dm.ws.Attachment.setFilecontent(java.lang.String)`

Esse método só aceita um byte, não uma string.

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:26

Olá Willian, bom dia, exatamente isso, quero gravar pegar esse base64 e gerar um arquivo do GED.

Sim, estou usando esse mesmo serviço e também o método createSimpleDocument.

Irei observar teu código e fazer outros testes.

---

## Resposta #10

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:42 | ❤️ 2

Cara funcionou, só precisei adicionar essa linha abaixo e passar o base64 gerado pelo dataset

```javascript
var bytes = java.util.Base64.getDecoder().decode(new String("SUA STRING BASE64 AQUI"));
```

Cara valeu, me ajudou demais.

---

## Resposta #11

**Willian Laynes** (@Willian_Laynes) — 23/07/2021, 09:44 | ❤️ 1

Show…é chato mexer nesse back-end que não sabe se é Java ou Javascript rs

---

## Resposta #12

**Sérgio Machado** (@sergio.machado) — 23/07/2021, 09:50

Nem me fale kkkk, comecei até fazer um curso de java pra tentar resolver melhor esses pepinos

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2021, 11:23

Nunca fui muito fã de Java e também estou nessa luta pra entender um pouco mais. Essa mistura de JS antigo com Java confunde em várias situações.

---

## Resposta #14

**system** (@system) — 24/07/2021, 03:24

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---

---

# Copiar uma pasta dentro de Formularios do Fluig para outro servidor

> **Fonte:** [https://fluiggers.com.br/t/copiar-uma-pasta-dentro-de-formularios-do-fluig-para-outro-servidor/2666](https://fluiggers.com.br/t/copiar-uma-pasta-dentro-de-formularios-do-fluig-para-outro-servidor/2666)
> **Categoria:** ECM / GED
> **Criado em:** 25/03/2024, 18:38
> **Visualizações:** 181 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 25/03/2024, 18:38

Prezado, eu estou com um servidor de homologação.

Preciso copiar os dados somente de uma das pastas de dentro do Formulário do Fluig da instalação em produção para dentro da mesma pasta da instalação de homologação.

O formulário eu sei que posso exportar de dentro do Eclipse para o servidor de homologação, mas os dados não consegui a informação de como fazer.

Tem um jeito fácil de fazer isto?

Copiar e colar não me foi permitido fazer.

---

## Resposta #1

**venturelli** (@venturelli) — 03/04/2024, 11:19

Via Fluig não tem como fazer a migração de documentos de um ambiente para outro. Você pode fazer via volume diretamente, mas lembrando que ao fazer isso o Fluig não vai criar id’s ou versões do documento sozinho, ou seja, deve ser respeitado a estrutura que o Fluig para qual está sendo copiado possui.

Ou seja, o homologação pode ter 15 versionamentos e o produção 10. Você pode até copiar os dados da versão 15 para a versão 10 do produção, mas não pode querer que o Fluig ‘crie’ outras 5 versões sozinho pra igualar as quantidades.

E claro, cuidado com essa cópia de volume para não fazer coisas erradas e perder dados.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 03/04/2024, 17:37

Valeu, [@venturelli](/u/venturelli)! Nem vou tentar.
Aliás, já resolvi a cópia via javascript em Widget.

1.  Criei uma widget no Eclipse e exportei para o servidor de produção e para o remoto
2.  Exportei o mesmo formulário que abriga os documentos no GED da produção para o remoto e anotei o número da pasta criada dentro de Formulários do Fluig
3.  No servidor de produção, a widget tem um botão de exportação. Via javascript crio um arquivo CSV com toda a informação dos campos do formulário associado à pasta original
4.  No servidor remoto, a widget tem um botão de importação. Via javascript leio o arquivo CSV criado e crio o documento com base no formulário do item 2 e com destino para o número da pasta criada no item 2 também.

---

---

# Criando documento com docAPI, e setando ExpirationDate

> **Fonte:** [https://fluiggers.com.br/t/criando-documento-com-docapi-e-setando-expirationdate/3350](https://fluiggers.com.br/t/criando-documento-com-docapi-e-setando-expirationdate/3350)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`, `ged`
> **Criado em:** 22/07/2025, 14:55
> **Visualizações:** 56 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 22/07/2025, 14:55

Aparece o seguinte erro quando tento criar um documento pela docAPI setando o ExpirationDate, dizendo que não encontrou o metodo setExpirationDate:

Erro ao copiar o documento: InternalError: Can’t find method com.datasul.technology.webdesk.dm.dtos.DocumentDto.setExpirationDate(java.lang.String). (afterProcessFinish#43)

Alguém sabe como informar a data de expiração do documento?

```
var docAtt = attachments.get(i);

        var docDto = docAPI.newDocumentDto();

        docAPI.copyDocumentToUploadArea(docAtt.getDocumentId(), docAtt.getVersion());

        docDto.setDocumentId(0);
        docDto.setDocumentType("2");
        docDto.setParentDocumentId(parseInt(parentDocumentId));
        docDto.setDocumentDescription(newFileName);
        docDto.setInheritSecurity(true);
        docDto.setExpirationDate(expirationDate);
        docDto.setExpires(true);
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 17:34

Na descrição do erro diz que você tentou passar uma string pro método `setExpirationDate`, mas ele só aceita o tipo `Date`.

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 23/07/2025, 08:36 | ❤️ 1

Obrigado amigo, deu certo!
A variavel expirationDate que eu estava passando recebia um valor de um campo date, então achei que não precisaria de formatação.

passando um new Date() funcionou. Deus abençoe!

---

---

# Dataset Customizado sem permissão para consultar Dataset Interno

> **Fonte:** [https://fluiggers.com.br/t/dataset-customizado-sem-permissao-para-consultar-dataset-interno/3281](https://fluiggers.com.br/t/dataset-customizado-sem-permissao-para-consultar-dataset-interno/3281)
> **Categoria:** ECM / GED
> **Tags:** `dataset`
> **Criado em:** 13/05/2025, 17:48
> **Visualizações:** 99 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jean** (@jean.paulino) — 13/05/2025, 17:48

Olá pessoal, tudo bom?

Estamos com um problema e gostaria de saber se alguém já passou por isso.

Temos alguns dataset’s customizados e dentro dele fazemos chamadas em datasets internos, porém tirando o nosso usuário administrador, o restante dos usuários não tem permissão para acesso.

Já tentamos passar o userSecurityId dentro do dataset customizado e também tentamos sem sucesso implementar o oauth dentro desse dataset, mas não conseguimos.

Com o oauth conseguimos facilmente acessar o dataset interno, mas quando chamamos o dataset customizado, chamando o interno, ele retorna status 200 com os campos, porém vazio, sem nenhuma infomação.

Caso alguém saiba a solução, poderia nos ajudar?

Obrigado.

Chamada no postman
/api/public/ecm/dataset/datasets

Passando o body
{
“name”: “dsTesteCustomizado”,
“fields”: ,
“constraints”: ,
“order”:
}

Abaixo segue o código que chama nosso dataset sem o oauth, pois não conseguimos implementar.

```auto
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();

    var cols = [
        "dataRegistro",
        "departamento",
        "item",
        "unidadeMedida",
        "codigoReferencia",
        "descricaoProblema",
        "codigoProblema",
        "codigoItem",
        "categoria",
        "quantidadeItem",
        "etapaAtual",
        "valorCalculado",
    ];

    cols.forEach(function (c) {
        dataset.addColumn(c);
    });

    function processarRegistrosTipoA() {
        var ds = DatasetFactory.getDataset(
            "dsRegistroItem",
            null,
            [
                DatasetFactory.createConstraint(
                    "metadata#active",
                    true,
                    true,
                    ConstraintType.MUST
                ),
                DatasetFactory.createConstraint(
                    "tablename",
                    "tabelaItensTipoA",
                    "tabelaItensTipoA",
                    ConstraintType.MUST
                ),
            ],
            null
        );

        for (var i = 0; i < ds.rowsCount; i++) {
            var cardIdStr = ds.getValue(i, "metadata#id");
            var cardDocumentId = parseInt(cardIdStr, 10);

            var retornoDados = retornaAtividade(cardIdStr);

            var cstWorkflow = [];
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "processId",
                    "registroItemProcess",
                    "registroItemProcess",
                    ConstraintType.MUST
                )
            );
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "cardDocumentId",
                    cardDocumentId,
                    cardDocumentId,
                    ConstraintType.MUST
                )
            );

            var dsWorkflow = DatasetFactory.getDataset(
                "workflowProcess",
                null,
                cstWorkflow,
                null
            );

            if (!dsWorkflow || dsWorkflow.rowsCount === 0) {
                log.warn(">> Nenhum processo encontrado para o cardDocumentId: " + cardDocumentId);
                continue;
            }

            var processInstanceId = dsWorkflow.getValue(0, "workflowProcessPK.processInstanceId");
            var status = dsWorkflow.getValue(0, "status");
            var etapaAtual = consultaAtividadeAtual(processInstanceId);

            if (status == 2) {
                var data = safe(ds.getValue(i, "dataRegistroTipoA"));
                var dep = safe(ds.getValue(i, "departamentoTipoA"));
                var item = safe(ds.getValue(i, "descricaoItemTipoA"));
                var und = safe(ds.getValue(i, "unidadeTipoA"));
                var ref = safe(ds.getValue(i, "referenciaTipoA"));
                var desc = safe(ds.getValue(i, "descricaoProblemaTipoA"));
                var codProb = safe(ds.getValue(i, "codigoProblemaTipoA"));
                var codItem = safe(ds.getValue(i, "codigoItemTipoA"));
                var cat = safe(ds.getValue(i, "categoriaTipoA"));
                var qtd = safe(ds.getValue(i, "quantidadeTipoA"));

                var precoUnitario = obterPrecoMedio(codItem);
                var valorTotal = parseFloat(precoUnitario.replace(",", ".")) * parseFloat(qtd.replace(",", "."));

                dataset.addRow([
                    data,
                    dep,
                    item,
                    und,
                    ref,
                    desc,
                    codProb,
                    codItem,
                    cat,
                    qtd,
                    etapaAtual,
                    valorTotal.toFixed(2),
                ]);
            }
        }
    }

    function processarRegistrosTipoB() {
        var ds = DatasetFactory.getDataset(
            "dsRegistroItem",
            null,
            [
                DatasetFactory.createConstraint(
                    "metadata#active",
                    true,
                    true,
                    ConstraintType.MUST
                ),
                DatasetFactory.createConstraint(
                    "tablename",
                    "tabelaItensTipoB",
                    "tabelaItensTipoB",
                    ConstraintType.MUST
                ),
            ],
            null
        );

        for (var i = 0; i < ds.rowsCount; i++) {
            var cardIdStr = ds.getValue(i, "metadata#id");
            var cardDocumentId = parseInt(cardIdStr, 10);

            var retornoDados = retornaAtividade(cardIdStr);

            var cstWorkflow = [];
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "processId",
                    "registroItemProcess",
                    "registroItemProcess",
                    ConstraintType.MUST
                )
            );
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "cardDocumentId",
                    cardDocumentId,
                    cardDocumentId,
                    ConstraintType.MUST
                )
            );

            var dsWorkflow = DatasetFactory.getDataset(
                "workflowProcess",
                null,
                cstWorkflow,
                null
            );

            if (!dsWorkflow || dsWorkflow.rowsCount === 0) {
                log.warn(">> Nenhum processo encontrado para o cardDocumentId: " + cardDocumentId);
                continue;
            }

            var processInstanceId = dsWorkflow.getValue(0, "workflowProcessPK.processInstanceId");
            var status = dsWorkflow.getValue(0, "status");
            var etapaAtual = consultaAtividadeAtual(processInstanceId);

            if (status == 2) {
                var data = safe(ds.getValue(i, "dataRegistroTipoB"));
                var dep = safe(ds.getValue(i, "departamentoTipoB"));
                var item = safe(ds.getValue(i, "descricaoItemTipoB"));
                var und = safe(ds.getValue(i, "unidadeTipoB"));
                var qtd = safe(ds.getValue(i, "quantidadeTipoB"));
                var desc = safe(ds.getValue(i, "descricaoProblemaTipoB"));
                var codProb = safe(ds.getValue(i, "codigoProblemaTipoB"));
                var cat = safe(ds.getValue(i, "categoriaTipoB"));
                var codItem = safe(ds.getValue(i, "codigoItemTipoB"));

                var precoUnitario = obterPrecoMedio(codItem);
                var valorTotal = parseFloat(precoUnitario.replace(",", ".")) * parseFloat(qtd.replace(",", "."));

                dataset.addRow([
                    data,
                    dep,
                    item,
                    und,
                    "Indefinido",
                    desc,
                    codProb,
                    codItem,
                    cat,
                    qtd,
                    etapaAtual,
                    valorTotal.toFixed(2),
                ]);
            }
        }
    }

    processarRegistrosTipoA();
    processarRegistrosTipoB();

    log.info(">> createDataset concluído: total de registros = " + dataset.rowsCount);

    return dataset;
}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/05/2025, 18:07

Quando você fornece o `userSecurityId` o Fluig vai tentar personificar o usuário informado nessa constraint pra então fazer a consulta ao Dataset.

Porém é comum os usuários OAuth por padrão não estarem com essa opção marcada.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/56fe7d69fdf12ee4c14c59e06ded930b72584062.png)

Já os usuários comuns do Fluig normalmente permitem isso por padrão, pelo que me lembro.

---

## Resposta #2

**Jean** (@jean.paulino) — 21/05/2025, 14:16

Boa tarde Bruno, tudo bom?

Já estava feito essa configuração no FLUIG e mesmo assim não conseguimos.

Estamos achando que possa ter corrompido nossa base de testes e vamos fazer alguns testes após atualizar a versão.

Mas muito obrigado pela ajuda.

---

---

# "Diretório de publicação não pode ser criado" ao publicar via RM usando FTP

> **Fonte:** [https://fluiggers.com.br/t/diretorio-de-publicacao-nao-pode-ser-criado-ao-publicar-via-rm-usando-ftp/1316](https://fluiggers.com.br/t/diretorio-de-publicacao-nao-pode-ser-criado-ao-publicar-via-rm-usando-ftp/1316)
> **Categoria:** ECM / GED
> **Tags:** `upload`, `ftp`
> **Criado em:** 16/09/2022, 09:59
> **Visualizações:** 347 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 16/09/2022, 09:59

Salve galera!

Beleza? Após recriar um servidor de homologação estamos com a mensagem abaixo ao tentar enviar um documento do RM para o Fluig:

2022-09-16 09:52:40,408 ERROR \[com.datasul.technology.webdesk.dm.business.DocumentAbstractBO\] (default task-12) Failed to insert document: : java.lang.Exception: DiretÃ³rio de publicaÃ§Ã£o nÃ£o pode ser criado! Verifique o diretÃ³rio informado no volume e as permissÃµes de diretÃ³rio do sistema operacional.

Porém, já validamos os acessos ao FTP e o log do fluig confirma isso. Todo o volume foi colocado com permissão total para todos no servidor (Windows) para tirar a prova. Acredito que seja alguma permissão dentro do Fluig, mas qual?

Valeu galera!!!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Everton Alves** (@everton) — 16/09/2022, 11:42

Olá,

Já tive um problema parecido uma vez, não sei se com você é a mesma coisa.
O usuário que eu usava para enviar o arquivo para o fluig não tinha permissão de escrita na pasta.
Adicionei permissão para esse usuário e o fluig aceitou o arquivo normalmente.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 07/10/2022, 09:24 | ❤️ 2

Cara, esqueci de contar… era permissão de pasta em um volume de rede, não o volume principal. O ambiente do cliente possuía vários volumes de rede que precisavam de ajuste de permissão para o usuário que inicia o serviço do Fluig.

Valeu demais!!

---

---

# Duvidas Processo documentos

> **Fonte:** [https://fluiggers.com.br/t/duvidas-processo-documentos/3045](https://fluiggers.com.br/t/duvidas-processo-documentos/3045)
> **Categoria:** ECM / GED
> **Criado em:** 29/10/2024, 11:30
> **Visualizações:** 48 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Ocanha** (@Gabriel_Ocanha) — 29/10/2024, 11:30

Bom dia a todos,

Estou ingressando na comunidade do Fluig, e estou interessado em aprender sobre o processo de controle de documentos dentro do Fluig.

Gostaria de entender as possibilidades e lógicas do sistema para essa gestão e agradeço a todos que possam colaborar.

Att

---

## Resposta #1

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 30/10/2024, 21:48

Boa noite Gabriel

A Totvs fornece o curso gratuito sobre o ECM no Fluig Academy.

Da uma olhada lá, tem bastante conteúdo sobre o Fluig

![](https://academy.fluig.com/theme/image.php/totvs_fluig_academy/theme/1723807173/favicon) [TOTVS Fluig Academy | ECM - Gestão eletrônica de documentos](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=41)

![](https://academy.fluig.com/pluginfile.php/1/theme_totvs_fluig_academy/imagem_compartilhamento_link/1723807173/TOTVS-FLUIG-ACADEMY_CONECTE-SE.png)

### [TOTVS Fluig Academy | ECM - Gestão eletrônica de documentos](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=41)

Veja os recursos e benefícios da Gestão Eletrônica de Documentos da plataforma TOTVS Fluig, ele permite o compartilhamento, controle e acesso à documentos a qualquer hora que você desejar e com a mobilidade que você precisa.

---

---

# ECM - Mudar versão de documentos

> **Fonte:** [https://fluiggers.com.br/t/ecm-mudar-versao-de-documentos/1055](https://fluiggers.com.br/t/ecm-mudar-versao-de-documentos/1055)
> **Categoria:** ECM / GED
> **Tags:** `ecm`
> **Criado em:** 25/04/2022, 16:46
> **Visualizações:** 657 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 25/04/2022, 16:46

Pessoal, Boa Tarde:

Uma Dúvidas:

Preciso saber se há como alterar a versão de vários documentos de uma vez. O motivo é que estamos subindo vários arquivos do file server para o GED e gostaríamos de fazer isso em massa para manter um padrão.

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 26/04/2022, 07:57

Olá,

Seleciona os documentos e após vai em “alteração em bloco”

![2022-04-26 07_56_26-TOTVS Fluig Plataforma - Documentos](https://fluiggers.com.br/uploads/default/original/1X/cdabc70cd3282572dc998a0bd916935efd5006cc.png)

---

## Resposta #2

**Igor Rodrigues** (@fluigor.com.br) — 27/04/2022, 14:38 | ❤️ 1

Buenas [@daniela.troggian](/u/daniela.troggian)

Para a tua sugestão, eu sugiro tu realizar a importação dos seus arquivos utilizando a função de Arquivo descritor, desta forma poderá montar um excel (csv), elaborando parâmetros para os documentos, um desses parâmetros é a versão do documento, da qual pelo que entendo sobre a plataforma, tua necessidade é subir documentos já com um numero de versão especifico, neste arquivo tu poderá informar.
Porém para que a plataforma suba o arquivo com a versão informada por você no arquivo descritor(excel) tu precisa ir no Painel de controle > Parametros e habilitar a checkbox controlme manual de versão inicial.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/be614b7b8aced519ca7c80d414c8da744440c850_2_690x342.jpeg)

---

---

# ECM / BPM Documentos sumidos

> **Fonte:** [https://fluiggers.com.br/t/ecm-bpm-documentos-sumidos/1231](https://fluiggers.com.br/t/ecm-bpm-documentos-sumidos/1231)
> **Categoria:** ECM / GED
> **Criado em:** 17/08/2022, 14:07
> **Visualizações:** 256 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 17/08/2022, 14:07

Meus documentos gerados por processo sumiram simplesmente.

Poderia, alguém, por favor, me informar como posso recuperar isto de backup?

Onde ficam os documentos criados?

---

---

# Editar a descrição de documentos

> **Fonte:** [https://fluiggers.com.br/t/editar-a-descricao-de-documentos/514](https://fluiggers.com.br/t/editar-a-descricao-de-documentos/514)
> **Categoria:** ECM / GED
> **Criado em:** 15/06/2021, 08:10
> **Visualizações:** 1184 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 15/06/2021, 08:10

Bom dia

Gente estou tentando utilizar o método updateSimpleDocument do ws ECMDocumentServiceService para atualizar a descrição de documentos (documentDescription) no Fluig.

![Capturar](https://fluiggers.com.br/uploads/default/original/1X/c346b59e7a34c3aab63caec1e565d35864821f99.png)

Mas to com dificuldade pq o método pede o objeto attachments, mas eu só queria trocar a descrição do documento.

Criei o ws via Fluig e importei para o eclipse para fazer os ajustes. Estou passando constraints com a informação do ID do documento que estou recuperando via dataset document e a nova descrição do documento. Só que o método possui o attachments como parâmetro. Como eu recupero esse objeto para poder reenviar?

Motivo: O Fluig permite que o usuário carregue documentos e na sua descrição ele permite adicionar caracteres como “/”. Quando se faz o download individual do arquivo ele baixa com o nome original, porém, se você tentar fazer o download da pasta inteira ele baixa pela descrição e ai é recusado pelo windows por causa da “/”

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 15/06/2021, 08:32 | ❤️ 1

Bom dia [@Wasley\_Santos](/u/wasley_santos)!

Existe um endpoint da API do Fluig pra isso: [DocumentService - Update Description - POST](https://api.fluig.com/old/resource_DocumentServiceRest.html#resource_DocumentServiceRest_updateDescription_POST), ficaria mais ou menos assim no seu front:

```javascript
fetch('/api/public/ecm/document/updateDescription/', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id: 123, // ID do documento,
        description: 'Descrição aqui', // Descrição nova
    })
}).then(res => res.json()).then((res) => {
    console.log('Resposta do WS', res);
})
```

Particularmente eu gosto de usar o método fetch, mas fica a seu critério a implementação.

Se desejar fazer via backend (evento de processo, datasets, etc…) opte por usar o `fluigAPI.getWorkflowService()`
e dá uma lida nessa documentação de como usar o serviço: [Workflow Service - FluigAPI](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

Espero que tenha ajudado!!

OBS.: Estava errada a URL!! Arrumei agora

---

## Resposta #2

**system** (@system) — 16/06/2021, 00:32

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---

---

# Erro "Documento inexistente ou permissão insuficiente"

> **Fonte:** [https://fluiggers.com.br/t/erro-documento-inexistente-ou-permissao-insuficiente/540](https://fluiggers.com.br/t/erro-documento-inexistente-ou-permissao-insuficiente/540)
> **Categoria:** ECM / GED
> **Criado em:** 30/06/2021, 08:50
> **Visualizações:** 896 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Thiago** (@thiagosouza09) — 30/06/2021, 08:50

Bom Dia

Pessoal tenho um processo que estou tentando anexar um documento no inicio do processo, porém ele apresenta esse erro: (“Documento inexistente ou permissão insuficiente”). Estou usando o evento beforeStateEntry e quando eu tento anexar o documento em uma atividade ele permite normalmente. Alguém tem alguma ideia do que pode ser?

![image](https://fluiggers.com.br/uploads/default/original/1X/c987f8676baab8ffa93e04eec97078cf3b52bfc5.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 30/06/2021, 09:32

[@thiagosouza09](/u/thiagosouza09) , manda o código do evento pra gente dar uma olhada?

---

## Resposta #2

**Thiago** (@thiagosouza09) — 30/06/2021, 09:47

Segue o código:

function beforeStateEntry(sequenceId){

```
var nome_pasta = hAPI.getCardValue("nomeRepresentacao");
var campoOcultoPasta = hAPI.getCardValue("recebeNumeroPasta");
var campoOcultoExistePasta = hAPI.getCardValue("recebePasta");
var user = getValue("WKUser");

if (sequenceId == 5 && campoOcultoExistePasta == "NAO") {

            var dto = docAPI.newDocumentDto();
            dto.setDocumentDescription(nome_pasta);
            dto.setDocumentType("1");
            dto.setParentDocumentId(40075);
            dto.setDocumentTypeId("");
            dto.setInternalVisualizer(true);
            var folder = docAPI.createFolder(dto, null, null);
            log.info("###################################" + folder);

        var gedNewParentId = folder.getDocumentId();
        log.info("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + gedNewParentId);
        var attachments = hAPI.listAttachments();

        for (var i = 0; i < attachments.size(); i++) {
            var attachment = attachments.get(i);


            if (attachment.getDocumentType() == "7") {

                docAPI.copyDocumentToUploadArea(attachment.getDocumentId(), attachment.getVersion());
                attachment.setParentDocumentId(folder.getDocumentId());
                var attachArray = new java.util.ArrayList();
                var mainAttach = docAPI.newAttachment();
                mainAttach.setFileName(attachment.getPhisicalFile());
                mainAttach.setPrincipal(true);
                mainAttach.setAttach(false);
                attachArray.add(mainAttach);

                docAPI.createDocument(attachment, attachArray, null, null, null);
            }
        }
	}

    if(sequenceId == 5 && campoOcultoExistePasta == "SIM") {
		log.info("################################## EXISTE #########################");


		 var attachments = hAPI.listAttachments();

            for (var i = 0; i < attachments.size(); i++) {

                var docDto = attachments.get(i);

                if (docDto.getDocumentType() == "7") {

                    docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), docDto.getVersion());
                    docDto.setParentDocumentId(parseInt(campoOcultoPasta));
                    var attachArray = new java.util.ArrayList();
                    var mainAttach = docAPI.newAttachment();
                    mainAttach.setFileName(docDto.getPhisicalFile());
                    mainAttach.setPrincipal(true);
                    mainAttach.setAttach(false);
                    attachArray.add(mainAttach);


                        var doc = docAPI.createDocument(docDto, attachArray, null, null, null);


                }
            }
    }
```

}

---

---

# Erro de "Documento modificado externamente ao Fluig"

> **Fonte:** [https://fluiggers.com.br/t/erro-de-documento-modificado-externamente-ao-fluig/1441](https://fluiggers.com.br/t/erro-de-documento-modificado-externamente-ao-fluig/1441)
> **Categoria:** ECM / GED
> **Tags:** `ecm`
> **Criado em:** 31/10/2022, 15:18
> **Visualizações:** 660 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Cesar Tomita** (@Cesar_Tomita) — 31/10/2022, 15:18

Olá,

Alguns arquivos meu do Fluig apresenta esse erro:

“Documento modificado externamente ao Fluig”

Porém o arquivo existe no servidor e não esta corrompido, consigo abrir normalmente caso eu veja direto do servidor.

![erro fluig documento](https://fluiggers.com.br/uploads/default/optimized/1X/c4e206c47a951cc6447baa3f44916b6fa3318502_2_690x148.png)

Alguém sabe o que pode ser?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 31/10/2022, 17:05 | ❤️ 1

Boa tarde isso ocorrew por que o arquivo foi modificado extrernamente ao fluig algum apps mexeu no conteudo e ele passa dar essa mensagem. Pode ser porque vc copiou o arqui de um lugar para o outro. eu ja vi isso acontecer quando usei um conversor de video para que quando um video fosse feito upload para o fluig passase por esse conversor. Como oconversor de video rodava fora do fluig eu tive que chamar uma api do fluig para ela modificar alguma informação do arquivo e gerar um novo check sum, ai o erro sumia.

---

## Resposta #2

**Cesar Tomita** (@Cesar_Tomita) — 31/10/2022, 17:30

esse check sum seria o NUM\_CRC da tabela documentos?

qual api do fluig vc utilizou para contornar esse erro?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 31/10/2022, 17:44 | ❤️ 1

Isso mesmo
Procura meu post em node js aqui do conversor de vídeo. La eu explico e vai te ajudar o fonte é bem simples.

---

## Resposta #4

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 11:21

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > ra ela modificar alguma informação do arquivo e gerar um novo check sum, ai o erro sumia.

Entendi, vc teve que re-enviar para o fluig.

É possível eu conseguir calcular esse check sum e atualizar ele direto pelo banco?

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 01/11/2022, 11:51

Não reeviei o arquivo. O fluig recalculou apos eu editar as propriedades do arquivo.
Se vc verificar o meu fonte vai ver que ele subistitui o arquivo direto na pasta sem passar por nenhuma api do fluig ai da esse erro. dai eu rodo uma api que atualiza a info e o fluig resolve esse erro.

---

## Resposta #6

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 16:02

Entendi,

Bom, testei por aqui e não funcionou, fiz uma alteração na descrição do documento e mesmo assim ele não o encontra.

Percebi que o nome 'físico" do arquivo esta um pouco diferente…

Alguns arquivos com caractere especial está vindo como “inválido” do tipo, “declaração” vem “declaracC!@?o”…

No nome físico do arquivo contém um “?” a mais… Será que pode ser isso?

Possível eu dar um update no campo ‘phisicalFile’ via api?

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 01/11/2022, 16:16

Cara extamente isso o nome ta errado e não vai achar ai da o erro.
Tem como fazer um update via api:
/api/public/ecm/document/updateFile

![image](https://fluiggers.com.br/uploads/default/original/1X/6a57f7f8d8c6551ba861387bbb68eae823bd721d.png)

/api/public/2.0/documents/updateFile

![image](https://fluiggers.com.br/uploads/default/original/1X/85741dfe76a04d4ea7582bcfb50b967f0db915f9.png)

Faça teste com esses dois um deles deve te ajudar

---

## Resposta #8

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 16:53

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > /api/public/2.0/documents/updateFile

ao tentar, me retorna esse erro:

![fluig erro ecm](https://fluiggers.com.br/uploads/default/original/1X/6057baa8f0720b6b1581da33d01c35660a844cbf.png)

---

---

# Expiração de Documentos - Alteração Global

> **Fonte:** [https://fluiggers.com.br/t/expiracao-de-documentos-alteracao-global/328](https://fluiggers.com.br/t/expiracao-de-documentos-alteracao-global/328)
> **Categoria:** ECM / GED
> **Criado em:** 09/04/2021, 08:34
> **Visualizações:** 654 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 09/04/2021, 08:34

Existem várias pastas com vários documentos que estão com a opção ‘Documento expira?’ ativada!

![Screenshot_1](https://fluiggers.com.br/uploads/default/original/1X/5804bcb5e34fc9c8e2f5d4e6292acb963742ca18.png)
Detalhe que no painel de controle a opção ‘Documento expira?’ está desmarcada, mas mesmo assim os usuários estão recebendo notificação da expiração.

Como são documentos antigos, de outra gestão, os mesmos passarão a não mais expirar.

Existe alguma maneira de realizar uma alteração global para desmarcar essa opção em todos documentos? Pensei em algum processo utilizando as API do Fluig por exemplo.

---

---

# FLUIG- Política de Uso - LGP

> **Fonte:** [https://fluiggers.com.br/t/fluig-politica-de-uso-lgp/1128](https://fluiggers.com.br/t/fluig-politica-de-uso-lgp/1128)
> **Categoria:** ECM / GED
> **Criado em:** 10/06/2022, 11:51
> **Visualizações:** 352 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 10/06/2022, 11:51

Pessoal, Boa Tarde:

Estava verificando no FLUIG a questão da LGPD. Vi que há a opção de Políticas de Uso e cadastrei uma. Funcionou certinho abriu após a tela de login porém eu gostaria de saber onde eu posso consultar em que o usuário X deu o aceite? Tentei pelos logs de usuário do painel de controle mas não achei nada relacionado.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 06/10/2025, 17:50 | ❤️ 2

Pelo tempo da pergunta imagino que vc já tenha resolvido seu problema, como acabei precisando também dessa funcionalidade, acabei indo atrás aqui e encontrei essa tabela que guarda esta informação que vc precisa

```auto
select * from PolicyUser
```

---

---

# FLUIG ECM - Dúvida sobre arquivos

> **Fonte:** [https://fluiggers.com.br/t/fluig-ecm-duvida-sobre-arquivos/1005](https://fluiggers.com.br/t/fluig-ecm-duvida-sobre-arquivos/1005)
> **Categoria:** ECM / GED
> **Criado em:** 05/04/2022, 10:43
> **Visualizações:** 397 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 05/04/2022, 10:43

Pessoal, Bom Dia:

Estamos iniciando a implantação do ECM e o intuito é digitalizar as NF antigas e incluir elas no GED. Quando o usuário for pesquisar um texto qualquer o sistema deverá buscar este texto dentro da NF . Sei que existe um recurso de OCR mas gostaria de saber se alguém usou desta forma e se sabe quais os requisitos para funcionar adequadamente e qual tipo de impressora em específico é necessário usar

---

---

# GED e id de documentos

> **Fonte:** [https://fluiggers.com.br/t/ged-e-id-de-documentos/1330](https://fluiggers.com.br/t/ged-e-id-de-documentos/1330)
> **Categoria:** ECM / GED
> **Tags:** `form`, `bpm`, `dataset`, `ged`
> **Criado em:** 21/09/2022, 11:16
> **Visualizações:** 534 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**mateus braz** (@mateus_braz) — 21/09/2022, 11:16

Bom dia Pessoal!
tenho um fluxo hoje que salvo os anexos em documento dentro do GED em uma pasta estabelecida e possível eu colocar o nome da pasta e ela retorna o id? isso e feito via dataset?

segue código:

function beforeTaskSave(colleagueId,nextSequenceId,userList){

```
if(nextSequenceId == 41){

	//var pasta =(form.getValue("frota"))

    log.info("#### Gravar anexos do formulário na pasta");
    var id_FolderProtocolo = (parseInt("00002"));


    //ID da pasta onde quero gravar os anexos

    //******************************GRAVAR ANEXOS NA PASTA CRIADA******************************//
    //PEGA ANEXOS DO FOMRULÁRIO

    var calendar = java.util.Calendar.getInstance().getTime();
    var docs = hAPI.listAttachments(); //Pega os anexos do processo
    for(var i=0;i<docs.size();i++){

            var doc = docs.get(i);
            doc.setParentDocumentId(id_FolderProtocolo);
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);

            // GRAVA DOCUMENTO NO ECM
            hAPI.publishWorkflowAttachment(doc);
            log.info("#### Gravou anexo "+ doc.getDocumentId() +" do formulário na pasta");
    }
    // FIM ANEXAR DOCUMENTOS        // ******************************************************************************************//
}
```

}

---

---

# Gereando mais de uma versao ativa de documentos

> **Fonte:** [https://fluiggers.com.br/t/gereando-mais-de-uma-versao-ativa-de-documentos/3070](https://fluiggers.com.br/t/gereando-mais-de-uma-versao-ativa-de-documentos/3070)
> **Categoria:** ECM / GED
> **Criado em:** 21/11/2024, 15:21
> **Visualizações:** 27 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Fabio Caetano de Oliveira** (@Fabio_Caetano_de_Oli) — 21/11/2024, 15:21

Boa tarde,

Alguém ja viu esse problema do fluig ficar gerando mais de uma versão ativo dos documentos e pastas criados via webservice?

---

## Resposta #1

**venturelli** (@venturelli) — 25/11/2024, 09:06

Não. Isso não deveria acontecer. Acontece sempre ou é intermitente ? Tem algum evento global ou algum log de erro?

---

---

# Ler arquivo em formulário

> **Fonte:** [https://fluiggers.com.br/t/ler-arquivo-em-formulario/1091](https://fluiggers.com.br/t/ler-arquivo-em-formulario/1091)
> **Categoria:** ECM / GED
> **Criado em:** 19/05/2022, 10:02
> **Visualizações:** 655 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 19/05/2022, 10:02

Bom dia galera

Estou trabalhando em um fluxo onde os usuários preenchem um formulário e no fim da ultima tarefa pretendo buscar um arquivo xlsx e modificar ele com as informações do formulário. e salvar o novo arquivo como anexo na solicitação.

após o contexto básico minha duvida é a seguinte: podem me dizer uma forma fácil de ter acesso ao blob de um arquivo salvo em →

> /ecmnavigation?app\_ecm\_navigation\_doc=0000

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 20/05/2022, 09:17

Bom dia,

Um arquivo vai ser modificado por vários usuários ou é tipo um template?

---

## Resposta #2

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 20/05/2022, 09:48

Bom dia Daniel

Basicamente sim mas o formulário vai ser preenchido por todas essas pessoas nas primeiras atividades. e na ultima atividade preciso abrir um arquivo xlsx com a lib: [GitHub - SheetJS/sheetjs: 📗 SheetJS Spreadsheet Data Toolkit -- New home https://git.sheetjs.com/SheetJS/sheetjs](https://github.com/SheetJS/sheetjs).
e modificar a segunda aba como o que foi preenchido.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 20/05/2022, 10:17

Da uma olhada
![image](https://fluiggers.com.br/uploads/default/original/1X/e33c4ad402aa7a23bf7a5918b6194b8fabea6816.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/391a8b649a576cf6e12ad93fad2a2c5cba2000bd.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/44c650e95debe43871a0222fb6da49eb941d40c6.png)

o arquivo .xlsx do excel é apenas um zip com vários arquivos dentro.
Pode te dar uma luz nisso.

---

## Resposta #4

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 20/05/2022, 17:07

Consegui gerar o xlsx usando uma das rotas da api ecm.

```auto
${baseUrl}:${porta}/api/public/ecm/document/${item.documentId}/${item.version}
```

segue exemplo de código abaixo:

```auto
function gerarXlsx (){
  parent.ECM.attachmentTable.getData().forEach( function (item) {
    console.log(item);
    fetch(`${baseUrl}:${porta}/api/public/ecm/document/${item.documentId}/${item.version}`).then((response) => {
      console.log(response);
      return response.json();
    }).then((body) => {

      var fileUrl = body.content.fileURL;
      console.log(fileUrl);
      fetch(fileUrl).then((response) => {

        return response.arrayBuffer();
      }).then( (blob) => {
        console.log(blob);
        var workbook = XLSX.read(new Uint8Array(blob), {
          type: 'array'
        });

        var sheetNames = workbook.SheetNames;
        var wsMatriz = workbook.Sheets["MATRIZ"];
        var row1 = ["a","b","c" ... ]
        XLSX.utils.sheet_add_aoa(wsMatriz, [ row1], {origin: "E12"});

        XLSX.writeFile(workbook, "Teste Inicial.xlsx");
      })

    })
  });
}
```

se alguém souber uma forma melhor para lidar com essa edição de arquivo. em um dataset ou algo assim. por favor sinta-se avontade em compartilhar aqui. sei que fazer isso no client-side não foi a melhor das ideias então adoraria uma sugestão melhor.

---

---

# Log customizado de usuário

> **Fonte:** [https://fluiggers.com.br/t/log-customizado-de-usuario/1423](https://fluiggers.com.br/t/log-customizado-de-usuario/1423)
> **Categoria:** ECM / GED
> **Tags:** `bpm`, `ecm`
> **Criado em:** 20/10/2022, 22:51
> **Visualizações:** 440 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Cesar Tomita** (@Cesar_Tomita) — 20/10/2022, 22:51

Olá,

É possível criar algum método para criar um log personalizado de um usuário em especifico ou para todos?

Por exemplo:

O usuário ‘teste123’ criou arquivos no ECM e apagou outros.

Consigo criar um log para que cada vez que ele suba um arquivo, altere ou exclua um documento, seja tudo marcado no log do usuário? Tipo de um teste123.log, com dia/hora e tipo de alteração que o usuário fez?

Obrigado.

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 24/04/2023, 07:37

Bom dia. É possivel sim, voce teria que criar uma tabela no banco de dados e customizar os eventos afterDocumentPublisher e afterDocumentRemove para sempre que um documento dos publicado ou removido criar um registro nesta tabela com o usuario, data e hora.

criando este evento no eclipse ja vem as variaveis abaixo que voce pode estar utilizando.

```auto
function beforeDocumentPublisher() {

	var doc = getValue("WKDocument"); //Objeto do Documento
	var subject = getValue("WKSubject"); //Assunto relacionado ao documento
	var listApprover = getValue("WKListApprover"); //Lista dos Aprovadores do documento
	var listSeg = getValue("WKListSecurity"); //Lista com a segurança do documento
	var listRelated = getValue("WKListRelatedDocument"); //Lista com os documentos relacionados ao documento
	var state = getValue("WKState"); //	Estado da ação: PUBLISH ou MODIFY
	var user = getValue("WKUser"); //Usuário logado
	var company = getValue("WKCompany"); //Código da Empresa
```

---

## Resposta #2

**Cesar Tomita** (@Cesar_Tomita) — 25/04/2023, 07:15

Bom dia, obrigado pelo retorno.

Como posso customizar esses eventos específicos? Existe uma documentação?

---

## Resposta #3

**Afonso Uliana Neto** (@Afonso) — 25/04/2023, 08:46

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/afonso/48/655_2.png) Afonso:
>
> > `beforeDocumentPublisher`

[https://tdn.totvs.com.br/display/public/fluig/Eventos+de+Documentos](https://tdn.totvs.com.br/display/public/fluig/Eventos+de+Documentos)

---

---

# Permissão de alteração de documento

> **Fonte:** [https://fluiggers.com.br/t/permissao-de-alteracao-de-documento/869](https://fluiggers.com.br/t/permissao-de-alteracao-de-documento/869)
> **Categoria:** ECM / GED
> **Criado em:** 11/01/2022, 16:25
> **Visualizações:** 551 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 16:25

Estou enfrentando um problema, após ter feito atualização da versão 1.6.5 para 1.7.1 do Fluig.

Eu tenho uma subpasta da pasta ‘Formulários do Fluig’. Esta pasta se chama ‘ucrg\_compliance’.
Esta pasta, conforme imagem, dá direito totais aos usuários.

![compliance_pasta](https://fluiggers.com.br/uploads/default/optimized/1X/32aaedbb8ed866be651a3c6a38aa86f2955cda27_2_690x196.png)

O documento que o usuário cria via código de Widget, fica lá registrado, mas sem nenhuma atribuição de segurança.

![compliance_doc](https://fluiggers.com.br/uploads/default/optimized/1X/2a07fdba6280212d64f937f8afd06c1d1bd41166_2_690x164.png)

Será por isto que o usuário consegue criar o documento, mas NÃO consegue alterá-lo?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 16:43

Pensando aqui com meus botões, eu crio o documento, como eu havia dito, via código.

E o código estava escrito assim:

```auto
var _jSonRest= {
			   "documentDescription": nomeUsuario+"_"+siglaUsuario+"_"+intVideo,
			   "parentDocumentId": numeroPasta,
			   "version": 1000,
			   "inheritSecurity": false,
			   "attachments": [ ],
			   "formData": objCamposForm
			 }//jsonRest
	   //---
	   jQuery.ajax({
      	method:'POST',
      	data:JSON.stringify(_jSonRest),
      	url:'/api/public/2.0/cards/create',
      	contentType:'application/json; charset=UTF-8',
      	dataType:'json',
      	success: function(data,txt,objeto)
      	{
      		//console.log ("Não houve erro; criou o documento");
      		//console.log("Texto retornado: "+txt);
      		//console.log(objeto);
      		},//success
      	error: function (x,e,e2){
      		alert ('Deu erro na criação do documento: '+x.status+' '+e+' '+e2);
      		//alert (x.status+" "+e+' '+e2);
      	}//error
      	});//ajax
```

Analisando, vi a linha **“inheritSecurity”: false,** e agora estou experimentando pôr **“inheritSecurity”: true,**.

Vamos ver se dá certo.

---

---

# Permissão dinâmica de grupos a documentos do GED

> **Fonte:** [https://fluiggers.com.br/t/permissao-dinamica-de-grupos-a-documentos-do-ged/2804](https://fluiggers.com.br/t/permissao-dinamica-de-grupos-a-documentos-do-ged/2804)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `ged`, `servicetask`, `lgpd`
> **Criado em:** 21/05/2024, 17:41
> **Visualizações:** 200 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**RafaelMD** (@RafaelMD) — 21/05/2024, 17:41

Tenho um servicetask em que gravo os anexos do processo no GED, apenas grupos específicos podem ver os anexos de cada solicitação e esse grupo é definido por um campo hidden no formulário. Como posso atribuir a permissão à pasta em que os anexos estão gravados apenas para esse grupo?

---

## Resposta #1

**venturelli** (@venturelli) — 22/05/2024, 10:38 | ❤️ 2

Você pode usar esse script de criação de pasta como exemplo [Source of cadastro\_fornecedor.criarPastaFornecedorCasoNaoExista.js - Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/cadastro-fornecedor/workflow/scripts/cadastro_fornecedor.criarPastaFornecedorCasoNaoExista.js) e adaptar para adicionar as permissões:

```auto
var objetoPasta = new com.fluig.sdk.api.document.FolderVO();

var permissoes = new java.util.ArrayList();
var permissao = com.fluig.sdk.api.document.DocumentPermissionVO();

var tipo = 1; // 1 = por usuário, 2 = grupo e 3 = todos os usuários
var nivel = 1; // 0 = leitura, 1 = salvar, 2 = modificar e 3 = total

permissao.setAttributionType(tipo);
permissao.setAttributionValue(form.getValue("campoHidden")); // nome do usuário ou do grupo que terá permissão
permissao.setSecurityLevel(nivel);

// permissao.setDownloadEnabled(true); //  se quiser marcar que permite download
// permissao.setShowContent(true); // se quiser habilitar a opção de permiter listar conteúdo

permissoes.add(permissao);

objetoPasta.setPermissoes(permissoes);
```

---

## Resposta #2

**RafaelMD** (@RafaelMD) — 23/05/2024, 15:37

Agradeço pela ajuda, está sendo muito útil.
Estou com certa dificuldade de entender como atribuir essas permissões à uma pasta já existente, consegui adaptar seu script para atribuir as permissões ao criar uma nova pasta pela função create() do fluigAPI.getFolderDocumentService(), mas não consegui achar outras funções/objetos que façam apenas a atualiazação da pasta que já existe.
O mais próximo que encontrei foi o updateFile() mas este está relacionado apenas ao objeto DocumenteVO(), não achei um correspondente para o FolderVO().

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 24/05/2024, 10:34 | ❤️ 1

Dei uma olhada e realmente na [FolderDocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html) não tem a atualização.

Como toda pasta é um documento, dá pra usar então a [DocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html).

```auto
var version = 1000; // As pastas não são versionadas, então a versão sempre vai ser 1000.
var documentId = 0; // aqui vais ter que substituir pelo id da tua pasta

var documentService = fluigAPI.getDocumentService();
var permissoes = documentService.getDocumentPermissions​(documentId, version); // recupera a lista atual de permissões

var permissao = ...; // cria a permissao da mesma forma que antes

permissoes.add(permissao); // adiciona a nova permissão à lista
documentService.setDocumentPermissions​(documentId, permissoes)
```

---

## Resposta #4

**RafaelMD** (@RafaelMD) — 24/05/2024, 11:19

Funcionou perfeitamente!
Sou iniciante e em alguns momentos o desenvolvimento sofre algumas pausas por falta de conhecimento, por tanto suas respostas foram de grande valor e utilidade pra mim, agradeço muito!

---

---

# Permissões ECM - Permissão de modificação

> **Fonte:** [https://fluiggers.com.br/t/permissoes-ecm-permissao-de-modificacao/439](https://fluiggers.com.br/t/permissoes-ecm-permissao-de-modificacao/439)
> **Categoria:** ECM / GED
> **Criado em:** 13/05/2021, 08:56
> **Visualizações:** 845 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 13/05/2021, 08:56

Pessoal,

Por necessidade de um projeto, tive a necessidade de restringir permissões das pasta no ECM, até aí tudo bem.

Porém, eu defini um requisito que em uma determinada pasta, os usuários não poderão criar um novo registro de formulário, somente visualizar, editar ou apagar.

Para isso, configurei as permissões da dita pasta como:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/98d377e65bb00a8ddd73bf07935d706fe7dc4d48_2_690x114.png)

Ao acessar, o usuário consegue criar o registro normalmente.

Obs.: já testei ali a opção SOMENTE os colaboradores comuns dos grupos e deu no mesmo.

Essa permissão, considera adição como modificação?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:45

Bom dia,

M não era pra deixar adicionar.

L = Leitura,
G = Gravação,
M = Modificação,
T = Tudo

Essa pasta não está setada para pegar as permissões da pasta pai?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 13/05/2021, 09:49

Na coloquei para herdar as permissões da pasta pai porque existem outras pasta no mesmo nível do diretório e quero que essas outras tenham acesso total. Somente essa específica que eu queria restringir isso.

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:49

![image](https://fluiggers.com.br/uploads/default/original/1X/0af1f89288f5dd05a02fa5b7fb0d9cc463e2c8b2.png)

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:52

No caso você seta diretamente nela se irá herdar a pasta pai, não influencia as outras, mas se você não setou nela é estranho não ter pego. O usuário que vc testou é normal? Não é um usuário ADM?

---

## Resposta #5

**Daniel ** (@daniel_fmartins) — 13/05/2021, 09:54

Isso, é um usuário normal que eu criei pra teste. Através do perfil ADM que tenho seto as permissões e testo com esse user que criei.

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 13/05/2021, 09:58

Tenta setar na Aba restrições para ver se da certo.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/af09d811d652f4b35ae7e4af61ec576b40eb62f9_2_690x194.png)

---

## Resposta #7

**Daniel ** (@daniel_fmartins) — 13/05/2021, 10:08

Deu na mesma. Vou tentar fazer um teste em outro ambiente.

---

---

# Permissões em pastas

> **Fonte:** [https://fluiggers.com.br/t/permissoes-em-pastas/2841](https://fluiggers.com.br/t/permissoes-em-pastas/2841)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `pasta`
> **Criado em:** 07/06/2024, 11:31
> **Visualizações:** 228 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Eder** (@edersat0) — 07/06/2024, 11:31

Olá a todos
Estou precisando de uma ajuda, a respeito de atribuir permissões de acesso a pastas.

Preciso atribuir as regras de acesso e leitura para certos grupos específicos, de acordo com um json, onde passo o nome do grupo, o tipo de grupo e o nível de acesso (códigos setados com o que possui na API/SDK).

Atualmente, essa função busca o id das pastas e subpastas, tratando no success um Get das permissões (que seria o json já citado), porém, ele faz a leitura do array e apenas inclui as permissões do usuário, ignorando os grupos

---

## Resposta #1

**Wanderley Junior** (@gomeswjunior) — 10/06/2024, 15:29

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/edersat0/48/1161_2.png) edersat0:
>
> > acesso

Eder, compartilhe o trecho do código onde a leitura é realizada e onde a chamada é feita

---

## Resposta #2

**Eder** (@edersat0) — 10/06/2024, 17:35

Função da permissão

```auto
function AplicaPermissaoNasPasta() {
    var idPastaObra = $("#idPastaObra").val();

    parent.WCMAPI.Create({
        method: "GET",
        url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/ecm/document/listDocument/" + idPastaObra,
        error: function (x, e) {
            console.log(x);
            console.log(e);
            if (x.status == 500) {
                // alert("Listar documentos das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
            }
        },
        success: function (retorno) {
            console.log(retorno.content);

            for (var i = 0; i < retorno.content.length; i++) {
                parent.WCMAPI.Create({
                    method: "GET",
                    async: false,
                    url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/2.0/documents/getDocumentPermissions/" + retorno.content[i].id + "/1000",
                    error: function (x, e) {
                        console.log(x);
                        console.log(e);
                        if (x.status == 500) {
                            // alert("Buscar permissões das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
                        }
                    },
                    success: function (retorno2) {
                        var dados = retorno2.content;

                        dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: grupos });
                        // dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: usuario });

                        var data = {
                            documentId: retorno.content[i].id,
                            documentPermissionVO: dados,
                        };

                        parent.WCMAPI.Create({
                            method: "POST",
                            url: "http://desenvolvimento.castilho.com.br:3232" + "/api/public/2.0/documents/setDocumentPermissions/",
                            contentType: "application/json",
                            data: JSON.stringify(data),
                            success: function () { },
                            error: function (x, e) {
                                console.log(x);
                                console.log(e);
                                if (x.status == 500) {
                                    //alert("Alterar permisão das pastas da obra: Erro Interno do Servidor: entre em contato com o Administrador.");
                                }
                            },
                        });
                    },
                });
            }
        },
    });
}
```

Função onde busco os detalhes das permissões

```auto
function RetornaListPermissao(list) {
    var permissao = [];
    for (var i = 0; i < list.length; i++) {
        permissao.push({ securityLevel: list[i][1], downloadEnabled: "false", showContent: "true", attributionType: list[i][2], attributionValue: list[i][0] });
    }
    return permissao;
}
```

E json que utilizo para tentar aplicar as permissões:

```auto
function CriarPastas() {
    var nomePasta = $("#nomeObra").val();
    var Regional = $("#regionalObra :selected").text();

    var json = [
        {
            //Pasta Obra
            nome: nomePasta,
            parentFolder: $("#regionalObra").val(),
            permissao: RetornaListPermissao([
                [Regional, 0, 2],
                ["Controladoria", 3, 2],
                ["Engenheiros", 0, 2],
                ["ReuniaoZero", 0, 2],
                ["RH", 0, 2],
                ["Planejamento", 0, 2],
                ["Chefes de Escritório", 0, 2],
                [$("#usuario").val(), 2, 1],
            ]),
            inheritSecurity: false,
        },
    ]

    $("#idPastaObra").val(CriaPastaObra(json));
}
```

O valor dos grupos que eu passo na primeira função é chamada com o nome do grupo presente no array, mas por algum motivo ele ignora e pega apenas o valor do usuário

---

## Resposta #3

**venturelli** (@venturelli) — 25/06/2024, 10:28

A parte de criação da pasta parece estar ok pra mim… mas não entendi a parte do `AplicaPermissaoNasPasta` . Quando é chamada? E o que é essa variável `grupos` aqui?

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/edersat0/48/1161_2.png) edersat0:
>
> > ```auto
> > dados.push({ securityLevel: 2, downloadEnabled: false, showContent: true, attributionType: 2, attributionValue: grupos });
> > ```

Eu acho que esse pode ser o erro, já que se o atributo for incorreto (ou um grupo que não existe), não vai atualizar as permissões. Gera algum log de erro?

---

## Resposta #4

**Eder** (@edersat0) — 25/06/2024, 16:21

Eu chamo esta função das permissões logo após criar as pastas.

A variável ***grupos*** ali eu atribuí ela para ser o nome do grupo, que constam dentro do JSON.
*(Acabei deixando passar enquanto mandava a função, mas no nome dela dentro do parenteses eu instancio essa var, para utilizar ela pra buscar os grupos do json)*

Sobre log, a única informação que aparece, é apenas que a thread não pode estar alocada em duplicidade. Mas isso não impede de criar as pastas, que ficam apenas com as permissões base do usuário, como já citado.

Já realizei testes sem passar nenhum parâmetro no *attributionValue*, mas o único retorno que obtive foi erro de FDN\_GROUP, dizendo que não conseguiu encontrar o id da pasta para aplicar as permissões…

---

---

# Recuperando o caminho de um documento no GED ou anexo ao processo

> **Fonte:** [https://fluiggers.com.br/t/recuperando-o-caminho-de-um-documento-no-ged-ou-anexo-ao-processo/734](https://fluiggers.com.br/t/recuperando-o-caminho-de-um-documento-no-ged-ou-anexo-ao-processo/734)
> **Categoria:** ECM / GED
> **Criado em:** 22/10/2021, 09:32
> **Visualizações:** 927 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 22/10/2021, 09:32 | ❤️ 1

Bom dia pessoal, estou precisando consumir uma API externa que junta documentos PDF. Basicamente preciso recuperar todos documentos anexos em um processo, juntá-los e gravar no GED. Porém estou tendo uma dificuldade grande pra recuperar o caminho desse documento, já que a API que consumo, fica no mesmo servidor do Fluig, eu envio o caminho do arquivo pra ela e ela faz todo o trabalho. Alguem sabe se tem uma forma de eu enviar o ID do documento e recuperar o caminho, pode SQL ou APIfluig?

---

## Resposta #1

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 22/10/2021, 15:51 | ❤️ 1

[@mauriciolanner](/u/mauriciolanner) , segue função que retorna a URL do documento pelo ID:

```javascript
function retornaDocumento(idDoc, callback) {
    $.ajax({
        async: false,
        url: '/api/public/ecm/document/downloadURL/' + idDoc,
        method: 'GET',
        contentType: 'application/json;',
    }).done((result) => {
        callback(result.content);
    }).fail((result) => {
        console.error(result);
        FLUIGC.toast({
            title: 'Falha: ',
            message: 'Não foi possivel encontrar o arquivo.' ,
            type: 'danger'
        });
    });
} // retornaDocumento
```

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 22/10/2021, 16:22

Muito bom, mas não seria exatamente isso, pois o que estou procurando é o arquivo dentro de C:\\ A API que consumo eu preciso enviar o arquivo na pasta, pois por protocolo http ele não consegue editar o arquivo e salvar depois. Mas acho que isso pode ser uma luz pra conseguir resolver o problema, muito obrigado desde já pela ajuda.

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 22/10/2021, 16:46

Tenta isso:

Lembra de alterar o caminho de acordo com sua instalação.

```auto
var docs = hAPI.listAttachments(); // Lista com os anexos presentes na solicitação
// Percorre a lista de anexos da solicitação
for (var i = 0; i < docs.size(); i++) {
	var anexo = docs.get(i);
	// Procurar por anexo onde a descrição do documento seja "REGISTRO DE NASCIMENTO.pdf"
	if (anexo.getDocumentDescription() == "REGISTRO DE NASCIMENTO.pdf") {
		var caminho = "D:/volumes/minha_empresa/public/" + anexo.getDocumentId() + "/" + anexo.getVersion() + "/" + anexo.getPhisicalFile();
		log.info("### caminho no disco")
		log.dir(caminho)
		break;
	}
}
```

---

---

# Refletindo informações do protheus para o Fluig via dataset

> **Fonte:** [https://fluiggers.com.br/t/refletindo-informacoes-do-protheus-para-o-fluig-via-dataset/2081](https://fluiggers.com.br/t/refletindo-informacoes-do-protheus-para-o-fluig-via-dataset/2081)
> **Categoria:** ECM / GED
> **Tags:** `form`, `dataset`
> **Criado em:** 26/07/2023, 18:50
> **Visualizações:** 318 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**joaopretti** (@joaopretti) — 26/07/2023, 18:50

Boa noite pessoal! estou com uma duvida que não acho em forum e video nenhum!

Eu criei um dataset com as colunas de uma tabela que eu gostaria de trazer para o fluig do protheus.

Conforme imagem a baixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/e/ed672d3bb5b316b0bf5a88074193836d95f65743_2_690x220.png)

Eu gostaria de digitar o numero do pedido e clicar no botão ‘‘buscar’’, ao clicar no botão ele me traria todos os campos preenchidos do dataset que são as tabelas que devem preencher estes diversos campos. Como eu poderia fazer isso? por favor.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/07/2023, 00:05

Olá, para pegar os dados do dataset no formulário faz assim…

Função no javascript:

```auto
function preenche_form() {
	const num_pedido = $("#num_pedido").val();

	const c1 = DatasetFactory.createConstraint("num_pedido", num_pedido, num_pedido, ConstraintType.MUST);

	const ds = DatasetFactory.getDataset("Nome_Dataset", null, [C1], null).values;


	if (ds.length > 0) {
		$("#fornecedor").val(ds[0].C7_FORNECE);
		$("#observacoes").val(ds[0].C7_OBS);
		$("#preco_unitario").val(ds[0].C7_PRECO);
		$("#produto").val(ds[0].C7_PRODUTO);
		$("#quantidade").val(ds[0].C7_QUANT);
	}
}
```

Botão no HTML:

```auto
<button class="btn btn-default" onclik="preenche_form()">Buscar</button>
```

Para esse exemplo levei em consideração que o dataset espere uma constraint “num\_pedido” e que para cada número de pedido retorne apenas um registro.

Altere os IDs dos campos para os que estão no seu form.

E os nome dos campos do dataset para os do seu dataset.

A lógica é mais ou menos essa… testa aí.

Abs

---

---

# Relatório de Acesso aos arquivos

> **Fonte:** [https://fluiggers.com.br/t/relatorio-de-acesso-aos-arquivos/1173](https://fluiggers.com.br/t/relatorio-de-acesso-aos-arquivos/1173)
> **Categoria:** ECM / GED
> **Criado em:** 01/07/2022, 15:20
> **Visualizações:** 387 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniela** (@daniela.troggian) — 01/07/2022, 15:20

Pessoal, boa Tarde:

Preciso saber se há algum relatório ou algum dataset simples que eu possa gerar que mostre as datas de acesso ao dados. Preciso saber quem acessou o arquivo X … o que fez com o arquivo… se modificou ou não…
Há alguma forma de fazer isso?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 12/07/2022, 14:56

[@daniela.troggian](/u/daniela.troggian)

Acredito que deva estar falando sobre o recurso de auditorias.
Da uma olhada nos links abaixos

[https://tdn.totvs.com/pages/releaseview.action?pageId=544206930#Plataforma❙Configuraçãodeeventosdeauditoria-acessar](https://tdn.totvs.com/pages/releaseview.action?pageId=544206930#Plataforma%E2%9D%99Configura%C3%A7%C3%A3odeeventosdeauditoria-acessar)

[https://tdn.totvs.com/pages/releaseview.action?pageId=286511885](https://tdn.totvs.com/pages/releaseview.action?pageId=286511885)

---

---

# Remover mensagem de ERRO

> **Fonte:** [https://fluiggers.com.br/t/remover-mensagem-de-erro/2818](https://fluiggers.com.br/t/remover-mensagem-de-erro/2818)
> **Categoria:** ECM / GED
> **Tags:** `fluigapi`, `evento`
> **Criado em:** 28/05/2024, 17:51
> **Visualizações:** 194 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Gabriel Martins** (@Gabriel_Martins) — 28/05/2024, 17:51

Ola Pessoal, sou novo por aqui e gostaria de saber se existe uma possibilidade de remover a mensagem de erro que aparece abaixo do meu alert no meu evento beforeDocumentPublisher

```auto
function beforeDocumentPublisher() {

    var state = getValue("WKState");

    if(state == "PUBLISH"){

        var doc = getValue("WKDocument");

        if(doc.getParentDocumentId() == 215362 && doc.getVersionOption() == 0){

            // Reduz o retorno de registros para reduzir impacto em performance.
            var constraintDocument1 = DatasetFactory.createConstraint('sqlLimit', '0', '1', ConstraintType.MUST);

            // Passando código da pasta pai para o Dataset
            var constraintDocument2 = DatasetFactory.createConstraint('parentDocumentId', doc.getParentDocumentId(), doc.getParentDocumentId(), ConstraintType.MUST);

            // Consultando apenas registros de documentos ativos.
            var constraintDocument3 = DatasetFactory.createConstraint('activeVersion', 'true', 'true', ConstraintType.MUST);

            // Consultando apenas nos documentos que não foram removidos.
            var constraintDocument4 = DatasetFactory.createConstraint('deleted', 'false', 'false', ConstraintType.MUST);

            // Consultando documentos que tenham a mesma descrição informada na
            // publicação
            var constraintDocument5 = DatasetFactory.createConstraint(
                    'documentDescription', doc.getDocumentDescription(), doc
                            .getDocumentDescription(), ConstraintType.MUST);

            var datasetDocumentActive = DatasetFactory.getDataset('document', null,
                    new Array(constraintDocument1, constraintDocument2,
                            constraintDocument3, constraintDocument4,
                            constraintDocument5), null);

             var isExistDoc = datasetDocumentActive != null && datasetDocumentActive.rowsCount > 0
             && (datasetDocumentActive.getValue(0, "documentDescription") == doc.getDocumentDescription());

             var erro = "<div class='alert alert-danger' role='alert'>Já existe um documento com a mesma descrição informada!</div>";


            if(isExistDoc){
                throw erro;

            }

        }

    }
```

![Screenshot_1](https://fluiggers.com.br/uploads/default/original/2X/c/c3107d30ca8adbc3e6b16bfccadfcf9b45787c6b.png)

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 05/06/2024, 16:44

não é esse if que da o throw?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 07/06/2024, 09:54 | ❤️ 1

Hoje, infelizmente, não tem como remover. Acho que vale um chamado de melhoria pra isso porque de fato tem alguns tipos de erros como esse seu que não faz sentido.

Mas procure evitar o uso de html em mensagens porque a tendência é um dia parar de funcionar devido a atualizações de segurança.

---

## Resposta #3

**Gabriel Martins** (@Gabriel_Martins) — 11/06/2024, 15:31

Vou fazer isso [@venturelli](/u/venturelli), Muito obrigado pelo retorno

---

---

# Salvar relatórios do RM dentro do GED de forma automática

> **Fonte:** [https://fluiggers.com.br/t/salvar-relatorios-do-rm-dentro-do-ged-de-forma-automatica/1916](https://fluiggers.com.br/t/salvar-relatorios-do-rm-dentro-do-ged-de-forma-automatica/1916)
> **Categoria:** ECM / GED
> **Tags:** `rm`, `integração`
> **Criado em:** 12/05/2023, 09:43
> **Visualizações:** 273 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**William Anjos** (@William_Anjos) — 12/05/2023, 09:43

Alguém conhece uma forma de salvar os relatórios gerados no RM de forma automática no GED?

Eu sei que dar para integrar o RM ao GED para que o GED seja o gerenciador de arquivos do RM. Fiz essa integração mas percebi que, aparentemente, a única forma de enviar os arquivos para o GED é selecionado de forma manual o arquivo que será enviado, mas estou tentando adicionar esses arquivos de forma automática.

Segui essa documentação para integrar RM x GED: [https://tdn.totvs.com/pages/releaseview.action?pageId=270899168](https://tdn.totvs.com/pages/releaseview.action?pageId=270899168)

Alguém teria uma sugestão de como automatizar esse arquivamento?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 12/05/2023, 10:30

Opa William, beleza?

Você pode usar o serviço [wsReport](https://tdn.totvs.com/display/public/LRM/TBC+-+Web+Services+Reports) do RM, e executar a partir do fluig, este serviço irá te retornar o base64 relatório, com isso você consegue usar esse base64 e gravar em uma pasta especifica do GED usando a [docAPI](https://tdn.totvs.com/display/public/fluig/docAPI) do fluig.

Aqui mais abaixo tem um exemplo de uso dela, procure pela função **salvarArquivo**

[Gerando um arquivo PDF a partir de um template de e-mail no Fluig](https://github.com/sergiomachadosilva/fluig-datasets/blob/master/gerarPdfTemplateEmail/gerarPdfTemplateEmail.js)

---

---

# Será que o problema é o endereço que aparece no Fakepath?

> **Fonte:** [https://fluiggers.com.br/t/sera-que-o-problema-e-o-endereco-que-aparece-no-fakepath/863](https://fluiggers.com.br/t/sera-que-o-problema-e-o-endereco-que-aparece-no-fakepath/863)
> **Categoria:** ECM / GED
> **Criado em:** 08/01/2022, 16:24
> **Visualizações:** 2069 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/01/2022, 16:24

Minha intenção é criar um documento baseado num formulário customizado. O documento ficará armazenado numa subpasta da 'Formulários do Fluig ’ .

Neste formulário, para teste, criei apenas um campo, de nome *namTxtIdFile*.

Mas, na minha intenção **maior**, *no mesmo tempo em que se cria o documento*, gostaria de anexar a ele um arquivo *.txt*, previamente ‘subido’ para o servidor.

Para tal, na minha ideia, tenho dois passos:
a) Fazer o upload do *.txt*
b) Criar o documento e anexar o *.txt* nele.

Assim, numa primeira rotina (/api/public/2.0/contentfiles/upload/), faço um upload do arquivo *.txt*, que cai na pasta do usuário (subpasta da Volume) atualmente logado no Fluig (que sou eu mesmo, naturalmente) e, por consequência, autor do upload.
Vou lá conferir no Volume e o arquivo *.txt* está lá na pasta do autor (de novo, a minha mesmo).
Tudo certo. A rotina funciona bem.

Uma vez confirmado o upload, executo outro código via clique para fazer o desejado, que é criar o documento.

No ponto em que estou, o código de criação do documento mostrado abaixo funciona bem, mas não há o preenchimento da propriedade **“attachments”: \[\],**.
Isto é, eu crio o documento sem problemas, mas não há, evidentemente, um arquivo *.txt* a ele associado.

**Como alimentar essa propriedade “attachments”: \[\],**, para que, ao mesmo tempo em que crio o documento, possa ir buscar o tal arquivo *.txt* existente no Volume para ficar como anexo dele?

> let caso = jQuery(“#idTxtIdFile”).val();
> let idPastaMae = 81595;//subpasta da Formularios do Fluig
> var objCamposForm=\[{“name”:“namTxtIdFile”,“value”:caso}\];
> var \_jSonRest= {
> “documentDescription”: "M&a " + caso,
> “parentDocumentId”: idPastaMae,
> “version”: 1000,
> “inheritSecurity”: false,
> “attachments”: ,
> “formData”: objCamposForm
> }//jsonRest
> jQuery.ajax({
> method:‘POST’,
> data:JSON.stringify(\_jSonRest),
> url:‘/api/public/2.0/cards/create’,
> contentType:‘application/json; charset=UTF-8’,
> dataType:‘json’,
> success: function(data,txt,objeto)
> {
> alert (“criou o documento”);
> },//success
> error: function (x,e,e2){
> alert ('Deu erro na criação do documento: ‘+x.status+’ ‘+e+’ '+e2);
> }//error
> });//ajax

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 09:16 | ❤️ 1

Nunca usei a `/api/public/2.0/cards/create`, mas se ela seguir o padrão da `/api/public/ecm/document/createDocument` basta passar um objeto com o fileName preenchido, sendo igual ao do arquivo que foi enviado.

```javascript
attachments: [{
    fileName: 'nome_arquivo_enviado.extensão',
}],
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 10/01/2022, 10:12

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > ```auto
> > {
> >     fileName: 'nome_arquivo_enviado.extensão',
> > }
> > ```

Caro Bruno, muito obrigado pela resposta.

Apliquei sua sugestão. Não deu erro, mas também não associou o arquivo txt ao documento criado.

Eu pesquisei no console do Chrome o que está sendo enviado e o objeto me mostra o seguinte:

1.  attachments: Array(1)

2.  0:


```
> 1. fileName: "C:\\fakepath\\f_16860.txt"
```

> ```
> 2. [[Prototype]]: Object
>
>   1. constructor: ƒ Object()
>   2. hasOwnProperty: ƒ hasOwnProperty()
> ```

Desconfio que o endereço “C:\\fakepath\\f\_16860.txt” é que está gerando meu problema.

Digo isto porque o volume de trabalho não está na partição C:\\ do servidor onde o Fluig está instalado, mas em D:\\VOLUME.…

Seria isto? Se for, tem como alterar o ‘path’ do FAKEPATH para “**D**:\\fakepath\\f\_16860.txt”, ou outra abordagem?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 10:29 | ❤️ 1

Vou esperar, junto com você, pra ver se alguém já enviou assim.

Eu só aprendi usando a `/api/public/2.0/contentfiles/upload/` para enviar o arquivo ao Fluig e então usar a `/api/public/ecm/document/createDocument` para criar o documento. Mas nesse caso ele não fica vinculado a um card de formulário, como você quer.

Fica o exemplo de como eu crio documento (esse código executo em uma Widget)

[gist.github.com](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

#### [https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

##### criar\_documento\_fluig.js

```JavaScript
// Foram usadas as bibliotecas blob-stream e pdfkit

async function generatePdf() {
    const usuario = "login",
          senha = "senha",
          matricula_usuario = 'admin',
          pdf = new PDFDocument(),
          stream = pdf.pipe(blobStream()),
          fileName = 'Nome_Do_Arquivo.pdf',
          folderId = await findOrCreateFolderId("nova_pasta");
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 10/01/2022, 10:48

Caro Bruno,

eu estou usando, para upload, o mesmo ‘caminho’ /api/public/2.0/contentfiles/upload/ que você usa.

A parte de criação de documento é que estou usando outra api.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/01/2022, 15:12

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mautresim/48/511_2.png) Mautresim:
>
> > `> 1. fileName: "C:\\fakepath\\f_16860.txt"`

Mas quando eu informo o fileName não entrego o caminho completo, somente o nome do arquivo mesmo junto com a extensão.

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 11/01/2022, 09:08

Pois é, eu também não. Confiava que o Fluig se encarregasse de achar o arquivo, que, na minha ideia, só poderia estar na pasta Volume e subpasta do usuário que comanda a criação do documento. Esse C:\\ que aparece não fui eu quem pôs. Eu só referi o arquivo pelo nome.

---

---

# Sobre a categoria ECM / GED 

> **Fonte:** [https://fluiggers.com.br/t/sobre-a-categoria-ecm-ged/27](https://fluiggers.com.br/t/sobre-a-categoria-ecm-ged/27)
> **Categoria:** ECM / GED
> **Criado em:** 11/03/2021, 11:56
> **Visualizações:** 408 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 11/03/2021, 11:56

Card de gestão eletrônica de documentos vulgo ECM permite o versionamento, rastreabilidade, permissionamento e histórico de acesso a documentos de diversas extensões.

-   Utilize essa categoria para criar tópicos relacionados ao card ECM/GED.

-   ECM é uma categoria destinada a solucionarmos tópicos envolvendo o módulo e rotinas de Documentos

-   Devemos criar tópicos com duvidas de publicações e utilizações de novas funcionalidades que estão sendo implementadas, como complementos, webdav e etc.

---

---

# Subprocesso com campo pai X filho

> **Fonte:** [https://fluiggers.com.br/t/subprocesso-com-campo-pai-x-filho/1135](https://fluiggers.com.br/t/subprocesso-com-campo-pai-x-filho/1135)
> **Categoria:** ECM / GED
> **Criado em:** 13/06/2022, 14:53
> **Visualizações:** 544 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 13/06/2022, 14:53

Boa tarde,
É possível usar o subprocesso do BPMN 2.0 e passar para ele campos pai filho ou seja quando for iniciado o subprocesso ele receber os campos pai X filho de uma tabela?

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 20/06/2022, 22:06

Boa Noite Daniel tudo bem? Não entendi muito bem, Voce quer passar o pai-filho inteiro para o subprocesso (10 linhas quer passar as 10 linhas)? ou para cada linha do pai e filho voce quer iniciar um sub-processo? se for a primeira alternativa eu acredito que seja mais facil no processo filho, voce consultar o processo pai e criar o pai e filho do processo filho. Se voce a 2 opção voce nao vai conseguir fazer utilizando a atividade de subprocesso do Fluig, ai neste caso voce teria que ter 1 atividade de serviço no processo pai que le o pai-filho e criar um outro processo para cada registro utilizado o hAPI.StarProcess

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 21/06/2022, 08:02

Exato a primeira opção vai resolver.
Achei que teria uma forma melhor de fazer isso.

---

## Resposta #3

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 21/06/2022, 10:03

Você também pode fazer um dataset para o pai filho e carregar em um [fluig datatable](https://style.fluig.com/javascript.html#fluig-datatable) ou em uma [bootstrap datatable](https://datatables.net/examples/styling/bootstrap4)

---

---

# Upload cancelado

> **Fonte:** [https://fluiggers.com.br/t/upload-cancelado/1221](https://fluiggers.com.br/t/upload-cancelado/1221)
> **Categoria:** ECM / GED
> **Criado em:** 10/08/2022, 14:25
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Luis Nagasako** (@nagasako) — 10/08/2022, 14:25

Pessoal, boa tarde! Estamos tendo problema intermitente ao fazer upload de arquivos para o GED, o upload inicia e após um tempo é cancelado automaticamente. Após várias análises(antivirus, firewall, rede, equipamento, browser) verificamos que no Chrome, pressionando F12 quando ocorre essa falha é apresentado o erro ERR\_CONNECTION\_RESET. Já testamos outro equipamento, outro ponto de rede, outro switch, limpamos cache, testamos com aba anônima, trocamos o computador. Alguém já teve problema semelhante?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 10/08/2022, 14:52

Olá [@nagasako](/u/nagasako)

Qual o erro apresentado no log ao tentar realizar o upload?

atenciosamente,

---

## Resposta #2

**Luis Nagasako** (@nagasako) — 10/08/2022, 15:05

Não consegui identificar o erro, fizemos teste entre 15:02 e 15:03 e não aparentemente não encontrei nada. o nome do arquivo é JCP-DIRPF-2022.pdf
[server.log](https://fluiggers.com.br/uploads/short-url/j28DyyE21BvUWgbAP14epfAPprj.log) (86,4,KB)

---

---

# Usuário sem permissão para visualizar este documento

> **Fonte:** [https://fluiggers.com.br/t/usuario-sem-permissao-para-visualizar-este-documento/3081](https://fluiggers.com.br/t/usuario-sem-permissao-para-visualizar-este-documento/3081)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `soap`
> **Criado em:** 09/12/2024, 23:20
> **Visualizações:** 112 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Keven Teles** (@Keven) — 09/12/2024, 23:20

Estou utilizando o serviço SOAP ECMDocumentService para obter o Base64 de um anexo. Já realizei os seguintes passos:

1.  Adicionei o serviço necessário no ambiente;
2.  Configurei todas as permissões necessárias na área de permissões;
3.  Verifiquei cuidadosamente os dados utilizados na requisição. Apesar disso, continuo enfrentando o seguinte erro (Usuário sem permissão para visualizar este documento).
4.  Testei diretamente via soap com um user admin e mesmo assim não foi.
5.  já dei permissão na aba de documentos também

Gostaria de saber se alguém tem alguma sugestão ou solução para resolver essa questão.

---

## Resposta #1

**venturelli** (@venturelli) — 16/12/2024, 23:01

O usuário consegue acessar esse documento acessando pela interface gráfica normalmente? Pode ser algum erro de bloqueio da API Soap. Conferiu no cadastro de permissão dos serviços se está liberado esse webservice e este método?

Para o usuário admin não ter acesso ao documento, só se o documento estiver na pasta particular de outro usuário. Senão ele deveria conseguir ter acesso.

Conferiu se o userId passado na requisição é o do usuário admin também?

---

---

# Vizualizar arquivo ECM Fluig

> **Fonte:** [https://fluiggers.com.br/t/vizualizar-arquivo-ecm-fluig/1063](https://fluiggers.com.br/t/vizualizar-arquivo-ecm-fluig/1063)
> **Categoria:** ECM / GED
> **Criado em:** 02/05/2022, 09:06
> **Visualizações:** 649 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 02/05/2022, 09:06

Olá,

Quando eu realizo o upload de um arquivo e após isso clico no mesmo para visualizar, ele aparece somente as páginas em branco.

Pelo que percebi até o momento, isso ocorre com documentos que foram digitalizados.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/93b47b68849dd76ec0a3dd1c3f8f8e196a11142d_2_690x274.png)

Quando eu faço download desse mesmo arquivo para o meu computador, o arquivo é exibido corretamente.

Alguém já passou por isso?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 02/05/2022, 11:00

Qual o erro no log ao tentar renderizar o arquivo ?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 02/05/2022, 11:51

```auto
2022-05-02 11:48:47,919 INFO [com.datasul.technology.webdesk.dm.business.DocumentBO] (default task-1354) getDocumentInfo - path - /repofluig01/public/4525/1000/pdf24_merged-1.pdf
2022-05-02 11:48:47,920 INFO [com.datasul.technology.webdesk.foundation.business.DocumentCyclicalRedundancyCheckCalculator] (default task-1354) Calculando o CRC /repofluig01/public/4525/1000/pdf24_merged-1.pdf
2022-05-02 11:48:47,932 INFO [com.datasul.technology.webdesk.foundation.business.DocumentCyclicalRedundancyCheckCalculator] (default task-1354) CRC Calculado 4105667919
2022-05-02 11:48:48,524 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) oldViewer: false
2022-05-02 11:48:48,525 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) internalVisualizerServer: https://api.accusoft.com.br
2022-05-02 11:48:48,525 INFO [com.totvs.technology.ecm.accusoft.viewer.DocumentViewerUrlServlet] (default task-1352) allowsHttpForInternalVisualizerServer: false
``´
Foi o que consegui identificar.
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/05/2022, 12:03

[@daniel\_fmartins](/u/daniel_fmartins)

me encaminha este arquivo [igorskater@gmail.com](mailto:igorskater@gmail.com)

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 02/05/2022, 14:27

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/fluigor.com.br/48/1817_2.png) fluigor.com.br:
>
> > [igorskater@gmail.com](mailto:igorskater@gmail.com)

Arquivo enviado para o email.

---

## Resposta #5

**matheus** (@matheus) — 05/04/2024, 15:37

qual foi a solução???

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 23/09/2024, 22:20

a api de visualização foi atualizada!

---

## Resposta #7

**Rodrigo Miranda** (@Rodrigo_Miranda) — 07/07/2025, 16:02

tem o parametro atualizado?

---

---

# docApi + attachments

> **Fonte:** [https://fluiggers.com.br/t/docapi-attachments/3185](https://fluiggers.com.br/t/docapi-attachments/3185)
> **Categoria:** ECM / GED
> **Tags:** `processo`, `fluigapi`
> **Criado em:** 07/03/2025, 11:20
> **Visualizações:** 215 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Silva** (@GuilhermeSilva) — 07/03/2025, 11:20

Bom dia pessoal, tudo certo?

Estou com dificuldades ao utilizar a docApi com Attachments, basicamente eu anexo no meu Processo o documento, e invés dele salvar na pasta com código, ele salva sempre na do ECM Raiz, e também quando vai para raiz não é possível visualizar o documento que fiz upload:

```auto
function beforeStateEntry(sequenceId) {
        log.info("Iniciando beforeStateEntry com sequenceId: " + sequenceId);

        if (sequenceId == 8) {
            log.info("SequenceId é 8, iniciando processamento de anexos.");

            // ID da pasta "Gestores - assinatura" previamente criada no GED
            var folderId = 32792; // Substitua pelo ID real da pasta

            // Verifica se a pasta existe
            try {
                var folderDto = docAPI.getDocument(folderId);
                if (!folderDto || folderDto.getDocumentType() != "1") {
                    log.error("A pasta com ID " + folderId + " não existe ou não é uma pasta.");
                    return;
                }
            } catch (e) {
                log.error("Erro ao verificar a existência da pasta: " + e);
                return;
            }

            // Obtém a lista de anexos do processo
            var attachments = hAPI.listAttachments();
            log.info("Número de anexos encontrados: " + attachments.size());

            for (var i = 0; i < attachments.size(); i++) {
                var docDto = attachments.get(i);
                log.info("Processando anexo ID: " + docDto.getDocumentId() + ", Versão: " + docDto.getVersion());

                if (docDto.getDocumentType() == "7") { // Verifica se é um anexo
                    log.info("Anexo identificado. Iniciando cópia para a área de upload.");

                    // Copia o documento para a área de upload do usuário
                    var copiedFiles = docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), docDto.getVersion());
                    log.info("Arquivos copiados para a área de upload: " + copiedFiles);

                    // Configurações para o novo documento
                    var newDocDto = docAPI.newDocumentDto();
                    newDocDto.setDocumentDescription(docDto.getDocumentDescription());
                    newDocDto.setDocumentType("2"); // Tipo 2 indica documento
                    newDocDto.setParentDocumentId(folderId); // Define a pasta de destino
                    newDocDto.setActiveVersion(true);
                    newDocDto.setColleagueId(getValue("WKUser")); // Usuário atual
                    newDocDto.setPublisherId(getValue("WKUser")); // Publicador

                    // Cria o anexo principal
                    var attachArray = new java.util.ArrayList();
                    for (var j = 0; j < copiedFiles.length; j++) {
                        var mainAttach = docAPI.newAttachment();
                        mainAttach.setFileName(copiedFiles[j]);
                        mainAttach.setPrincipal(j == 0); // Define o primeiro arquivo como principal
                        mainAttach.setAttach(false);
                        attachArray.add(mainAttach);
                    }

                    // Configurações de aprovador
                    var aprovador = docAPI.newApproverDto();
                    aprovador.setCompanyId(getValue("WKCompany"));
                    aprovador.setColleagueId(getValue("WKUser")); // Aprovador
                    aprovador.setDocumentId(0); // Será atualizado após a criação
                    aprovador.setVersion(1); // Versão do documento
                    aprovador.setLevelId(1); // Nível de aprovação
                    aprovador.setApproverType(0); // Tipo de aprovador (0 = Colaborador)
                    var aprovadoresArray = new java.util.ArrayList();
                    aprovadoresArray.add(aprovador);

                    try {
                        // Cria o novo documento no GED
                        var doc = docAPI.createDocument(newDocDto, attachArray, null, aprovadoresArray, null);
                        log.info("Documento criado com sucesso. ID: " + doc.getDocumentId());
                    } catch (e) {
                        log.error("Erro ao criar o documento: " + e);
                    }
                } else {
                    log.info("Documento ID: " + docDto.getDocumentId() + " não é um anexo. Tipo: " + docDto.getDocumentType());
                }
            }
        } else {
            log.info("SequenceId não é 8. Nenhuma ação será executada.");
        }
    }
```

tomei como base essas documentações:
[https://tdn.totvs.com/display/public/fluig/docAPI](https://tdn.totvs.com/display/public/fluig/docAPI)
[https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos](https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos)

---

## Resposta #1

**Narles Lino** (@Narles_Lino) — 13/03/2025, 17:43

Boa tarde.

Verifique se lembrou de dar permissão, no mínimo de gravação, na pasta criada para o grupo de usuário(s) que irá executar esse processo.

Pode ser por isso que ele não está respeitando o parâmetro folderId.

---

---
