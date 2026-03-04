# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Importar Planilha de Orçamento/Negociação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019491211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Importar-Planilha-de-Or%C3%A7amento-Negocia%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019491211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Importar-Planilha-de-Or%C3%A7amento-Negocia%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:13

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:03:00 min.
Ocorrência**
Ao tentar importar a planilha Excel de Orçamento/Negociação da cotação é apresentado o erro abaixo:

**Ocorreu um erro ao fazer a conexão com o banco de dados. Erro: O provedor 'Microsoft.ACE.OLEDB.15.0' não está registrado na máquina local...**

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa**
A principal causa para este erro é a versão do driver do Excel(OLEDB) instalada no servidor de job (ambientes N camadas) ou máquina local que está executando o processo. Porém, outros fatores também podem influenciar no processo.

**Solução**
O primeiro passo para correção é criar uma pasta com um arquivo de **Orçamento/Negociação** exemplo. O conceito utilizará este arquivo como modelo para os demais a serem criados. Por tanto, como exemplo, criamos a pasta denominada como EXEMPLO no diretório c:.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015103732/mceclip4.png)

Para pegar o exemplo, basta criar uma cotação fictícia (qualquer fornecedor x qualquer pedido) apenas para exportamos uma planilha. Por tanto, na comunicação dos fornecedores, marque a opção de Enviar Orçamento via Email

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015144971/mceclip5.png)

 Após receber o e-mail com esta planilha anexa, salve-a na pasta criada no passo anterior.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015106472/mceclip0.png)

Preencha os valores para o preço do item de orçamento. Caso contrário, o conceito não conseguirá fazer a leitura corretamente das colunas presente na planilha.

Após esta configuração de ambiente, iremos configurar o conceito. Acesse o módulo de Integração e no menu Integração, acesse a opção Conceito (ETL).

Edite o conceito responsável para importação da cotação C**ONMOV0006 - Importação de Cotação**.
Clique sobre a conexão de origem **Planilha\_Orcamento** e edite conforme print abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015094632/mceclip0.png)

A primeira configuração a ser feita no conceito será o apontamento do arquivo de exemplo. Ela será feita na linha **Data Source**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015134612/mceclip5.png)

Veja que o caminho foi alterado. Foi informado o caminho onde o arquivo exemplo foi disponibilizado: C:\\exemplo\\nome do arquivo.xlsx

Feito isso, deverá verificar se existe algum **driver** para o excel instalado na máquina. Verifique na opção **Provider**, quais são os drivers disponíveis para utilização.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015134831/mceclip3.png)

Caso não exista nenhum drive **Microsoft.ACE.OLEDB**, terá que realizar o download de um. Este download pode ser feito diretamente pelo site da Microsoft ou utilizar o que está anexo ao documento (versão 12.0 que será utilizado no exemplo). Caso exista, selecione-o.

Neste exemplo, utilizaremos o Drive versão 12.0. Por tanto, alteramos o padrão de 15.0 para 12.

Veja como ficou:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015135072/mceclip6.png)

Vá para aba Tabelas.

Na opção **Item\_Orçamento**, clique sobre a opção de **Selecionar Nenhuma** e posteriormente **Selecionar Todas** conforme print:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015176831/mceclip7.png)

Clique em OK.

Verifique se toda a conexão de origem está informada conforme print:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015177411/mceclip8.png)

Se alguma conexão estiver faltando, terá que refazer o processo. Geralmente a conexão de Item\_Orcamento pode sumir caso não configurada corretamente conforme passo anterior.

Caso esteja tudo ok, salve o Conceito.

A próxima configuração é a criação de uma nova pasta para guardar os registros dos orçamentos/negociações dos fornecedores. Esta pasta não pode ser a mesma da pasta de exemplo pois ao processar as planilhas, o sistema altera a extensão do arquivo e caso faça isso com o arquivo de exemplo o Conceito perderá a referência e para os próximos casos, o erro pode voltar a ocorrer. Por tanto crie uma nova pasta e esta por sua vez deve ser uma pasta **COMPARTILHADA** e com acesso total para o usuário **TODOS** do **windows.** Isso se faz necessário pois existe a possibilidade de estar executando o processo em um ambiente N camadas.

Crie a cotação como de costume e faça a comunicação do fornecedor através de e-mail e exportando a planilha.

Após receber do fornecedor a planilha já preenchida, coloque a planilha na pasta criada com esta finalidade. Feito isso, acesse o sistema no menu de Cotação, marque a cotação criada e vá em processos - Importar Planilha de Orçamento/Negociação.

Informe o caminho da pasta:

Ambiente local
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015136872/mceclip9.png)

Ambiente 3 camadas
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360015178431/mceclip10.png)

Execute o processo e aguarde o fim do processo.

Caso execute com sucesso, poderá editar a cotação e verificar o registro de orçamento para o fornecedor. Caso seja apresentado erro, entre em contato com o suporte da TOTVS (Gestão de Estoque, Compras e Faturamento).

**Observação**: Para maiores informações clique [aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=423938015)
