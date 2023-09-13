const bagikanButton = document.getElementById('bagikanButton');

if (navigator.share) {
  bagikanButton.addEventListener('click', async () => {
    try {
      await navigator.share({
        title: 'profile',
        text: '',
        url: '',
        // files: [''],
      });
      console.log('Berbagi berhasil');
    } catch (error) {
      console.error('Gagal berbagi', error);
    }
  });
} else {
  bagikanButton.style.display = 'none'; 
}
