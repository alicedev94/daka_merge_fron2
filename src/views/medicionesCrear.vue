<script setup>
import { MedicionCrud } from '../stores/mediciones.js';
import { ref } from 'vue';

const mediciones = MedicionCrud();

const json = ref({

    id_invest:'', 
    hora:'',
    user_crea:'',
    user_mod:'',
    nro_visitantes:'',
    nro_facturas:'',

});

</script>

<template>
    <Nav :class="{ close: valor }"/>
    
    <section class="dashboard">
        <div class="top">
        <button id="sidebarToggle" class="boton_burguer" @click="valor = !valor"> 
            <i class="ri-menu-line sidebar-toggle"></i> 
        </button> 

        <div class="search-box">
            <i class="ri-search-2-line"></i>
            <input type="text" id="searchField" placeholder="Buscar (Ctrl + k)">
        </div>

        <img src="../assets/profile3.png" alt="imagen de perfil">
    </div>
        <div class="dash-content">

            <div class="overview"> 
                <!-- NAVBAR -->
                <div class="title">
                    <i class="ri-pie-chart-box-line icono-dash"></i>
                    <span class="text">Crear Mediciones</span>
                </div>
            </div>

            <div class="activity">
            <section class="container_form1">
                
                <form class="form" @:submit.prevent="$event => mediciones.medicionCreate(json)" >
                    <div class="input-box">
                        <label for="id_invest">id_invest:</label>
                        <input type="number" 
                        placeholder="investigacion id" 
                        id="id_invest"
                        name="id_invest"
                        v-model="json.id_invest" 
                        required>
                    </div>
                    <div class="input-box">
                        <label for="Nombres">Hora:</label>
                        <input type="texto" 
                        placeholder="Hora" 
                        id="hora"
                        name="hora"
                        v-model="json.hora" 
                        required>
                    </div>

                    <div class="column">
                        <div class="input-box">
                            <label for="Nombres">user_crea:</label>
                            <input type="text" 
                            placeholder="user_crea"
                            id="user_crea" 
                            name="user_crea" 
                            v-model="json.user_crea"
                            require>
                        </div>
                        
                        <div class="input-box">
                            <label for="Nombres">user_mod: </label>
                            <input type="text"
                            id="user_mod" 
                            name="user_mod" 
                            v-model="json.user_mod"
                            placeholder="user mod"
                            required
                            >
                        </div>
                    </div>

                    <div class="column">
                        <div class="input-box">
                            <label for="Nombres">nro_visitantes: </label>
                            <input type="number"
                            id="nro_visitantes" 
                            name="nro_visitantes" 
                            v-model="json.nro_visitantes"
                            required
                            >
                        </div>

                        <div class="input-box">
                        <label for="Nombres">nro_facturas:</label>
                        <input type="number" 
                        placeholder="Num visitantes" 
                        id="nro_facturas" 
                        name="nro_facturas" 
                        v-model="json.nro_facturas"
                        required>
                        </div>
                    </div>
                
                    <div class="bunttons">
                        <button class="button_form" type="submit">Agregar Medicion</button>
                    </div>

                    </form>
                </section>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>

<script> 
import Nav from '../components/Nav.vue'
import Top from '../components/Top.vue'
import router from '../router/index'
export default {
        components: {
            Nav,
            Top
        }
    } 
</script>


