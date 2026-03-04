# AJUDA - Erro ao importar diagrama BPM

> **Fonte:** [https://fluiggers.com.br/t/ajuda-erro-ao-importar-diagrama-bpm/557](https://fluiggers.com.br/t/ajuda-erro-ao-importar-diagrama-bpm/557)
> **Categoria:** Sem categoria
> **Tags:** `form`, `bpm`, `importar`
> **Criado em:** 12/07/2021, 17:16
> **Visualizações:** 1481 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Wallacy Ronan** (@Wallacy_Ronan) — 12/07/2021, 17:16

Olá, pessoal!

Ao importar o processo para o eclipse o formulário não vem junto.

Aparece a mensagem: **Usuário sem permissão para visualizar este documento.**

porém:
O usuário tem perfil de ADM
no nível de segurança da pasta do form o usuário está marcado com permissão total.

-   Versão do Fluig: Lake 1.7.0-210504 622
-   Versão do plugin: 1.7.0.1

o que poderia tá acontecendo?

em outro servidor, com Fluig na mesma versão esse erro não ocorre.

---

## Resposta #1

**Vinicius de Moura Silveira** (@vinny.silveira) — 12/07/2021, 17:57

Fala [@Wallacy\_Ronan](/u/wallacy_ronan)!!

Já tentou ir pelo GED do Fluig pela WEB e tentar baixar o formulário com este mesmo usuário? Certifique-se de que consiga baixar pela interface WEB do Fluig navegando pelos documentos e responde aqui pra gente quando conseguir.

---

## Resposta #2

**Wallacy Ronan** (@Wallacy_Ronan) — 12/07/2021, 23:17

Sim. já tentei e consegui baixar o formulário, mas ao editar o diagrama no eclipse (mesmo já tendo definido o formulário para o processo), não consigo realizar todas as funções necessárias.

Por exemplo, não consigo definir o Mecanismo de Atribuição por campo de formulário, porque ele não me retorna nenhum campo do formulário.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/07/2021, 08:50

Ouvi algumas pessoas reclamando de erro de permissão com a versão 1.7, mas não sei se é esse o motivo do seu erro.

Não presenciei nada assim (uso a 1.6.5 ainda).

---

## Resposta #4

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 13/07/2021, 09:49

Qual eclipse está utilizando ? caso não seja o Luna, baixe ele pelo link abaixo e faça toda a configuração (Instalação do Plugin) e defina uma outra pasta para o Workspace.

![](https://www.eclipse.org/downloads/packages/sites/all/themes/solstice/_themes/solstice_packages/favicon.ico) [eclipse.org](https://www.eclipse.org/downloads/packages/release/luna/sr2/eclipse-ide-java-ee-developers)

### [Eclipse IDE for Java EE Developers | Eclipse Packages](https://www.eclipse.org/downloads/packages/release/luna/sr2/eclipse-ide-java-ee-developers)

Tools for Java developers creating Java EE and Web applications, including a Java IDE, tools for Java EE, JPA, JSF, Mylyn, EGit and others.

---

## Resposta #5

**Wallacy Ronan** (@Wallacy_Ronan) — 13/07/2021, 10:57

Magno, o erro persistiu tanto no eclipse Luna quanto no TDS

---

## Resposta #6

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 13/07/2021, 12:21

Faça um teste, vi que você conseguiu baixar o form do ambiente… então exporte ele novamente como se fosse novo para gerar outro ID e no workflow defina esse novo formulário como padrão.

---

## Resposta #7

**Wallacy Ronan** (@Wallacy_Ronan) — 13/07/2021, 13:36

Fiz esse teste.
Ao exportar o formulário ele não apresenta erro.
Mas não consigo vincular ao diagrama nem o novo formulário, como também nenhum dos formulários disponíveis no servidor.

---

## Resposta #8

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 13/07/2021, 17:21

Bom… você pode fazer um backup da pasta de instalação do Fluig e depois apagar as pastas temporárias e reiniciar os serviços.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/61f1c678e9fb2be0e30f7dceee5826706e6f437d_2_690x418.png)

Caso não tenha nenhum efeito, abra chamado de erro de produto e com certeza vão te passar como solução atualizar para a última realease da 1.7.1

---

## Resposta #9

**Wallacy Ronan** (@Wallacy_Ronan) — 13/07/2021, 17:24 | ❤️ 1

Magno, esqueci de mencionar que o ambiente é cloud.
inclusive já abri um chamado relatando o erro.

obrigado pelo empenho em tentar me ajudar

---

## Resposta #10 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 16/07/2021, 10:44

Tive esse problema aqui e so resolveu depois de mudar o eclipse para enviar com o usuario admin (Aquele criado no WCMadmin ) Faça o teste.

---

## Resposta #11

**system** (@system) — 18/07/2021, 21:43

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
