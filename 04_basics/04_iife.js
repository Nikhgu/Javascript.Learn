// Imediately Invoked Function Expression (IIFE)
//IIFE is used when you don't want to access the global pollution(polute(variable)) the child element to stop using it so we use iife
//  We want to execute the function immeditely  and the cause of global pollution(polute) which polute the child function to remove this problem we use iife 
(function chai() {
    console.log("DB CONNECTED");
})();

//(function definition) (execution call)

( function aurcode()  {
    console.log(`DB CONNECTED TWO`);
    
}  )()

