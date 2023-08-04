// Step 1: Create an event handler
function eventHandlerFunction() {
     console.log("Event handler is triggered!");
   }
   
   // Step 2: Add the event listener to an element
   const button = document.getElementById("myButton"); // Replace "myButton" with the actual ID of your button element
   button.addEventListener("click", eventHandlerFunction);
   
   // Step 3: Call the event handler by triggering the event
   button.click(); // This will log "Event handler is triggered!" in the console
   
   // Step 4: Remove the event handler
   button.removeEventListener("click", eventHandlerFunction);
   
   // Step 5: Call the event handler again after removal
   button.click(); // This will not log anything since the event handler has been removed
   