# Valor de vampo setado no beforeSendValidade vazio na próxima etapa

> **Fonte:** [https://fluiggers.com.br/t/valor-de-vampo-setado-no-beforesendvalidade-vazio-na-proxima-etapa/2042](https://fluiggers.com.br/t/valor-de-vampo-setado-no-beforesendvalidade-vazio-na-proxima-etapa/2042)
> **Categoria:** BPM
> **Tags:** `beforesendvalidate`
> **Criado em:** 14/07/2023, 16:56
> **Visualizações:** 392 | **Likes:** 0 | **Respostas:** 4

---

## Pergunta original

**Matheus** (@matheusassed) — 14/07/2023, 16:56

Boa tarde!

Estou tentando usar o momento de execução do `beforeSendValidade` para realizar um tratamento em 2 campos do meu formulário.

Tenho um campo `observacoes` e um campo `historico_observacoes`, esse segundo é `readonly`.

Minha intenção é pegar o `value` do campo `observacoes` e adicionar no início do campo `historico_observacoes`

Daí passo esse novo valor para o `historico_observacoes` e passo uma string vazia para o `observacoes`.

Em testes eu estava mantendo o retorno como falso e estava funcionando certinho, quando finalizei, troquei o retorno pra true.
Acontece que na próxima etapa, os dois campos chegam vazios.

```javascript
function beforeSendValidate(numState, nextState){
  const historicoObservacoes = valorDe('historico_observacoes');
  const observacoes = valorDe('observacoes');
  if(observacoes.length >= 2){
    const nome = getNome();
    const data = new Date();
    const dia = data.toLocaleDateString('pt-BR');
    const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const info = dia + ' ' + hora + ' - ' + nome + ': ';

    let novoRegistro = ''
    if(historicoObservacoes.length >= 2){
      novoRegistro = info + observacoes + '\n' + historicoObservacoes;
    } else {
      novoRegistro = info + observacoes;
    }
    alterarValor('historico_observacoes', novoRegistro);
    alterarValor('observacoes', '');
  }

  return true;
}
```

exemplos de como estava funcionando em testes:
![image](https://fluiggers.com.br/uploads/default/original/2X/c/c78e5fc0a26748de767136642e50ab989eae1ce4.png)

* * *

![image](https://fluiggers.com.br/uploads/default/original/2X/2/205121b07da8a7f0f87ecd8fdd02dfea63ee700a.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/07/2023, 09:15

Nunca tentei alterar campos no beforeSendValidate, então não sei se quando executa o evento o Fluig já está com os campos “em memória” e aceita a alteração no POST.

Você pode tentar usar o evento `inputFields`, ele serve justamente pra dar uma ajustada nos campos após a validação (recomendado pra normalizar formato de datas, por exemplo).

---

## Resposta #2

**Matheus** (@matheusassed) — 18/07/2023, 13:40

Esse `inputFields` é um evento de formulário padrão né? Usando aquela sintaxe JS/Java do Fluig.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/07/2023, 15:35

Sim, é de back.

Eu tenho alguns processos que utilizo o `beforeStateEntry` pra salvar o histórico no próprio formulário (faço quando entro na atividade que precisa de uma justificativa e valido que já tem algo escrito).

Também já usei tanto o `beforeStateEntry` quanto `afterStateEntry` pra salvar como comentário no histórico ao invés de salvar no próprio formulário.

Exemplo do meu caso no beforeStateEntry. Nesta situação toda vez que entra na etapa que precisa aprovar/reprovar a o item o sistema valida se existe uma observação/justificativa preenchida e então a adiciona no histórico e limpa o campo para uma nova observação/justificativa.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/e/e4d9c3698506f4955a7305d90275a7eea3a3f8ea_2_690x235.png)

---

## Resposta #4

**Matheus** (@matheusassed) — 25/07/2023, 10:17

Esse código é dentro do `inputFields` no caso? Vou fazer um teste com ele, parece ser exatamente o que preciso.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/07/2023, 12:22

Neste caso fiz no `beforeStateEntry`

---
