# Usar o Fluig no Linux

> **Fonte:** [https://fluiggers.com.br/t/usar-o-fluig-no-linux/129](https://fluiggers.com.br/t/usar-o-fluig-no-linux/129)
> **Categoria:** Ambiente Fluig
> **Criado em:** 16/03/2021, 10:35
> **Visualizações:** 2037 | **Likes:** 19 | **Respostas:** 13

---

## Pergunta original

**HELIO REZENDE** (@HelioRezende) — 16/03/2021, 10:35 | ❤️ 2

-   Vou perder algum recurso ?
-   Quais são os ganhos ?
-   Tem alguma desvantagem em usar o Fluig Linux ?

Para migrar o Fluig do Windows pro Linux…

-   Como migrar pro Linux os processos e suas versões ?
-   Como migrar pro Linux os documentos do GED ?
-   Como migrar pro Linux as publicações das comunidades ?
-   Como migrar todas as solicitações finalizada ou pendentes ?

(Nota: o banco estou mantendo o banco atual SQL Server)

---

## Resposta #1

**HELIO REZENDE** (@HelioRezende) — 16/03/2021, 10:38 | ❤️ 2

Resposta: de Igor Rodrigues

Fiz varias vezes essa migração, terá ganho de performance.
Porém precisara montar um servidor de proxy reverso obrigatório.

---

## Resposta #2

**HELIO REZENDE** (@HelioRezende) — 16/03/2021, 10:40 | ❤️ 2

Resposta: Vinicius Silveira

-   Nenhuma desvantagem, apenas vantagens! Todas as empresas que trabalhei tinham a infra Linux e nunca tive problemas como DevOPS;
-   Não necessita “migrar” processos, pois os mesmos ficam armazenados em banco;
-   Os documentos do GED, basta você ir no WCMADMIN e trocar o volume default para o caminho dentro do sistema de arquivos Linux;
-   Comunidades são persistidas no banco de dados e os arquivos no GED, não necessita migração;
-   Não entendi a última, mas as solicitações permanecem no banco, não é necessário “migrar” nada.
-   Está tudo no banco, praticamente. Precisa migrar apenas o volume de documentos.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Vinicius de Moura Silveira** (@vinny.silveira) — 16/03/2021, 10:52 | ❤️ 2

Bom dia Helio! Vamos lá:

-   Existe algum recurso específico que esteja com medo de perder? Pela experiência que tenho, o Fluig opera muito bem em cima do Linux e não perde nenhum recurso da ferramenta não;

-   O Windows não é tão bom gerenciando serviços e mantendo-os por muito tempo em memória, necessitando um “reboot” semanal nas empresas que passei, Linux você não passa isso e o ganho de performance é perceptível, sem contar que o sistema de arquivos do Linux (ext4) não necessita de desfragmentação de tempo em tempo como no Windows, sem contar que Windows é pago e Linux não, este é um fator que pesa bastante dependendo da empresa e a quantidade de VMs que você possui (caso tenha load balance);

-   Quem não é usuário avançado de Linux e não sabe gerenciá-lo, pode se tornar um problema instalar e mantê-lo, pois para rodar o server, é bacana rodar somente o modo texto (sem interface gráfica) e estar familiarizado com o terminal Linux.


Para migrar o Fluig para Linux, basicamente o que necessita fazer é:

-   Mudar o local do volume default pelo WCMADMIN para os documentos do GED de acordo com a pasta escolhida no Linux;

-   O resto das informações (processos, solicitações, comunidades, etc…) estão todas salvas em banco, não necessitando de nenhuma ação.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 16/03/2021, 12:14 | ❤️ 1

E com linux é possível executar o Fluig + MySQL em uma VM Ubuntu com apenas 4gb de RAM - útil para montar máquina de desenvolvimento.

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 16/03/2021, 13:36

:+1: :ok_hand: :blue_heart:

TOPPPPPPPPPPP!

---

## Resposta #6

**Vinicius de Moura Silveira** (@vinny.silveira) — 16/03/2021, 14:18 | ❤️ 1

Fica fácil pra por num Docker tbm, que gasta menos recurso que uma VM

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 16/03/2021, 14:31 | ❤️ 1

Tu já conseguiu? Havia uma discussão antiga sobre isso, havia gente tentando, inclusive com isso no github: [GitHub - fluig/universo-trend-fluig-docker](https://github.com/fluig/universo-trend-fluig-docker)

Mas faz tempo que não é atualizado.

---

## Resposta #8

**Vinicius de Moura Silveira** (@vinny.silveira) — 16/03/2021, 14:34 | ❤️ 2

Cara, nunca me aventurei, mas já instalei o Fluig num Linux e sei todas as configurações e pacotes necessários pra rodar tudo, trabalhei bastante tempo com Docker e Docker Compose, quando eu estiver mais de boa vou dar uma olhada.

---

## Resposta #9

**Mendes** (@andersonma) — 19/03/2021, 13:36 | ❤️ 1

Daniel, é possível sim. Mas se puder aumentar a quantidade de memória, melhor será o desempenho.

---

## Resposta #10

**Sérgio Machado** (@sergio.machado) — 19/03/2021, 15:31

Tu já conseguiu? tempos atrás eu estava louco pra fazer esse experimento mas não achei em nenhum local algum guia. Agora que tenho acesso a central de downloads vou tentar fazer esse experimento, Docker é uma delicinha rs

---

## Resposta #11

**Helbert Campos** (@helbert_campos) — 23/03/2021, 09:31

Rodar o fluig em Docker não é tão fácil como pode parecer. A arquitetura exige muitas configurações que dificulta a criação do contêiner. Manter uma imagem básica de uma VM (linux+mysql), ao meu ver, é a saída mais fácil e rápida pra ambientes de desenvolvimento.

---

## Resposta #12

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 09:36 | ❤️ 1

Exatamente! Eu tenho uma aqui ubuntu server + mysql + fluig 1.7 que posso compartilhar se quiserem…mas é fácil configurar. Roda bem com 4gb de ram na VM apenas, pra máquinas com pouca RAM.

---

## Resposta #13

**Helbert Campos** (@helbert_campos) — 23/03/2021, 09:41

Eu gostaria [@daniel.cabral](/u/daniel.cabral) … não tenho na versão 1.7
Poderia compartilhar por favor?

---

## Resposta #14

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 11:37 | ❤️ 1

Só aguardar um pouco que tô subindo pro:

[https://1drv.ms/u/s!ApXgDZkDc9BTgbDOCJFghW4knudgF4s](https://1drv.ms/u/s!ApXgDZkDc9BTgbDOCJFghW4knudgF4s)

A VM possui duas placas de rede - uma para acesso à internet via NAT, e outra na rede interna com host (virtualbox) no IP 192.168.56.105. Fluig está na porta 8080

Usuários:
wcmadmin/adm
admin/fluig

Só tem um detalhe que talvez vocês possam ajudar…o serviço principal do fluig não inicia de jeito nenhum e não encontro um erro específico, ele só inicia com o:

`sudo sh /opt/fluig/appserver/bin/domain.sh &`
…na mão depois da máquina ligar. Se alguém encontrar uma forma de acertar isso, agradeço!

---

## Resposta #15

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/03/2021, 13:31 | ❤️ 1

[@daniel.cabral](/u/daniel.cabral), acho que é só manualmente mesmo. Talvez dê pra criar um script que execute ao iniciar o Linux e ele dispare os serviços.

Eu até comecei a instalar tudo num container feito com imagem Ubuntu só pra aprender a instalar num Linux em modo texto. Mas achei horrível a quantidade de configurações adicionais que precisa fazer no MySQL pra rodar o Fluig e, embora não seja o ideal, como é só pra desenvolvimento não vi necessidade de fazer um ecossistema usando o banco em outro container.

Lembro de já me falarem que usar uma VM é mais fácil/prático.

---

## Resposta #16

**Helbert Campos** (@helbert_campos) — 23/03/2021, 13:33 | ❤️ 1

Ótimo [@daniel.cabral](/u/daniel.cabral) … vamos dar esse apoio sim. Te procuro quando tiver novidades. :+1:

---

## Resposta #17

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 14:08 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) , em ambientes de parceiros que usam linux, os scripts funcionam normalmente - talvez pelo fato de estar usando uma versão ainda não homologada do ubuntu nessa VM tenhamos algum problema. Neles, os scripts padrão (sudo service xxxxx start) funcionam normalmente, e na VM tanto o realtime quanto o indexer iniciam normalmente. Mas como é um ambiente de labotarório, não me preocupo tanto. }

E, veja só…se a TOTVS já expôs essa alternativa na documentação, é porque algo pode acontecer :crazy_face:

Pensei mesmo em incluir o script em questão no init mas talvez alguém descubra uma correção - lembrando só que ainda não é um ambiente homologado mesmo…

Agora, tirando isso a VM funciona que é uma beleza pra gente desenvolver localmente!

---

## Resposta #18

**Thiago César Matos** (@thiago.matos) — 10/04/2021, 12:37

Tem algumas propriedades onde você precisa alterar o \\ do windows pela / unix.

---

## Resposta #19

**system** (@system) — 14/04/2021, 07:50

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
