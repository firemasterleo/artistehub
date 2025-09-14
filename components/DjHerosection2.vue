<template>
    <div class="main-container">
        <div class="image">
            <img src="../public/assets/naarly.jpeg" alt="CNG Conversion Hero Image" loading="lazy">

        </div>

        
    </div>
    </template>
    
    <style lang="scss" scoped>
  @use "@/assets/sass/variables" as *; // Import variables
    
    .main-container {
        // background: linear-gradient(to left, #7cae65, #ffffff);
        // background: none;
        // width: 100vw;
        // max-width: 100rem;
        // height: 100vh;
        // max-height: 50rem;
  
    
    }
    @media (max-width: 800px) {
      .main-container {

        display: flex;
        flex-direction: column;
        // height: calc(var(--vh) * 70); 
        // height: 70vh;
        height: 35rem;
        // max-height: calc(var(--vh) * 70);
        // border: solid red;
        width: 100%;
        position: relative;
        overflow: hidden;
        background: #000;
        .image {
          // height: calc(var(--vh) * 75);   
          height: 100%;
               img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(50%);
  
            // opacity: 0;
      transform: scale(1.05); /* tiny zoom for smoothness */
      animation: fadeIn 1.5s ease-out forwards;
          }
          @keyframes fadeIn {
    to {
      // opacity: 1;
      transform: scale(1);
    }
  }
        }

        .text {
          position: absolute;
          bottom: 0rem;
          // border: solid red;
        //   left: 1rem;
        padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity: 0;
      animation: fadeIn 1.5s ease-out forwards 0.2s;
      transform: translateY(20px);
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(2px);


      // transform: scale(0);
    //   border: solid red;
      width: 100%;
  
  
      @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
          h1 {
            font-size: 26px;
            color: $textcolorwhite;
            font-weight:600;
            text-align: center;
          }

          .chanels {
                // border: solid red;
                position: relative;
                z-index: 1;
                // width: 100%;
                height: fit-content;
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                column-gap: 0.5rem;
                row-gap: 0.5rem;
                padding-inline: 3rem;


                .chanel {
                //   width: 100%;
                  height: 4.4rem;
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
              
  
        }
  
      }
    }
    
    @media (max-width: 1250px) and (min-width: 800px) {
    }
        
    
    
    
    </style>
    

