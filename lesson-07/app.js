let imagesToLaod = document.querySelectorAll("[data-src]");

function preloadImage{
  
}

const imageOptions = { }


const imgOptions = new IntersectionObserver((entreis, imgObserver) => {

    entreis.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target)
        }


    })
    

}, imgOptions)





