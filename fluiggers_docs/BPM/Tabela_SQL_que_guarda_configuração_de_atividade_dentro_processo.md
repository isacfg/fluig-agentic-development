# Tabela SQL que guarda configuração de atividade dentro processo

> **Fonte:** [https://fluiggers.com.br/t/tabela-sql-que-guarda-configuracao-de-atividade-dentro-processo/812](https://fluiggers.com.br/t/tabela-sql-que-guarda-configuracao-de-atividade-dentro-processo/812)
> **Categoria:** BPM
> **Tags:** `sql`
> **Criado em:** 06/12/2021, 09:50
> **Visualizações:** 2085 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Victor Santos Henrique** (@Victor.S.Henrique) — 06/12/2021, 09:50

Bom dia!

Gostaria de saber qual tabela possuí as configurações das atividades dentro de cada processo, mais especificamente preciso alterar de forma manual o mecanismo de atribuição de uma atividade dentro de um processo ativo. Já fiz isso pelo fluig, usando 3 versões diferentes e duas instalações diferentes, mesmo assim não alterou. Chamado na TOTVS também não resolveu, a última interação deles foi que eu subisse mais uma vez, o que não resolve. Quero tentar alterar na mão dentro do banco de dados e ver se funciona.

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 07/12/2021, 14:06 | ❤️ 1

essa query pega o status atual da tabela, ela deve te ajudar, lembrando que a tabela ML001134 é a tabela do processo, você precisa descobrir qual a tabela do processo que você vai pegar.

```auto
select
andamento.NUM_PROCES AS NUMFLUIG,
historico.NUM_SEQ_ESTADO AS STATUS,
historico.
principal.dataSolicitacao,
principal.fornecedor,
principal.idFornecedor,
principal.centroCusto,
principal.idCentroCusto,
principal.Filial,
principal.idFilial,
principal.valorTotal,
principal.dataEntrada,
principal.dataComp
from ML001134 as principal
join PROCES_WORKFLOW as andamento on andamento.NR_DOCUMENTO_CARD = principal.documentid
join HISTOR_PROCES as historico on andamento.NUM_PROCES = historico.NUM_PROCES
where (select max(version) from ml001134 sec where sec.documentid=principal.documentid)=principal.version and
(select max(NUM_SEQ_MOVTO) from HISTOR_PROCES hist where hist.NUM_PROCES=historico.NUM_PROCES)= historico.NUM_SEQ_MOVTO
order by andamento.NUM_PROCES DESC
```

---

## Resposta #2

**Victor Santos Henrique** (@Victor.S.Henrique) — 09/12/2021, 08:45 | ❤️ 1

Bom dia Mauricio!

Cara, essa query me ajudou com outra coisa aqui que eu também estava procurando, mas pro problema inicial infelizmente não :/.
Eu preciso alterar o processo mesmo, o diagrama na verdade. Uma das regras do gateway join não está funcionando e ao invés de seguir para o usuário registrado no form segue pro papel de admin. Eu já alterei, já mudei a regra mas continua seguindo pro admin, ia tentar modificar a regra pelo banco diretamente.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 09/12/2021, 15:00 | ❤️ 1

[@Victor.S.Henrique](/u/victor.s.henrique)

Não realize nenhuma alteração nas tabelas de processos, existe muitos relacionamentos e você pode ter sérios problemas futuros.

Os gatway de Join, obedecem a atribuição da atividade posterior a ele, ja pensou em abrir um ticket para validar se não se trata de um erro de produto?

---

## Resposta #4

**Victor Santos Henrique** (@Victor.S.Henrique) — 09/12/2021, 15:35

[@fluigor.com.br](/u/fluigor.com.br)

Eu abri cara, a última interação foi essa:

> Desculpe pela demora. Depois de uma série de testes, vimos que ao consultar o processo pelo XML, reparei que a atividade “Aprovação Dairy” não possui o mecanismos configurado, por mais que ele apareça selecionado nos mecanismos. Provavelmente foi feito uma mudança ou e não foi repassado ao servidor. Por isto, muito provavelmente seja a causa do erro. Como as outras duas atividades possuem o mecanismo, funcionam normalmente.
>
> Exporte novamente o processo com uma nova versão para o seu servidor fluig, e refaça os testes. Lembrando que, todas as solicitações em andamento precisarão ser convertidas para que sofram a alteração do processo.

Eu já fiz isso que foi pedido várias vezes e de formas diferentes, nenhuma resolveu. No Eclipse eu continuo vendo que tem mecanismo, mas não atribui.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 02/02/2022, 07:58

Já experimentou criar um fluxo em branco copiar e colar o conteúdo nesse novo fluxo. Já tive problemas parecidos e isso resolveu.

---
