// ปิดโมเดลเมื่อคลิกนอกโมเดล
window.onclick = function(event) {
    if (event.target == document.getElementById('sellModal')) {
        document.getElementById('sellModal').style.display = 'none';
    }
}
window.addEventListener('scroll', function() {
    const profile = document.querySelector('.profile');
    if (window.scrollY > 50) {
        profile.classList.add('shrink'); // เพิ่มคลาสเมื่อเลื่อน
    } else {
        profile.classList.remove('shrink'); // ลบคลาสเมื่อกลับขึ้น
    }
});
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function sellWaste(event) {
    event.preventDefault();
    showLoading();
    
    // จำลองการเรียก Ajax
    setTimeout(() => {
        // ซ่อน loading หลังจากโหลดเสร็จ
        document.getElementById('sellModal').style.display = 'block';
        hideLoading();
         
    }, 2000); // หน่วงเวลา 2 วินาที

    
}
// ปิดโมเดลเมื่อกดปุ่มปิด
// document.getElementById('closeModal').onclick = function() {
//     document.getElementById('sellModal').style.display = 'none';
// }
function donateWaste(event) {
    event.preventDefault();
    showLoading();
    
    // จำลองการเรียก Ajax
    setTimeout(() => {
        hideLoading();
        alert('ซื้อขยะ'); // แทนที่ด้วยการเรียก API ของคุณ
    }, 2000); // หน่วงเวลา 2 วินาที
}

function closeModal(){
    document.getElementById('sellModal').style.display = 'none';
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.content-section');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically move to the next slide every 5 seconds (optional)
setInterval(() => {
    moveSlide(1);
}, 5000);
