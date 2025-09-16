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
                        height="800"
                    format="webp"
                    placeholder
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
      <NuxtImg
            :src="selectedRelease.image"
            :alt="selectedRelease.title"
            width="1200"
            height="800"
            format="webp"
            placeholder
            />
      <h2>{{ selectedRelease.title }}</h2>
      <p>{{ selectedRelease.artist }}</p>
      <small>
            Released: {{
                new Date(selectedRelease.releaseDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
                })
            }}
            </small>   
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
    

    @media (max-width: 800px) {
        .main-container {
            display: flex;
            flex-direction: column;
            // border: solid green;
            height: fit-content;
            background-color: rgb(35, 21, 37);
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


        }

        /* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}



/* Modal overlay */
.modal-container {
  position: fixed;
  top: 10rem;
  left: 0;
  width: 20rem;
  height: fit-content;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
//   overflow: hidden;
  animation: pop 0.5s ease;

}

/* Modal box */
.modal {
  background: #111;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 500px;
  width: 90%;
//   text-align: center;
  color: white;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);

  img {
    width: 100%;
    height: 100%;
  }
  h1 {
    border: solid ;
    font-size: 22px;
    margin-top: 1rem;
    width: fit-content;
    margin-inline: auto;
    padding-inline: 0.5rem;
  }
}

/* Close button */
.close-btn {
  background: rgba(255, 255, 255, 0.361);
  border: none;
  border-radius: 10rem;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: -2rem;
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
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
    
    
    .blur-up {
  transition: filter 0.4s ease;
}

.blur-up[data-nuxt-img-placeholder] {
  filter: blur(20px);
  transform: scale(1.05);
}

.blur-up:not([data-nuxt-img-placeholder]) {
  filter: blur(0);
  transform: scale(1);
}

    </style>
    
