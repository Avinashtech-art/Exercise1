
(function() {
    console.log("Loading User Details...");
  
    const greetingMsg = (function() {
      let message = "Hello";
      return function(firstName, lastName) {
        return `${message} ${firstName} ${lastName}`;
      }
    })();
  
    const firstName = "John";
    const lastName = "Doe";
    console.log(`Name: ${greetingMsg(firstName, lastName)}`);
  })();
  