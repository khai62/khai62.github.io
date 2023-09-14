function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchText = searchInput.value.toLowerCase();
  const imageContainer = document.getElementById('imageContainer');
  const links = imageContainer.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    const img = links[i].querySelector('img');
    if (img) {
      const altText = img.getAttribute('alt').toLowerCase();
      if (altText.includes(searchText)) {
        links[i].style.display = 'block'; 
      } else {
        links[i].style.display = 'none';
      }
    }
  }
}


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', handleSearch);

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);
