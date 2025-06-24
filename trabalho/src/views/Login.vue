<template>
  <div class="container">
    <div class="left">
      <div style="font-size: 60px;">😊</div>
      <h1>AISERVE COMPANY</h1>
      <p>Soluções inteligentes para o seu negócio</p>
      <div class="box">
        Transformando o futuro com tecnologia de ponta e soluções inovadoras.
      </div>
    </div>
    <div class="right">
      <div class="nav-buttons">
        <button @click="modo = 'login'">Login</button>
        <button @click="modo = 'cadastro'">Cadastro</button>
      </div>

      <div class="form-box" v-if="modo === 'login'">
        <h2>Bem-vindo de volta!</h2>
        <label>Email</label>
        <input type="email" v-model="loginEmail" placeholder="seu@email.com">
        <label>Senha</label>
        <input type="password" v-model="loginSenha" placeholder="********">

        <div class="checkbox">
          <label><input type="checkbox"> Lembrar-me</label>
          <a href="#" @click.prevent="abrirRecuperar">Esqueceu a senha?</a>
        </div>

        <div class="error">{{ loginErro }}</div>
        <button @click="entrar">Entrar</button>
      </div>

      <div class="form-box" v-if="modo === 'cadastro'">
        <h2>Crie sua conta</h2>
        <label>Nome</label>
        <input type="text" v-model="cadastroNome" placeholder="Seu nome">
        <label>Email</label>
        <input type="email" v-model="cadastroEmail" placeholder="seu@email.com">
        <label>Senha</label>
        <input type="password" v-model="cadastroSenha" placeholder="********">
        <label>Confirmar senha</label>
        <input type="password" v-model="cadastroConfirmar" placeholder="********">

        <div class="error">{{ cadastroErro }}</div>
        <button @click="cadastrar">Cadastrar</button>
      </div>

      <div class="form-box" v-if="modo === 'recuperar'">
        <h2>Recuperar Senha</h2>
        <input type="email" v-model="recuperarEmail" placeholder="Digite seu email">
        <button @click="enviarRecuperacao">Enviar</button>
        <button style="margin-top: 10px;" @click="modo = 'login'">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const modo = ref('login')
const loginEmail = ref('')
const loginSenha = ref('')
const loginErro = ref('')
const cadastroNome = ref('')
const cadastroEmail = ref('')
const cadastroSenha = ref('')
const cadastroConfirmar = ref('')
const cadastroErro = ref('')
const recuperarEmail = ref('')

const entrar = () => {
  loginErro.value = ''
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  const user = usuarios.find(u => u.email === loginEmail.value && u.senha === loginSenha.value)
  if (user) {
    localStorage.setItem('usuarioLogado', JSON.stringify(user))
    alert(`Login bem-sucedido! Bem-vindo, ${user.nome}`)
    router.push('/home') // ✅ redireciona via Vue Router para a nova rota!
  } else {
    loginErro.value = 'Email ou senha incorretos!'
  }
}

const cadastrar = () => {
  cadastroErro.value = ''
  if (!cadastroNome.value || !cadastroEmail.value || !cadastroSenha.value || !cadastroConfirmar.value) {
    cadastroErro.value = 'Preencha todos os campos!'
    return
  }
  if (cadastroSenha.value !== cadastroConfirmar.value) {
    cadastroErro.value = 'As senhas não coincidem!'
    return
  }
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
  if (usuarios.some(u => u.email === cadastroEmail.value)) {
    cadastroErro.value = 'Este e-mail já está cadastrado!'
    return
  }
  usuarios.push({
    nome: cadastroNome.value,
    email: cadastroEmail.value,
    senha: cadastroSenha.value
  })
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  alert('Cadastro realizado com sucesso!')
  modo.value = 'login'
}

const abrirRecuperar = () => {
  modo.value = 'recuperar'
}

const enviarRecuperacao = () => {
  if (!recuperarEmail.value) {
    alert('Digite um e-mail válido!')
    return
  }
  alert(`Um link de recuperação foi enviado para ${recuperarEmail.value}`)
  modo.value = 'login'
}
</script>

<style scoped>
/* ✅ Mantenho seu CSS original */
.container {
  display: flex;
  height: 100vh;
}

.left {
  background: #FFD400;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 40px;
  text-align: center;
}

.left h1 {
  margin: 20px 0 10px;
}

.left p {
  margin: 0;
}

.left .box {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  border-radius: 8px;
}

.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 40px;
}

.nav-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
}

.nav-buttons button {
  margin-left: 10px;
  padding: 8px 16px;
  background: #FFD400;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.form-box {
  width: 100%;
  max-width: 400px;
}

.form-box h2 {
  margin-bottom: 20px;
}

.form-box input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-box label {
  font-weight: bold;
}

.form-box button {
  width: 100%;
  padding: 14px;
  background: #FFD400;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.error {
  color: red;
  margin-bottom: 10px;
}

a {
  color: #d89200;
  font-size: 14px;
}

.checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
