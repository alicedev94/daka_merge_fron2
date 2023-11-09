<script setup> 
import Nav from '../components/Nav.vue'
import { MedicionCrud } from '../stores/mediciones.js';

import { ref, onMounted} from 'vue';
import {  useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const valor = ref(false)
const medicionEdit = ref([]);

const mediciones = MedicionCrud();

const id_invest = ref('')
const hora = ref('')
const user_crea = ref('')
const user_mod = ref('')
const nro_visitantes = ref('')
const nro_facturas = ref('')

// URL
const id = ref('')
id.value = route.params.key 
console.log(id.value)



async function getFilterMedicion(){
    
    try{
        const response = await axios.get(`http://localhost:3001/api/v1/medicionFilter/${id.value}`)
        medicionEdit.value =  response.data
        

    } catch(error){
        console.log(error)

    }
}

onMounted( async () => {
   await getFilterMedicion();
   
   id_invest.value = medicionEdit.value.id_invest
   hora.value = medicionEdit.value.hora
   user_crea.value = medicionEdit.value.user_crea
   user_mod.value = medicionEdit.value.user_mod
   nro_visitantes.value = medicionEdit.value.nro_visitantes
   nro_facturas.value = medicionEdit.value.nro_facturas

});


function addData(){

const jsonE = {
    id_invest:id_invest.value, 
    hora:hora.value,
    user_crea:user_crea.value,
    user_mod:user_mod.value ,
    nro_visitantes:nro_visitantes.value
    }

    mediciones.medicionEditar(id, jsonE)


}


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
                    <span class="text">Editar Mediciones</span>
                </div>

            </div>

            <div class="activity">
                <section class="container_form1">
                   <!-- <form class="form" @:submit.prevent="$event => mediciones.medicionEditar(id, jsonE)">  -->
                    <form class="form" @:submit.prevent="addData"> 
                        <div class="input-box">
                        <label for="id_invest">id_invest:</label>
                        <input type="text" 
                        id="id_invest"
                        v-model="id_invest"
                        name="id_invest"
                        required>
                        </div>
                        <div class="input-box">
                            
                            <label for="hora">Hora</label>
                            <input type="text" 
                            id="hora"
                            name="hora"
                            v-model="hora"
                            required>
                        </div>

                    <div class="column">
                        <div class="input-box">
                            <label for="Nombres">user_crea:</label>
                            <input type="text" 
                            id="user_crea" 
                            name="user_crea" 
                            v-model="user_crea"
                            require>
                        </div>
                        
                        <div class="input-box">
                            <label for="Nombres">user_mod: </label>
                            <input type="text"
                            id="user_mod" 
                            name="user_mod" 
                            v-model="user_mod"
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
                            v-model="nro_visitantes"
                            required
                            >
                        </div>

                        <div class="input-box">
                            <label for="Nombres">nro_facturas:</label>
                            <input type="number" 
                            placeholder="Num visitantes" 
                            id="nro_facturas" 
                            name="nro_facturas" 
                            v-model="nro_facturas"
                            required>
                        </div>
                    </div>
                    
                    <div class="bunttons">
                        <button class="button_form" type="submit">Actualizar Medicion</button>
                    </div>

                    </form>

                </section>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>





