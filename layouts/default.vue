<template>
  <div class="main-layout"> <!-- Main Layout Wrapper -->
    <div class="header">
      <Header/>
    </div>
  
    <!-- Side Panel -->
    <div class="sidepanel" :class="{ 'is-expanded': isMenuOpen }">
      <SidePanel2 />
      <!-- <SidePanel1 /> -->
    </div>
    
    <!-- Overlay to close menu -->
    <!-- <div class="sidepanel-overlay" :class="{ 'is-expanded': isMenuOpen }" @click="closeMenu"></div> -->

    <!-- Main Content Area -->
     <main class="main">
       <slot />
     </main>
    
    <!-- <Footer /> -->
  </div>
</template>
  
<script setup>
import { ref, watch, onMounted } from "vue";
import Header from '../components/Header.vue';
import SidePanel2 from '../components/SidePanel2.vue';
import { useToggle } from "~/composables/useToggle";

const { isMenuOpen, toggleMenu, closeMenu } = useToggle();
const { $lenis } = useNuxtApp(); // access Lenis from your plugin

onMounted(() => {
  if (isMenuOpen.value && $lenis) {
    $lenis.stop(); // pause scrolling when mounted if menu is open
  }
});

watch(isMenuOpen, (newValue) => {
  if (!$lenis) return;

  if (newValue) {
    $lenis.stop(); // Disable scroll via Lenis
  } else {
    $lenis.start(); // Re-enable scroll
  }
});
</script>

  <style lang="scss" scoped>
    // @use "@/assets/sass/main" as *; // Import variables
    @use "@/assets/sass/variables" as *; // Import variables


    .header {
      position: sticky;
      top: 0;
      z-index: 25;
    }
    .main-layout {
      background-color: $primarycolorwhite;

    }
.main {
  // margin-top: 3.2rem;
  // border: solid red;
  background-color: $primarycolorwhite;

}


  .sidepanel {
    display: none;

  }
  
  @media (max-width: 800px) {
    .main {
  // margin-top: 3.2rem;
  // border: solid;
}


.sidepanel {
  
  // opacity: 0;
  // visibility: hidden;
  width: 100vw;
  height: 0vh;
  // transform: translatey(-100%);
  // padding-top: 6rem;
  // padding-left: 1.5rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: hidden;
  // z-index: 0;
  position: fixed;
  // top: 3rem;
  z-index: 24;
visibility: hidden;    
background-color: #101010;
  
  // visibility: hidden;
  // border: solid red;
  transition: all 0.8s  cubic-bezier(0.95, 0.05, 0.2, 1);

  
  
  &.is-expanded {
    // transition: all 0.35s; 
    transition: all 0.7s cubic-bezier(0.95, 0.05, 0.05, 1); 
    // opacity: 1;
    // transform: translatey(0%);
    height: 100vh;
    visibility: visible;
  }

      }

      .sidepanel-overlay {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.658);
        position: fixed;
        bottom: 0;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-out, visibility 0s linear 0.5s; 
                              
        
  &.is-expanded {
    opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease-in;
                        
}

      }
  }

  </style>
  