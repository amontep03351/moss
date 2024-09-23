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
document.getElementById('closeModal').onclick = function() {
    document.getElementById('sellModal').style.display = 'none';
}
function donateWaste(event) {
    event.preventDefault();
    showLoading();
    
    // จำลองการเรียก Ajax
    setTimeout(() => {
        hideLoading();
        alert('ซื้อขยะ'); // แทนที่ด้วยการเรียก API ของคุณ
    }, 2000); // หน่วงเวลา 2 วินาที
}
