# RMFIS00007_Apuração de Tributos - ISS

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=286728349](https://tdn.totvs.com/pages/releaseview.action?pageId=286728349)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Contribuinte ISSProduto:**

Totvs Gestão Fiscal

**Versões:**

12.x

**Ocorrência:**

Apuração do ISS

**Ambiente:**



**Passo a passo:**

**1\. Cadastro do tributo**

 O cadastro do ISS deve possuir a abrangência e periodicidade corretamente, segue imagem de exemplo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2018-9-11_11-58-59.png?version=1&modificationDate=1536677940000&api=v2)




Observação: Para apuração do tributo ISS atualmente o sistema não consiste a sigla do cadastro do tributo. 

**2. *Cadastro Natureza Fiscal***

No CFOP utilizado, a flag | Fiscal | deve estar demarcada.

**Observação:** Possível exceção para operações em Brasília.**
![Imagem](https://tdn.totvs.com/download/attachments/286728349/image2018-9-11_12-46-37.png?version=1&modificationDate=1536680798000&api=v2)
**



**Verificação do Lançamento Fiscal**

As notas de entrada ou saída de serviço devem ter o tributo informado no lançamento fiscal ou item do lançamento, conforme parametrização, com tipo de recolhimento selecionado, base de cálculo, alíquota e valor preenchidos. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2018-9-11_12-2-50.png?version=1&modificationDate=1536678171000&api=v2)

Na aba Prestação de Serviço é necessário preencher a UF e Município onde o serviço foi executado para fins de apuração por município:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2019-10-2_13-20-54.png?version=1&modificationDate=1570033254427&api=v2)

***Importante: “Tributo no Item ou no Lançamento?”***



O sistema permite a tributação do ISS por item ou por lançamento.

Caso a opção "Utiliza Município de Prestação de Serviço por Item de Lançamento" esteja marcada em Ambiente | Parâmetros | Totvs Gestão Fiscal | Identificação de Regras de Apuração | ISS | Regras ISS por Filial | Editar a Filial | Const. Civil e Deduções |

**O sistema irá considerar o tributo informado** **na aba Outros Tributos do “item” do lançamento fiscal**, observando que **o município e a** **codificação do serviço** deverão estar informadas na aba Outros Dados sub- aba Prestação de Serviço também do “item”.

Caso a opção "Utiliza Município de Prestação de Serviço por Item de Lançamento" **não** esteja marcada então, **o sistema irá considerar o tributo informado** **na aba Outros Tributos do lançamento fiscal** e irá consistir o município e a codificação do serviço , aba Outros Dados sub- aba Prestação de Serviço do **lançamento fiscal**.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/sTeDUJUA9PcnJ8UtengbNq6uC/?name=inline1497081560.png)




**3\. Data de Apuração do Tributo** 

Data de Apuração do ISS deve ser parametrizada no menu abaixo:

-   Ambiente | Parâmetros | Totvs Gestão Fiscal | 03.02 Apuração de Tributos | ISS | Apur. ISS por Filial | Editar a Filial | Data de Apuração do ISS.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/63865786/Apura%C3%A7%C3%A3o%20de%20ISS%20-%20Print%200.4.jpg?version=2&modificationDate=1372444109000&api=v2&effects=drop-shadow)



**Os parâmetros são:** 

-   **Lançamento de Entrada**\- Corresponde à data a ser utilizada para seleção de Lançamentos de Entrada;
-   **Lançamento de Saída – Entidade Privada** - Corresponde à data a ser utilizada para seleção de Lançamentos de Saída – Participante entidade privada;
-   **Lançamento de Saída** **– Entidade Pública** -Corresponde à data a ser utilizada para seleção de Lançamentos de Saída – Participante entidade pública;



Cada um desses parâmetros poderá receber qualquer um dos três valores determinados abaixo:

**Data de Emissão**

**Data de Entrada/Saída (Data da Competência do Serviço)**

**Data de Pagamento/Vencimento**



**Importante:**

Caso seja selecionada a terceira opção (Data de Pagamento/Vencimento) o sistema se comportará da seguinte forma:

-   Se existir integração com o Financeiro (RM Fluxus), serão selecionados os lançamentos Fiscais de acordo com a Data de Baixa do Lançamento Financeiro vinculado, entrando na seleção somente os Lançamentos Fiscais cujo Lançamento Financeiro associado esteja baixado e será considerada a data da primeira baixa;
-   Se não existir integração com o Financeiro, serão selecionados os Lançamentos Fiscais de acordo com a Data de Vencimento, existente na aba “Dados Financeiros” do Lançamento Fiscal.



**4\. Cadastro Filial**

Na geração de algumas rotinas fiscais o sistema consiste se a filial é responsável por reter o ISS, como por exemplo a "DS Recife".

Para verificar se a Opção “Filial Responsável pela Retenção” está marcada, acesse Cadastro | Filial | Anexos | Dados Fiscais | Aba Tributos.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2018-9-11_12-30-50.png?version=1&modificationDate=1536679851000&api=v2)

**Observação**:

A opção demonstrada acima não afeta a apuração do tributo.



***5\. Cadastro Cliente/Fornecedor***

Há também a opção “Contribuinte ISS” no cadastro de Cliente/Fornecedor. Para marcar acesse: Cadastro - Cliente/Fornecedor - Editar Cliente/Fornecedor - Menu Outros - Tributos

***
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2019-10-2_14-0-25.png?version=1&modificationDate=1570035624697&api=v2)

***



**Observação:**

A opção demonstrada acima não afeta a apuração do tributo.

***6\. Detalhes do período de apuração***

No período de apuração do ISS na aba outros dados serão informados os valores a recolher do tributo.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2018-9-11_13-0-11.png?version=1&modificationDate=1536681611000&api=v2)



******7\. Guia de Recolhimento***
***

Após seguir as consistências anteriores acesse o período de apuração do tributo ISS informado nos lançamentos fiscais, preencha a data de vencimento e encerre o período, gere a guia através do menu "Processos | Geração de Guias Automaticamente



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286728349/image2018-9-11_12-57-4.png?version=1&modificationDate=1536681425000&api=v2)




***
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/63865786/Apura%C3%A7%C3%A3o%20de%20ISS.jpg?version=1&modificationDate=1378216189000&api=v2&effects=drop-shadow)
***



![Imagem](https://totvssuporte.zendesk.com/attachments/token/sTeDUJUA9PcnJ8UtengbNq6uC/?name=inline1497081560.png)





**Observações:**
