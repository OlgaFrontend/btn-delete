var links = document.querySelectorAll('.btn-delete');
var myLink;

for ( var i = 0; i < links.length; i++ ) {  
    myLink = links[i];
    // console.log(myLink);
    linksEventListener(myLink);
}

function linksEventListener(myLink) {               
    myLink.addEventListener( "click", function() {
        myLink.parentNode.remove();
    });
}









// function btnDelete() {
// 	var elem = document.querySelectorAll(".text");
// 	var parent = elem.parentNode;
// 	parent.removeChild(elem);
// }


// Get the element, add a click listener...
/*document.getElementById("myDiv").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "I") {
		// List item found!  Output the ID!
		    var elem = document.querySelectorAll(".text");
		    
		for (var i = 0; i < elem.length; i++) {
			
			console.log(elem[i]);
		    // var parent = elem[i].parentNode;
		    // parent.removeChild(elem[i]);
		    elem.removeChild([i]);
	    }
	}
});*/

// var links = document.querySelectorAll('.btn-delete');
// console.log(links);

// 	links.forEach(function(a) {
// 	a.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		this.parentNode.remove();
// 		console.log(this.parentNode);
// 	});
// });

// var elems = document.querySelectorAll('#myDiv,.text,btn-delete');
// console.log(elems);

// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("click", removeBlock, true);
// }

// function removeBlock() {
  
//   console.log(this);
//   this.remove();
// }

// document.getElementById("myDiv").addEventListener("click",function(e) {
	
//   if (e.target && e.target.matches("i")) {
//         var elem = document.querySelectorAll(".text");
        
//     }    
// });


  // document.getElementById("myDiv").addEventListener("click", function( event ) {
  //   // display the current click count inside the clicked div
  //   event.target.remove();
  // }, false);
