/* 
  Set up Game loop 
*/
let lastRenderTime = 0;

const main = currentTime => {
  // Get the seconds after the last render time.
  const secondsAfterLastRender = (currentTime - lastRenderTime) / 1000;
  // Request a new frame
  window.requestAnimationFrame(main);
  // Get the last render time
  lastRenderTime = currentTime;
  console.log(secondsAfterLastRender);
}

/*
    Calls the main function to update an 
    animation before the next repaint.
*/
// window.requestAnimationFrame(main);