// Write your JavaScript code here.
// Remember to pay attention to page loading!

      // add load event handler to window
      window.addEventListener("load", function() {
        // put DOM code here to ensure elements have been loaded
        console.log('window loaded');

        //reference 'takeoff' button
        let takeoffButton = document.getElementById("takeoff");

        //add an 'click' eventListener to the 'takeoff' button
        takeoffButton.addEventListener("click", function (event) {
            let flightConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
            let output;

            if (flightConfirmation == null || flightConfirmation == "") {
              output = "Flight cancelled";
            } else {
              output = "Shuttle in flight";

            //change 'shuttleBackground' color to blue
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";

            //change flight status based on If-Else output
            document.getElementById("flightStatus").innerHTML = output;

            let currentTop = parseInt(document.getElementById("rocket").style.top);

            while(currentTop > 0) {
                currentTop -= 10;
                let updatedTop = currentTop + 'px';
                document.getElementById("rocket").style.top= updatedTop;

                currentTop = parseInt(document.getElementById("rocket").style.top);

                //get the current shuttle height and cast it to a number type
                let spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
    
                //add 10000 to the current space shuttle height and assign to the HTML element
                document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight + 10000;
                
                console.log( "top:" + updatedTop);    
            }    
            
     

        }

        });


        //reference 'landing' button
        let landingButton = document.getElementById("landing");

        //add an 'click' eventListener to the 'landing' button
        landingButton.addEventListener("click", function (event) {

            //alert a pop up window with below message
            window.alert("The shuttle is landing. Landing gear engaged.");

            //change flight status
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";

            //change 'shuttleBackground' color to green
            document.getElementById("shuttleBackground").style.backgroundColor = "green";

            // shuttle height goes back to zero
            document.getElementById("spaceShuttleHeight").innerHTML = 0;        

        });


         //reference 'missionAbort' button
         let abortButton = document.getElementById("missionAbort");

         //add an 'click' eventListener to the 'missionAbort' button
         abortButton.addEventListener("click", function (event) {

            let abortConfirmation = window.confirm("Confirm that you want to abort the mission.");

            if (abortConfirmation == null || abortConfirmation == "") {
                //alert user
                window.alert("Mission abort cancelled. The mission will continue.");
            } else {
                //change flight status
                document.getElementById("flightStatus").innerHTML = "Mission aborted.";
              
                //change 'shuttleBackground' color to green
                document.getElementById("shuttleBackground").style.backgroundColor = "green";

                // shuttle height goes back to zero
                document.getElementById("spaceShuttleHeight").innerHTML = 0;  
                document.getElementById("rocket").style= "position: absolute; top:250px; left:210px;";

            }

        });


        let rightButton = document.getElementById("right");
        rightButton.addEventListener("click", function (event) {
            let currentleft = parseInt(document.getElementById("rocket").style.left);
            if(currentleft < 340){

            currentleft += 10;
            let updatedLeft = currentleft + 'px';
            document.getElementById("rocket").style.left = updatedLeft;
            
            //change flight status based on If-Else output
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            console.log( "right:" + updatedLeft);
            }
        });

        let leftButton = document.getElementById("left");
        leftButton.addEventListener("click", function (event) {
            let currentleft = parseInt(document.getElementById("rocket").style.left);
           
           if(currentleft > -20){
            currentleft -= 10;
            let updatedLeft = currentleft + 'px';
            document.getElementById("rocket").style.left = updatedLeft;
            //change flight status based on If-Else output
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            console.log( "left:" + updatedLeft);
           }
        });

        let topButton = document.getElementById("up");
        topButton.addEventListener("click", function (event) {
            let currentTop = parseInt(document.getElementById("rocket").style.top);
            let updatedTop;
            if(currentTop >0){
            currentTop -= 10;
            let updatedTop = currentTop+ 'px';
            document.getElementById("rocket").style.top= updatedTop;
            
            //get the current shuttle height and cast it to a number type
            let spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);

            //add 10000 to the current space shuttle height and assign to the HTML element
            document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight + 10000;
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            }
            console.log( "top:" + updatedTop);
        });

        let downButton = document.getElementById("down");
        downButton.addEventListener("click", function (event) {
            let currentTop = parseInt(document.getElementById("rocket").style.top);
            if(currentTop < 250){
            currentTop += 10;
            let updatedTop = currentTop+ 'px';
            document.getElementById("rocket").style.top= updatedTop;
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            console.log( "down:" + updatedTop);
            }
            //get the current shuttle height and cast it to a number type
            let spaceShuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            if(spaceShuttleHeight > 0) {
            //add 10000 to the current space shuttle height and assign to the HTML element
            document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight - 10000;
            }
        });

        let resetButton = document.getElementById("landing");
        resetButton.addEventListener("click", function (event) {
            document.getElementById("rocket").style= "position: absolute; top:250px; left:210px;";
        });
    });