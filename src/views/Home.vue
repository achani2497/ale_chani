<template>
  <div class="content">
    <div class="welcome">
      <img src="@/assets/images/fotoDePerfil2.png" alt="miImagen" class="miImagen">
      <h1>{{saludoDeBievenida}}</h1>
      <h2>Soy Alejandro Chañi, un WebDev apasionado por diseñar, desarrollar y participar en las decisiones de nuevos productos. 👨🏾‍💻💡 </h2>
      <!-- <br> -->
      <h2>Me gusta mucho aprender nuevas cosas por mi cuenta para despues aplicarlas en nuevos proyectos!</h2>
    </div>
    <div class="options">
      <ul>
        <!-- <li><button @click="aVer()">ASD</button></li> -->
        <li><router-link to="/habilidades">Sobre mi 🤔</router-link></li>
        <li><router-link to="/habilidades">Habilidades 🧠</router-link></li>
        <li><router-link to="/proyectos">Mis Proyectos 💼</router-link></li>
        <li><router-link to="/contratame">Contratame! 📩</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 414px){
    .miImagen{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: 0 5px 5px 2px rgba(0,0,0,.5);
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100vh;
      padding: 1em 0;
    }
    .welcome{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 80%;
    }
    .options{
      width: 100%;
    }
    ul{
      height: 230px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
    }
    li{
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    li:first-child{
      animation: rightSlide 1s;
    }
    li:nth-child(2){
      animation: rightSlide 1.5s
    }
    li:nth-child(3){
      animation: rightSlide 2s
    }
    li:nth-child(4){
      animation: rightSlide 2.5s;
    }
    li a{
      background: rgba(0,0,0,.2);
      color: rgba(255,255,255,1);
      text-shadow: 0px 0px 5px rgba(0,0,0,.8);
    }
    li:last-child a{
      background: rgba(0,0,0,.8);
      color: white;
      text-shadow: none;
    }
    li:last-child a:hover{
      background: rgba(255,255,255,.7);
      color: black;
    }
    a{
      color: black;
      width: 70%;
      text-align: center;
      border-radius: 25px;
      height: 40px;
      text-decoration: none;
      padding-top: 5px;
      /* background: rgba(255,255,255,.2); */
      border: 1px solid rgba(0,0,0,.2);
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 2px;
      transition: all .6s ease;
      box-shadow: 0 5px 5px 2px rgba(0,0,0,.2);
    }
    a:hover{
      box-shadow: none;
    }
    a:active{
      box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,.2);
    }
  }

  @keyframes rightSlide {
    0%{
      transform: translateX(-1000px);
    }
    50%{
      transform: translateX(50px);
    }
    100%{
      transform: translateX(0px);
    }
  }
</style>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    aVer: function(){
     this.$swal('Titulo', 'Texto', 'success')
    }
  },
  computed:{
    saludoDeBievenida: function(){
        var hora = (new Date()).getHours();
        if(hora > 0 && hora < 13){
            return 'Buen día 😃';
        } else {
            if(hora >=13 && hora < 20){
                return 'Buenas tardes 😃';
            } else {
                return 'Buenas noches 😃';
            }
        }
    },
  }
}
</script>
