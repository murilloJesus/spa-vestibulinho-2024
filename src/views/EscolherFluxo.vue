<template>
  <div class="container d-flex justify-content-center text-center p-xl-5 p-3 flex-column">
    <header>
      <h1 class="text-primary">Prepare-se para o Futuro na ETEC!</h1>
      <p class="text-secondary">Garanta uma formação de qualidade e gratuita em uma das melhores escolas técnicas do
        Brasil.</p>
    </header>
    <div class="row">
      <div class="col-lg-6 col-sm-12 d-grid  pt-5">
        <button class="btn btn-outline-primary btn-lg" @click="router.push('/aluno')">
          <h3 class="bold">
            QUERO ESTUDAR
          </h3>
          NA ETEC
        </button>
      </div>
      <div class="col-lg-6 col-sm-12 d-grid  pt-5">
        <button class="btn btn-outline-primary btn-lg" @click="router.push('/responsavel')">
          QUERO QUE
          <h3 class="bold">
            MEU FILHO ESTUDE
          </h3>
          NA ETEC
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';


</script>

<style lang="scss" scoped>
button {
  font-weight: bolder !important;
}

h3 {
  font-weight: bolder;
}
</style>
