<template>
    <nav>
        <div class="titulo">
            <h1>Titulo</h1>
        </div>
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="toggleClass(index)">
                <div class="icon" :class="option.icon"></div>
                <router-link :to="option.path">{{option.name}}</router-link>
            </li>
        </ul>
    </nav>  
</template>
<style>
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 1em;
        padding-right: 1em;
        align-content: center;
        height: 3em;
        font-size: 1.5em;
    }
    nav ul{
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
    }
    nav ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    nav ul li a{
        text-decoration: none;
    }
    /* .router-link-exact-active::after{
        content: '';
        position: absolute;
        bottom: 1em;
        border: 1px solid black;
        animation:fadeIn .6s ease;
        width: 100%;
    } */
    @media screen and (max-width: 678px){
        .titulo{
            display: none;
        }
        nav {
            display: flex;
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 0;
        }
        nav ul{
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            font-size: .9em;
        }
        nav ul li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: rgba(0,0,0,.5);
            border-right: 1px solid rgba(0,0,0,.2);
        }

        nav ul li .icon{
            height: 30px;
            width: 30px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        nav ul li:last-child{
            background: rgba(0,0,0,.9);
        }
        nav ul li a{
            color: white;
            text-shadow: 0px 0px 3px rgba(0,0,0,.9);
        }
        .home{
            background: url('../assets/icons/Home.svg');
        }
        .proyectos{
            background: url('../assets/icons/Proyectos.svg');
        }
        .habilidades{
            background: url('../assets/icons/habilidades.svg');
        }
        .contratame{
            background: url('../assets/icons/Contratame.svg');
        }
    }
    @keyframes fadeIn{
        0%{
            left: -100px;
        }
        100%{
            left: 0;
        }
    }
</style>
<script>
export default {
    data: function(){
        return {
            options:[
                {
                    name:'Home',
                    path:'/',
                    active: true,
                    icon: 'home'
                },
                {
                    name:'Proyectos',
                    path:'/proyectos',
                    active: false,
                    icon: 'proyectos'
                },
                {
                    name:'Habilidades',
                    path:'/habilidades',
                    active: false,
                    icon:'habilidades'
                },
                {
                    name:'Contratame!',
                    path:'/contratame',
                    active: false,
                    icon:'contratame'
                },
            ]
        }
    },
    methods: {
        toggleClass: function(index){
            this.options.forEach(option => option.active=false) 
            this.options[index].active = !this.options[index].active
        }
    }
}
</script>