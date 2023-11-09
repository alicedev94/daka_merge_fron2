<script > 
import Nav from '../components/Nav.vue'
import Top from '../components/Top.vue'
export default {
        components: {
            Nav,
            Top
        },
        data(){
            return{ 
                products:null,
                pagina: 1, 
                valor: false}
      },
      mounted(){
        this.getProducts();
      }, 
      methods:{
        getProducts(){
          axios.get('http://localhost:3000/')
          .then(response => (
            this.products = response.data)
          );
        }
      }
    } 


</script>

<template>
    <Nav :class="{ close: valor }"/>
    
    <section class="dashboard">
        <div class="top"  >
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
                    <span class="text">Investigacion</span>
                </div>
            </div>

            <div class="activity">
            <section class="container_form1">
                <FormKit
                    type="form"
                    #default="{ value }"
                    @submit="handleSubmit"
                    :value="data"
                    submit-label="Registrar"
                >

                    <FormKit
                        type="date"
                        label="Fecha de creacion"
                        validation="required"
                        :validation-messages="{  
                            required: 'debe colocar una fecha.'
                            }"
                    />
                    <FormKit
                        type="select"
                        label="Tienda"
                        name="id_tienda"
                        placeholder="Escoge una tienda"
                        :options="['Multimax', 'Damasco', 'Daka', 'Condesa']"
                        validation="required"
                        :validation-messages="{
                            required: 'Debes escoger una tienda.',
                        }"
                    />

                    <FormKit
                        type="text"
                        label="Motivo"
                        name="motivo"
                        placeholder="Motivo"
                        validation="required"
                        :validation-messages="{
                            required: 'Debes colocar el motivo de la investigacion.'
                        }"
                    />

                    <FormKit
                        type="text"
                        label="Investigador"
                        name="investigador"
                        placeholder="Nombre del investigador"
                        validation="required"
                        :validation-messages="{
                            required: 'Debes colocar el nombre del investigador.'
                        }"
                    />

                    <FormKit
                        type="textarea"
                        name="Accion"
                        label="Descripcion de Accion"
                        placeholder="Accion a realizar"
                        :help="`${value.instructions ? value.instructions.length : 0} / 120`"
                        validation="length:0,120"
                        validation-visibility="live" 
                        :validation-messages="{
                        length: 'Debe contener menos de 120 caracteres.',
                        }"
                    />

                    <!-- <pre wrap>{{ value }}</pre> -->
                </FormKit>
                </section>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>


