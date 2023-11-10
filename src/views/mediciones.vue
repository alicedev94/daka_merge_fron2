<script setup>

// COMPONENTES
import Nav from '../components/Nav.vue'

// LIBRERIAS
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

// VARIABLES
const route = useRoute()
const router = useRouter()
const valor = ref(false);
const info = ref([]);

// URL
const id = ref('')
id.value = route.params.key

// FUNCTION PARA LLENAR TABLE
async function getMedicion() {
    try {
        const response = await axios.get(`http://149.50.131.95:3001/api/v1/medicionAll`);

        info.value = response.data

        console.log(response)

    } catch (error) {

        console.log(error)

    }
}

// FUNCTION PARA ELIMINAR DATA
async function eliminarMedicion(key) {

    try {
        const response = await axios.delete(`http://149.50.131.95:3001/api/v1/mediciondelete/${key}`);
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {

    await getMedicion();


});

function eliminarData(key) {
    Swal.fire({

        icon: 'question',
        title: 'Alerta!',
        text: '¿Deseas eliminar estos datos?',
        background: '#3A3B3C',
        color: '#fff',
        confirmButtonText: 'Eliminar',

    }).then((result) => {
        if (result.isConfirmed) {

            // REDIRECCIONA AL TABLE PRINCIPAL  
            eliminarMedicion(key)
            router.push('/mediciones');
            window.location.reload();

        }
    })
}
</script>

<template>
    <Nav :class="{ close: valor }" />
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

                    <i class="ri-dashboard-2-line"></i>
                    <span class="text">Inv. Mediciones</span>

                </div>
            </div>

            <div class="activity">

                <div class="datatable-container">
                    <div class="header-tools">
                        <div class="tools">
                            <ul>
                                <li><a href="/medicionesCreate">
                                        <button class="topi">
                                            Crear
                                        </button>

                                    </a></li>
                            </ul>
                        </div>

                        <div class="search">
                            <input type="text" name="input_buscador" class="search-input" placeholder="Filtrar">
                        </div>
                    </div>

                    <table class="datatable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id Investigacion</th>
                                <th>Corte Horario</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="medicion, i in info" :key="medicion.id">

                                <td>{{ medicion.id }}</td>
                                <td>{{ medicion.id_invest }}</td>
                                <td>{{ medicion.hora }}</td>

                                <td>
                                    <router-link :to="{ path: 'medicionesEdit/' + medicion.id }" class="edit">
                                        <i class="ri-edit-box-line"></i>
                                    </router-link>
                                </td>
                                <td>
                                    <button class="delete" @click.prevent="eliminarData(medicion.id)">
                                        <i class="ri-delete-bin-7-line"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="footer-tools">
                        <div class="list-items">
                            Mostrar
                            <select name="n-entries" id="n-enties" class="n-enties">
                                <option value="15">5</option>
                                <option value="10">10</option>
                                <option value="5">15</option>
                            </select>
                            data
                        </div>

                        <div class="pages">

                            <ul>
                                <li><button class="active">1</button></li>
                                <li><button>2</button></li>
                                <li><button>3</button></li>
                                <li><button>4</button></li>
                                <li><span>...</span></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.delete {
    color: #000;
    font-size: 21px;
    background-color: #d00000;
    padding: 7px 8px;
    border-radius: 3px;
    transition: 0.3s all ease;
    border: none;
}

.edit {
    color: #000;
    font-size: 21px;
    background-color: #faa307;
    padding: 4px 8px;
    border-radius: 3px;
    transition: 0.3s all ease;
}

.delete:hover {
    background-color: #a70000;
    cursor: pointer;
}

.edit:hover {
    background-color: #e99700;
}
</style>


