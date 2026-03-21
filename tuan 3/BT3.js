let list = [];

while(true) {
    let ten = prompt("Nhập tên: ");
    if (!ten) break;

    let vu_khi = prompt("Nhập vũ khí: ");
    let mau_sac = prompt("Nhập màu sắc: ");

    list.push(new SieuNhan(ten, vu_khi, mau_sac));
}

for (let sn of list) {
    sn.show();
}