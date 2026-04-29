# Acompanhamento de Eventos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Acompanhamento+de+Eventos](https://tdn.totvs.com/display/fluig/Acompanhamento+de+Eventos)

---

A partir deste recurso é possível acompanhar a execução dos eventos pelo novo componente *loading*. Com este acompanhamento, é possível apresentar mensagens para o usuário tomar conhecimento das rotinas que estão sendo executadas quando a solicitação é encaminhada para a próxima atividade. Este também pode ser muito útil para o desenvolvedor identificar pontos de baixa performance nos desenvolvimentos realizados sob a plataforma.

Para a utilização deste recurso, basta utilizar o trecho loading.setMessage(String message) na implementação do evento, conforme exemplo no trecho de código abaixo:



```
function validateForm(form){
    loading.setMessage("Validando campos de formulário");

    if(form.getValue('nome') == null || form.getValue('nome') == '') {
        throw "Campo nome não está preenchido";
    }

    loading.setMessage("");
}
```



Assim, durante a execução deste evento, a mensagem definida na sua implementação será exibida na tela para o usuário acompanhar, conforme imagem abaixo:





Atenção

-   Para o correto funcionamento deste método, o serviço do Real Time deve estar iniciado.
-   Se não levar um tempo considerável no processamento após a atribuição da mensagem, não é possível visualizar o carregamento e a mensagem.
-   Por padrão, todos os eventos executados são informados em tela, como por exemplo: "Executando validateForms", "Executando afterStateEntry" ou "Executando createDataset", mesmo se atribuída uma mensagem usando este método.




Veja o exemplo disponível no [repositório do fluig](https://git.fluig.com/projects/SAMPLES). Utilize o arquivo **[workflow-loading](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/workflow-loading)**.
