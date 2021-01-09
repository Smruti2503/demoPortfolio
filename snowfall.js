$( "#snow" ).fallingSnow({
    // do we want to be able to stop the snow falling?
    stopOnClick : false,
  
    // on this we click to stop the snow animation
    stopElement: $('#snow'),
  
    // tweak the general speed of the falling snow. 
    // 0.1 is faster, e.g. 5 is slower. Decimals are allowed
    // but do not use 0 (zero)
    speedAdjust: 4,
  
    // tweak the general size of the snowflakes. 
    // 0.1 is smaller, e.g. 2 is larger. Decimals are allowed
    thicknessAdjust: 0.5,
  
    // set the deviation from the initial point of falling 
    // this makes the snowflake start at a random new point
    // but also causes some drift when falling
    drift: 100,
  
    // set different opacities. If true then three different
    // opacities are created for the snowflakes: 1, 0.8 and 0.7
    opacity: true,
  });