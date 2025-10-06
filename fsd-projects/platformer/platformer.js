$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall // This is the main "ground"
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

//////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid(); // <-- Leave this UNCOMMENTED to see coordinates

    // TODO 2 - Create Platforms (Mario Style!)
    // All platforms are placed relative to the canvas bottom (canvas.height - Y)
    
    // Platform 1: Middle-level ledge
    createPlatform(100, canvas.height - 150, 200, 20, "brown"); 

    // Platform 6 (Stepping Stone): Precision jump spot
    createPlatform(350, canvas.height - 180, 50, 20, "purple"); 

    // Platform 2: Small jumpable block
    createPlatform(450, canvas.height - 250, 50, 50, "orange"); 

    // Platform 7 (High Center): Creates a high path
    createPlatform(550, canvas.height - 450, 150, 20, "teal"); 

    // Platform 3: Tiered structure
    createPlatform(650, canvas.height - 150, 100, 20, "saddlebrown");
    createPlatform(700, canvas.height - 250, 50, 20, "saddlebrown");
    createPlatform(750, canvas.height - 350, 50, 20, "saddlebrown");

    // Platform 8 (Wall): Barrier/wall-jump spot
    createPlatform(850, canvas.height - 300, 30, 150, "gray"); 

    // Platform 4: Long bridge
    createPlatform(900, canvas.height - 100, 400, 20, "darkgreen"); 

    // Platform 9 (Safe Zone): High platform before the final stretch
    createPlatform(1200, canvas.height - 450, 100, 20, "blue"); 

    // Platform 5: High destination platform
    createPlatform(1400, canvas.height - 350, 100, 20, "red");


    // TODO 3 - Create Collectables
    createCollectable("coin", 200, canvas.height - 200);
    createCollectable("star", 460, canvas.height - 320);
    createCollectable("coin", 770, canvas.height - 400); 

    // Additional Collectibles
    createCollectable("coin", 150, canvas.height - 100); 
    createCollectable("star", 375, canvas.height - 250); 
    createCollectable("coin", 580, canvas.height - 480);
    createCollectable("coin", 650, canvas.height - 480);
    createCollectable("star", 870, canvas.height - 400); 
    createCollectable("coin", 1100, canvas.height - 150); 
    createCollectable("coin", 1250, canvas.height - 480);
    createCollectable("trophy", 1430, canvas.height - 400); 


    // TODO 4 - Create Cannons (Enemies/Obstacles)
    // NOTE: Cannons are fixed to the side walls (left/right) or ceiling/floor (top/bottom).
    // The second argument (position) is Y for left/right, and X for top/bottom.

    // Cannon 1: Shoots across the first jump gap (from LEFT wall)
    createCannon("left", 350, 1500); 

    // Cannon 4: Challenges the jump onto P6 (from RIGHT wall)
    createCannon("right", 300, 1500); 

    // Cannon 5: Challenges the approach to the tiered platforms (from LEFT wall)
    createCannon("left", 450, 2500); 

    // Cannon 2: Shoots from the ground (BOTTOM) near the tiered structure
    createCannon("bottom", 550, 1000); 

    // Cannon 6: Shoots down from the ceiling (TOP) over the high path
    createCannon("top", 625, 3000); 

    // Cannon 3: Protects the final platform (from RIGHT wall)
    createCannon("right", 400, 1000); 


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////

  registerSetup(setup);
});