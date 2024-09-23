document.getElementById('add-item').addEventListener('click', function() {
    const type = document.getElementById('waste-type').value;
    const weight = document.getElementById('weight').value;
    const quantity = document.getElementById('quantity').value;
    const photo = document.getElementById('photo').files[0];

    if (type && weight && quantity) {
        const itemList = document.getElementById('item-list');
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <strong>ประเภท:</strong> ${type}<br>
            <strong>น้ำหนัก:</strong> ${weight} kg<br>
            <strong>จำนวน:</strong> ${quantity} ชิ้น<br>
            ${photo ? `<strong>รูปภาพ:</strong> <img src="${URL.createObjectURL(photo)}" width="100" alt="ภาพขยะ">` : ''}
        `;
        itemList.appendChild(itemDiv);
        
        // ล้างข้อมูลในฟอร์มหลังจากเพิ่มรายการ
        document.getElementById('waste-type').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('photo').value = '';
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
});
