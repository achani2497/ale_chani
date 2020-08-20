<template>
  <div>
    <div class="init-image">
      <img src="@/assets/images/habilidades.svg" alt="">
    </div>
    <h1>Habilidades</h1>
    <ul class="habilidades">
      <li v-for="(habilidad, index) in habilidades" :key="index">
        <ul>
          <li>{{habilidad.nombre}} <div class="icon" :style="{'background-image': 'url('+require('@/assets/icons/'+habilidad.icon+'.svg')+')'}"></div> </li>
          <li>Nivel: {{habilidad.nivel}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style>
img{
  height: 250px;
  width: 250px;
}
.init-image{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
ul > li > ul > li{
  display: flex;
  flex-direction: row;
}
li{
  list-style: none;
}
.icon{
  height: 35px;
  width: 35px;
  background-size:contain;
  background-repeat: no-repeat;
}

</style>
<script>

export default {
  name: 'Home',
  data: function(){
      return {
        habilidades: [
          {
            nombre:'HTML',
            icon:'html',
            nivel:'Avanzado'
          },
          {
            nombre:'CSS',
            icon:'css',
            nivel:'Intermedio'
          },
          {
            nombre:'JavaScript',
            icon:'javascript',
            nivel:'Intermedio'
          },
          {
            nombre:'MySQL',
            icon:'mysql',
            nivel:'Básico/Intermedio'
          },
          {
            nombre:'Vue',
            icon:'vue',
            nivel:'Básico'
          },
          {
            nombre:'Laravel',
            icon:'laravel',
            nivel:'Básico'
          },
          {
            nombre:'Bootstrap',
            icon:'bootstrap',
            nivel:'Intermedio'
          },
          {
            nombre:'Github',
            icon:'github',
            nivel:'Intermedio'
          }
        ]
      }
  }
}
</script>
