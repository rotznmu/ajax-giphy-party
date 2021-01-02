console.log("Let's get this party started!");

async function getData(term) {
	const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			q: term,
			api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
		}
	});
	const imgLocation = response.data.data;
	getRanImg(imgLocation);
}

const getRanImg = function(res) {
	const ul = document.querySelector('#images');
	const newLI = document.createElement('LI');
	const resLength = res.length;
	const ranIdx = Math.floor(Math.random() * resLength);
	const newImg = document.createElement('IMG');
	newImg.src = res[ranIdx].images.original.url;
	newLI.append(newImg);
	ul.append(newLI);
};

const searchInput = document.querySelector('#formSelect');
searchInput.addEventListener('submit', function(evt) {
	evt.preventDefault();
	let searchTerm = document.querySelector('#searchInput').value;
	getData(searchTerm);
});

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', function(e) {
	e.preventDefault();
	const ul = document.querySelector('#images');
	ul.innerHTML = '';
});
