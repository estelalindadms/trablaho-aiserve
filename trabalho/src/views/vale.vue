<template>
  <div>
    <!-- Cabeçalho Padrão -->
    <div class="company-header">
      <button class="logo-name" @click="redirectToHome">
        <span>A</span>ISERVE COMPANY
      </button>
      <div class="search-container">
        <div class="top-bar d-flex align-items-center">
          <i class="bi bi-search me-2"></i>
          <input 
            type="text" 
            class="form-control border-0 bg-transparent" 
            placeholder="BUSQUE O SERVIÇO DO SEU INTERESSE"
          >
        </div>
      </div>
    </div>

    <!-- Imagem Principal -->
    <div class="company-image">
      <img 
        src="https://br.advfn.com/jornal/files/2015/08/vale.jpg" 
        alt="Vale"
        class="img-fluid"
      >
    </div>

    <!-- Logo e Nome da Empresa -->
    <div class="company-info-container d-flex align-items-center position-relative">
      <div class="d-flex align-items-center ps-4" style="width: 100%;">
        <img 
          src="https://assets.hgbrasil.com/finance/companies/big/vale.png" 
          class="img-vale-logo me-4" 
          alt="Logo Vale"
        >
        <h2 class="m-0">Vale</h2>
      </div>
      <button 
        class="btn btn-servico position-absolute end-0 me-4" 
        @click="showModal = true"
      >
        SOLICITE O SERVIÇO
      </button>
    </div>

    <!-- Modal de Serviço -->
    <div class="modal fade" :class="{ 'show d-block': showModal }" v-show="showModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Solicitação de Serviço</h5>
            <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label class="form-label required-field">Tipo de serviço</label>
                <select class="form-select" v-model="form.servico" required>
                  <option value="">Selecione um serviço...</option>
                  <option value="mineracao">Serviços de Mineração</option>
                  <option value="logistica">Logística e Transporte</option>
                  <option value="consultoria">Consultoria Técnica</option>
                  <option value="sustentabilidade">Projetos de Sustentabilidade</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Data desejada</label>
                <input type="date" class="form-control" v-model="form.data">
              </div>
              <div class="mb-3">
                <label class="form-label required-field">Descrição do serviço</label>
                <textarea class="form-control" v-model="form.descricao" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-submit">ENVIAR SOLICITAÇÃO</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" v-if="showModal"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const form = ref({
  servico: '',
  data: '',
  descricao: ''
});

const submitForm = () => {
  alert('Solicitação enviada com sucesso!');
  showModal.value = false;
  form.value = { servico: '', data: '', descricao: '' };
};

const redirectToHome = () => {
  window.location.href = "tela-principal.html";
};
</script>

<style scoped>
body {
  background-color: rgb(235, 240, 167);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
}

.logo-name {
  font-family: 'Georgia', serif;
  font-weight: bold;
  font-size: 24px;
  padding: 8px 16px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
}

.logo-name span {
  color: #fce220;
}

.btn-servico {
  background-color: #f7d563;
  font-weight: bold;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-servico:hover {
  background-color: #fbd606;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.company-header {
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
  height: 85px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.search-container {
  width: 50%;
  margin: 0 auto;
}

.top-bar {
  border: 2px solid #fedd4c;
  border-radius: 30px;
  padding: 8px 15px;
  background-color: #f9f9f9;
}

.company-image {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 240, 167);
  margin-bottom: 40px;
}

.company-image img {
  width: 80%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.company-info-container {
  padding: 20px 0;
  background-color: rgb(235, 240, 167);
}

.img-vale-logo {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  margin-left: 20px;
  object-fit: contain;
  background-color: white;
  padding: 5px;
}

h2 {
  font-size: 40px;
  margin-left: 30px;
  color: #0F4D81; /* Azul característico da Vale */
}

.required-field::after {
  content: " *";
  color: red;
}

.modal-backdrop {
  opacity: 0.5 !important;
}

.btn-submit {
  background-color: #0F4D81; /* Azul Vale */
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background-color: #0A3A6B; /* Tom mais escuro de azul */
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .search-container {
    width: 80%;
  }
  
  h2 {
    font-size: 28px;
    margin-left: 15px;
  }
  
  .img-vale-logo {
    height: 70px;
    width: 70px;
    margin-left: 10px;
  }
  
  .btn-servico {
    position: relative;
    margin-top: 10px;
    right: auto;
  }
  
  .company-info-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .company-image img {
    width: 95%;
  }
}
</style>