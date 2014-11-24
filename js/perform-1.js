//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);


//this below finds all 6 anchor links that make up the nav
$("#menu a").each(function(){


  var $anchor = $(this);


  //Create an option wheel for all 6 anchor links
  var $option = $("<option></option>");

  //Deal with selected options depending on current page

  //option's value is the href
  $option.val($anchor.attr("href"));

  //option's text is the text of link
  $option.text($anchor.text());
  
  //append option to select
  $select.append($option);

});

//Bind change listener to the select

  //Go to select's location









