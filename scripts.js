var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var bodyElement = document.querySelector('body');

for (var key in data) {
    var boxHtml = '';
    var classes = '';
    
    for (var i in data[key].categories) {
        classes += data[key].categories[i] + ' ';
    }
    
    boxHtml += '<div id="' + data[key].id + '" ' + 'class="' + classes + '"' +'>';
    boxHtml += '<header>' + data[key].title + '</header>';
    boxHtml += data[key].content;
    boxHtml += '</div>'
    
    bodyElement.innerHTML += boxHtml;
}

