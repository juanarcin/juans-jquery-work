// load work json data
let data = []
fetch('https://juans.work/shared/data.json')
.then(response => response.json())
.then(function(json){
	json.projects.map(function(project){
		let card;
		if (project.id === 3){
			card = `
			<li class="${project.tag.toLowerCase()}">
				<div class="header">
					<span class="icon"></span> ${project.tag}
				</div>
				<h3>${project.localTitle}</h3>
				<div class="description">${project.localDescription}</div>
				<div class="projectFooter">
					<a href="${project.github}" rel="noreferrer" target="_blank">view code</a>
				</div>
			</li>
			`
		} else {

			card = `
			<li class="${project.tag.toLowerCase()}">
				<div class="header">
					<span class="icon"></span> ${project.tag}
				</div>
				<h3>${project.publicTitle}</h3>
				<div class="description">${project.publicDescription}</div>
				<div class="projectFooter">
					<a href="${project.url}" rel="noreferrer" target="_blank">view project</a> | <a href="${project.github}" rel="noreferrer" target="_blank">view code</a>
				</div>
			</li>
			`
		}
		$('#project-list').append(card)
	})
});


// set nav functionality
$('.link').click(function(){
	let page = $(this).data('page');
	$('.active').removeClass('active')
	$(`#${page}`).addClass('active')
})

// set work filter funcitonality
function fadeInActiveTag(tag){
	let activeTag = `li.${tag}`;
	if(tag === 'all'){
		$('#project-list li').fadeIn('slow');
	} 
	else {
		console.log(activeTag)
		$(activeTag).fadeIn('slow');
	}
}

let activeFilter = 'all';
$('.filter').click(function(){
	$('.active-filter').removeClass('active-filter');
	$(this).addClass('active-filter');
	activeFilter = $(this).data('show')
	$('#project-list li').fadeOut('fast').delay(500)
	fadeInActiveTag(activeFilter)

})