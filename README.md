# HK253_DAMH_Nhom2 - Coding module Quản lý phòng họp

## 1. Thông tin đồ án
- Môn học: Nhập môn Công nghệ phần mềm
- Dự án: Xây dựng hệ thống đặt lịch họp cho Công ty XYZ
- Nhóm: Nhóm 2
- Module thực hiện: Quản lý phòng họp

## 2. Cách chạy giao diện
1. Giải nén thư mục code.
2. Mở file `index.html` bằng trình duyệt Chrome hoặc Microsoft Edge.
3. Hệ thống có thể thao tác trực tiếp trên trình duyệt.
4. Dữ liệu thao tác trên giao diện đang được lưu bằng `LocalStorage`.

## 3. Cơ sở dữ liệu
Dự án có kèm file `database.sql` để mô tả cấu trúc CSDL cho module Quản lý phòng họp.

File `database.sql` gồm các bảng:
- `phong_hop`: lưu thông tin phòng họp, số chỗ, thiết bị và trạng thái.
- `lich_dat_phong`: lưu lịch đặt phòng, thời gian, người đặt và trạng thái lịch.
- `lich_su_su_dung`: lưu lịch sử sử dụng phòng để thống kê.

Cách dùng file CSDL:
1. Mở MySQL Workbench, phpMyAdmin hoặc công cụ quản trị CSDL khác.
2. Import hoặc chạy file `database.sql`.
3. CSDL mẫu `meeting_room_db` sẽ được tạo cùng dữ liệu mẫu.

Lưu ý: Phiên bản giao diện hiện tại dùng `LocalStorage` để chạy trực tiếp trên trình duyệt. File `database.sql` được cung cấp để thể hiện cấu trúc CSDL đề xuất cho hệ thống khi triển khai backend.

## 4. Các file chính
- `index.html`: cấu trúc giao diện.
- `styles.css`: định dạng giao diện.
- `app.js`: xử lý chức năng và lưu dữ liệu bằng LocalStorage.
- `database.sql`: script tạo CSDL mẫu.
- `README.md`: hướng dẫn chạy dự án.

## 5. Chức năng đã thực hiện
- Quản lý danh mục phòng họp: thêm, sửa, xóa, xem danh sách phòng.
- Lọc phòng họp theo mã phòng, tên phòng và trạng thái.
- Quản lý thiết bị phòng họp bằng số lượng: máy chiếu, camera, micro, bảng trắng.
- Xem lịch đặt phòng theo phòng, ngày, trạng thái và từ khóa.
- Duyệt hoặc hủy lịch đang ở trạng thái Chờ xác nhận.
- Khi hủy lịch, bắt buộc nhập lý do hủy.
- Xem lịch sử sử dụng phòng.
- Xem thời gian trống của phòng theo ngày và ca làm việc.
- Tạo lịch họp mới và kiểm tra trùng lịch.

## 6. Gợi ý đưa lên Github
Upload toàn bộ các file sau lên Github:
- `index.html`
- `styles.css`
- `app.js`
- `database.sql`
- `README.md`

Sau khi upload, copy link repository Github và dán vào file HDSD:
`HK253_DAMH_Nhom2_C4-1_HDSD.docx`
