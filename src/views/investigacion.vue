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
          axios.get('http://149.50.131.95:3000/')
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
                    <span class="text">Investigacion de Productos</span>

                </div>
            </div>
            
            <div class="activity">

                <div class="datatable-container">
                <div class="header-tools">
                    <div class="tools">
                        <ul> 
                            <li><a href="/investigacionCreate">
                                <button class="topi">
                                    Investigacion
                                </button>
                                
                            </a></li>
                            <!-- <li>
                                <button>
                                    <i class="ri-edit-2-line"></i>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i class="ri-delete-bin-5-line"></i>
                                </button>
                            </li> -->
                        </ul>
                    </div>

                    <div class="search">
                        <input type="text" name="" class="search-input" placeholder="Filtrar">
                    </div>
                </div>

                <table class="datatable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Articulo</th>
                            <th>Marca</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Codigo dk</th>
                            <th>Creador</th>
                            <th>Fecha</th>
                            <th>Modelo</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>955schacon</td>
                            <td>5a6a57a6</td>
                            <td>Samsung</td>
                            <td>Galaxy Z Fold5 Phantom Black</td>
                            <td>2</td>
                            <td>187,00</td>
                            <td>LD-00002149</td>
                            <td>schacon</td> 
                            <td>2023/10/02</td>
                            <td>6e028d64</td>
                            <td>
                                <a href="/investigacionEdit">
                                    <i class="ri-edit-2-line edit-table"></i>
                                </a>
                            </td>
                            <td>
                                <a href="#">
                                    <i class="ri-delete-bin-5-line delete-table"></i>
                                </a>
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


