# Conversores de Documentos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Conversores+de+Documentos](https://tdn.totvs.com/display/fluig/Conversores+de+Documentos)

---

Atenção

Esta página é destinada para atualizações 1.6 e superiores do TOTVS Fluig Plataforma.

# Índice



# Visualização de Documentos

* * *

Por padrão, o visualizador interno da plataforma TOTVS Fluig suporta os formatos de documentos imagens, textos e de extensão de PDF. Porém existem casos que é necessário que o visualizador seja suportado para outros formatos de documento como planilhas, arquivos DWG, etc.

Com intuito de facilitar a integração com diferentes formatos, a plataforma possui pontos de customização que permite qualquer formato de arquivo ser suportado no visualizador interno desde que exista alguma ferramenta que realize a conversão do formato desejado para o formato PDF.

Os documentos devem possuir uma cópia no formato PDF 1.4 para serem visualizados internamente na plataforma, cuja especificação está disponível [aqui](http://www.adobe.com/devnet/pdf/pdf_reference_archive.html).

A plataforma faz a conversão automática para PDF com os documentos de texto suportados pelo Microsoft® Word ou [OpenOffice.org](http://OpenOffice.org)™. Para os demais tipos, caso seja desejado utilizar o visualizador interno, deve ser construído um plugin de conversão para PDF.



# Conhecimentos Necessários

* * *

Para construir um conversor faz-se necessário possuir os seguintes conhecimentos:

-   Tecnologia Java™ EE
-   Linguagem JavaScript



# Construção de um Conversor

* * *

O plugin de conversão é composto de duas partes:

1.  Um componente EJB Message-Driven, para receber a solicitação de conversão;
2.  Aplicativo/programa que irá fazer a conversão;
3.  Indicar que o documento utiliza o visualizador interno.



Este capítulo irá apresentar um exemplo de conversor para arquivos texto (txt) em PDF, assim será possível utilizá-lo no visualizador interno da plataforma.

Importante

Para auxiliar, faça o *download* do conversor [external-document-conversion.jar](https://tdn.totvs.com/download/attachments/258277478/external-document-conversion.jar?version=1&modificationDate=1474481616000&api=v2)

Caso já tenha utilizado outro conversor externo, é necessário removê-lo da pasta \[diretório\_instalação\]/appserver/apps antes de incluir este novo JAR.

Também não é mais necessária a inclusão de DLL na pasta bin do App Server Wildfly como era anteriormente. Logo, caso tenha adicionado o arquivo jacob-1.18-M2-x64.dll em \[diretório\_instalação\]\\appserver\\bin, o mesmo pode ser removido.

**Passo 1: Contruindo o EJB Message-Driven**

Criar um Message-Driven que escute o tópico **topic/wdkDocument**: Segue fonte exemplo:

```
package com.fluig.conv;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.jms.Message;
import javax.jms.MessageListener;

@MessageDriven(name = "test/TxtConverter", activationConfig = {
    @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Topic"),
    @ActivationConfigProperty(propertyName = "destination", propertyValue = "topic/wdkDocument")
})
public class TxtMessageBean implements MessageListener {

    @Override
    public void onMessage(Message message) {
        try {
            String event = message.getStringProperty("event");
            if (event != null && event.equals("EXTERNALCONVERTION")) {
                String doc = message.getStringProperty("documentpath");
                if (doc != null && doc.endsWith(".txt")) {
                    ProcessBuilder pb = new ProcessBuilder("txt2pdf.exe", doc, doc + ".pdf", "-lpp40");
                    pb.start();
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
```

O Message-Driven acima configura a propriedade *destinationType* para **"javax.jms.Topic"** para indicar que irá escutar um tópico JMS, e a propriedade *destination* para **"topic/wdkDocument"** para indicar qual tópico será ouvido. O tópico "topic/wdkDocument" se refere à onde os eventos de publicação de documentos são enviados.

Ao receber uma mensagem, deverá verificar o tipo de evento publicado através da StringProperty "**event**", se o valor dessa propriedade for **"EXTERNALCONVERTION"**, significa que a plataforma está indicando que é o momento da conversão customizada ser executada.

Para conhecer o caminho do documento, verifique a StringProperty **"documentpath"**.

Após isto, verifica-se a extensão do arquivo para validar se este é o conversor correto, pois pode haver mais de um para extensões diferentes.

Validado os parâmetros, pode-se então chamar o programa conversor, que no caso do exemplo, foi usado o freeware [txt2pdf](http://www.verypdf.com/txt2pdf/) .

O documento destino deverá possuir o mesmo nome acrescido da extensão .pdf e este deverá ficar no mesmo diretório. Ex: doc.txt convertido: doc.txt.pdf

Lembramos que o documento origem não poderá ser modificado, com a penalidade de a plataforma indicar que ele foi alterado externamente (validação de CRC).

Este Message-Driven deverá ser empacotado e implantado no servidor de aplicações conforme as especificações do Java™ EE.

**Passo 2: Message-Driven para criação de documentos de longo prazo**

Pode ser utilizado o Message-Driven apresentado no item anterior na criação de documentos de longo prazo, sendo necessário fazer algumas alterações. Para saber se o Message-Driven esta sendo utilizado para criação do arquivo de longo prazo, existe um novo parâmetro chamado "isLongTerm", esse parâmetro é uma String, e se ela for igual a "true" é por que o documento que se quer gerar é um PDF/A, considerado arquivo de longo prazo. A plataforma considera apenas o PDF/A como formato apto a gerar documentos de longo prazo via Message-Drive.

Para identificar a criação de um arquivo de longo prazo, o nome físico do documento deve ser alterado, incluindo a string "PDFA" no final do nome do arquivo. Por exemplo, se o nome do arquivo for manual.txt, o nome desse arquivo após a conversão será manual.txtPDFA.pdf. Veja o exemplo abaixo ilustrando as alterações necessárias no Message-Driven para criar o documento de longo prazo:



```
String longTerm = message.getStringProperty("isLongTerm");

if (doc != null && doc.endsWith(".txt")) {
	if (longTerm != null && longTerm.equals("true")) {
		String documentName = doc + "PDFA.pdf";
		//Chamar o método de conversão para PDF/A
	}
}
```

Na primeira linha recupera-se o valor do parâmetro "isLongTerm" para identificar se esta sendo requerida a criação de um arquivo de longo prazo. Após feita a verificação da extensão do documento, é verificado o valor da variável *longTerm*, se ela não for nula e for igual a "true", então realizamos a criação chamando o método de conversão de documentos utilizando para isso o nome do arquivo com a string "PDFA.pdf".

**Passo 3: Registrando o conversor no fluig**

No fluig Studio, clicar com o botão direito do mouse na pasta events, selecionar a opção New e em seguida a opção Evento Global Fluig:



O assistente Novo Evento é aberto. Selecione o evento **addDocumentConvertionExt** e em seguida clique no botão Finish.

O evento é adicionado ao projeto na pasta events e aberto para edição. O objetivo desse evento global é adicionar as extensões que possuem um conversor customizado. Neste exemplo é necessário adicionar a extensão txt, conforme fonte abaixo:

```
function addDocumentConvertionExt(ext) {
ext.add("txt");
// para demais arquivos adicionar as extensões correspondentes
//ext.add("doc");
//ext.add("ppt");
//ext.add("xls");
 }
```

**Atenção:** Para impressão de documentos publicados com a opção "Atualiza Propriedades da Cópia Controlada?" **NÃO** será utilizado o conversor externo. Como é necessário aplicar as propriedades da cópia controlada no documento original e efetuar uma nova conversão, este processo só pode ser realizado em tempo de execução com o conversor padrão do produto. Portanto, na impressão do documento, pode ocorrer a perda de formatação dependendo dos recursos visuais aplicados em seu conteúdo (bordas, cores, imagens, etc).

**Passo 4: Adicionar o *listener* ao servidor fluig**

Empacote o *listener* JMS e o adicione em \[diretório\_instalação\]/appserver/apps/.





**Passo 5: Indicar que o documento utiliza o visualizador interno**

Agora que a extensão .txt foi registrada como possuindo um conversor customizado, basta assinalar a opção "Utiliza Visualizador Interno?" na publicação do documento:



**Observações**

-   No exemplo disponibilizado, é apresentado um exemplo de integração de conversão de formatos TXT utilizando a ferramenta *txt2pdf*, para cada extensão é necessário utilizar uma ferramenta adequada.
-   Os códigos de conversão são apenas exemplos, seu desenvolvimento e configuração é de responsabilidade do desenvolvedor.
-   Pode ser utilizado o *plugin* empacotado disponível em anexo. Sendo necessário para integração com os produtos Microsoft as configurações detalhas no guia [Ambiente de execução do Java®](https://tdn.totvs.com/pages/viewpage.action?pageId=75271469), permitindo a comunicação entre o servidor fluig e os componentes do *Office* além de extensões *TXT* e *DWG*.
