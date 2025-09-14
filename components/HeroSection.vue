<template>
  <div class="main-container">
      <div class="image">
        <img src="https://res.cloudinary.com/dgdnews6i/image/upload/v1757428830/WhatsApp_Image_2025-09-09_at_9.13.58_AM_1_dwtiwo.jpg" 
     alt="Community development in rural areas" />
  
      </div>
      <div class="text">
        <h1>Empowering rural communities for lasting development</h1>
        <div class="button">
          <div class="svg">
            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
          </div>
          <p>Learn More</p>

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
      height: calc(var(--vh) * 80); 
      // max-height: calc(var(--vh) * 70);
      // border: solid red;
      position: relative;
      .image {
        width: 100vw;
        // height: calc(var(--vh) * 75);   
        height: 100%;
             img {
          height: 100%;
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
        bottom: 1rem;
        left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        opacity: 0;
    animation: fadeIn 1.5s ease-out forwards 0.2s;
    transform: translateY(20px);
    // transform: scale(0);


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
        }
        .button {
          display: flex;
          align-items: center;
          gap: 1rem;
          .svg {
            // padding: 0.5rem;
            // border: solid $textcolorwhite;
            height: fit-content;
            padding-inline: 0.5rem;
            padding-block: 0.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            background-color: $primarycolorwhite;

            svg {
              fill: $textcolorblack;
              rotate: 180deg;
              // border: solid;
  
  
            }

          }
          p {
            color: $textcolorwhite;
            font-weight: bold;
          }
        }

      }

    }
  }
  
  @media (max-width: 1250px) and (min-width: 800px) {
  }
      
  
  
  
  </style>
  
