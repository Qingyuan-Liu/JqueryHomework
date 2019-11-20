$("#ch3form").submit(function(){
	// var values = $("input[name='fruit']")
 //              .map(function(){return $(this).val();}).get();
 //    for(let i=0;i<values.length;i++){
 //    	if($("values[i]").prop("checked")){
 //    		return true;
 //    	}else{
 //    		 alert("You must pick a fruit!");
 //   			 return false;
 //    	}
 //    }
 	// console.log($('input[name="fruit"]:checked').val());
 	if($('input[name="fruit"]:checked').val()!=null && $('input[name="standing"]:checked').val()!=null)
 		return true; 	

    alert("You must pick at least one element from both sets of radio buttons!")
   		return false;

});



