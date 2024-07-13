document.addEventListener('DOMContentLoaded', function() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const hiddenDiv1 = document.getElementById('hiddenDiv1');
    const hiddenDiv2 = document.getElementById('hiddenDiv2');
    const hiddenDiv3 = document.getElementById('hiddenDiv3');
    const dots = document.querySelectorAll('.dot');

    const handleImageHover = (index, hiddenDiv) => {
        return () => {
            [hiddenDiv1, hiddenDiv2, hiddenDiv3].forEach(div => div.style.display = 'none');
            hiddenDiv.style.display = 'flex';

            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };
    };

    img1.addEventListener('mouseover', handleImageHover(0, hiddenDiv1));
    img2.addEventListener('mouseover', handleImageHover(1, hiddenDiv2));
    img3.addEventListener('mouseover', handleImageHover(2, hiddenDiv3));
});

function changeImage(imageSrc, element) {
    document.getElementById('projectImage').src = imageSrc;

    var projectItems = document.querySelectorAll('.projects .t1');
    projectItems.forEach(function(item) {
        item.classList.remove('active');
    });

    element.classList.add('active');
}

function showPopUp() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "flex") {
        popup.style.display = "none";
    } else {
        popup.style.display = "flex";
    }
}