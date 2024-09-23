window.addEventListener('scroll', function() {
    const profile = document.querySelector('.profile');
    if (window.scrollY > 50) {
        profile.classList.add('shrink'); // เพิ่มคลาสเมื่อเลื่อน
    } else {
        profile.classList.remove('shrink'); // ลบคลาสเมื่อกลับขึ้น
    }
});
