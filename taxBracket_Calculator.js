/*  Name: Darielle Hess
    Date: 06/27/18
    Program: An income tax calculator made in HTML and JavaScript. Determines
    someone's tax bracket and amount taxed.
*/



function calculateTax(){
        
         var tax; //the tax calculated based on the filing status and income
         var taxRate; //the tax rate (bracket) based on the filing status and income
         
         //Retrieve the values the user enters and selects on the form
         var income = document.getElementById("incomeInput").value;
         var status = document.getElementById("filingStatus").value;
         
         
         //Calculate the tax amount and tax rate based on the filing status and income
         //0-Single, 1-Married Jointly, 2-Married Separately, and 3-Head of Household

        if (status == 0) { 
             
             // Compute tax for single filers
               if (income <= 9525){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 38700) {
                 tax = 9525 * 0.10 + (income - 9525) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 + (income - 38700) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 500000) {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (500000 - 200000 ) * 0.35 + (income - 500000) * .37;
                  taxRate = 37;
               }//end of nested if
               
          }//end of single filer calculation
          
        
        
        
           
           
          else if(status == 1) {
                
                // Compute tax for Married jointly filers
               if (income <= 19050){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 77400) {
                 tax = 19050 * 0.10 + (income - 19050) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 165000) {
                 tax = 19050 * 0.10 + (77400 - 19050) * 0.12 + (income - 77400) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 315000) {
                 tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                       (165000 - 77400) * 0.22 + (income - 165000) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 400000) {
                 tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                       (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                       (income - 315000) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 600000) {
                  tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                        (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                        (400000 - 315000) * 0.32 + (income - 400000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 19050 * 0.10 + (77400 - 19050) * 0.12 +
                        (165000 - 77400) * 0.22 + (315000 - 165000) * 0.24 +
                        (400000 - 315000) * 0.32 + (600000 - 400000 ) * 0.35 + (income - 600000) * .37;
                  taxRate = 37;
               }//end of nested if
  
  
  
  
          }//end of married file jointly calculation
          
          
         
                 
                 
                 
          else if(status == 2) {
             
                // Compute tax for married separate filers
               if (income <= 9525){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 38700) {
                 tax = 9525 * 0.10 + (income - 9525) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 + (income - 38700) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                       (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 300000) {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 9525 * 0.10 + (38700 - 9525) * 0.12 +
                        (82500 - 38700) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (300000 - 200000 ) * 0.35 + (income - 300000) * .37;
                  taxRate = 37;
               }//end of nested if
               
             
             
          }//end of married file separately calculation
        
        
        
        
          
          
          
          else if(status == 3) {
                // compute head of house hold 
               if (income <= 13600){
                 tax = income * 0.10;
                 taxRate = 10;
               }//end of nested if
               else if (income <= 51800) {
                 tax = 13600 * 0.10 + (income - 13600) * 0.12;
                 taxRate = 12;
               }//end of else if
               else if (income <= 82500) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 + (income - 51800) * 0.22;
                 taxRate = 22;
               } //end of else if
               else if (income <= 157500) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                       (82500 - 51800) * 0.22 + (income - 82500) * 0.24;
                 taxRate = 24;
               }//end of else if
               else if (income <= 200000) {
                 tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                       (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                       (income - 157500) * 0.32;
                 taxRate = 32;
               }//end of else if
               else if (income <= 500000) {
                  tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                        (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (income - 200000) * 0.35;
                  taxRate = 35;
               }//end of else if
               else {
                  tax = 13600 * 0.10 + (51800 - 13600) * 0.12 +
                        (82500 - 51800) * 0.22 + (157500 - 82500) * 0.24 +
                        (200000 - 157500) * 0.32 + (500000 - 200000 ) * 0.35 + (income - 500000) * .37;
                  taxRate = 37;
               }//end of nested if
               
 
          }//end of head of household calculation
          
          
           
          document.getElementById("taxEstimate").innerHTML = "Tax:  <b>$" + tax.toFixed(2) + "<b></br><br>";
          
          document.getElementById("taxBracket").innerHTML = "Tax Bracket: <b>" + taxRate + "</b>%";
          
      
      
                }//end of calculateTax function  
      

          
// this function clears the screen so a new calculatiojn can be made             
function clearButton () {
    
              //This code removes the taxable income the user entered in the textfield.
              document.getElementById("incomeInput").value = "";
              
              
              
              //This code resets the dropdown box to the "Single" filer status.
              document.getElementById("filingStatus").selectedIndex = 0;
              
             //INSERT YOUR CODE BELOW

            document.getElementById("taxEstimate").innerHTML = "";
            document.getElementById("taxBracket").innerHTML = "";



}//end of clearButton function
      
