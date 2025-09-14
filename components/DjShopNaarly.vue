<template>
    <div class="main-container">
        <!-- <div class="overlaybg"></div> -->

        <div class="content">
            <div class="text">
                <h1>Shop Naarl_y</h1>
            </div>
            
            <div class="slide">
                <!--i deleted this to use later @mousemove="updateMousePosition" @mouseenter="showVideo" @mouseleave="hideVideo" -->
                <div class="highlight" >
                <router-link to="/">
                    
                    <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838022/Screenshot_2025-09-13_094731_vgqtil.jpg" alt="">
                    </div>
                </router-link>
                    <div class="eventtext">
                    <h2>Aug 23, 2025</h2>
                    <h1>Naarly</h1>
                    <h3>ibiza, Spain</h3>
                    <p>Ushuaia</p>
                </div>
                <!-- <div v-if="isVideoVisible" ref="videoPopup" class="video-popup">
            <video ref="videoElement" src="../assets/shapestationstudio2.mp4" autoplay loop muted></video>
        </div> -->
    
                </div>
                <div class="highlight">
        <a href="https://topmoviesquad.netlify.app" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
        <div class="image">
            <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757837893/ChatGPT_Image_Sep_13_2025_09_54_18_AM_gx5lsh.png" alt="">
        </div>
        <div class="eventtext">
            <h2>Aug 29, 2025</h2>
            <h1>CRANBERRIES</h1>
            <h3>London, United Kingdom</h3>
            <p>Pirlo </p>
        </div>
        <!-- <div v-if="isVideoVisible" ref="videoPopup" class="video-popup">
            <video ref="videoElement" src="../assets/shapestationstudio2.mp4" autoplay loop muted></video>
        </div> -->
        </a>
        </div>

            </div>
    
            
            <div class="button">
                <p>Go to Shop</p>
            </div>
        </div>
  
        
    </div>
    </template>
    
    <style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables
    
    .main-container {
        // background: linear-gradient(to left, #7cae65, #ffffff);
        background: $primarycolorwhite;
        width: 100vw;
        max-width: 100rem;
        // height: 100vh;
        // max-height: 50rem;

  
    
    }
    @media (max-width: 800px) {
      .main-container {
        display: flex;
        flex-direction: column;
        // height: 70vh;
        // height: calc(var(--vh) * 80); 
        // max-height: calc(var(--vh) * 70);
        // border: solid red;
        width: 100vw;
        position: relative;
        background-color: rgb(255, 254, 254);
        background-image: url("https://www.transparenttextures.com/patterns/mirrored-squares.png");

        // padding-top: 15rem;

        // .overlaybg {
        //     border: solid red;
        //     width: 100vw;
        //     height: 15rem;
        //     position: absolute;
        // background: linear-gradient(0deg, white 50%, rgb(117, 36, 107) 100%);


        // }
        .content {
            background-color:  $primarycolorwhite;
            backdrop-filter: blur(20px);
            padding-top: 6rem;
            // border: solid red;

            .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-bottom: 2rem;
                    padding-inline: 1rem;
                    gap: 1.5rem;

            //   padding-top: 15rem;

            h1 {
                // border: solid red;
                        font-size: 9vw; /* Min 5rem, scales with viewport width, max 10em */
                        line-height: 2.8rem;
                        line-height: 12vw;
                        color: $textcolorblack;
                    width: 80%;
    
    
                    }       
                    p {
                        font-size: 16px;
                        color: $textcolorblack;
                        width: 90%;
                        // border: solid red;
                    }  
      

                }

      
                .slide {
                // height: 30rem;
                //   border: solid red;
                  width: 100%;
                  height: fit-content;
                  display: flex;
                  flex-wrap: nowrap;
                  gap: 0.7rem;
                  overflow-x: auto;
                  scroll-snap-type: x mandatory; /* Enables smooth snap scrolling */
                  padding-inline: 1rem;
                  padding-bottom: 5rem;

      
                  
                  .highlight {
                      flex-shrink: 0;
                    //   border: solid blue;
            background-color: rgba(57, 3, 57, 0.082);
            // border-radius: 0.2rem;


                    //   width: 19rem;
                      width: 72%;
                      height: fit-content;
                      border-radius: 0.5rem;
                      overflow: hidden;
                      scroll-snap-align: center; /* Ensures items snap into place */
                      margin-top: 1rem;
                      
      
      
                      .image {
                          width: 100%;
                          height: 70vw;
                        overflow: hidden;
      
                          img {
                              width: 100%;
                              height: 100%;
                              object-fit: cover;
                          }
                      }
                      .eventtext {
                        // border: solid blue;
                        // height: 30%;
                        display: flex;
                        flex-direction: column;
                        // gap: 0.5rem;
                        // background: rgba(0, 0, 0, 0.201);
                        color: $textcolorblack;
                        margin-top: 0px;
                        margin-bottom: 2rem;
                        padding: 0.5rem;



                        h2 {
                            font-size: 3vw;
                            margin-top: 0px;
                            
                        }
                        h1 {
                            font-size: 6vw;
                            color: $textcolorblackdark;
                            margin-top: 0px;

                            // position: absolute;

                        }
                        h3{
                            font-size: 4vw;
                            font-weight: 400;
                        }
                        p {
                            font-size: 4vw;
                            margin-top: -5px;
                        }
                      }
                  }
                }

                .button {
                    // border: solid white;
                    color: $textcolorwhite;
                    width: 100%;
                    margin-inline: auto;
                    padding-bottom: 4rem;

                    p{
                        
                        // border: solid red;
                        margin-inline: auto;
                        min-width: 30%;
                        width: fit-content;
                        text-align: center;

                        font-size: 16;
                        font-weight: 500;
                        padding: 2vw;
                        background-color: rgb(42, 46, 45);
                        border-radius: 0.5rem;

                    }



                }
        
        }

        
  
      }
    }
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
    
    
    
    </style>


    
  