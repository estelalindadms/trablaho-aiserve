qualquer coisa mais pode consultar o chat ou deepseek ou até mesmo o copilot do 
vscode

# criar um arquivo vue novo
é como criar um arquivo .html, por exmeplo:
*index.html*
ao invés de se colocar o *.html* no final, você irá colocar:
*.vue*

# modelo base de um arquivo vue
<template>
<div>
<!-- Aqui fica o html (conteúdo da página) -->
</div>
</template>

<scritp setup>
<!-- Aqui fica o Javascript -->
</script>

<style scoped>
<!-- aqui fica o CSS -->
</style>

# Observações sobre o arquiv .vue
quando for migrar um css para vue, lembre de quando tiver a tad:
body e html
em seu css, você terá que substituí-las por uma classe normal de css,
pois o vue não reconhec / não altera o body e html da página para isso
você precisará colocar todo o conteúdo da página dentro de uma div, ficando assim:

<template>
<div class='bg-theme'>
<!-- conteúdo da página aqui (o html que fica dentro do body) -->
</div>
</template>

<style scoped>
<!-- 
ao invés de utilizar a classe global, você vai mudar ela para uma classe
normal
body {
  background-color: red;
} -->

.bg-theme {
  background-color: red;
}

</style>

# caso especifico
caso ao criar o .vue e colocar o conteúdo html dentro da div para aplicar o fundo
fique desproporcional, você pode adicionar isso aqui na sua classe de background:

min-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* ou absolute, se preferir */
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;

permitindo que a div preencha toda a tela corretamente.

e no seu style no final ficará assim:

<style scoped>
.bg-theme{
  backgorund-color: red;
  min-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* ou absolute, se preferir */
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
}

</style>

# Iniciar o projeto Vue:
1. abra o terminal
2. cd trabalho
3. yarn dev
# Observações
após ter dado *yarn dev* você pode fazer alterações no projeto Vue, pois ele atualiza o 
projeto automaticamente, isso inclue tábé a pagina web
# Novas páginas
para se usar uma noa página vue, você tem que criar dentro da pasta:
*trabalho > src > views*
podendo deixar todas suas páginas nesta pasta
# Configuração e conexão do Vue Router para novas páginas Vue
para adicionar uma nova página ao router, você precisa ir na pasta:
trabalho > src > router > index.js
chegando no index.js do router, para adicionar novas páginas ao router você precisa seguir este padrão:
1. Importar a página dentro do index.js:

import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '@/views/TelaInicial.vue'
<!-- Você fará novos imports aqui, seguindo o mesmo direcionamento do primeiro -->
<!-- Veja o exemplo a seguir: -->
import TelaTeste from '@/views/TelaTeste.vue'

const routes = [
  { path: '/', component: TelaInicial },
  { path: '/:pathMatch(.*)*', redirect: '/' },
  
]

3. Criar a rota para a nova página:

import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from '@/views/TelaInicial.vue'
<!-- Você fará novos imports aqui, seguindo o mesmo direcionamento do primeiro -->
<!-- Veja o exemplo a seguir: -->
import TelaTeste from '@/views/TelaTeste.vue'

const routes = [
  <!-- 
  a primeira linha de rota, onde tem somente a '/'
  é a rota "index" do router, a rota qu estiver no caminho '/'
  signifcia que é o caminho raiz, ou seja, é onde tudo vai ser iniciado
  pense como se fosse um index quando você aciona o *yarn dev* no terminal
   -->
  { path: '/', component: TelaInicial },
  { path: '/:pathMatch(.*)*', redirect: '/' },
  <!-- aqui você irá criar a rota para a nova página adicionada -->
  <!-- Veja o exemplo a seguir: -->
  { path: '/teste', component: TelaTeste },
  <!-- o '/teste' é onde você irá dar o nome para a rota da página -->
  <!-- e o TelaTeste, será o caminho para a página vue que está na pasta Views -->
]

# Como usar o novo caminho?
para usar a rota criada para a página, você precisará configurar no seu arquivo .vue
para que ele redirecione corretamente a página.

por exemplo uma tela de login:

1. tela criada em: trabalho > src > views > TelaLogin.vue

2. no script da TelaInicial, você precisará chamar o router:
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
# Obs: é aconselhavel utilizar o setup na tag script para poder programar o mais
# próximo possível de um javascript normal

3. e em algum botão da tela inical, você irá chamar uma função
que aciona o redirecionamento do router:

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function redirecionamento(){
    // o router.push irá servir para redirecionar para a tela de teste atravé da rota
    // criada no trabalho > src > router> index.js
    router.push('/TelaTeste')
}
</script>

<!-- e no template: -->
<template>
<button @click='redirecionamento'>clique em mim</button>
</template>

# IMPORTANTE
    sempre que possível utilize o git ac para commitar as coisas e não perder o porgresso
<!-- 
o git ac é a mesma coisa que um:
git add . com git commit -m
para usar o comando é só usar assim:
git ac "sua descrição"
 -->

 # encerrar o projeto
 após verificar tudo que deseja, para fechar o projeto vue que está rodando
 é só ir no terminal:
 digita Q
 depois apertar Enter