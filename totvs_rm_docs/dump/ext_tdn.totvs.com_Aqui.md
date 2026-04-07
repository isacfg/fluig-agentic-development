# DEV0002_Devolucao_de_Venda_de_Mercadoria_Emissão_da_Nota_pelo_Cliente

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=315902787](https://tdn.totvs.com/pages/releaseview.action?pageId=315902787)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque Compras e Faturamento

**Versões:**

11.80 e Superiores

**Ocorrência:**

Devolução de Venda de Mercadoria

**Ambiente:**

Devolução

**Passo a passo:**

# Descrição

A devolução de mercadoria se refere anulação de um procedimento de venda realizado junto á um cliente. A devolução pode ser feita considerando todos os itens do movimento ou parte deles, onde será afetado tanto o saldo financeiro quanto o saldo físico.

A movimentação de devolução é inclusa através do processo de “cópia por referência” onde não é necessário redigitar os dados do item x movimento, visto que, será feito filtro do movimento a ser devolvido(movimento de origem) e será criado relacionamento entre eles.

Movimentos de devolução de venda devem ser inclusos em movimentos do tipo 1.2.XX ou 1.3.XX, visto que, terá o efeito inverso á movimentação de inclusão que foi feita no tipo de movimento 2.2.XX(diminui estoque).

# Parametrização

Acessar o cadastro de Tipo de Documento e incluir um novo com a finalidade específica para este fim, onde deverá informar a classificação como Devolução e o campo Pagar ou Receber como A Pagar e A Receber.



Feito o cadastro do documento, vamos parametrizar o movimento em Ambiente | Parâmetros | TOTVS Gestão de Estoque, Compras e Faturamento | Vendas | Devolução de Venda. Poderá criar ou editar um movimento já existente. No exemplo abaixo, utilizaremos um movimento do tipo 1.2.XX.



**Etapa Mov – Emitente / Destinatário
**\- Emitente: Cliente
\- Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido
\- Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido
\- Destinatário: Empresa
\- Edição do Cliente \\ Fornecedor: Edita

**Etapa Mov – Outros Dados
**\- Usar Cópia de Movimento por Referência: Habilitar
\- Motivo de Referência: 5 – Devolução de Venda de Mercadorias



**Etapa Fis- Escrituração 1/2
**\- Gerar Escrituração: Habilitar
\- Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal



**Etapa Fis- Escrituração 2/2
**\- Tipo do Lançamento Fiscal da Transferência: Entrada
\*\* A parametrização acima é obrigatória para o tipo de movimento que vai gerar escrituração\*\*



****Etapa Fis – Natureza
**\-** Natureza | Edição: Edita
\- Seleção Automática da Natureza: Seleciona por Item

# Processo

O usuário deverá acessar movimento parametrizado para este fim e clicar no menu Processos | Assistente de Cópia por Referência. Será aberta a tela de Assistente de Cópia por Referência.

Nesta tela, deverá avançar para a próxima e clicar em Incluir para poder selecionar o movimento a ser devolvido. Após selecionado, clique em OK e avance. Nesta próxima tela serão apresentados os dados dos itens de movimento. Neste momento o usuário deve marcar os itens que deseja devolver e deverá clicar em Avançar e logo em seguida Executar para dar fim ao assistente de cópia por referência.

A seguir os dados serão apresentados no movimento de devolução podendo ser alterado pelo usuário se necessário. A devolução pode ser feita sobre a quantidade integral do item ou não.



-   ***Informações Adicionais***

\- Para visualizar o relacionamento entre o movimento de origem e de destino deve acessar o movimento de devolução(destino) e clicar na pasta Consultas **| Cópia por Referência |** onde vai visualizar todas informações do movimento de origem. Para visualizar os dados de devolução através do movimento de origem, deve selecionar o mesmo e clicar no ícone **| [
![clip_image004](https://lh5.ggpht.com/_G7KXZLoZDsY/TKtsTC85SkI/AAAAAAAABw4/D2HdNhaTcaE/clip_image004_thumb.jpg?imgmax=800)
](https://lh3.ggpht.com/_G7KXZLoZDsY/TKtsSFMreII/AAAAAAAABw0/SOKuuYYRv0E/s1600-h/clip_image004%5B3%5D.jpg) - Rastreamento de Movimentos |**onde será apresentada aba **| Devolução |** com as informações do movimento de destino. 

\- O relacionamento entre os movimentos envolvidos ficam gravados na tabela **| TMOVRELAC |** onde o idmov do movimento de origem(venda) é apresentado como **| IDMOVDESTINO |**



-   ***Escrituração do Movimento***

O processo de escrituração será feita como de costume onde devem ser inclusos dois lotes com os tipos de movimentos de venda e devolução. Primeiro tem que ser escriturado movimento de Nota Fiscal para depois escriturar a devolução vinculada ao mesmo.







**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)



**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
