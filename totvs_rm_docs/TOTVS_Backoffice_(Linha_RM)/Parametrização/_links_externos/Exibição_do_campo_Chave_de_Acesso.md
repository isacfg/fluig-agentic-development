# MOV0005_Exibicao_do_campo_Chave_de_Acesso

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0005_Exibicao_do_campo_Chave_de_Acesso](https://tdn.totvs.com/display/public/LRM/MOV0005_Exibicao_do_campo_Chave_de_Acesso)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

A partir da 11.52

**Ocorrência:**

Exibição do campo Chave de Acesso 

**Passo a passo:**

**Introdução:**

Este documento tem o objetivo auxiliar na parametrização do tipo de movimento para exibição da chave de acesso no movimento.

**Passo 1:**

Acessar | Ambiente | Parâmetros | Gestão de estoque, compras e faturamento | Localizar o tipo de movimento que irá aplicar a parametrização.

**Etapa Mov - Emitente/Destinatário** 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A37%3A0.png?version=1&modificationDate=1492717033000&api=v2)

Emitente deverá ser = Fornecedor

Destinatário deverá ser = Empresa

**Etapa Fis - Escrituração 1/2**

Nesta Etapa deverá ser marcada a opção “Gerar Escrituração” e no campo “Tipo Documento Escrituração” deverá ser selecionado o tipo de documento de NF-e, CT-e ou NFC-e, maiores informações sobre o cadastro do tipo de documento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A39%3A49.png?version=1&modificationDate=1492717033000&api=v2)

Obs: O código do modelo documento que o sistema verifica é esse:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A44%3A54.png?version=1&modificationDate=1492717033000&api=v2)

**Etapa Fis - NF-e**

Obs: Ao acessar essa etapa e não aparecer o campo indicado, conforme imagem abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A46%3A43.png?version=1&modificationDate=1492717033000&api=v2)

Será necessário voltar para **Etapa Mov - Emitente/Destinatário** e alterar **provisoriamente** os campos "Emitente" e "Destinatário".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A53%3A24.png?version=1&modificationDate=1492717033000&api=v2)

Após habilitar o campo na **Etapa Fis - NF-e** voltar a parametrização indicada anteriormente.

O campo NF-e Estadual deverá estar como "Não Integrado":

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A47%3A59.png?version=1&modificationDate=1492717033000&api=v2)

Depois de efetuar as devidas parametrizações será apresentado o campo em Integrações | Fiscal | NF-e Estadual (Caso utilizado o código do modelo do documento '55')

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2015%3A39%3A41.png?version=1&modificationDate=1492717033000&api=v2)

Caso queira habilitar a chave de acesso para CT-e ou NFC-e basta utilizar outro tipo de documento:

**CT-e**

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2015%3A47%3A9.png?version=1&modificationDate=1492717033000&api=v2)
**

**NFC-e**

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/273313358/image2017-4-20%2015%3A46%3A0.png?version=1&modificationDate=1492717033000&api=v2)

**Observações:**

Para mais informações:

 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)

   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
