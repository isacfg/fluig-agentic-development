# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Apuração de Tributos - FUNRURAL, GILRAT, SENAR \ INSS, INSS15, INSS20, INSS25

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003850232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Apura%C3%A7%C3%A3o-de-Tributos-FUNRURAL-GILRAT-SENAR-INSS-INSS15-INSS20-INSS25](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003850232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Apura%C3%A7%C3%A3o-de-Tributos-FUNRURAL-GILRAT-SENAR-INSS-INSS15-INSS20-INSS25)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 21 de abril de 2025 às 14:18

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29207806282519)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**

Como Configurar o sistema para atendimento ao regime especial de aposentadoria para os Tributos FUNRURAL, GILRAT E SENAR \\ INSS, INSS15, INSS20 E INSS25?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**

Caso possua integração com o NUCLEUS e execute o processo de Escrituração do Nucleus x LIBER siga os passos abaixo para parametrização do Movimento. (Caso não exista integração com o NUCLEUS avance para o passo 2 – Apuração).

**1 - Escrituração Funrural e INSS**

Foram criados, para os tributos INSS e Funrural, os seguintes Tipos de Tributação (no Nucleus o nome do campo é Tipo de Recolhimento):
• INSS
• INSS15
• INSS20
• INSS25
• Funrural
• GILRAT
• SENAR

Existindo integração com o Nucleus é necessário criar um Tributo para cada tipo de valor a ser retido para o INSS/Funrural, sendo que todos eles devem possuir o mesmo **"Tipo Tributo" INSS ou Funrural.**

Exemplo INSS:
• Tributo para retenção do valor principal: INSS
• Tributo para retenção do valor adicional 15 anos: INSS15
• Tributo para retenção do valor adicional 20 anos: INSS20
• Tributo para retenção do valor adicional 25 anos: INSS25

![Imagem](https://tdn.totvs.com/download/attachments/347445276/img01.png?version=1&modificationDate=1521817712000&api=v2)

Além do Tributo INSS devem ser cadastrados os tributos I**NSS15, INSS20 e INSS25** conforme a imagem acima, para todos eles o campo “Tipo Tributo” vai ser igual a “**INSS**”.

Na Tela ‘Outros Dados” do cadastro do Tributo o campo “Procurar Alíquota no: ” deve ser preenchida com a opção “INSS/PJ Fornecedor”.

Exemplo INSS15: veja que o campo “Tipo Tributo” é INSS (siga esse exemplo para cadastrar os outros).

![Imagem](https://tdn.totvs.com/download/attachments/347445276/img02.png?version=2&modificationDate=1521817712000&api=v2)

Tela “Outros Dados” do cadastro do tributo, o campo “Procurar Alíquota no: ” deve ser preenchida com a opção “INSS/PJ Fornecedor”.

![Imagem](https://tdn.totvs.com/download/attachments/347445276/img03.png?version=1&modificationDate=1521817712000&api=v2)

Para mais informações, verifique a documentação abaixo:[
](http://tdn.totvs.com/pages/viewpage.action?pageId=347445276)[RMFIS00013\_Apuração de Tributos - FUNRURAL, GILRAT, SENAR \\ INSS, INSS15, INSS20, INSS25](http://tdn.totvs.com/pages/viewpage.action?pageId=347445276)
