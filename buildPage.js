/*
small function to build a html file on the fly
just pass the needed variables 
you can use the node fs library to write and the http library to serve it
*/

function buildPage(reqvar1,var1,...varn) {
    var header = '';
    var body = '';
  
    // concatenate header and body strings with the passed vars
    
    return '<!DOCTYPE html>'
         + '<html><head>' + header + '</head><body>' + body + '</body></html>';
  };