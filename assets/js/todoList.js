//Click on todo to toggle whether its complete
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on x to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[name='addTodo']").on("keypress", function(event) {
	if (event.which === 13) {
		var newTodo = $(this).val();	//save todo input
		$(this).val("")					//clear input box
		$("#currTodos").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");

	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});