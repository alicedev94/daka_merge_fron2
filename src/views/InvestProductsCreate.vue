<script setup>
import Nav from '../components/Nav.vue';
import Top from '../components/Top.vue';
import axios from 'axios';
import { ref } from 'vue';

const data = ref({
    id: localStorage.token,
    id_medicion: "",
    id_art: "",
    id_tipo: "",
    id_tam_cap: "",
    id_modelo: "",
    id_marca: "",
    descrip: "",
    cant: "",
    precio: "",
    sub_total: 10, // CALCULAR VALOR
    cod_sim_daka: "",
    user_crea: localStorage.usuario, // AQUI VA EL LOCALSTORAGE.USER_CREA
    // FECHA DE CREACION ESTOS VALORES SE CREAN POR DEFECTO
    user_mod: localStorage.usuario // AQUI VA EL LOCALSTORAGE.USER_CREA
    // FECHA DE MODIFICACION ESTOS VALORES SE CREAN POR DEFECTO
});

// SELCCIONAR DATOS -------------------------------------------------------------------------- //
// AL CARGAR LA PAGINA SE EJECUTA LA FUNCION PRINCIPAL QUE LLENA EL PRIMER INPUT
const idMedicion = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: '45215847', value: '45215847' },
]);
const idInvestigacion = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: '24598756', value: '24598756' },
]);
const codigoArticulo = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: 'REFRIGERADORES', value: '309' },
]);
const tipoArticulo = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: 'NEVERAS', value: '1' },
    { label: 'CONGELADORES', value: '2' },
    { label: 'FABRICADOR DE HIELO', value: '3' },
    { label: 'VINERA', value: '4' },
    { label: 'NEVERA EJECUTIVA', value: '5' },
    { label: 'NEVERA EXHIBIDORA', value: '6' },
    { label: 'CENTRO DE BEBIDAS', value: '7' },
]);
const tam_cap = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: '12 PIES', value: '1' },
    { label: '14 PIES', value: '2' },
    { label: '18 PIES', value: '3' },
]);
const modelo = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: 'RT38K5930S8AP-5', value: '1' },
]);
const marcas = ref([
    // ESTE ES EL FORMATO QUE DEBE RECIBIR EL INPUT PARA PODER SER LLENO CORRECTAMENTE
    { label: 'SAMSUNG', value: '1' },
]);
// SELCCIONAR DATOS -------------------------------------------------------------------------- //

const handleSubmit = async () => {
    console.log(data.value);
    // // // Usando promesas
    // axios.post('http://localhost:3001/api/v1/create/user', data.value)
    //     .then(response => {
    //         let rtaFromMysqlDb = Object.keys(response.data)
    //         let error = rtaFromMysqlDb.includes("errors");
    //         if(error){
    //             // EL DATO HA FALLADO AL CREARSE
    //             alert(response.data.errors[0].message);
    //         }else {
    //             // REGISTRO CREADO EXITOSAMENTE
    //             alert("Usuario registrado con exito.!");
    //             window.location.reload();
    //         }

    //     })
    //     .catch(error => {
    //         // Hacer algo con el error
    //         //console.log(error);
    //         alert('Error no controlado.')
    //     });
}

const handleIconClick = (node, e) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
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
                    <i class="ri-pie-chart-box-line icono-dash"></i>
                    <span class="text">Investición de producto</span>
                </div>
            </div>
            <div class="activity">
                <section class="container_form1">
                    <div class="container_form">
                        <FormKit type="form" #default="{ value }" @submit="handleSubmit" :value="data"
                            submit-label="Registrar" method="post" action="/">
                            <FormKit v-model="data.id_medicion" type="select" label="Id Medición:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="idMedicion" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el id_medicion',
                                }" help="" />
                            <!-- <FormKit v-model="data.id" type="select" label="Id Investigación:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="idInvestigacion"
                                validation="required" :validation-messages="{
                                    required: 'Seleccione el id_investigación',
                                }" help="" /> -->

                            <FormKit v-model="data.id_art" type="select" label="Articulo:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="codigoArticulo" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el articulo',
                                }" help="" />

                            <FormKit v-model="data.id_tipo" type="select" label="Tipo:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="tipoArticulo" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el tipo de articulo',
                                }" help="" />

                            <FormKit v-model="data.id_tam_cap" type="select" label="Tamaño:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="tam_cap" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el tamaño',
                                }" help="" />

                            <FormKit v-model="data.id_modelo" type="select" label="Modelo:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="modelo" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el modelo',
                                }" help="" />

                            <FormKit v-model="data.id_marca" type="select" label="Marca:" name="favorite_food"
                                placeholder="Selecione" prefix-icon="select" :options="marcas" validation="required"
                                :validation-messages="{
                                    required: 'Seleccione el modelo',
                                }" help="" />

                            <FormKit v-model="data.descrip" type="text" label="Descripción" value="descrip"
                                prefix-icon="textarea" placeholder="Descripción" maxlength="99" minlength="10"
                                validation="required" :validation-messages="{
                                    required: 'Escriba una descripción',
                                }" help="" />

                            <FormKit v-model="data.cant" type="number" label="Cantidad" value="cant" prefix-icon="number"
                                placeholder="Cantidad" validation="required" :validation-messages="{
                                    required: 'Ingrese la cantidad',
                                }" help="" />

                            <FormKit v-model="data.precio" type="number" step="0.01" label="Precio" value="precio"
                                prefix-icon="number" placeholder="Precio" validation="required" :validation-messages="{
                                    required: 'Ingre el precio',
                                }" help="" />

                            <FormKit v-model="data.sub_total" type="number" step="0.01 " label="SubTotal" value="sub_total"
                                prefix-icon="number" placeholder="SubTotal" validation="required" disabled
                                :validation-messages="{
                                    required: '',
                                }" help="" />

                            <FormKit v-model="data.user_crea" type="text" label="Usuario de creación" value="user_crea"
                                prefix-icon="" placeholder="" validation="required" disabled
                                :validation-messages="{
                                    required: '',
                                }" help="" />
                            <!-- <pre wrap>{{ value }}</pre> -->
                        </FormKit>
                    </div>
                </section>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>

<style>
[data-invalid] .formkit-inner {
    border-color: red;
    box-shadow: 0 0 0 1px red;
}
</style> 

