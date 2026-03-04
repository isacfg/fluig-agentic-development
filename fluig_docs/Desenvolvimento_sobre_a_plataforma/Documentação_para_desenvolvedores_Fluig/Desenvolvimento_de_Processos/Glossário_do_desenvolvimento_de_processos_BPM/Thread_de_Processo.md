# Thread de Processo

> **Fonte:** [https://tdn.totvs.com/display/fluig/Thread+de+Processo](https://tdn.totvs.com/display/fluig/Thread+de+Processo)

---

* * *



Em processos, usamos um sequencial que chamamos de thread para o controle de paralelismo, ou seja, quando um processo possuí um gateway do tipo fork ou inclusivo.

Toda solicitação começa com a thread zero e caso não possua nenhum dos gateways mencionados, todas as suas movimentações serão na thread zero até o final.

Imagem de um processo simples sem gateways mostrando que todas as atividades serão na thread zero



Porém, quando entra em um fork ou inclusivo, todos os novos caminhos geram uma nova thread (1, 2, 3...). E ao se juntar novamente em um join, uma nova thread é criada, ou seja, uma vez iniciada uma nova thread, nunca mais a thread volta a ser zero.

Imagem de um processo com gateway paralelo mostrando que a cada novo caminho do fork gera uma nova thread e o join cria uma nova thread sem voltar para o zero
