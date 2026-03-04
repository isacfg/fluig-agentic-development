# Utilização do Plugin FLUIG no Eclipse com Macbook M1

> **Fonte:** [https://fluiggers.com.br/t/utilizacao-do-plugin-fluig-no-eclipse-com-macbook-m1/344](https://fluiggers.com.br/t/utilizacao-do-plugin-fluig-no-eclipse-com-macbook-m1/344)
> **Categoria:** Ambiente Fluig
> **Criado em:** 12/04/2021, 12:54
> **Visualizações:** 1655 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Pablo Valle** (@pablooav) — 12/04/2021, 12:54

O Fluig não é homologado oficialmente para macOS. Porém gostaria de saber se alguém está passando pelo mesmo problema que eu com os novos Macbook’s M1.

Alguém que possui a mesma máquina já conseguiu realizar importação, exportação de formulários, workflow, widgets. Qual a versão do Eclipse utilizada, foi necessário baixar algum Java ou programa a mais, alguma configuração. Afinal a versão homologada do Eclipse recomendado pela TOTVS não funciona nesta nova arquitetura.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 12/04/2021, 14:05

Qual a versão do Eclipse que está usando? E - mate minha curiosidade - o M1 é tudo isso mesmo?
Pelo que li até o momento, o Rosetta2 devia resolver qualquer problema de compatibilidade.

---

## Resposta #2

**Pablo Valle** (@pablooav) — 14/04/2021, 13:06 | ❤️ 1

Opa claro, sobre a curiosidade é sim, essa nova arquitetura tá demais, em relação de desempenho, o consumo de bateria reduzido, qualidade padrão apple. Mas tem esses problemas de compatibilidade com alguns aplicativos e recursos ainda. E no plugin do Fluig por exemplo estou com problemas, então se seu interesse é pra utilizar com Fluig, talvez possa vir a ter um encomodo assim como estou tendo rsrs. E como a TOTVS não da suporte pra macOS, tentei até abrir um chamado mas não me adiantou.

Estou utilizando esta versão do print abaixo.

![Captura de Tela 2021-04-14 às 13.02.49](https://fluiggers.com.br/uploads/default/optimized/1X/b6d8d2a5744e9d504f9064dde023a0fbb3d948c5_2_690x330.png)

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 20/04/2021, 11:42

Massa demais! Infelizmente não possuo um mac aqui pra tentar lhe ajudar…o [@leferso](/u/leferso) tem mas acho que não é M1, né?

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 20/04/2021, 12:29

experimente usar o eclipse oxigen ele funciona muito bem.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 20/04/2021, 13:47

Se ajudar, uso o Eclipse 2019-12, o último que testei que tem estabilidade no uso dos plugins - recentemente tentei a última versão, mas já de cara na hora de importar um processo os erros ‘sem noção’ já começaram…

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 30/11/2021, 10:52 | ❤️ 4

Consegui fazer funcionar, deixar registrado aqui pra galera que tiver passando por esse problema com macOS também.

1.  Baixar o JRE do site da oracle (macOS x64 DMG Installer) [https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html](https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html)

2.  Instalar o eclipse (Utilizei o [Eclipse Neon 3](https://www.eclipse.org/downloads/packages/release/neon/3) )

3.  Ir dentro dos arquivos do Eclipse.app → Contents/Eclipse/eclipe.ini

4.  Logo depois de `--launcher.appendVmargs` adicionar o trecho:


```auto
-vm
/Library/Java/JavaVirtualMachines/jdk1.8.0_301.jdk/Contents/Home/bin/java
```

*Talvez pode dar erro pois a versão do meu JDK atualmente instalado é esta 1.8.0\_301 ai caso reclame disso verifica no caminho ai listado qual a versão do seu*

5.  E ta pronto o eclipse funcionando no mac m1 :wink:

---

## Resposta #7

**Jorge Brigliadori** (@jorgebrigliadori) — 28/09/2024, 10:36

Olá!

No topico abaixo, eu postei um passo a passo sobre como utilizar o eclipse e o fluig studio, em macs silicon (M1, M2, M3)

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/jorgebrigliadori/48/1513_2.png) [Eclipse nos Macs M1 (Apple Silicon / ARM)](https://fluiggers.com.br/t/eclipse-nos-macs-m1-apple-silicon-arm/2591) [Ambiente Fluig](https://fluiggers.com.br/c/ambiente-fluig/14)
>
> > Olá, Fluiggers! Alguem está utilizando o Eclipse atualmente nos Macs com chip Apple M1, M2, M3? Não consegui uma versão do Eclipse que rode perfeitamente. Estou com dois casos principais: Caso 1 - Ao tentar rodar as versões homologadas pela TOTVS (Luna e Neon), retorna erro “O Eclipse está corrompido”, ou “O Eclipse não pode ser aberto”. Caso 2 - Ao tentar rodar a versão 2023-12, consigo instalar o Fluig Studio (Depois de me matar driblando um bug de Permissão de instalação de plugins do Ec…

---
