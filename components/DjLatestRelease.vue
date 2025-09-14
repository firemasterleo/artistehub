<template>
    <div class="main-container">
        <div class="content">
            
            <div class="equalizer">
              <div class="bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="header">
                <h1>Latest Releases</h1>
                <!-- <p>Learn more about my music and Journey.</p> -->
                <!-- <button>VIEW ALL RELEASES</button> -->
            </div>
            <div class="releases">
                <!-- Placeholder for releases, you can replace these with actual data -->
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838386/WhatsApp_Image_2025-09-08_at_3.00.19_PM_g4nohq.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838029/marcel-strauss-1AR3gIIadzQ-unsplash_fw29ox.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838025/WhatsApp_Image_2025-09-01_at_9.21.47_AM_xpnguj.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838024/hendo-wang-WEKKEg9j_YE-unsplash_v2miqu.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757839047/WhatsApp_Image_2025-09-04_at_2.27.55_PM_p4jpqv.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
                <div class="release-item">
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757839047/WhatsApp_Image_2025-09-04_at_3.24.28_AM_d97el4.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <h3>Release Title 1</h3>
                    <p>Artist Name 1</p>
                </div>
    
            </div>
            <div class="button">
                <p>View All Releases</p>
            </div>
        </div>

    </div>
    </template>
    
    <style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables
    
    .main-container {
        // background: linear-gradient(to left, #7cae65, #ffffff);
        // border: solid red;
        // background-color: $primarycolorwhite;
        width: 100vw;
        max-width: 100rem;
        height: 100vh;
        max-height: 50rem;
        display: flex;
        margin-inline: auto;

    
    }
    @media (max-width: 800px) {
        .main-container {
            display: flex;
            flex-direction: column;
            // border: solid green;
            height: fit-content;
            max-height: fit-content;
            background-color: rgb(35, 21, 37);
background-image: url("https://www.transparenttextures.com/patterns/mirrored-squares.png");
// padding-inline: 1rem;
// padding-top: 2rem;

            // backdrop-filter: blur(10px);
            

            .content {
                // border: solid red;
                // backdrop-filter: blur(10px);
                    border-radius: 1rem;
                    position: relative;
                    // padding-bottom: 2rem;

                    .equalizer {
                  // border: solid;
                  position: absolute;
                  top: 3rem;
                  right: 2rem;

                  .bars {
                    display: flex;
                    gap: 3px;
                    align-items: flex-end;
                    height: 30px;
                    }
                    .bars span {
                    width: 20px;
                    height: 100%;
                    background: rgb(196, 193, 185);; /* green pulse */
                    animation: pulse 1.2s infinite ease-in-out;
                    }
                    .bars span:nth-child(2) { animation-delay: 0.2s; }
                    .bars span:nth-child(3) { animation-delay: 0.4s; }
                    .bars span:nth-child(4) { animation-delay: 0.6s; }

                    @keyframes pulse {
                    0%, 100% { height: 20%; }
                    50% { height: 100%; }
                    }
                }


                .header {
                    // border: solid red;
                    height: fit-content;
                    width: 100%;
                    padding-left: 1rem;
                    padding-block: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    background-color: rgba(0, 0, 0, 0.249);
                backdrop-filter: blur(10px);
                position: relative;
                z-index: 0;

                    // border-radius: 1rem;

                        h1 {
                            width: 50%;
                        font-size: 9vw; /* Min 5rem, scales with viewport width, max 10em */
                        line-height: 2.8rem;
                        line-height: 12vw;
                        color: $textcolorwhite;
                    // border: solid red;
    
    
                    }       
                    p {
                        font-size: 18px;
                        color: $textcolorwhite;
                        width: 90%;
                        // border: solid red;
                    }   
                           

                        // margin-bottom: 5rem;
                   
                  
    
                }
                .releases {
                    // border: solid red;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    height: fit-content;
                    // margin-top: 2rem;
                    padding-inline: 1rem;
                    padding-top: 2.5rem;
                    padding-bottom:5rem;

                    background-color: rgba(0, 0, 0, 0.249);
                backdrop-filter: blur(10px);
                // border-radius: 1rem;

                    
                    .release-item {
                        height: fit-content;
                        // border: solid blue;
                        // width: 50%;
                        display: flex;
                        flex-direction: column;
                        // gap: 10pxrem;
    
                        .image {
                            width: 100%;
                            height: 42vw;
                            border-radius: 0.5rem;
                            overflow: hidden;

    
    
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                filter: brightness(60%);

                            }
                        }
                        h3 {
                            color: $textcolorwhite;
                            margin-top: 5px;
                            font-size: 16px;

                        }
                        p {
                            color: $textcolorwhitedark;
                            margin-top: -5px;
                            font-size: 14px;
                        }
                    }
                }
                .button {
                    color: $textcolorwhite;
                    // border: solid white;
                    width: 100%;
                    margin-inline: auto;
                    background-color: rgba(0, 0, 0, 0.249);
                    backdrop-filter: blur(10px);
                    padding-bottom: 4rem;

                    p{
                        
                        // border: solid;
                        margin-inline: auto;
                        width: fit-content;
                        min-width: 30%;
                        text-align: center;
                        padding: 2vw;
                        font-weight: 500;
                        background-color: rgb(14, 71, 47);
                        border-radius: 0.5rem;


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