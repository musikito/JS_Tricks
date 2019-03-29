/*
The console.error(); function is very useful
when spitting user made errors
*/
let fuel = 99;
function launch_rocket(){
  function warning_msg(){
    console.error("Not enough fuel. ");
  }//end function  warning_msg
  if(fuel >= 100){
    console.log("Looks everything's ok. ");
  }else{
    warning_msg();
  }
}//launch_rocket

launch_rocket();
/*
console.error even print the stack trace:
launch_rocket();

Not enough fuel.
warning_msg @ VM76:8
launch_rocket @ VM76:13
(anonymous) @ VM76:17
undefined
*/
