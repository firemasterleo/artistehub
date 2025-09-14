<template>
    
    <div class="main-container">
        <div class="bg-fixed" ref="bg">             
         </div>
         <div class="content">
             <h1>Our Impacts in Numbers</h1>
             <div class="card card1">
               <h1>200 +</h1>
               <p>homes now have reliable solar power, reducing reliance on kerosene lamps.</p>
             </div>
             <div class="card card2">
               <h1>85%</h1>
               <p>of households maintain their solar systems independently.</p>
               
             </div>
             <div class="card card3">
               <h1>30+</h1>
               <p>new small businesses launched in 6 months.</p>
             </div>
             <div class="card card3">
               <h1>5</h1>
               <p>neighboring villages adopted our sustainable clean cooking model.</p>
             </div>

         </div>
  
  
    </div>
    </template>
    
    <style lang="scss" scoped>
    @use "@/assets/sass/variables" as *; // Import variables
    
    .main-container {
        // background: linear-gradient(to left, #7cae65, #ffffff);
        background-color: $primarycolorwhite;
        width: 100vw;
        max-width: 100rem;
        height: 100vh;
        max-height: 50rem;
        display: flex;
        flex-direction: row;
        margin-inline: auto;
    
    }
    @media (max-width: 800px) {

        .main-container {
            // border: solid red;
            height: fit-content;
            max-height: fit-content;
            color: $textcolorwhite;
            position: relative;
            z-index: 1;
            overflow: hidden;
            .bg-fixed {
                width: 100%;
                width: 100%;
                height: calc(var(--vh) * 100); 
                background: url('https://res.cloudinary.com/dgdnews6i/image/upload/v1757496617/ChatGPT_Image_Sep_10_2025_10_29_58_AM_ma3vpb.png') center/cover no-repeat;
                position: absolute;
                bottom: 5rem;
                inset: 0;
                z-index: -10; /* send it behind */
                // height: 100%;
                // transform: translateY(25%);

        
        }

            .content {
                background-color: rgba(32, 32, 66, 0.868);
                padding-inline: 1rem;
                display: flex;
                flex-direction: column;
                padding-top: 2rem;



                .card {
                height: 8rem;
                margin-top: 2rem;
                
                h1 {
                
                }
                p {
                    width: 80%;
                }
                
                }
            }



  
  
  
  
        }

    }
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
    
    
    
    </style>
    
    <script setup>
 import { ref, onMounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

  gsap.registerPlugin(ScrollTrigger);
  const bg = ref(null)


// Move bg up as container scrolls into view
onMounted(() => {
  gsap.fromTo(
    bg.value, 
    { y: '-25%' }, // Starting value
    {
      y: '30%', // Ending value
      ease: 'none',
      scrollTrigger: {
        trigger: bg.value,
        start: 'top 90%',
        end: 'bottom 50',
        scrub: 0.1,
        // markers: true,
        invalidateOnRefresh: true, // Recalculate start/end on resize or refresh
  
      },
  })
})
    </script>