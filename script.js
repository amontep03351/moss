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

function moveSlide(direction) {
    const slides = document.querySelectorAll('.content-section');
    const totalSlides = slides.length;

    // ซ่อนสไลด์ปัจจุบัน
    slides[currentSlide].classList.remove('active');

    // คำนวณสไลด์ถัดไป
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // แสดงสไลด์ถัดไป
    slides[currentSlide].classList.add('active');

    // เปลี่ยนตำแหน่งของ carousel-inner
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

    // เพิ่มเอฟเฟกต์การเลื่อนของ overlay
    const overlay = document.querySelector('.overlay');
    overlay.style.transform = 'translateY(-10px)'; // เลื่อนขึ้นเล็กน้อย
    setTimeout(() => {
        overlay.style.transform = 'translateY(0)'; // เลื่อนกลับลง
    }, 500);
}

// ใช้ setInterval เพื่อเลื่อนอัตโนมัติ
setInterval(() => moveSlide(1), 5000); // เลื่อนทุก 5 วินาที
