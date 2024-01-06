
// nav bar scroll
window.onscroll = function () {
    var navbar = document.getElementById('navScroll');

    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


// text replacement
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("txtOfCareer");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); 
}

showSlides();



//download cv

document.getElementById("downloadLink").addEventListener("click", function (event) {
    // Prevent the default behavior of the anchor element
    event.preventDefault();

    var pdfPath = "./pdf/resumeNada.pdf";

    // Create a new anchor element
    var downloadLink = document.createElement("a");

    // Set the download attribute and href for the anchor element
    downloadLink.download = "document.pdf"; // The default name for the downloaded file
    downloadLink.href = pdfPath;

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the anchor element to start the download
    downloadLink.click();

    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
});