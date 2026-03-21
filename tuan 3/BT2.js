class SieuNhan {
    constructor(ten, vu_khi, mau_sac) {
        this.ten = ten;
        this.vu_khi = vu_khi;
        this.mau_sac = mau_sac;
    }
    show() {
        console.log(`Sieu nhan ${this.ten} co ${this.vu_khi} va mau sac ${this.mau_sac}`);
    }
}

let sn1 = new SieuNhan("Iron Man", "Giáp", "Đỏ");
let sn2 = new SieuNhan("Thor", "Búa", "Xám");

sn1.show();
sn2.show();