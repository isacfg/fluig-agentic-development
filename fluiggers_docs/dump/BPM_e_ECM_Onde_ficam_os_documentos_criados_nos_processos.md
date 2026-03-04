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
