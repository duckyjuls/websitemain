function expandImage() {
    const huggingImage = document.getElementById('huggingImage');

    huggingImage.classList.add('expanded');
}

function redirectToAnotherSite() {
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 500); 
}
