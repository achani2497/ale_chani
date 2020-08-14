<template>
    <nav>
        <div class="titulo">
            <h1>Titulo</h1>
        </div>
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="toggleClass(index)">
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
    .router-link-exact-active::after{
        content: '';
        position: absolute;
        bottom: 1em;
        border: 1px solid black;
        animation:fadeIn .6s ease;
        width: 100%;
    }
    @media only screen and (max-width: 678px){
        .titulo{
            display: none;
        }
        nav {
            display: flex;
            width: 100%;
            position: absolute;
            bottom: 0;
            background: lightblue;
        }
        nav ul{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            font-size: .9em;
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
                    active: true
                },
                {
                    name:'Proyectos',
                    path:'/proyectos',
                    active: false
                },
                {
                    name:'Skills',
                    path:'/habilidades',
                    active: false
                },
                {
                    name:'Contactame',
                    path:'/contacto',
                    active: false
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