<template>
    <div class="main-container">
        <!-- <div class="overlaybg"></div> -->

        <div class="content">
            <div class="text">
                <h1>Upcoming Events</h1>
                <p>Details about all upcoming events. all tickets are sold through eventbrite. feel free to contact </p>

            </div>
            
            <div class="slide">
                <!--i deleted this to use later @mousemove="updateMousePosition" @mouseenter="showVideo" @mouseleave="hideVideo" -->
                <div class="highlight" >
                <NuxtLink to="/">
                    
                    <div class="image">
                        <NuxtImg
                        src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838029/marcel-strauss-1AR3gIIadzQ-unsplash_fw29ox.jpg"
                        alt="CNG Conversion Hero Image"
                        width="1200"
                        height="800"
                        format="webp"
                        />                    </div>
                </NuxtLink>
                    <div class="eventtext">
                    <h2>Aug 23, 2025</h2>
                    <h1>Maarly</h1>
                    <h3>ibiza, Spain</h3>
                    <p>Ushuaia</p>
                </div>

    
                </div>
                <div class="highlight">
        <div class="image">
            <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838024/hendo-wang-WEKKEg9j_YE-unsplash_v2miqu.jpg" alt="CNG Conversion Hero Image">
        </div>
        <div class="eventtext">
            <h2>Sep 14, 2025</h2>
            <h1>Black Coffee</h1>
            <h3>Mykonos, Greece</h3>
            <p>Scorpios</p>
        </div>
        </div>
                <div class="highlight">
                <NuxtLink to="/">
                    
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838029/marcel-strauss-1AR3gIIadzQ-unsplash_fw29ox.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                </div>
                </NuxtLink>
                    <div class="eventtext">
                        <h2>Oct 05, 2025</h2>
                        <h1>Peggy Gou</h1>
                        <h3>Seoul, South Korea</h3>
                        <p>Octagon</p>
                </div>
  
    
                </div>
                <div class="highlight" > 
                <div class="image">
                    <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838029/marcel-strauss-1AR3gIIadzQ-unsplash_fw29ox.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                </div>
                <div class="eventtext">
                    <h2>Nov 02, 2025</h2>
                    <h1>Solomun</h1>
                    <h3>Tulum, Mexico</h3>
                    <p>Zamna Festival</p>
                </div>
    
                </div>
        
                <div class="highlight">
                    
                    <div class="image">
                        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757838029/marcel-strauss-1AR3gIIadzQ-unsplash_fw29ox.jpg" alt="CNG Conversion Hero Image" loading="lazy">
                    </div>
                    <div class="eventtext">
                        <h2>Dec 20, 2025</h2>
                        <h1>Charlotte de Witte</h1>
                        <h3>Berlin, Germany</h3>
                        <p>Berghain</p>  
                    </div>

                </div>
            </div>
    
            
            <div class="button">
                <p>Get Tickets</p>
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
        background-color: $primarycolorwhite;
        // background-image: url("https://www.transparenttextures.com/patterns/mirrored-squares.png");

        // padding-top: 15rem;

        // .overlaybg {
        //     border: solid red;
        //     width: 100vw;
        //     height: 15rem;
        //     position: absolute;
        // background: linear-gradient(0deg, white 50%, rgb(117, 36, 107) 100%);


        // }
        .content {
            background-color: rgba(57, 3, 57, 0.075);
            backdrop-filter: blur(20px);
            padding-top: 2rem;
            // border: solid red;

            .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    // padding-block: 0.5rem;
                    padding-inline: 1rem;
                    padding-bottom: 1rem;
                    gap: 1.5rem;

            //   padding-top: 15rem;

            h1 {
                // border: solid red;
                        font-size: 9vw; /* Min 5rem, scales with viewport width, max 10em */
                        line-height: 2.8rem;
                        line-height: 12vw;
                        color: $textcolorblack;
                    width: 50%;
    
    
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
                    //   -top: 1rem;
                      
      
      
                      .image {
                          width: 100%;
                          aspect-ratio: 16 / 12; // or 4/3, whatever matches your images

                        //   height: 50vw;
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
                        padding-bottom: 2rem;
                        padding-left: 0.5rem;
                        // padding: 0.5rem;



                        h2 {
                            padding-top: 0.5rem;
                            font-size: 3vw;
                            margin-top: 0px;
                            
                        }
                        h1 {
                            font-size: 6vw;
                            color: $textcolorblackdark;
                            // margin-top: 0px;

                            // position: absolute;

                        }
                        h3{
                            font-size: 4vw;
                            font-weight: 400;
                        }
                        p {
                            // border: solid red;
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


    
  