# Load Balancer em ambiente híbrido

> **Fonte:** [https://fluiggers.com.br/t/load-balancer-em-ambiente-hibrido/895](https://fluiggers.com.br/t/load-balancer-em-ambiente-hibrido/895)
> **Categoria:** Ambiente Fluig
> **Tags:** `on-premise`, `cloud`, `nuvem`, `hibrido`, `load-balance`
> **Criado em:** 26/01/2022, 10:19
> **Visualizações:** 788 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 26/01/2022, 10:19

Fala galera, blz?

Alguém já precisou montar um cenário de balanço de carga com n servidores espalhados entre nuvem e on-premise? Tiveram algum problema de latência entre eles?

Nosso desafio aqui é montar um load-balancer que ficaria on-premise, direcionando o tráfego para as instâncias locais e na nuvem de acordo com a origem:

Cliente externo → Nuvem
Cliente interno → On Premise

Não tenho certeza se o NLB faz esse tipo de direcionamento condicional, mas vi que o apache faz.

É um ambiente interessante de se montar, mas estou pensando no possível aumento de latência nesse vai e volta entre nuvem e local, pois o balancer estaria na sede do cliente. Mesmo que a conexão entre data center local e nuvem seja rápida.

Também há a possibilidade de se deixar o load balancer na nuvem.

Alguém já pegou um cenário parecido? Teria alguma experiência para compartilhar?

\[\]s!

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 28/01/2022, 14:16 | ❤️ 1

o que posso compartilhar contigo é que não é qualquer compartilhamento de rede que o fluig aceita lá no parâmetro GLOBAL\_DATA\_DIR tivemos problemas recentes em um ambiente de loadbalance com lum feita através dos serviços do proprio windows.
E o Fluig não aceitou.
Pois tu poderia até ter 2 volumes com essa replicação acontecendo em paralelo, mais o grande desafio é a conexão do banco.
pois todas as telas do fluig dependem de uma consulta pra serem montadas, principalmente a central de tarefas.
acho que o grande desafio seria essa latencia do banco de dados mesmo.

é nois!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 08/02/2022, 08:25 | ❤️ 1

Bruxo, blz?

Fizemos alguns experimentos aqui e inicialmente achamos BEM interessante o fato de que dá pra subir várias instâncias do appserver na mesma máquina, no esquema master/slave. O resultado ficou bem interessante, principalmente num ambiente virtualizado.

Inicialmente estamos fazendo uma operação assistida com 4 instâncias dividindo o trabalho entre si e, num segundo momento, partimos para o load balance com NLB (o ambiente é windows)

Sobre o ambiente híbrido, realmente surgiu uma preocupação a respeito da latência e, principalmente, da segurança. O cliente possui um link lan-to-lan entre o site principal e o outro datacenter, mas a banda é limitada e isso pode ser um grande problema no médio prazo.

---

## Resposta #3

**Gabriel Martins** (@Gabriel_Martins) — 27/06/2024, 19:14

Como faço p fazer instancias de outros servers virarem slave do principal?

---

## Resposta #4

**Leonardo Moura** (@Leonardo_Moura) — 02/10/2024, 17:54 | ❤️ 1

**Boa noite,**

Alguém poderia me orientar sobre como configurar um ambiente de **Load Balancer**? Participei do Universo Totvs e fui informado de que, quando falamos em hardware, é mais recomendado expandir **horizontalmente**, e não **verticalmente**.

Também foi sugerido que o uso de um **Load Balancer** seria a melhor solução para garantir um ambiente mais estável, evitando gargalos nos processos.

Atualmente, tenho uma configuração de 8 vCPUs, 16 GB de memória e 650 GB de disco. Estou planejando expandir para 8 vCPUs, 32 GB de memória e 750 GB de disco.

Pensei em utilizar um Load Balancer para distribuir a carga entre 2 ou 3 servidores com 8 vCPUs, 8 GB de memória e 650 GB de disco cada. Gostaria de saber se essa seria uma boa solução e se alguém poderia me orientar sobre essa abordagem.

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 02/10/2024, 21:05 | ❤️ 2

Olá Leonardo,

Inicialmente te faço duas sugestões, e lhe explico brevemente o que será necessário fazer, a documentação oficial que fala sobre criação de loadbalancer pode te ajudar bastante.

tudo que tu precisa saber sobre o loadbalancer está neste link
[https://tdn.totvs.com/display/public/fluig/Plataforma+em+load+balance+com+Apache+mod\_proxy+em+Linux](https://tdn.totvs.com/display/public/fluig/Plataforma+em+load+balance+com+Apache+mod_proxy+em+Linux)

\*\*\*\*PS:Apenas atenção a documentação, vc nao vai utilizar o metodo de Criando uma segunda instância na mesma instalação!!!

vc deve seguir a documentação de \**Criando uma instância em outra máquina*

Passo 1 - Além dos servidores de aplicação, tu vai precisar de um servidor linux para instalar um apache e configurar o proxybalancer

Passo 2 - Configurar um compartilhamento de pasta para que os 3 servidores compartilhem a mesma estrutura de volume, apps e repository/wcmdir.

Passo 3 - Configurar o servidor MASTER (Fluig1) conforme a documentação.

Passo 4 - Configurar os servidores Slave (Fluig2 e Fluig3) conforme documentação.
Neste 2 servidores tu terá passos semelhantes de configuração do servidor MASTER, como parametrizar o que chamamos de GLOBAL\_DATA\_DIR que seria os diretórios compartilhados entre eles e ajustar no arquivo de host.xml o server-name do nó para fluig2 e fluig3.

também como tu comentou, a performance do fluig não muda se alocado mais que 18gb de ram, configurado o jvm do jboss limitado a 12gb conforme documentação do time prime apresentada no universo TOTVS sugiro tu aplicar os 4 primeiros passos do link.
[https://tdn.totvs.com/display/public/fluig/10+dicas+para+turbinar+seu+TOTVS+Fluig%2C+melhorando+desempenho+e+estabilidade](https://tdn.totvs.com/display/public/fluig/10+dicas+para+turbinar+seu+TOTVS+Fluig%2C+melhorando+desempenho+e+estabilidade)

Espero ter ajudado!

---
