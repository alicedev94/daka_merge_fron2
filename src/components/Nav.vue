<script setup>

import { useAuthStore } from '../stores/counter.js';
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
    selector: "body"
});

const toggleDark = useToggle(isDark);
const authStore = useAuthStore();
const rol = localStorage.rol;
const cerrar = localStorage.class;

const claseNav = () => {
    if(cerrar === 'close'){
        return true;
    }
}

</script>

<template>
   <nav :class="[claseNav ? '' : 'close']">
        <a href="/dashboard">
            <div class="logo-name">
                <div class="logo-image">
                    <img src="../assets/mezcla.png" alt="Logo merge">
                </div>
    
                <span class="logo_name">MERGE</span>

            </div>
        </a>

        <div class="menu-items">
            <ul class="nav-links">
                <!-- OPCIONES -->
                <li><a href="/dashboard">
                    <i class="ri-home-2-line"></i>
                    <span class="link-name">Dashboard</span>
                </a></li>

                  <!-- OPCIONES -->
                  <li><a href="/invesAccion">
                    <i class="ri-attachment-line"></i>
                    <span class="link-name">Investigacion</span>
                </a></li>

                <!-- OPCIONES -->
                <li><a href="/mediciones">
                    <i class="ri-dashboard-2-line"></i>
                    <span class="link-name">Mediciones</span>
                </a></li>
                
                  <!-- OPCIONES -->
                  <li><a href="/investProducts">
                    <i class="ri-store-2-line"></i>
                    <span class="link-name">Investigación de Producto</span>
                </a></li>

                <!-- OPCIONES -->
                <li v-if="rol == 'admin'"><a href="/usuario">
                    <i class="ri-user-settings-line"></i>
                    <span class="link-name">Usuarios</span>
                </a></li>
              
            </ul>

            <ul class="logout-mode">
                <!-- LOGOUT -->
                <li ><a href="/" @click="authStore.logout()">
                    <i class="ri-logout-box-line"></i>
                    <span class="link-name">Logout</span>
                </a></li>
                <!-- DARK MODE -->
                <li class="mode">
                    <a href="#">
                        <i class="ri-moon-line"></i>
                        <span class="link-name">Dark mode</span>
                    </a>

                    <div class="mode-toggle" @click="toggleDark()">
                        <span class="switch"></span>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    
</template>


