<template>
  <div>
    <div class="init-image">
      <img src="@/assets/images/habilidades.svg" alt="">
    </div>
    <h1>Habilidades</h1>
    <ul class="habilidades">
      <li v-for="(habilidad, index) in habilidades" :key="index">
        <ul>
          <li><div class="icon" :style="{'background-image': 'url('+require('@/assets/icons/'+habilidad.icon+'.svg')+')'}"></div> <span>{{habilidad.nivel}}</span> </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@media screen and (max-width: 678px){
  img{
    /* margin-top: -50px; */
    height: 250px;
    width: 250px;
  }
  .init-image{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li{
    list-style: none;
  }
  h1{
    margin-top: -40px;
    text-align: center;
    font-size: 4rem;
    color: white;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, .9);
    letter-spacing: 4px;
  }
  .habilidades > li > ul{
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    background: rgba(255,255,255, .7);
    padding: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .5);
    border-radius: 15px;
  }

  .habilidades > li > ul > li{
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }

  .habilidades > li > ul > li > div{
    width: 30%;
  }
  .habilidades > li > ul > li > span{
    font-size: 2rem;
    width: 70%;
    height: 3rem;
  }

  .icon{
    height: 35px;
    width: 35px;
    background-size:contain;
    background-repeat: no-repeat;
  }
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
