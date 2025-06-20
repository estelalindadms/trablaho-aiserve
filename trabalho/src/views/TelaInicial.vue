<template>
  <div class="body">

  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div class="container-fluid">
        <button class="btn btn-light me-2" @click="abrirModal">
          <i class="bi bi-list" style="font-size: 1.5rem;"></i>
        </button>
        <div class="logo-name mx-auto">
          <span>A</span>ISERVE COMPANY
        </div>
      </div>
    </nav>

    <!-- Barra de Pesquisa -->
    <div class="container my-4">
      <div class="search-container">
        <div class="input-group search-box bg-white shadow-sm">
          <span class="input-group-text bg-white border-0">
            <div class="icon-search"></div>
          </span>
          <input type="text" class="form-control border-0" 
                 placeholder="BUSQUE AQUI O SERVIÇO DO SEU INTERESSE" 
                 v-model="termoBusca">
        </div>
      </div>
    </div>

    <!-- Conteúdo Principal -->
    <main class="container my-5">
      <!-- Carrossel Principais Empresas -->
      <section class="mb-5">
        <h2 class="text-center mb-4">Principais Empresas</h2>
        <div id="carrosselPrincipais" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" 
                 :class="{ 'active': index === 0 }" 
                 v-for="(grupo, index) in gruposEmpresasPrincipais" 
                 :key="'principais-'+index">
              <div class="row justify-content-center g-4">
                <div class="col-6 col-md-3 text-center" v-for="empresa in grupo" :key="empresa.id">
                  <button class="btn p-0 empresa-card" @click="abrirJanela(empresa.link)">
                    <img :src="empresa.logo" 
                         class="img-fluid rounded-circle border border-warning shadow" 
                         width="120" height="120">
                    <p class="mt-2 fw-bold">{{ empresa.nome }}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carrosselPrincipais" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carrosselPrincipais" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <!-- Carrossel Empresas Próximas -->
      <section class="mb-5">
        <h2 class="text-center mb-4">Empresas perto de você</h2>
        <div id="carrosselProximas" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" 
                 :class="{ 'active': index === 0 }" 
                 v-for="(grupo, index) in gruposEmpresasProximas" 
                 :key="'proximas-'+index">
              <div class="row justify-content-center g-4">
                <div class="col-6 col-md-3 text-center" v-for="empresa in grupo" :key="empresa.id">
                  <div class="d-flex flex-column align-items-center">
                    <button class="btn p-0 empresa-card botao-retangular" @click="abrirJanela(empresa.link)">
                      <img :src="empresa.logo" class="imagem-empresa">
                    </button>
                    <p class="mt-2 fw-bold text-center">{{ empresa.nome }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carrosselProximas" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carrosselProximas" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </main>

    <!-- Modal Menu -->
    <div class="modal fade" :class="{ 'show d-block': modalAberto }" tabindex="-1" @click.self="fecharModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Menu</h5>
            <button type="button" class="btn-close" @click="fecharModal"></button>
          </div>
          <div class="modal-body">
            <button class="btn btn-light w-100 mb-2 text-start" @click="abrirModalConteudo('inicio')">
              <i class="bi bi-house-door me-2"></i> Início
            </button>
            <button class="btn btn-light w-100 mb-2 text-start" @click="abrirModalConteudo('servicos')">
              <i class="bi bi-gear me-2"></i> Serviços
            </button>
            <button class="btn btn-light w-100 mb-2 text-start" @click="abrirModalConteudo('sobreNos')">
              <i class="bi bi-info-circle me-2"></i> Sobre Nós
            </button>
            <button class="btn btn-light w-100 text-start" @click="abrirModalConteudo('ajuda')">
              <i class="bi bi-question-circle me-2"></i> Ajuda
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="fecharModal">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Início -->
    <div class="modal fade" :class="{ 'show d-block': modalInicioAberto }" tabindex="-1" @click.self="fecharModalConteudo('inicio')">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Bem-vindo à AISERVE COMPANY</h5>
            <button type="button" class="btn-close" @click="fecharModalConteudo('inicio')"></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <img src="https://via.placeholder.com/150" class="rounded-circle border border-warning p-2" alt="Logo AISERVE">
            </div>
            <p class="lead text-center"><strong>🌟 Transformando seu negócio no mundo digital!</strong></p>
            
            <p>A <strong class="text-warning">AISERVE COMPANY</strong> é uma empresa inovadora especializada em soluções de e-commerce. Nosso propósito é transformar a experiência online de nossos clientes e parceiros por meio de tecnologias de ponta e um atendimento personalizado.</p>
        
            <h5 class="mt-4"><i class="bi bi-stars text-warning"></i> O que oferecemos?</h5>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item d-flex align-items-center">
                <i class="bi bi-shop-window text-warning me-2"></i>
                <strong>Plataformas de E-commerce Personalizadas:</strong> Criamos lojas virtuais adaptadas às suas necessidades
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="bi bi-graph-up text-warning me-2"></i>
                <strong>Consultoria e Estratégias Digitais:</strong> Ajudamos sua empresa a se destacar online
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="bi bi-cart-check text-warning me-2"></i>
                <strong>Integração com Marketplaces:</strong> Expandimos a visibilidade do seu negócio
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i class="bi bi-truck text-warning me-2"></i>
                <strong>Gestão de Logística:</strong> Soluções completas para armazenamento e envio
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="fecharModalConteudo('inicio')">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Serviços -->
    <div class="modal fade" :class="{ 'show d-block': modalServicosAberto }" tabindex="-1" @click.self="fecharModalConteudo('servicos')">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nossos Serviços</h5>
            <button type="button" class="btn-close" @click="fecharModalConteudo('servicos')"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="card h-100 border-warning">
                  <div class="card-body">
                    <h5 class="card-title text-warning"><i class="bi bi-shop"></i> E-commerce Completo</h5>
                    <p class="card-text">Solução completa para sua loja virtual com design responsivo, checkout seguro e integração com meios de pagamento.</p>
                    <ul>
                      <li>Design personalizado</li>
                      <li>Catálogo de produtos</li>
                      <li>Carrinho de compras</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card h-100 border-warning">
                  <div class="card-body">
                    <h5 class="card-title text-warning"><i class="bi bi-megaphone"></i> Marketing Digital</h5>
                    <p class="card-text">Estratégias para aumentar sua visibilidade e conversões no ambiente digital.</p>
                    <ul>
                      <li>SEO e otimização</li>
                      <li>Gestão de redes sociais</li>
                      <li>Campanhas de anúncios</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card h-100 border-warning">
                  <div class="card-body">
                    <h5 class="card-title text-warning"><i class="bi bi-box-seam"></i> Logística Integrada</h5>
                    <p class="card-text">Soluções completas para armazenamento, preparação e envio de pedidos.</p>
                    <ul>
                      <li>Armazenamento de produtos</li>
                      <li>Embalagem personalizada</li>
                      <li>Rastreamento de entregas</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card h-100 border-warning">
                  <div class="card-body">
                    <h5 class="card-title text-warning"><i class="bi bi-headset"></i> Suporte Contínuo</h5>
                    <p class="card-text">Atendimento especializado para garantir o perfeito funcionamento do seu e-commerce.</p>
                    <ul>
                      <li>Suporte 24/7</li>
                      <li>Treinamentos</li>
                      <li>Manutenção preventiva</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="fecharModalConteudo('servicos')">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Sobre Nós -->
    <div class="modal fade" :class="{ 'show d-block': modalSobreNosAberto }" tabindex="-1" @click.self="fecharModalConteudo('sobreNos')">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Sobre a AISERVE COMPANY</h5>
            <button type="button" class="btn-close" @click="fecharModalConteudo('sobreNos')"></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <img src="https://via.placeholder.com/300x150?text=AISERVE+COMPANY" class="img-fluid rounded border border-warning" alt="Sobre Nós">
            </div>
            
            <h5 class="text-warning"><i class="bi bi-building"></i> Nossa História</h5>
            <p>Fundada em 2015, a AISERVE COMPANY nasceu da necessidade de oferecer soluções digitais completas e acessíveis para pequenas e médias empresas. Começamos como uma pequena startup e hoje somos referência no mercado de e-commerce.</p>
            
            <h5 class="text-warning mt-4"><i class="bi bi-eye"></i> Nossa Visão</h5>
            <p>Ser a principal plataforma de soluções digitais integradas para empresas que desejam expandir seus negócios no ambiente online, oferecendo tecnologia de ponta com atendimento humanizado.</p>
            
            <h5 class="text-warning mt-4"><i class="bi bi-people"></i> Nosso Time</h5>
            <p>Contamos com uma equipe multidisciplinar de especialistas em tecnologia, marketing digital, design e logística, todos comprometidos com o sucesso dos nossos clientes.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="fecharModalConteudo('sobreNos')">Fechar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ajuda -->
    <div class="modal fade" :class="{ 'show d-block': modalAjudaAberto }" tabindex="-1" @click.self="fecharModalConteudo('ajuda')">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Central de Ajuda</h5>
            <button type="button" class="btn-close" @click="fecharModalConteudo('ajuda')"></button>
          </div>
          <div class="modal-body">
            <div class="accordion" id="accordionAjuda">
              <div class="accordion-item border-warning">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <i class="bi bi-question-circle text-warning me-2"></i> Como criar minha conta?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionAjuda">
                  <div class="accordion-body">
                    <p>Para criar sua conta, clique em "Cadastre-se" no menu principal e preencha o formulário com seus dados. Você receberá um e-mail de confirmação para ativar sua conta.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-warning">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    <i class="bi bi-credit-card text-warning me-2"></i> Quais formas de pagamento aceitamos?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionAjuda">
                  <div class="accordion-body">
                    <p>Aceitamos todas as principais bandeiras de cartão de crédito, Pix, boleto bancário e transferência. Para empresas, oferecemos também condições especiais de pagamento.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-warning">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    <i class="bi bi-truck text-warning me-2"></i> Qual o prazo de entrega?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionAjuda">
                  <div class="accordion-body">
                    <p>O prazo varia conforme o serviço contratado. Para desenvolvimento de e-commerce, o prazo médio é de 30 dias. Serviços de marketing digital começam a ser implementados em até 5 dias úteis.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-warning mt-4">
              <div class="card-body">
                <h5 class="card-title text-warning"><i class="bi bi-headset"></i> Contato</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-envelope text-warning me-2"></i>
                    <strong>E-mail:</strong> contato@aiserve.com.br
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-telephone text-warning me-2"></i>
                    <strong>Telefone:</strong> (11) 4002-8922
                  </li>
                  <li class="list-group-item d-flex align-items-center">
                    <i class="bi bi-whatsapp text-warning me-2"></i>
                    <strong>WhatsApp:</strong> (11) 98765-4321
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" @click="fecharModalConteudo('ajuda')">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // <-- Adiciona o import do router

const router = useRouter(); // <-- Instancia o router

// Estados reativos
const modalAberto = ref(false);
const modalInicioAberto = ref(false);
const modalServicosAberto = ref(false);
const modalSobreNosAberto = ref(false);
const modalAjudaAberto = ref(false);
const termoBusca = ref('');

// Dados das empresas (links agora em .vue)
const empresasPrincipais = ref([
  { id: 1, nome: 'LinkedIn', logo: 'https://blog.waalaxy.com/wp-content/uploads/2021/01/1-2.png', link: 'linkedin' },
  { id: 2, nome: 'Vale', logo: 'https://assets.hgbrasil.com/finance/companies/big/vale.png', link: 'vale' },
  { id: 3, nome: 'Coca-Cola', logo: 'https://pbs.twimg.com/profile_images/1744786283531059200/lrggJynL_400x400.jpg', link: 'coca' },
  { id: 4, nome: 'Senai', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgrWS-bcLf1OqWLxdM7IOPulZkCP9OhISbQ&s', link: 'senai' },
  { id: 5, nome: 'Ambev', logo: 'https://assets.hgbrasil.com/finance/companies/big/ambev-s-a.png', link: 'ambev' },
  { id: 6, nome: 'Cacau Show', logo: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/stores/64c7b59de71e3.png', link: 'cacau' }
]);

const empresasProximas = ref([
  { id: 1, nome: 'LinkedIn', logo: 'https://blog.waalaxy.com/wp-content/uploads/2021/01/1-2.png', link: 'linkedin' },
  { id: 2, nome: 'Vale', logo: 'https://assets.hgbrasil.com/finance/companies/big/vale.png', link: 'vale' },
  { id: 3, nome: 'Coca-Cola', logo: 'https://pbs.twimg.com/profile_images/1744786283531059200/lrggJynL_400x400.jpg', link: 'coca' },
  { id: 4, nome: 'Senai', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgrWS-bcLf1OqWLxdM7IOPulZkCP9OhISbQ&s', link: 'senai' },
  { id: 5, nome: 'Ambev', logo: 'https://assets.hgbrasil.com/finance/companies/big/ambev-s-a.png', link: 'ambev' },
  { id: 6, nome: 'Cacau Show', logo: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/stores/64c7b59de71e3.png', link: 'cacau' }
]);

const gruposEmpresasPrincipais = computed(() => dividirEmGrupos(empresasPrincipais.value, 4));
const gruposEmpresasProximas = computed(() => dividirEmGrupos(empresasProximas.value, 4));

// Métodos
const abrirModal = () => {
  modalAberto.value = true;
  document.body.style.overflow = 'hidden';
};

const fecharModal = () => {
  modalAberto.value = false;
  document.body.style.overflow = 'auto';
};

const abrirModalConteudo = (modal) => {
  fecharModal();
  setTimeout(() => {
    switch(modal) {
      case 'inicio':
        modalInicioAberto.value = true;
        break;
      case 'servicos':
        modalServicosAberto.value = true;
        break;
      case 'sobreNos':
        modalSobreNosAberto.value = true;
        break;
      case 'ajuda':
        modalAjudaAberto.value = true;
        break;
    }
    document.body.style.overflow = 'hidden';
  }, 0);
};

const fecharModalConteudo = (modal) => {
  switch(modal) {
    case 'inicio':
      modalInicioAberto.value = false;
      break;
    case 'servicos':
      modalServicosAberto.value = false;
      break;
    case 'sobreNos':
      modalSobreNosAberto.value = false;
      break;
    case 'ajuda':
      modalAjudaAberto.value = false;
      break;
  }
  document.body.style.overflow = 'auto';
};

// Altera para navegação SPA usando o router
const abrirJanela = (rota) => {
  router.push({ name: rota });
};

const dividirEmGrupos = (lista, tamanho) => {
  const grupos = [];
  for (let i = 0; i < lista.length; i += tamanho) {
    grupos.push(lista.slice(i, i + tamanho));
  }
  return grupos;
};
</script>

<style scoped>
.body {
  background-color: rgb(235, 240, 167);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo-name {
  font-family: 'Georgia', serif;
  font-size: 28px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.logo-name span {
  color: #fce220;
}

.icon-search {
  width: 20px;
  height: 20px;
  border: 2px solid #fedd4c;
  border-radius: 50%;
  position: relative;
}

.icon-search::after {
  content: "";
  width: 10px;
  height: 2px;
  background-color: #fedd4c;
  position: absolute;
  right: -6px;
  bottom: -3px;
  transform: rotate(45deg);
}

/* Estilo personalizado para os carrosseis */
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 60% 60%;
}

/* Estilo para os cards das empresas */
.empresa-card {
  transition: transform 0.3s ease;
  border: none !important;
  text-decoration: none;
}

.empresa-card:hover {
  transform: scale(1.05);
}

/* Barra de pesquisa estilizada */
.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.search-box {
  border: 2px solid #fedd4c;
  border-radius: 50px;
  padding: 8px 20px;
}

/* Estilo para os botões retangulares das empresas próximas */
.botao-retangular {
  width: 160px;
  height: 120px;
  border: 2px solid #fedd4c;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  padding: 0;
  display: block;
  margin: 0 auto;
  background-color: white;
}

.imagem-empresa {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Estilo para modais */
.modal-content {
  border-radius: 10px;
  border: 2px solid #fedd4c;
}

.modal-header {
  border-bottom: 1px solid #fedd4c;
  background-color: #f8f9fa;
}

.modal-footer {
  border-top: 1px solid #fedd4c;
  background-color: #f8f9fa;
}

/* Responsividade adicional */
@media (max-width: 768px) {
  .botao-retangular {
    width: 140px;
    height: 100px;
  }
  
  .logo-name {
    font-size: 24px;
  }
}
</style>