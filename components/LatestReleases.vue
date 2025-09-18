<template>
    <div class="main-container">
        <div class="content">
            
    
            <div class="header">
                <h1>Latest Releases</h1>
                <!-- <p>Learn more about my music and Journey.</p> -->
                <!-- <button>VIEW ALL RELEASES</button> -->
            </div>
            <div class="releases">
                <div
                    v-for="release in releases"
                    :key="release.title"
                    class="release-item"
                    @click="openModal(release)"
                    >
                <div class="image">
                    <NuxtImg
                    :src="release.image"
                    :alt="release.title"
                          width="1200"
                        height="1200"
                    format="webp"
                    :placeholder="[80, 80, 70, 20]" 
                    placeholderClass="my-placeholder"
                 class="blur-up"

                    />                
                </div>
                <h3>{{ release.title }}</h3>
                <p>{{ release.artist }}</p>
                </div>

                       <!-- Modal -->
                       <transition name="fade">
  <div v-if="selectedRelease" class="modal-container" @click.self="selectedRelease = null">
    <div class="modal">
      <button class="close-btn" @click="selectedRelease = null">×</button>
      <div class="image">
          <NuxtImg
                :src="selectedRelease.image"
                :alt="selectedRelease.title"
                width="1200"
                height="800"
                format="webp"
                placeholder
                />

      </div>
      <div class="details">
          <h2>{{ selectedRelease.title }}</h2>
          <p>{{ selectedRelease.artist }}</p>
          <p>
            Released: {{
                new Date(selectedRelease.releaseDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
                })
            }}
            </p>   

      </div>
      
      <h2 class="listen-on">Listen On</h2>
            <div class="chanels">
                <div class="apple chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                  </svg>
                  <p>Music</p>

                </div>
                <div class="spotify chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                      <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
                  </svg>
                  <p>Spotify</p>

                </div>
                <div class="deezer chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 39 14 L 39 16 L 47 16 L 47 14 Z M 21 17 L 21 19 L 29 19 L 29 17 Z M 39 17 L 39 19 L 47 19 L 47 17 Z M 21 20 L 21 22 L 29 22 L 29 20 Z M 39 20 L 39 22 L 47 22 L 47 20 Z M 3 23 L 3 25 L 11 25 L 11 23 Z M 21 23 L 21 25 L 29 25 L 29 23 Z M 30 23 L 30 25 L 38 25 L 38 23 Z M 39 23 L 39 25 L 47 25 L 47 23 Z M 3 26 L 3 28 L 11 28 L 11 26 Z M 21 26 L 21 28 L 29 28 L 29 26 Z M 30 26 L 30 28 L 38 28 L 38 26 Z M 39 26 L 39 28 L 47 28 L 47 26 Z M 3 29 L 3 31 L 11 31 L 11 29 Z M 12 29 L 12 31 L 20 31 L 20 29 Z M 21 29 L 21 31 L 29 31 L 29 29 Z M 30 29 L 30 31 L 38 31 L 38 29 Z M 39 29 L 39 31 L 47 31 L 47 29 Z M 3 32 L 3 34 L 11 34 L 11 32 Z M 12 32 L 12 34 L 20 34 L 20 32 Z M 21 32 L 21 34 L 29 34 L 29 32 Z M 30 32 L 30 34 L 38 34 L 38 32 Z M 39 32 L 39 34 L 47 34 L 47 32 Z M 3 35 L 3 37 L 11 37 L 11 35 Z M 12 35 L 12 37 L 20 37 L 20 35 Z M 21 35 L 21 37 L 29 37 L 29 35 Z M 30 35 L 30 37 L 38 37 L 38 35 Z M 39 35 L 39 37 L 47 37 L 47 35 Z"></path>
                  </svg>
                  <p>Deezer</p>

                </div>
                <div class="amazonmusic chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 25.3125 3 C 19.210938 3 12.492188 5.3125 11.09375 12.8125 C 10.894531 13.613281 11.5 13.992188 12 14.09375 L 18.1875 14.6875 C 18.789063 14.6875 19.207031 14.101563 19.40625 13.5 C 19.90625 10.898438 22.101563 9.59375 24.5 9.59375 C 25.800781 9.59375 27.292969 10.113281 28.09375 11.3125 C 28.992188 12.613281 28.8125 14.40625 28.8125 15.90625 L 28.8125 16.8125 C 25.113281 17.210938 20.3125 17.5 16.8125 19 C 12.8125 20.699219 10 24.207031 10 29.40625 C 10 36.007813 14.199219 39.3125 19.5 39.3125 C 24 39.3125 26.5 38.195313 30 34.59375 C 31.199219 36.292969 31.585938 37.105469 33.6875 38.90625 C 34.1875 39.207031 34.789063 39.085938 35.1875 38.6875 L 35.1875 38.8125 C 36.488281 37.710938 38.792969 35.601563 40.09375 34.5 C 40.59375 34.199219 40.492188 33.5 40.09375 33 C 38.894531 31.398438 37.6875 30.09375 37.6875 27.09375 L 37.6875 17.1875 C 37.6875 12.988281 38.007813 9.085938 34.90625 6.1875 C 32.40625 3.789063 28.414063 3 25.3125 3 Z M 27 22 L 28.6875 22 L 28.6875 23.40625 C 28.6875 25.804688 28.792969 27.894531 27.59375 30.09375 C 26.59375 31.894531 24.988281 33 23.1875 33 C 20.789063 33 19.3125 31.207031 19.3125 28.40625 C 19.3125 23.707031 23 22.300781 27 22 Z M 44.59375 36.59375 C 42.992188 36.59375 41.085938 37 39.6875 38 C 39.289063 38.300781 39.3125 38.6875 39.8125 38.6875 C 41.414063 38.488281 44.988281 38.007813 45.6875 38.90625 C 46.289063 39.707031 45.007813 43.085938 44.40625 44.6875 C 44.207031 45.1875 44.601563 45.300781 45 45 C 47.699219 42.699219 48.40625 38.007813 47.90625 37.40625 C 47.605469 36.90625 46.195313 36.59375 44.59375 36.59375 Z M 2.1875 37.5 C 1.886719 37.5 1.695313 38.011719 2.09375 38.3125 C 8.09375 43.710938 16.007813 47 24.90625 47 C 31.207031 47 38.492188 45.011719 43.59375 41.3125 C 44.394531 40.710938 43.707031 39.695313 42.90625 40.09375 C 37.207031 42.492188 31.101563 43.6875 25.5 43.6875 C 17.199219 43.6875 9.1875 41.386719 2.6875 37.6875 C 2.488281 37.488281 2.289063 37.5 2.1875 37.5 Z"></path>
                  </svg>
                  <p>Amazon</p>

                </div>
                <!-- <div class="tidal chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                  <path d="M 4 5 L 0 9 L 4 13 L 8 9 L 4 5 z M 8 9 L 12 13 L 16 9 L 12 5 L 8 9 z M 16 9 L 20 13 L 24 9 L 20 5 L 16 9 z M 12 13 L 8 17 L 12 21 L 16 17 L 12 13 z"></path>
                  </svg>

                  <p>Tidal</p>

                </div>

                <div class="youtube chanel">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                  </svg>
                  <p>YouTube</p>

                </div> -->
  
          </div>
            <h1>See Story</h1>
 </div>
  </div>
</transition>


            </div>
            <div class="button">
                <p>View All Releases</p>
            </div>
        </div>

    </div>
    </template>

<script setup>
import rawReleases from '/public/releases.json'
import { ref, computed } from 'vue'

const selectedRelease = ref(null)

// Sort releases by releaseDate first (fall back to datePublished if missing)
const releases = computed(() => {
  return [...rawReleases].sort((a, b) => {
    const dateA = new Date(a.releaseDate || a.datePublished)
    const dateB = new Date(b.releaseDate || b.datePublished)
    return dateB - dateA // newest first
  })
})

function openModal(release) {
  selectedRelease.value = release
}
</script>


    
    <style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables
    

    @media (min-width: 801px) {
      .main-container {
        max-width: 100rem;
        width: 100vw;
        height: fit-content;
        // max-height: 50rem;
        overflow: hidden;

        margin-inline: auto;
        // border: solid red;
        display: flex;
        justify-content: center;
        background-color: rgb(25, 24, 25);
    background-color: #101010;

        position: relative;

        .content {
                //border: solid red;
                width: 100%;
                height: fit-content;
                //backdrop-filter: blur(10px);
                    border-radius: 1rem;
                    position: relative;
                    //padding-bottom: 2rem;

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
                        font-size: clamp(3rem, 4vw, 6em); /* Min 5rem, scales with viewport width, max 10em */
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
                    row-gap: 2rem;
                    // height: fit-content;
                    // margin-top: 2rem;
                    padding-inline: 1rem;
                    padding-top: 2.5rem;
                    padding-bottom:5rem;
                    // width: 100vw;

                    background-color: rgba(0, 0, 0, 0.249);
                // backdrop-filter: blur(10px); //was a bug for some reason
                // border-radius: 1rem;
                padding-inline: 10rem;

                    
                    .release-item {
                        height: fit-content;
                        // border: solid blue;
                        // width: 50%;
                        display: flex;
                        flex-direction: column;
                        // gap: 10rem;
                        overflow: hidden;
                        padding-inline: 3rem;
    
                        .image {
                            width: 100%;
                            aspect-ratio: 16 / 12;
                            // height: 12rem;
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
                        // min-width: 30%;
                        // max-height: 4rem;
                        text-align: center;
                        padding: 1rem;
                        font-weight: 500;
                        background-color: rgb(14, 71, 47);
                        border-radius: 0.5rem;


                    }



                }
            }
      }


      /* Modal overlay */
.modal-container {
  position: fixed;
  top: 0rem;
  left: 0;
  width: 100vw;
//   margin-inline: auto;

  height: 100vh;
  background: rgba(0, 0, 0, 0.516);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
//   overflow: hidden;
  animation: pop 0.5s ease;

}

/* Modal box */
.modal {
    // border: solid ;
  background: #2d2d2d;
  padding: 1.5rem;
  border-radius: 0.75rem;
//   max-width: 500px;
  width: 30%;
//   text-align: center;
  color: $textcolorwhite;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  position: relative;
  height: 80%;

  .image {
    // width: 100%;
    // height: 50%;
    aspect-ratio: 16 / 10;
    // position: absolute;

      img {
        width: 100%;
        height: 100%;
        filter: brightness(40%);
        // z-index: -1;
        object-fit: cover;
      }
  }
  .details {
    position: absolute;
    top: 4rem;
    left: 3rem;
    color: $textcolorwhite;

    h2 {
  color: $textcolorwhite;
  
  
    }
    p {
        color: $textcolorwhitedark;
    }




    
  }
  .listen-on {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: $textcolorwhite;
    text-align: center;
  }


  .chanels {
                // border: solid red;
                position: relative;
                z-index: 1;
                // width: 100%;
                height: fit-content;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 0.5rem;
                row-gap: 0.5rem;
                // padding-inline: 3rem;
                padding-top: 1rem;


                .chanel {
                //   width: 100%;
                //   height: 3rem;
                  height: 3rem;
                  // border: solid $textcolorwhitedark 1px;
                  border-radius: 0.5rem;
                  background-color: rgba(255, 255, 255, 0.037);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;

                  svg{
                    fill: $textcolorwhite;
                    width: 20px;
                    height: 20px;
                  }
                  p {
                    color: $textcolorwhite;
                  }

                }


              }
              h1 {
    font-size: 22px;
    background-color: rgba(215, 215, 215, 0.516);
    color: $textcolorblack;
    margin-top: 1rem;
    width: fit-content;
    margin-inline: auto;
    padding-inline: 1rem;
    padding-block: 0.2rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
  
}

/* Close button */
.close-btn {
  background: rgba(71, 66, 66, 0.361);
  border: none;
  border-radius: 10rem;
  color: $textcolorwhite;
  font-size: 1.5rem;
  position: absolute;
  top: -4rem;
  right: 0.5rem;
  height: 4rem;
  width: 4rem;

  cursor: pointer;
}

/* Pop effect */
@keyframes pop {
  from { transform: scale(0.95); opacity: 0.8; }
  to { transform: scale(1); opacity: 1; }
}
      

     }
    @media (max-width: 800px) {
        .main-container {
            display: flex;
            flex-direction: column;
            // border: solid green;
            height: fit-content;
            background-color: rgb(25, 24, 25);
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
                // backdrop-filter: blur(10px); //was a bug for some reason
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
                            aspect-ratio: 16 / 16;
                            // height: 12rem;
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



/* Modal overlay */
.modal-container {
  position: fixed;
  top: 0rem;
  left: 0;
  width: 100vw;
//   margin-inline: auto;

  height: 100vh;
  background: rgba(0, 0, 0, 0.516);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
//   overflow: hidden;
  animation: pop 0.5s ease;

}

/* Modal box */
.modal {
    // border: solid ;
  background: #2d2d2d;
  padding: 1.5rem;
  border-radius: 0.75rem;
//   max-width: 500px;
  width: 90%;
//   text-align: center;
  color: $textcolorwhite;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  position: relative;
  height: fit-content;

  .image {
    // width: 100%;
    // height: 50%;
    aspect-ratio: 16 / 10;
    // position: absolute;

      img {
        width: 100%;
        height: 100%;
        filter: brightness(40%);
        // z-index: -1;
        object-fit: cover;
      }
  }
  .details {
    position: absolute;
    top: 4rem;
    left: 3rem;
    color: $textcolorwhite;

    h2 {
  color: $textcolorwhite;
  
  
    }
    p {
        color: $textcolorwhitedark;
    }




    
  }
  .listen-on {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: $textcolorwhite;
    text-align: center;
  }


  .chanels {
                // border: solid red;
                position: relative;
                z-index: 1;
                // width: 100%;
                height: fit-content;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 0.5rem;
                row-gap: 0.5rem;
                // padding-inline: 3rem;
                padding-top: 1rem;


                .chanel {
                //   width: 100%;
                //   height: 3rem;
                  height: 10vw;
                  // border: solid $textcolorwhitedark 1px;
                  border-radius: 0.5rem;
                  background-color: rgba(255, 255, 255, 0.037);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;

                  svg{
                    fill: $textcolorwhite;
                    width: 20px;
                    height: 20px;
                  }
                  p {
                    color: $textcolorwhite;
                  }

                }


              }
              h1 {
    font-size: 22px;
    background-color: rgba(215, 215, 215, 0.516);
    color: $textcolorblack;
    margin-top: 1rem;
    width: fit-content;
    margin-inline: auto;
    padding-inline: 1rem;
    padding-block: 0.2rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
  }
  
}

/* Close button */
.close-btn {
  background: rgba(71, 66, 66, 0.361);
  border: none;
  border-radius: 10rem;
  color: $textcolorwhite;
  font-size: 1.5rem;
  position: absolute;
  top: -4rem;
  right: 0.5rem;
  height: 4rem;
  width: 4rem;

  cursor: pointer;
}

/* Pop effect */
@keyframes pop {
  from { transform: scale(0.95); opacity: 0.8; }
  to { transform: scale(1); opacity: 1; }
}

        }

        /* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}





    }
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
//     .my-placeholder {
//   filter: blur(20px);
//    }
    



    </style>
    
