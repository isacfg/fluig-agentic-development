# Configuração para uso inicial do Fluig Studio

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=172297237](https://tdn.totvs.com/pages/viewpage.action?pageId=172297237)

---

# Índice

# Introdução

Para a boa utilização do Fluig Studio, algumas configurações são necessárias. Uma delas é referente ao "Código de página", "Codificação de caracteres" ou "*encoding*".  Para mais informações sobre *encoding*, [clique aqui](http://www.w3.org/International/questions/qa-what-is-encoding.pt-br.php).

# Performance

É recomendado verificar as definições de memória configuradas para o ambiente em que o Fluig Studio será  executado. 

Estas configurações podem ser acessadas na raiz da pasta de instalação do ambiente de desenvolvimento.

Se for utilizado o Eclipse, o nome do arquivo é eclipse.ini, e caso esteja sendo utilizado o TOTVS Developer Studio (TDS), o arquivo a ser verificado é o developerStudio.ini.

Neste arquivo, recomenda-se incluir / alterar as configuração conforme abaixo. Desta forma evitam-se possíveis falhas por falta de memória e obtém-se uma experiência mais fluída com a plataforma.

```
--launcher.XXMaxPermSize
512m
-Xms128m
-Xmx1024m
```

# Alteração do código de página

O Fluig Studio para Windows vem com a codificação Cp1252 como padrão, o que pode gerar diversas inconsistências dependendo das configurações utilizadas no servidor. Por isso, deve-se alterar as configurações da sua *workspace* para utilizar como padrão a codificação **UTF-8**.

Para alterar a codificação, no menu superior acesse **Janela** > **Preferências**.

Na tela de preferências, selecione **Geral** > **Espaço de trabalho** e em **Codificação de Arquivo de Texto** selecione **Outra** e informe **UTF-8**. Caso seu Fluig Studio esteja em inglês, o caminho é **Windows** > **Preferences** > **General** > **Workspace** e em **Text file encoding** altere para **Other** e **UTF-8**.

# Definir tempo de espera pelo retorno do servidor (*timeout*)

Na janela de preferências do fluig Studio é possível definir o tempo de espera de retorno do servidor (*timeout*), ou seja, o tempo que a ferramenta irá aguardar por uma resposta quando for realizada uma requisição para o servidor.

Esse parâmetro se aplica a todos os acessos que o plugin fluig Studio faz via *Web Service*s ou SOAP ao servidor do fluig, seja através de processos, formulários, eventos, datasets, serviços, mecanismos customizados, consultas de usuários, papéis ou grupos.
