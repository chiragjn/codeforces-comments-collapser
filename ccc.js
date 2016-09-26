$(function() {
	$('body').append('<div class="work-snackbar">CCC Processing...</div>')
	$(".comment-no-indent").remove();
	$(".comment").wrap("<div class='collapser-div'></div>");
	$(".comment").addClass("thread-border");
	var collapse_html = "<td class='ccc-cell-fix'><a href='#' class='collapser-control'>[-]</a></td>";
	var expand_html = "<div class='expander-control-div thread-border' style='display:none;'><a href='#' class='expander-control'>[+]</a> &nbsp; ";
	$(".collapser-div").each(function(i){
		var c = $(this);
		c.prepend(expand_html + c.find(".avatar > div").html() + " <i class='comment-collapsed-message'>(Comment Collapsed)</i></div>");
		c.find("tr:first").prepend(collapse_html);
	});
	$(".collapser-control").click(function(e){
		$(this).closest(".comment").toggle();
		$(this).closest(".collapser-div").find(".expander-control-div:first").toggle();
		return false;
	});
	$(".expander-control").click(function(e){
		console.log('Expand Requested!');
		$(this).closest(".expander-control-div").toggle();
		$(this).closest(".collapser-div").find(".comment:first").toggle();
		return false;
	});
	$('.work-snackbar').remove();
});
