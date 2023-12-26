function expandImage() {
    const huggingImage = document.getElementById('huggingImage');

    huggingImage.classList.add('expanded');
}

function redirectToAnotherSite() {
    setTimeout(() => {
        window.location.href = 'https://duckyjuls.github.io/website-drawings/';
    }, 500); 
}
