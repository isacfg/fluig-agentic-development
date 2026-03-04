# Criar Regras de anexos nas atividades dos processos

> **Fonte:** [https://fluiggers.com.br/t/criar-regras-de-anexos-nas-atividades-dos-processos/2893](https://fluiggers.com.br/t/criar-regras-de-anexos-nas-atividades-dos-processos/2893)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 20/07/2024, 13:39
> **Visualizações:** 311 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Ariana Regina Ferreira** (@Ari_regina) — 20/07/2024, 13:39

Olá comunidade!

Gostaria de saber o que vocês acham da funcionalidade atual de **regras de anexos** do construtor de processos.

Tanto no eclipse como no desenhador do fluig web

![eclipse](https://fluiggers.com.br/uploads/default/optimized/2X/d/d7bbc794d08ac3e46446e1704affd7ad8d0c5a8a_2_690x324.png)

Vocês fazem o uso dessa funcionalidade, ou determinam as regras de anexos direto pelo código do processo?

Quem usa a funcionalidade, pelo eclipe ou desenhador web, o que poderia ser melhorado?

Obrigada :wink:

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/07/2024, 19:40

Uso quando a atividade exige anexo, mas só nessa situação.

Algo que poderia ser melhorado, e que faço em Evento de Processo, é ter regra pra exigir anexo de acordo com a atividade destino. Tenho situações na qual o usuário pode escolher uma atividade destino que exige um anexo antecipado e outra atividade destino que não precisa do anexo, aí nesses casos somente por evento de processo pra tratar.

Até pensando nessa questão de indicar regras de acordo com o destino poderia ter opção de colocar condicionais nas regras, permitindo obrigar anexo caso algum campo do formulário esteja preenchido com um valor específico, por exemplo. Ao menos até onde sei o “valor” dessa regra de anexo só faz uma validação do nome do arquivo, então hoje a única validação por campo é pra indicar o nome né

---

## Resposta #2

**Ariana Regina Ferreira** (@Ari_regina) — 23/07/2024, 07:26

Oi Bruno, obrigada por responder :slight_smile:

Que bacana as suas sugestões! Poderia ilustrar um pouco mais os seus cenários que exigem a necessidade de um anexo antecipado?

Hoje na regra de anexo low code é possível criar regra por atividades do processo e essas regras podem criar condições referentes ao nomes do arquivo, tipos de extensão, quantidade a ser anexada ou regras para proibir algum tipo de anexo.

É possível definir, por exemplo, esses tipo de regras com o lowcode:

**Você deve anexar 1 arquivo nomearquivo.log ou algum arquivo de extensão diferente de .log**

**Você deve anexar 2 arquivos que não possua server no nome**

**Apenas arquivos .jpg, .png ou .gif são permitidos**

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2024, 09:47

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/484f7a6531cbf174a1cb81319cde4e6072d88550_2_382x500.png)

Um caso simples que temos aqui.

Na atividade “**Elaborar Parecer Jurídico**” o responsável pode tramitar para “**Elaborar Minuta do Parecer Jurídico**”, onde algum estagiário criará a minuta do parecer. Então não há como exigir que seja inserido o parecer em anexo, pois ainda será feita a minuta por um estagiário.

Na atividade “**Elaborar Minuta do Parecer Jurídico**” utilizo a regra lowcode pra obrigar o estagiário a inserir anexo (validando quantidade e extensão). Na sequência volta para um responsável do jurídico, na atividade “**Inserir Parecer Jurídico**”, na qual também uso regra lowcode pra obrigar a inserir o anexo que é o parecer.

Porém na atividade “**Elaborar Parecer Jurídico**” o responsável pode tramitar para “**Analisar Parecer Jurídico**”, que é a atividade na qual o demandante vai verificar a opinião jurídica para decidir se continuará com o processo. Então nessa situação o responsável é obrigado a inserir um anexo na “**Elaborar Parecer Jurídico**”.

Então essa atividade “**Elaborar Parecer Jurídico**” tem regra de anexo de acordo com o destino e nessa situação só é possível validar por evento de processo, e ainda por cima não é uma validação muito simples, pois devemos consultar vários datasets pra validar que determinado anexo foi inserido em uma atividade específica.

---

## Resposta #4

**Patrick Rehder Bosco** (@PatrickRehder) — 18/02/2025, 10:58

Bom dia Bruno,
Por acaso você coloca alguma validação no evento do processo para checar a extensão do arquivo anexado? Por exemplo para checar se é um arquivo excel, word ou ppt?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/02/2025, 13:34

Olá, [@PatrickRehder](/u/patrickrehder).

No meu caso não me preocupei com isso, porque o jurídico já tem por padrão colocar o PDF, então eu só validei se foi inserido algum anexo.

Mas é possível pegar o nome do anexo se necessário.

---

## Resposta #6

**Patrick Rehder Bosco** (@PatrickRehder) — 18/02/2025, 15:22 | ❤️ 1

Show.
Eu acabei descobrindo uma forma de validar o tipo de documento, pois para o meu caso foi preciso. Vou deixar aqui para quem precisar:

function beforeTaskSave(colleagueId, nextSequenceId, userList) {

```
var attachments = hAPI.listAttachments();

if (nextSequenceId == 6 || nextSequenceId == 12) {

    for (var i = 0; i < attachments.size(); i++) {
        var attachment = attachments.get(i);
        var nomeArquivo = attachment.getDocumentDescription();
        var retornoFuncao = obterExtensao(nomeArquivo);
        if (retornoFuncao != "xlsx" && retornoFuncao != "docx") {
            throw "É permitido anexar apenas arquivos Excel ou Word!"
        }
    }
}
```

}

function obterExtensao(nomeArquivo) {
var ultimoPonto = nomeArquivo.lastIndexOf(‘.’);
// Verifica se há um ponto e se não está no início (ex: .htaccess)
if (ultimoPonto !== -1 && ultimoPonto !== 0) {
return nomeArquivo.slice(ultimoPonto + 1).toLowerCase();
}
return ‘’;
}

---
