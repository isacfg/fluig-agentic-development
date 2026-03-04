# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de Rendimento default para contribuições sociais retidas

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/17185384164375-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-Rendimento-default-para-contribui%C3%A7%C3%B5es-sociais-retidas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/17185384164375-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-Rendimento-default-para-contribui%C3%A7%C3%B5es-sociais-retidas)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 16:30

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/17185353414935)
 Tempo aproximado para leitura: **00:03:00 min****Dúvida**Como levar para o financeiro natureza de rendimento default dos tributos PISRF, COFINSRF, CSLLRF e CSRF ?


**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento a partir da biblioteca 12.1.2209


**Solução**
A Natureza de rendimento default é definida no movimento conforme a seguinte
hierarquia de cadastros:

**Cadastro do produto** \> Anexos > Dados fiscais do produto
**Cliente Fornecedor** > Anexos > Tributos Default do Fornecedor
**Tipo de Movimento** > Etapa Fis – Tributação – Item


**1.** Acesse cadastro produto : **Anexos | Dados fiscais do produto:**

Na aba identificação, informe o código da natureza de rendimento:

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17720416198551)
**

**2**. Acesse cadastro do fornecedor **Anexos | Tributos default fornecedor:**

Inclua o tributo desejado, alíquota, código de receita e natureza de rendimento:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17445793864343)

Para default no tipo de movimento acesse **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |** selecione o tipo de movimento desejado, na **etapa Fis - Tributação** informe o tributo e natureza de rendimento .

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17184712024215)
**

**3**. Ao incluir o movimento, o sistema verifica de acordo com a hierarquia citada e preenche 
automaticamente o movimento.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17446159649815)

**4**. Ao salvar o movimento, será gerado o lançamento financeiro com a natureza informada no movimento.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17446299935895)

**IMPORTANTE**: Para o lançamento financeiro, se o movimento possuir apenas 1 item, será levada a natureza de rendimento informada no tributo do item.

Se o movimento possuir mais de 1 item, será levada a natureza de rendimento do primeiro item
preenchido.

Se não for definido nenhum default, o usuário terá a opção de informar a natureza de
rendimento manualmente, no momento da inclusão do movimento.

**Veja o passo a passo em vídeo: How to | Natureza de Rendimentos Default**

[🎥 Vídeo](https://centraldeatendimento.totvs.com//www.youtube-nocookie.com/embed/54NX4QIU6x8)

**Saiba mais em:** [https://tdn.totvs.com/pages/releaseview.action?pageId=761017178](https://tdn.totvs.com/pages/releaseview.action?pageId=761017178)

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31591423737111)
