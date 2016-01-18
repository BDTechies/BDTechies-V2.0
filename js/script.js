$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['home', 'about','portfolio','blog','contact'],
		css3: true,
		menu: '#menu',
        scrollingSpeed: 1000,
        sectionsColor : ['#59ABE3', '#D24D57','#E08283','#BE90D4','#87D37C']
	});
});