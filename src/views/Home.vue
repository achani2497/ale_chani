<template>
  <div class="content">
    <div class="welcome">
      <img src="@/assets/images/fotoDePerfil2.png" alt="miImagen" class="miImagen">
      <h1>{{saludoDeBienvenida}}</h1>
      <h2>Gracias por visitar mi página :)</h2>
    </div>
    <div class="options">
      <ul>
        <!-- <li><button @click="aVer()">ASD</button></li> -->
        <li><router-link to="/habilidades">Habilidades</router-link></li>
        <li><router-link to="/proyectos">Mis Proyectos</router-link></li>
        <li><router-link to="/contratame">Contratame!</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style>
  .content{
    display: flex;
    /* background: lightskyblue; */
    align-items: center;
  }

  @media (max-width: 414px){
    .miImagen{
      width: 250px;
      height: 250px;
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
      height: 50%;
    }
    .options{
      width: 100%;
    }
    ul{
      height: 300px;
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
    li:last-child a{
      background: rgba(0,0,0,.8);
      color: white;
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
    saludoDeBienvenida: function(){
      let date = new Date()
      let hours = date.getHours()

      if(20 < hours < 6){
        return 'Buenas noches!'
      } else if(6 <= hours < 13){
          return 'Buen día! '
      } else {
        return 'Buenas tardes! '
      }

    }
  }
}
</script>
