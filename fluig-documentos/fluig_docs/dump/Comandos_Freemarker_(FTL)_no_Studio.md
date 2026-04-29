# Comandos Freemarker (FTL) no Studio

> **Fonte:** [https://tdn.totvs.com/display/fluig/Comandos+Freemarker+%28FTL%29+no+Studio](https://tdn.totvs.com/display/fluig/Comandos+Freemarker+%28FTL%29+no+Studio)

---

# Índice

# Objetivo

O objetivo deste guia é apresentar alguns comandos do Freemarker que podem ser utilizados no fluig Studio.

# Comandos

A seguir são apresentados os comandos e sua utilização:

Comando

Descrição

@wcm.header

Macro especial do fluig, insere o cabeçalho no *layout*. Veja mais em [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM).

@wcm.menu

Macro especial do fluig, insere o menu no *layout*. Veja mais em [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM).

@wcm.renderSlot

Macro especial do fluig, insere um *slot* no *layout*. Veja mais em [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM).

@wcm.footer

Macro especial do fluig, insere o rodapé no layout. Veja mais em [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM).

assign

Cria uma variável, ou substitui uma variável existente, veja mais em *[Assign](http://freemarker.org/docs/ref_directive_assign.html#ref.directive.assign)*.

attempt

Faz com que a página renderize, mesmo que uma parte da renderização falhe. Veja mais em *[Attempt](http://freemarker.org/docs/ref_directive_attempt.html#ref.directive.attempt)*.

break

Veja *[Switch](#ComandosFreemarker\(FTL\)noStudio-switch)* ou *[List](#ComandosFreemarker\(FTL\)noStudio-list)*.

case

Veja *[Switch](#ComandosFreemarker\(FTL\)noStudio-switch)*.

compress

Remove espaços em branco desnecessários. Veja mais em *[Compress](http://freemarker.org/docs/ref_directive_compress.html#ref.directive.compress)*.

default

Veja *[Switch](#ComandosFreemarker\(FTL\)noStudio-switch)*.

else / elseif

Veja *[If](#ComandosFreemarker\(FTL\)noStudio-i)*.

function

Cria um método. Se o método não contém um retorno, então é retornada uma variável *undefined*. Veja mais em *[Function](http://freemarker.org/docs/ref_directive_function.html#ref.directive.function)*.

flush

Quando o Freemarker gera o *output*, geralmente ele guarda esse *output* gerado e envia para o *client* em um ou mais pedaços. Esse ato se chama fazer o *flush*. Normalmente ele ocorre automaticamente. Veja mais em *[Flush](http://freemarker.org/docs/ref_directive_flush.html#ref.directive.flush)*.

global

if

Você pode utilizar as diretivas *if*, *elseif* e *else* para condicionalmente pular uma seção do template. As condições devem traduzir para um valor *booleano*, caso contrário, um erro irá interromper o processamento do *template*. Os *elseif* e *else* devem ocorrer dentro de um *if* (ou seja, entre as tags de inicio e fim do *If*). O *if* pode conter qualquer numero de *elseif* (incluindo 0) e, no final, opcionalmente, um *else*. Veja mais em [If](http://freemarker.org/docs/ref_directive_if.html#ref.directive.if).

import

Importa uma biblioteca. Veja mais em *[Import](http://freemarker.org/docs/ref_directive_import.html#ref.directive.import)* e [Criar uma biblioteca personalizada](https://tdn.totvs.com/display/fluig/Criar+uma+biblioteca+personalizada).

include

Inclui outro *template* Freemarker dentro do seu *template*. Veja mais em *[Include](http://freemarker.org/docs/ref_directive_include.html#ref.directive.include)*.

list

Processa uma seção de *template* para cada variável contida dentro de uma sequência. Veja mais em *[List](http://freemarker.org/docs/ref_directive_list.html#ref.directive.list)*.

local

Cria ou substitui uma variável local. Funciona apenas dentro de uma [Macro](#ComandosFreemarker\(FTL\)noStudio-macro) ou *[Function](#ComandosFreemarker\(FTL\)noStudio-functi)*. Veja mais em [Local](http://freemarker.org/docs/ref_directive_local.html#ref.directive.local).

lt

*Left Trim*: ignora todos os espaços em branco precedentes na linha. Veja mais em [LT](http://freemarker.org/docs/ref_directive_t.html#ref.directive.lt).

macro

Cria uma variável de macro. Veja mais em [Macro](http://freemarker.org/docs/ref_directive_macro.html#ref.directive.macro) e [Criar uma biblioteca personalizada](https://tdn.totvs.com/display/fluig/Criar+uma+biblioteca+personalizada).

nested

Executa o fragmento do *template*. Veja a diretiva [Macro](#ComandosFreemarker\(FTL\)noStudio-macro).

nt

*No Trim*: desabilita a remoção de espaços em branco na linha onde ele é utilizado. Ele também desabilita os efeitos de outras diretivas de *trim*. Veja mais em [NT](http://freemarker.org/docs/ref_directive_nt.html#ref.directive.nt).

recover

Veja *[Attempt](#ComandosFreemarker\(FTL\)noStudio-a)*. O bloco de *recover* é executado no lugar do bloco *attempt*. Caso nenhum erro ocorra durante a execução do bloco *attempt* então o bloco *recover* é ignorado.

recurse

Percorre todos os nós filhos de um nó. Veja mais em *[Recurse](http://freemarker.org/docs/ref_directive_visit.html#ref.directive.recurse)*.

return

Veja [Macro](#ComandosFreemarker\(FTL\)noStudio-macro) e *[Function](#ComandosFreemarker\(FTL\)noStudio-function)*.

rt

*Right Trim*: ignora todos os espaços em branco procedentes na linha. Veja mais em [RT](http://freemarker.org/docs/ref_directive_t.html#ref.directive.rt).

stop

Interrompe o processo de renderização do *template*. Veja mais em *[Stop](http://freemarker.org/docs/ref_directive_stop.html#ref.directive.stop)*.

switch

*Switch* é utilizado para selecionar um fragmento do template dependendo do valor de uma expressão. Veja mais em *[Switch](http://freemarker.org/docs/ref_directive_switch.html#ref.directive.switch)*.

t

*Trim*: ignora os espaços em branco precedentes e procedentes na linha. Veja mais em [T](http://freemarker.org/docs/ref_directive_t.html#ref.directive).
