<template>
    <div class="main-container">
        <div class="impacts">
            <h1>Success Stories</h1>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757498836/gowtham-agm-4FL8iqLdUP4-unsplash_qolkjs.jpg" 
                    alt="Community development in rural areas" 
                    loading="lazy"
                    />                    
                </div>
                <h1>Improved Agriculture</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
            </div>
            <div class="card">
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757498837/zobia-shakar-BQORNWCkAO8-unsplash_w90bm4.jpg" 
                    alt="Community development in rural areas" 
                    loading="lazy"
                    />                    
                </div>
                <h1>The Water project</h1>
                <div class="divider"></div>
                <p>Insufficeint financing remains one fo the greates bottlenecks that prevents the world from achieving the Sustainable Development Goals. Aviralight helps Member States close the financing gap for sustainable development.</p>
            </div>
            <div class="button">
                <p>View All Success Stories</p>
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h1 {
            font-size: 6vw;
        }
        .card {
            margin-top: 2rem;
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
        .button {
            // border: solid red;
            margin-top: 5rem;
            display: flex;
            justify-content: center;
            p {
                padding: 0.5rem 1rem;
                border-radius: 0.3rem;
                color: $textcolorwhite;
                background-color: rgb(68, 68, 106);
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

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