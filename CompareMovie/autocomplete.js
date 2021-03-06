const createAutoComplete = ({ root, renderOption }) => {
	root.innerHTML = `
  <label><b>Search for a movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

	const input = root.querySelector('input');
	const dropdown = root.querySelector('.dropdown');
	const resultsWrawpper = root.querySelector('.results');

	const onInput = async (event) => {
		const movies = await fetchData(event.target.value);

		if (!movies.length) {
			dropdown.classList.remove('is-active');
			return;
		}
		resultsWrawpper.innerHTML = '';
		dropdown.classList.add('is-active');
		for (let movie of movies) {
			const option = document.createElement('a');

			option.classList.add('dropdown-item');
			option.innerHTML = renderOption(movie);
			option.addEventListener('click', () => {
				dropdown.classList.remove('is-active');
				input.value = movie.Title;

				onMovieSelect(movie);
			});

			resultsWrawpper.appendChild(option);
		}
	};

	input.addEventListener('input', debounce(onInput, 500));

	document.addEventListener('click', (event) => {
		if (!root.contains(event.target)) {
			dropdown.classList.remove('is-active');
		}
	});
};
