class NhanVien {
    constructor(ten, luongCoBan, heSoLuong) {
        this.ten = ten;
        this.luongCoBan = luongCoBan;
        this.heSoLuong = heSoLuong;
    }

    tinhLuong() {
        return this.luongCoBan * this.heSoLuong;
    }

    inTT() {
        console.log(`${this.ten} - Lương: ${this.tinhLuong()}`);
    }

    tangLuong(delta) {
        const LUONG_MAX = 50000000;
        if (this.tinhLuong() + delta <= LUONG_MAX) {
            this.luongCoBan += delta / this.heSoLuong;
        }
    }
}