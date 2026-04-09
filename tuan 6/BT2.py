from abc import ABC, abstractmethod

class TuoiKhongHopLe(Exception):
    pass

class BacKhongHopLe(Exception):
    pass

class CanBo(ABC):
    def __init__(self, ten, tuoi, gioi_tinh, dia_chi):
        self.ten = ten
        self.tuoi = tuoi
        self.gioi_tinh = gioi_tinh
        self.dia_chi = dia_chi

    @property
    def tuoi(self):
        return self._tuoi

    @tuoi.setter
    def tuoi(self, value):
        if value < 18 or value > 65:
            raise TuoiKhongHopLe("Tuổi phải từ 18 đến 65")
        self._tuoi = value

    @abstractmethod
    def mo_ta(self):
        pass

    def __str__(self):
        return f"{self.ten} | {self.tuoi} tuổi | {self.gioi_tinh} | {self.dia_chi}"

    def __repr__(self):
        return f"CanBo(ten={self.ten}, tuoi={self.tuoi})"

    def __eq__(self, other):
        return self.ten == other.ten and self.tuoi == other.tuoi

    def __lt__(self, other):
        return self.ten < other.ten


# Lớp Công nhân 
class CongNhan(CanBo):
    def __init__(self, ten, tuoi, gioi_tinh, dia_chi, bac):
        super().__init__(ten, tuoi, gioi_tinh, dia_chi)
        self.bac = bac

    @property
    def bac(self):
        return self._bac

    @bac.setter
    def bac(self, value):
        if value < 1 or value > 10:
            raise BacKhongHopLe("Bậc phải từ 1 đến 10")
        self._bac = value

    def mo_ta(self):
        return f"{self} | Công nhân bậc {self.bac}"


# Lớp Kỹ sư 
class KySu(CanBo):
    def __init__(self, ten, tuoi, gioi_tinh, dia_chi, nganh):
        super().__init__(ten, tuoi, gioi_tinh, dia_chi)
        self.nganh = nganh

    def mo_ta(self):
        return f"{self} | Kỹ sư ngành {self.nganh}"


# Lớp Nhân viên 
class NhanVien(CanBo):
    def __init__(self, ten, tuoi, gioi_tinh, dia_chi, cong_viec):
        super().__init__(ten, tuoi, gioi_tinh, dia_chi)
        self.cong_viec = cong_viec

    def mo_ta(self):
        return f"{self} | Nhân viên: {self.cong_viec}"

class QLCB:
    def __init__(self):
        self.danh_sach = []

    def them(self, canbo):
        self.danh_sach.append(canbo)

    def hien_thi(self):
        for cb in self.danh_sach:
            print(cb.mo_ta())

    def tim_kiem(self, ten):
        for cb in self.danh_sach:
            if cb.ten == ten:
                print(cb.mo_ta())

    def sap_xep(self):
        self.danh_sach.sort()

    def luu_file(self, filename):
        with open(filename, "w", encoding="utf-8") as f:
            for cb in self.danh_sach:
                f.write(cb.mo_ta() + "\n")

    def doc_file(self, filename):
        with open(filename, "r", encoding="utf-8") as f:
            for line in f:
                print(line.strip())

ql = QLCB()

ql.them(CongNhan("Nam", 30, "Nam", "Hà Nội", 5))
ql.them(KySu("Lan", 28, "Nữ", "TPHCM", "CNTT"))
ql.them(NhanVien("Minh", 35, "Nam", "Đà Nẵng", "Kế toán"))

print("=== Danh sách ===")
ql.hien_thi()

print("\n=== Sắp xếp ===")
ql.sap_xep()
ql.hien_thi()

print("\n=== Tìm kiếm ===")
ql.tim_kiem("Lan")

print("\n=== Lưu file ===")
ql.luu_file("canbo.txt")

print("\n=== Đọc file ===")
ql.doc_file("canbo.txt")