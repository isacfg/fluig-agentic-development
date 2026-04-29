# Gerando a página de documentação de processos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=126718685](https://tdn.totvs.com/pages/viewpage.action?pageId=126718685)

---

# Índice

# Introdução

Com a introdução do Fluig Studio e da adoção da notação BPMN 2.0, a plataforma Fluig passou a oferecer a possibilidade de documentar detalhadamente os processos existentes dentro de uma organização. Partindo desta premissa a plataforma Fluig está oferecendo agora a geração da documentação de processos em forma de página Web permitindo que o modelador/documentador de processos publique essa página aonde ele achar adequado oferecendo o acesso a informação aonde ele for solicitado.

# Gerando o site

Gerar o site de documentação de processos é um processo simples. No Explorador de pacotes clique com o botão esquerdo em qualquer pasta do seu projeto Fluig e selecione a opção Exportar que aparece no menu de contexto .

Nas opções de exportação abra a pasta "Fluig" e selecione a opção "Exportar Projeto para o formato de site" . 

Confirme a informação e o site será gerado abrindo a página com o Navegador Web padrão da máquina .

Vale lembrar que cada projeto Fluig terá apenas um site e este site listará todos os diagramas de processo existentes na pasta "workflow/diagrams" do projeto em questão . 

# Campos de Extensão para entidades de processo

Para cada entidade existente dentro do diagrama (e para o próprio diagrama) é possível criar campos de extensão que permitem documentar de forma mais detalhada um diagrama ou uma atividade do mesmo dentro da página de documento (site) . Para cadastrar campos de extensão para as entidades basta acessar a seção de "**Extensão**" dentro das propriedades do elemento. Nessa seção a quantidade e o tipo de campos necessários de acordo com a necessidade do seu negócio.

Ao clicar na atividade dentro do site gerado esses campos estarão incluídos na documentação da entidade .

Nas atividades sem campos extensão associados apenas o código e a descrição da tarefa serão exibidos dentro desta tela de detalhamento .
