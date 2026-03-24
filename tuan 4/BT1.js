class NhanVien {
    #ten;
    #heSoLuong;
    #luongCoBan;

    constructor(ten, heSoLuong, luongCoBan) {
        this.#ten = ten;
        this.#heSoLuong = heSoLuong;
        this.#luongCoBan = luongCoBan;
    }

    getTen() {
        return this.#ten;
    }

    getHeSoLuong() {
        return this.#heSoLuong;
    }

    getLuongCoBan() {
        return this.#luongCoBan;
    }

    setTen(ten) {
        this.#ten = ten;
    }

    setHeSoLuong(hsl) {
        this.#heSoLuong = hsl;
    }

    setLuongCoBan(lcb) {
        this.#luongCoBan = lcb;
    }

    tinhLuong() {
        return this.#heSoLuong * this.#luongCoBan;
    }

    tangLuong(tang) {
        this.#heSoLuong += tang;
    }

    inTT() {
        console.log("Ten:", this.#ten);
        console.log("He so luong:", this.#heSoLuong);
        console.log("Luong co ban:", this.#luongCoBan);
        console.log("Luong:", this.tinhLuong());
    }
}