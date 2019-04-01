Every computer program has an entry point.
You can start writing your code directly into <script> tags.
But this means it will be executed instantly and simultaneously
as the script is being downloaded
into the browser, without concern for DOM or other media.
This can create a problem because your code might be accessing DOM elements
before they are fully downloaded from the server.
To remedy the situation, you may want to wait until the DOM tree is fully available.
To wait on the DOM event, add an event listener to the document object. The
name of the event is DOMContentLoaded.
