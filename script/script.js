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
	$('#project-list li').fadeOut('fast').delay(300)
	fadeInActiveTag(activeFilter)
})

// set coding history (about page)
function setCodingHistory(){

	// To set two dates to two variables
	let startDate = new Date("10/15/2009");
	let today = new Date();

	// To calculate the time difference of two dates
	let differenceInTime = today.getTime() - startDate.getTime();

	// To calculate the no. of days between two dates
	let numberOfDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

	let years = Math.floor(numberOfDays / 365);
	let months = Math.floor(numberOfDays % 365 / 30);
	let days = Math.floor(numberOfDays % 365 % 30);

	let yearsDisplay = years > 0 ? years + (years === 1 ? " year, " : " years, ") : "";
	let monthsDisplay = months > 0 ? months + (months === 1 ? " month, " : " months, ") : "";
	let daysDisplay = days > 0 ? days + (days === 1 ? " day" : " days") : "";
	let amountOfTime = `${yearsDisplay} ${monthsDisplay} and  ${daysDisplay}`; 
	$('#coding-history').html(amountOfTime)
}

function fadeInText(){
  setTimeout(function () {
		$('.hidden-text').addClass('bringIn')
  }, 4000);
}
function animateHomePage(){
	$('#hi').addClass('bringIn')
  setTimeout(function () {
		$('video').addClass('bringIn')
  }, 3000);
  fadeInText()
}
setCodingHistory();
animateHomePage();