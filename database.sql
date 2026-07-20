CREATE DATABASE IF NOT EXISTS meeting_room_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE meeting_room_db;

DROP TABLE IF EXISTS lich_su_su_dung;
DROP TABLE IF EXISTS lich_dat_phong;
DROP TABLE IF EXISTS phong_hop;

CREATE TABLE phong_hop (
    ma_phong VARCHAR(20) PRIMARY KEY,
    ten_phong VARCHAR(100) NOT NULL,
    so_cho INT NOT NULL CHECK (so_cho > 0),
    may_chieu INT NOT NULL DEFAULT 0 CHECK (may_chieu >= 0),
    camera INT NOT NULL DEFAULT 0 CHECK (camera >= 0),
    micro INT NOT NULL DEFAULT 0 CHECK (micro >= 0),
    bang_trang INT NOT NULL DEFAULT 0 CHECK (bang_trang >= 0),
    trang_thai ENUM('Trống', 'Bảo Trì', 'Bận') NOT NULL DEFAULT 'Trống',
    ngay_tao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lich_dat_phong (
    ma_lich VARCHAR(20) PRIMARY KEY,
    ma_phong VARCHAR(20) NOT NULL,
    ngay_dat DATE NOT NULL,
    gio_bat_dau TIME NOT NULL,
    gio_ket_thuc TIME NOT NULL,
    ten_cuoc_hop VARCHAR(150) NOT NULL,
    nguoi_tao VARCHAR(100) NOT NULL,
    so_nguoi INT NOT NULL CHECK (so_nguoi > 0),
    nguoi_tham_gia TEXT NULL,
    noi_dung TEXT NULL,
    trang_thai ENUM('Chờ xác nhận', 'Đã duyệt', 'Đã hủy', 'Đã hoàn thành') NOT NULL DEFAULT 'Chờ xác nhận',
    ly_do_huy TEXT NULL,
    CONSTRAINT fk_lich_phong
        FOREIGN KEY (ma_phong) REFERENCES phong_hop(ma_phong)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT chk_thoi_gian_hop
        CHECK (gio_ket_thuc > gio_bat_dau)
);

CREATE TABLE lich_su_su_dung (
    ma_lich_su INT AUTO_INCREMENT PRIMARY KEY,
    ma_phong VARCHAR(20) NOT NULL,
    ngay_su_dung DATE NOT NULL,
    gio_bat_dau TIME NOT NULL,
    gio_ket_thuc TIME NOT NULL,
    ten_cuoc_hop VARCHAR(150) NOT NULL,
    nguoi_to_chuc VARCHAR(100) NOT NULL,
    so_nguoi INT NOT NULL CHECK (so_nguoi > 0),
    nguoi_tham_gia TEXT NULL,
    noi_dung TEXT NULL,
    trang_thai_lich ENUM('Đã hoàn thành', 'Đã hủy') NOT NULL DEFAULT 'Đã hoàn thành',
    ly_do_huy TEXT NULL,
    so_gio_su_dung DECIMAL(4,2) NOT NULL,
    CONSTRAINT fk_lichsu_phong
        FOREIGN KEY (ma_phong) REFERENCES phong_hop(ma_phong)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO phong_hop
(ma_phong, ten_phong, so_cho, may_chieu, camera, micro, bang_trang, trang_thai)
VALUES
('PH-A01', 'Phòng họp A', 20, 1, 1, 2, 1, 'Trống'),
('PH-B02', 'Phòng họp B', 12, 1, 0, 1, 1, 'Bảo Trì'),
('PH-C03', 'Phòng họp C', 30, 2, 1, 3, 1, 'Trống'),
('PH-E05', 'Phòng đào tạo E', 40, 2, 1, 4, 2, 'Trống'),
('PH-F06', 'Phòng họp F', 16, 1, 0, 2, 1, 'Bảo Trì');

INSERT INTO lich_dat_phong
(ma_lich, ma_phong, ngay_dat, gio_bat_dau, gio_ket_thuc, ten_cuoc_hop, nguoi_tao, so_nguoi, nguoi_tham_gia, noi_dung, trang_thai, ly_do_huy)
VALUES
('BK-001', 'PH-A01', '2025-05-16', '08:30:00', '10:00:00', 'Họp Ban Giám đốc', 'Nguyễn Văn An', 10, 'binh@xyz.com, cuong@xyz.com', NULL, 'Chờ xác nhận', NULL),
('BK-002', 'PH-B02', '2025-05-16', '10:30:00', '11:30:00', 'Họp phòng Kinh doanh', 'Trần Thị Bình', 8, 'an@xyz.com', NULL, 'Đã duyệt', NULL),
('BK-003', 'PH-C03', '2025-05-16', '13:30:00', '15:00:00', 'Đào tạo sản phẩm mới', 'Lê Minh Cường', 18, 'ha@xyz.com', NULL, 'Chờ xác nhận', NULL),
('BK-004', 'PH-A01', '2025-05-16', '15:30:00', '16:30:00', 'Họp dự án XYZ', 'Phạm Thu Hà', 12, 'an@xyz.com, nam@xyz.com', NULL, 'Đã duyệt', NULL),
('BK-005', 'PH-E05', '2025-05-16', '09:00:00', '10:00:00', 'Review thiết kế', 'Đỗ Hoàng Nam', 6, NULL, NULL, 'Đã hủy', 'Phòng đào tạo E cần bảo trì thiết bị.');

INSERT INTO lich_su_su_dung
(ma_phong, ngay_su_dung, gio_bat_dau, gio_ket_thuc, ten_cuoc_hop, nguoi_to_chuc, so_nguoi, nguoi_tham_gia, noi_dung, trang_thai_lich, ly_do_huy, so_gio_su_dung)
VALUES
('PH-A01', '2024-05-31', '09:00:00', '10:30:00', 'Họp kế hoạch Marketing Q2', 'Nguyễn Văn An', 12, 'marketing@xyz.com, sale@xyz.com', 'Tổng kết kế hoạch Marketing quý 2 và phân công nội dung truyền thông.', 'Đã hoàn thành', NULL, 1.50),
('PH-B02', '2024-05-31', '14:00:00', '15:30:00', 'Họp dự án ABC - Sprint 5', 'Trần Thị Bình', 8, 'dev1@xyz.com, dev2@xyz.com', 'Review tiến độ sprint 5 và các lỗi cần xử lý.', 'Đã hoàn thành', NULL, 1.50),
('PH-C03', '2024-05-30', '13:30:00', '15:00:00', 'Training sản phẩm mới', 'Phạm Thu Hà', 20, 'sales@xyz.com, support@xyz.com', 'Đào tạo tính năng sản phẩm mới cho bộ phận kinh doanh và hỗ trợ.', 'Đã hoàn thành', NULL, 1.50),
('PH-A01', '2024-05-29', '09:30:00', '11:00:00', 'Họp chiến lược quý 2', 'Nguyễn Văn An', 16, 'manager@xyz.com, lead@xyz.com', 'Trao đổi mục tiêu kinh doanh quý 2.', 'Đã hoàn thành', NULL, 1.50);

SELECT * FROM phong_hop;

SELECT ld.ma_lich, p.ten_phong, ld.ngay_dat, ld.gio_bat_dau, ld.gio_ket_thuc,
       ld.ten_cuoc_hop, ld.nguoi_tao, ld.nguoi_tham_gia, ld.trang_thai
FROM lich_dat_phong ld
JOIN phong_hop p ON ld.ma_phong = p.ma_phong
WHERE ld.ngay_dat = '2025-05-16';

SELECT ls.ma_lich_su, p.ma_phong, p.ten_phong, ls.ngay_su_dung, ls.gio_bat_dau, ls.gio_ket_thuc,
       ls.ten_cuoc_hop, ls.nguoi_to_chuc, ls.so_nguoi, ls.nguoi_tham_gia,
       ls.noi_dung, ls.trang_thai_lich, ls.ly_do_huy
FROM lich_su_su_dung ls
JOIN phong_hop p ON ls.ma_phong = p.ma_phong
ORDER BY ls.ngay_su_dung DESC;

SELECT p.ma_phong, p.ten_phong, SUM(ls.so_gio_su_dung) AS tong_gio_su_dung
FROM lich_su_su_dung ls
JOIN phong_hop p ON ls.ma_phong = p.ma_phong
GROUP BY p.ma_phong, p.ten_phong
ORDER BY tong_gio_su_dung DESC;
