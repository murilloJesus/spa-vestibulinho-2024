<script setup>
import { RouterView } from 'vue-router'

// Função para enviar a altura atual do conteúdo
function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: 'resize', height: height }, '*');
}

// Exemplo: Enviar altura ao carregar
window.onload = sendHeight;

// Opcional: Observe mudanças no tamanho do conteúdo e envie atualizações
new ResizeObserver(sendHeight).observe(document.body);
</script>

<template>
  <RouterView />
</template>
