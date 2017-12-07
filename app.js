console.log('have fun !');

$("#username").html("you");



var obj = {
	firs:$("#first_name"),
	last:$("#last_name"),
};


$( "input" )
  .keyup(function() {
    $( "#username" ).text( obj.firs.val() +"    "+obj.last.val());
  })
  .keyup();


// $( "input" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "#username" ).text( value );
//   })
//   .keyup();

  

//  $("#first_name").val(function(){
// var value1 = $( this ).val();
// return value1;

//  });

// console.log('ok'+ value1);

// $("#username").html("you");

// 
// var value2="";
// var last_name="";

 

// $("#first_name").keyup(function() {
//     var value1 = $( this ).val();
//  console.log('1:'+value1);
//  return value1; 

// }) 
  





//     $( "#username" ).html( value1)



//  var last_name = $("#last_name")
//   .keyup(function() {
//     var value2 = $( this ).val();
//     console.log('2'+value2);
// })
 
//  console.log("last: "+last_name);

