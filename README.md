# HK253_DAMH_Nhom2 - Module Quản lý phòng họp

## 1. Thông tin đồ án
- Môn học: Nhập môn Công nghệ phần mềm
- Dự án: Xây dựng hệ thống đặt lịch họp cho Công ty XYZ
- Nhóm: Nhóm 2
- Phạm vi code: chỉnh theo Product Backlog từ US-10 đến US-20

## 2. Cách chạy giao diện
1. Giải nén thư mục code.
2. Mở file `index.html` bằng Chrome hoặc Microsoft Edge.
3. Hệ thống chạy trực tiếp trên trình duyệt.
4. Dữ liệu thao tác được lưu bằng `LocalStorage`.

## 3. Các file chính
- `index.html`: cấu trúc giao diện.
- `styles.css`: định dạng giao diện.
- `app.js`: xử lý chức năng bằng JavaScript và LocalStorage.
- `database.sql`: script CSDL mẫu, đã bỏ bảng tài khoản người dùng.
- `README.md`: hướng dẫn chạy dự án.

## 4. Chức năng đã chỉnh theo US-10 đến US-20
- US-10: Mời người tham gia họp khi tạo hoặc sửa lịch họp.
- US-11: Lưu thông tin cuộc họp gồm tiêu đề, phòng họp, thời gian, người tạo, người tham gia và nội dung.
- US-12: Hủy cuộc họp bằng trạng thái lịch, bắt buộc nhập lý do hủy.
- US-13: Đã bỏ khỏi giao diện vì module hiện tại làm theo hướng quản lý cuộc họp, không làm xác nhận tham gia riêng.
- US-14 đến US-17: Quản lý danh mục phòng họp, gồm thêm, sửa, xóa và xem danh sách phòng.
- US-18: Xem lịch sử sử dụng phòng họp.
- US-19: Xem lịch đặt phòng theo ngày, phòng, trạng thái và từ khóa.
- US-20: Xem thời gian trống của phòng họp theo ngày và ca làm việc.

## 5. Cơ sở dữ liệu
File `database.sql` gồm 3 bảng chính:
- `phong_hop`: lưu thông tin phòng họp, số chỗ, thiết bị và trạng thái.
- `lich_dat_phong`: lưu lịch đặt phòng, người tạo, người tham gia và trạng thái lịch.
- `lich_su_su_dung`: lưu lịch sử sử dụng phòng để thống kê.

## 6. Cập nhật bổ sung
- Bổ sung chức năng xem thông tin chi tiết cuộc họp đã sử dụng trong màn hình **Lịch sử sử dụng phòng**.
- Ở mỗi dòng lịch sử có nút **Xem chi tiết** để mở popup hiển thị: mã phòng, tên phòng, ngày sử dụng, thời gian, người tổ chức, số người, số giờ sử dụng, trạng thái lịch, người tham gia, nội dung/ghi chú và lý do hủy nếu có.
- Cập nhật bảng `lich_su_su_dung` trong `database.sql` để lưu thêm thông tin chi tiết cuộc họp đã sử dụng.

## Cập nhật mới
- Không cho tạo lịch họp có giờ bắt đầu đã qua trong ngày hiện tại. Ví dụ hiện tại đã 10:00 thì không thể tạo lịch từ 09:00 đến 10:00.
- Lịch có trạng thái Đã hoàn thành sẽ không hiển thị ở trang Lịch đặt phòng nữa, mà được đưa sang trang Lịch sử sử dụng để xem lại và xem chi tiết.
- Khi đến đúng giờ kết thúc hoặc quá giờ kết thúc, lịch đã duyệt sẽ tự chuyển sang Đã hoàn thành.

- Cập nhật: Lịch bị hủy có nút **Xóa khỏi lịch đặt**; khi xóa khỏi trang Lịch đặt phòng, thông tin vẫn được lưu lại ở Lịch sử sử dụng.
- Nút **Làm mới** dùng để xóa bộ lọc về mặc định; nút **Xem lịch** dùng để áp dụng bộ lọc hiện tại.

- Lịch sử sử dụng chỉ lưu các cuộc họp đã hoàn thành; lịch đã hủy không được đưa vào lịch sử.

- Màn hình Lịch sử sử dụng đã bổ sung thống kê **Người dùng phòng nhiều nhất**.
- Nút **Tìm kiếm** ở Lịch sử sử dụng đã lọc được theo mã/tên phòng, khoảng ngày và từ khóa.

## Cập nhật thông báo
- Bổ sung menu **Thông báo** và biểu tượng chuông ở góc trên bên phải.
- Khi có thao tác mới như tạo lịch họp, duyệt lịch, hủy lịch, xóa lịch đã hủy, thêm/sửa/xóa phòng hoặc lịch tự chuyển sang **Đã hoàn thành**, hệ thống sẽ tạo thông báo.
- Thông báo có số lượng chưa đọc, có thể bấm **Đánh dấu đã đọc** hoặc **Xóa thông báo**.


## Cập nhật trạng thái phòng họp
- Trạng thái phòng họp được chuẩn hóa thành đúng 3 giá trị: **Trống**, **Bận**, **Bảo Trì**.
- Phòng ở trạng thái **Bảo Trì** không thể tạo lịch họp mới.
- Bộ lọc, form thêm/sửa, thống kê và cơ sở dữ liệu đã được cập nhật đồng bộ.


## Cập nhật popup thông báo
- Đã bỏ mục **Thông báo** khỏi thanh menu bên trái.
- Khi bấm biểu tượng chuông ở góc trên bên phải, hệ thống mở bảng thông báo dạng popup ở giữa màn hình.
- Popup hỗ trợ đánh dấu tất cả đã đọc, xóa thông báo và đóng bằng nút ×, nút Đóng, bấm ra ngoài hoặc phím Esc.


## Cập nhật giao diện quản lý phòng họp
- Màn hình Danh sách phòng họp chỉ hiển thị bảng dữ liệu và các nút Thêm phòng, Sửa phòng, Xóa phòng.
- Người dùng chọn một dòng trong bảng rồi nhấn Sửa hoặc Xóa.
- Thêm và sửa phòng được thực hiện trong popup riêng.
- Xóa phòng dùng popup xác nhận riêng và vẫn kiểm tra lịch đặt trong tương lai.
- Đã bỏ các dòng chữ gợi ý mờ bên dưới trường nhập của form phòng họp.


## Cập nhật tìm kiếm và ngày lịch sử
- Ô tìm kiếm tại Danh sách phòng chỉ tìm theo Mã phòng.
- Bộ lọc Lịch sử sử dụng dùng ô chọn một ngày. Khi mở trang và khi nhấn Đặt lại, ngày mặc định là ngày hiện tại; người dùng có thể chọn ngày khác.


## Cập nhật lịch đặt, thời gian trống và lịch sử
- Khi lịch được duyệt, màn hình **Thời gian trống** hiển thị các khung giờ bị chiếm đúng theo ngày và phòng đã chọn.
- Timeline được mở rộng từ **07:00 đến 22:00** để các cuộc họp ngoài giờ hành chính vẫn xuất hiện.
- Lịch sử sử dụng hỗ trợ lọc theo **Từ ngày – Đến ngày**, mặc định từ ngày đầu tháng hiện tại đến ngày hôm nay.


## Cập nhật giao diện thời gian trống
- Khôi phục giao diện thời gian trống như bản cũ.
- Timeline hiển thị **07:00–08:00 là Ngoài giờ làm việc**, sau đó các khung làm việc từ **08:00–12:00** và **13:00–17:00**.
- Khôi phục bộ lọc **Cả ngày / Sáng / Chiều**.
- Chỉ cho phép tạo lịch họp trong khoảng **08:00 đến 17:00**.
- Các chỉnh sửa trước đó vẫn được giữ: lịch sử chỉ có cuộc họp đã hoàn thành, lọc lịch sử theo Từ ngày–Đến ngày và người tạo cuộc họp không còn tự điền.
