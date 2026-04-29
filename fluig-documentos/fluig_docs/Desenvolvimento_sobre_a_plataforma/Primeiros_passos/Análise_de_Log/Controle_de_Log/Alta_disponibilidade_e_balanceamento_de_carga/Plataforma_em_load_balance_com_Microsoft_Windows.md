# Plataforma em load balance com Microsoft Windows

> **Fonte:** [https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Microsoft+Windows](https://tdn.totvs.com/display/fluig/Plataforma+em+load+balance+com+Microsoft+Windows)

---

Atenção

A utilização de servidores Microsoft Windows para ambientes com mais de uma instância **não é recomendada**.



## Situação

* * *

Relatos de diversos usuários, confirmados por testes internos, indicam que a instalação do Fluig em servidores Microsoft Windows não é recomendada quando há necessidade de configurar um Load Balancer, ou seja, quando é preciso utilizar mais de uma instância do Fluig.

Os principais problemas encontrados são:

-   **Bloqueio de arquivos**: sistemas de arquivos como o NTFS frequentemente apresentam limitações no acesso simultâneo a arquivos por múltiplos processos, situação que se torna ainda mais crítica quando os arquivos estão localizados em diretórios compartilhados na rede.
    -   Algumas situações que causam o múltiplo acesso ao mesmo arquivo:
        -   Duas instâncias do Fluig acessando o arquivo;
        -   Antivírus verificando arquivos que se encontram na pasta de instalação do Fluig ou no volume;
    -   **Principais problemas encontrados**:
        -   Ao iniciar o Fluig, o processo de deploy — e, consequentemente, o startup — falha porque um artefato do produto está sendo utilizado por outro processo, como, por exemplo, o antivírus.
        -   Ao subir uma segunda instância do Fluig, o processo de deploy — e, consequentemente, o startup — falha, pois um aplicativo customizado localizado na pasta **“apps”** já foi aberto pela primeira instância, e o Microsoft Windows mantém esse arquivo bloqueado.
        -   Não é possível visualizar um documento existente porque o arquivo já está aberto por outro usuário em uma instância diferente do Fluig, impedindo seu acesso.
    -   **Performance**: a execução do Fluig em servidores Microsoft Windows apresenta desempenho perceptivelmente inferior e demanda mais recursos de hardware do que em servidores Linux, resultando em maior custo operacional.



## Solução

* * *

Atualmente, não existe uma solução definitiva e eficaz para a execução do Fluig em ambiente com Load Balancer sobre Windows.

Diante desse cenário, recomenda-se a migração para servidores Linux, que não apresentam os problemas descritos, oferecem melhor desempenho e demandam menos recursos computacionais.
