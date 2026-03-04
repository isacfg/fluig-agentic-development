# Eclipse nos Macs M1 (Apple Silicon / ARM)

> **Fonte:** [https://fluiggers.com.br/t/eclipse-nos-macs-m1-apple-silicon-arm/2591](https://fluiggers.com.br/t/eclipse-nos-macs-m1-apple-silicon-arm/2591)
> **Categoria:** Ambiente Fluig
> **Criado em:** 24/02/2024, 17:21
> **Visualizações:** 523 | **Likes:** 11 | **Respostas:** 5

---

## Pergunta original

**Jorge Brigliadori** (@jorgebrigliadori) — 24/02/2024, 17:21 | ❤️ 1

Olá, Fluiggers!

Alguem está utilizando o Eclipse atualmente nos Macs com chip Apple M1, M2, M3?
Não consegui uma versão do Eclipse que rode perfeitamente.

Estou com dois casos principais:
Caso 1 - Ao tentar rodar as versões homologadas pela TOTVS (Luna e Neon), retorna erro “O Eclipse está corrompido”, ou “O Eclipse não pode ser aberto”.

Caso 2 - Ao tentar rodar a versão 2023-12, consigo instalar o Fluig Studio (Depois de me matar driblando um bug de Permissão de instalação de plugins do Eclipse), importar Datasets e Formulários, mas ao tentar importar um processo, a lista de diagramas não carrega.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Jorge Brigliadori** (@jorgebrigliadori) — 05/03/2024, 17:33 | ❤️ 4

Pessoal, depois de muitas tentativas, consegui seguindo os passos abaixo:

1 - Baixe o JDK, escolhendo a opção **macOS ARM64 DMG Installer**, e instale-o.
Link: [https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html](https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html)

2 - Baixe o Eclipse neste link, escolhendo a opção Eclipse **IDE for Java EE Developers macOS \[x86\_64\]**
Link: [https://www.eclipse.org/downloads/packages/release/neon/3](https://www.eclipse.org/downloads/packages/release/neon/3)

3 - Descompacte o arquivo do Eclipse, e mova para a pasta de Aplicativos.

4 - Clique com o botão direito no icone do Eclipse, e selecione **Mostrar Conteúdo do Pacote**. Dentro da pasta Contents, há um arquivo chamado ***Info.plist*** , abra-o com um editor de código

![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/8b4c881ad3ad4e1dfd62085ef5a582452d9e0c2c_2_596x500.png)

6 - Role até o final do arquivo, e insira o trecho de código abaixo, exatamente onde eu posicionei.
`<string>-vm</string><string>/Library/Java/JavaVirtualMachines/jdk1.8.0_333.jdk/Contents/Home/bin/java</string>`

![image](https://fluiggers.com.br/uploads/default/optimized/2X/1/1490843eb11d4061fb908775f155094658ab6dec_2_690x229.png)

7 - Substitua ***jdk1.8.0\_333.jdk*** pelo nome que está a pasta do java, caso seja diferente.

8 - Abra o Eclipse, baixe e instale o Fluig Studio, e pronto!!! Eclipse funcionando perfeitamente no Macbook Air M1!!! :heart_eyes:

---

## Resposta #2

**Gabriel Orlando** (@gabriel_orlando) — 16/04/2024, 18:47

Estou tendo os mesmos 2 casos iniciais. (Eclipse 2024 não importa processos; e Eclipse Neon não abre).
Estou usando um Macbook M2, fiz o passo a passo porém não resolveu. Me retorna o seguinte erro ao tentar abrir o Eclipse Neon:

![Captura de Tela 2024-04-16 às 18.41.33](https://fluiggers.com.br/uploads/default/optimized/2X/c/cf3b2b33fb3bb7e5a83b0bcba0e7856e6dcdbdc0_2_507x500.png)

Você teve esse erro em algum momento?

---

## Resposta #3

**Jorge Brigliadori** (@jorgebrigliadori) — 16/04/2024, 19:03

Ola, [@gabriel\_orlando](/u/gabriel_orlando) !
Não enfrentei esse problema em nenhum momento. Os erros foram outros.

Encontrei um artigo que fala sobre esse problema de Java e Eclipse no Mac. Veja se te ajuda:

[stackoverflow.com](https://stackoverflow.com/questions/25753966/eclipse-jvm-shared-library-does-not-contain-the-jni-createjavavm-symbol)

[![Ray Lang](https://i.stack.imgur.com/8lLiN.jpg?s=256&g=1)](https://stackoverflow.com/users/4024540/ray-lang)

#### [Eclipse: JVM shared library does not contain the JNI\_CreateJavaVM symbol](https://stackoverflow.com/questions/25753966/eclipse-jvm-shared-library-does-not-contain-the-jni-createjavavm-symbol)

**java, eclipse, macos, jvm**

asked by [Ray Lang](https://stackoverflow.com/users/4024540/ray-lang) on [09:41PM - 09 Sep 14 UTC](https://stackoverflow.com/questions/25753966/eclipse-jvm-shared-library-does-not-contain-the-jni-createjavavm-symbol)

---

## Resposta #4

**Láercio Silva** (@laerciols) — 16/07/2024, 14:52 | ❤️ 1

No M3, essa versão do Eclipse não chegar nem a abrir.

---

## Resposta #5

**Uilian Fragallo** (@fragallo) — 03/09/2024, 15:54 | ❤️ 1

Cara, você não tem ideia do quanto seu post me fez feliz. Muito obrigado, de verdade!
Esse post é o melhor que já encontrei na vida.

---

## Resposta #6

**Uilian Fragallo** (@fragallo) — 03/09/2024, 15:55 | ❤️ 1

Eu tivesse problema também, quando tentei usar o Eclipse 2019-03. Mas com o Neon 3 funcionou direitinho. Único comportamento estranho até agora, foi a Splash Screen que aparece de cabeça pra baixo. Fora isso, está funcionando!

---

## Resposta #7

**Jorge Brigliadori** (@jorgebrigliadori) — 05/09/2024, 15:32 | ❤️ 2

Que legal!!! Fico muito contente que esse post te ajudou, [@fragallo](/u/fragallo) !!! Tamo junto!

---

## Resposta #8

**Igor Rodrigues** (@fluigor.com.br) — 07/12/2025, 13:23 | ❤️ 1

Eu consegui fazer o fluig studio rodar no macbook pro M4, vou postar um tutorial em breve!

---
