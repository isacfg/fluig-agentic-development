# Arquivo físico - Volume Fluig

> **Fonte:** [https://fluiggers.com.br/t/arquivo-fisico-volume-fluig/513](https://fluiggers.com.br/t/arquivo-fisico-volume-fluig/513)
> **Categoria:** Ambiente Fluig
> **Criado em:** 14/06/2021, 08:23
> **Visualizações:** 1253 | **Likes:** 7 | **Respostas:** 0

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 14/06/2021, 08:23

Bom dia galera!

Alguém sabe como eu posso encontrar o caminho físico de um arquivo anexado a uma solicitação/workflow? Não vou editar nem fazer qualquer alteração, apenas para leitura mesmo, antes que me falem das APIs para resgatar o documento, não queria usá-las.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 14/06/2021, 08:51 | ❤️ 1

Bom dia [@vinny.silveira](/u/vinny.silveira),

Sem API acho que só com consulta ao Banco de Dados, mas vai ter que fazer vários JOINS acho.
Na tabela DOCUMENTOS você tem o nome físico dos arquivos e na tabela FDN\_VOLUMESITE você tem o volume principal de ondem você esta guardando os arquivos.
Você vai precisar achar a tabela de relacionamento deles com o Processo e com o formulário e versão.

---

## Resposta #2

**Eduardo Vantini Neto** (@eduardo.vantini) — 14/06/2021, 08:59 | ❤️ 2

Olá, entra no diretório onde fica o volume. No diretório “public”, você acessa “nr\_documento/versao/nome\_documento”.

Para pegar as informações do caminho pelo número da solicitação usa a query

```auto
select d.NR_DOCUMENTO
    ,d.NR_VERSAO
    ,d.NM_ARQUIVO_FISICO
from fluig..ANEXO_PROCES p join fluig..DOCUMENTO d on p.NR_DOCUMENTO = d.NR_DOCUMENTO
where p.NUM_PROCES = 2466
```

Acho que assim você consegue chegar no arquivo físico.

Abs

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 14/06/2021, 09:04 | ❤️ 4

Estou fazendo uma classe Java pra enviar anexos nos e-mails do Fluig, mas lendo bem a documentação, descobri que não preciso do caminho do arquivo físico nem baixá-lo, posso passar uma URL (a url pública do anexo/documento) para um DataHandler que ele faz a mágica de baixar o arquivo e anexá-lo, dessa forma:

```auto
BodyPart attachment = new MimeBodyPart();
URL url = new URL("URL_PUBLICA_DO_ARQUIVO");
attachment.setDataHandler(new DataHandler(url));
attachment.setDisposition(Part.ATTACHMENT);
attachment.setFileName(url.getFile());
```

Mas valeu mesmo [@Willian\_Laynes](/u/willian_laynes) e [@eduardo.vantini](/u/eduardo.vantini) pela rápida resposta!!

---

## Resposta #4

**system** (@system) — 15/06/2021, 08:14

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
