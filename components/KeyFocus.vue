<template>
    <div class="main-container">
        <div class="text">
            <h1>Transforming Mindsets,<br> Sparking Growth,<br> Changing Rural Lives.</h1>

        </div>
        <div class="impacts">
            <h1>Key Focus</h1>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757497071/WhatsApp_Image_2025-09-09_at_9.13.58_AM_1_jdqcr4.jpg" 
                    alt="Community development in rural areas" 
                    loading="lazy"
                    />                    
                </div>
                <h1>Rural Economic Development</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
            </div>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757497070/henning-wiekhorst-KBytvj1EPl4-unsplash_nazemb.jpg" 
                    alt="Community development in rural areas" 
                    loading="lazy"
                    />                    
                </div>
                <h1>Clean Cooking Initiative</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
            </div>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757497071/mugabi-owen-KQ7XC-XkGgg-unsplash_pzc7rh.jpg" 
                    alt="Community development in rural areas" 
                    loading="lazy"
                    />                    
                    
                </div>
                <h1>Rural Enterprise Development</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
            </div>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757497073/david-cashbaugh-wRp2Sh1Uzck-unsplash_izfb40.jpg" 
                    alt="Community development in rural areas"
                    loading="lazy"
                    />                    
                </div>
                <h1>Financing Sustainable development</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
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
    //   height: calc(var(--vh) * 80); 
      height: fit-content;
      max-height: fit-content;
      display: flex;
      flex-direction: column;
      color: rgb(63, 63, 63);


      .text {
        width: 100%;
        height: fit-content;
        border-bottom: solid rgb(130, 129, 129) 1px;
        display: flex;
        align-items: center;
        justify-content: center;
    //     padding-bottom: 29%;
    //   padding-top: 29%;
        padding-bottom: 5rem;
      padding-top: 5rem;


        h1 {
            text-align: center;
            font-size: 6vw;
            color: rgb(63, 63, 63);
        }
      }
      .impacts {
        padding-top: 3rem;
        padding-bottom: 3rem;
        padding-inline: 1rem;
        h1 {
            font-size: 6vw;
            // border: solid red;
        }
        .card {
            margin-top: 3rem;
            .image {
                width: 100%;
                height: 30vh;
                overflow: hidden;
                border-radius: 0.6rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(70%);
                }
            }
            h1 {
                font-size: 20px;
                margin-top: 1rem;
            }
            .divider {
                width: 7rem;
                height: 0.3rem;
                background-color: rgb(75, 100, 211);
                margin-top: 0.5rem;
                border-radius: 0.2rem;
            }
            p {
                margin-top: 1rem;
                font-size: 14px;
                line-height: 1.4;
                color: rgb(63, 63, 63);
            }
        }
      }


        }
    }
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
    
    
    
    </style>
    
    <script setup>
    
    </script>