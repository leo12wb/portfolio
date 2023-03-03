<template>
  <section class="portifolio">
    <topoComponent />
    <wrapperComponent />
    <!--  <menuComponent />-->
	
      
  </section>
</template>

<script lang="ts">
//import "@/assets/style.css" 
import  menuComponent  from '@/components/menuComponent.vue';
import  topoComponent  from '@/components/topoComponent.vue';
import  wrapperComponent  from '@/components/wrapperComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pagina_inicial',
  components: {menuComponent,topoComponent,wrapperComponent},
});
</script>
