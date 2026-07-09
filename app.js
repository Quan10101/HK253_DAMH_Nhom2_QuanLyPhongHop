const STORAGE_KEY = "meeting-room-ui-nhom2-us10-us20-v2";
const BOOKING_STATUSES = ["Chờ xác nhận", "Đã duyệt", "Đã hủy", "Đã hoàn thành"];

const sampleData = {
    rooms: [
        { code: "PH-A01", name: "Phòng họp A", capacity: 20, status: "Hoạt động", devices: { projector: 1, camera: 1, micro: 2, board: 1 } },
        { code: "PH-B02", name: "Phòng họp B", capacity: 12, status: "Bảo trì", devices: { projector: 1, camera: 0, micro: 1, board: 1 } },
        { code: "PH-C03", name: "Phòng họp C", capacity: 30, status: "Hoạt động", devices: { projector: 2, camera: 1, micro: 3, board: 1 } },
        { code: "PH-E05", name: "Phòng đào tạo E", capacity: 40, status: "Hoạt động", devices: { projector: 2, camera: 1, micro: 4, board: 2 } },
        { code: "PH-F06", name: "Phòng họp F", capacity: 16, status: "Bảo trì", devices: { projector: 1, camera: 0, micro: 2, board: 1 } }
    ],
    bookings: [
        { id: "BK-001", roomCode: "PH-A01", roomName: "Phòng họp A", date: "2025-05-16", start: "08:30", end: "10:00", title: "Họp Ban Giám đốc", owner: "Nguyễn Văn An", people: 10, participants: "binh@xyz.com, cuong@xyz.com", note: "", status: "Chờ xác nhận" },
        { id: "BK-002", roomCode: "PH-B02", roomName: "Phòng họp B", date: "2025-05-16", start: "10:30", end: "11:30", title: "Họp phòng Kinh doanh", owner: "Trần Thị Bình", people: 8, participants: "an@xyz.com", note: "", status: "Đã duyệt" },
        { id: "BK-003", roomCode: "PH-C03", roomName: "Phòng họp C", date: "2025-05-16", start: "13:30", end: "15:00", title: "Đào tạo sản phẩm mới", owner: "Lê Minh Cường", people: 18, participants: "ha@xyz.com", note: "", status: "Chờ xác nhận" },
        { id: "BK-004", roomCode: "PH-A01", roomName: "Phòng họp A", date: "2025-05-16", start: "15:30", end: "16:30", title: "Họp dự án XYZ", owner: "Phạm Thu Hà", people: 12, participants: "an@xyz.com, nam@xyz.com", note: "", status: "Đã duyệt" },
        { id: "BK-005", roomCode: "PH-E05", roomName: "Phòng đào tạo E", date: "2025-05-16", start: "09:00", end: "10:00", title: "Review thiết kế", owner: "Đỗ Hoàng Nam", people: 6, participants: "", note: "", status: "Đã hủy", cancelReason: "Phòng đào tạo E cần bảo trì thiết bị." },
        { id: "BK-006", roomCode: "PH-A01", roomName: "Phòng họp A", date: "2025-05-23", start: "09:00", end: "10:30", title: "Họp phòng Kinh doanh", owner: "Nguyễn Văn Nam", people: 9, participants: "binh@xyz.com", note: "", status: "Đã duyệt" },
        { id: "BK-007", roomCode: "PH-A01", roomName: "Phòng họp A", date: "2025-05-23", start: "11:30", end: "13:30", title: "Họp Ban Giám đốc", owner: "Trần Thị Mai", people: 14, participants: "an@xyz.com, ha@xyz.com", note: "", status: "Đã duyệt" },
        { id: "BK-008", roomCode: "PH-A01", roomName: "Phòng họp A", date: "2025-05-23", start: "14:00", end: "15:30", title: "Họp dự án XYZ", owner: "Lê Hoàng Anh", people: 11, participants: "nam@xyz.com", note: "", status: "Đã duyệt" }
    ],
    history: [
        { roomCode: "PH-A01", roomName: "Phòng họp A", date: "2024-05-31", start: "09:00", end: "10:30", time: "09:00 - 10:30", title: "Họp kế hoạch Marketing Q2", organizer: "Nguyễn Văn An", people: 12, participants: "marketing@xyz.com, sale@xyz.com", note: "Tổng kết kế hoạch Marketing quý 2 và phân công nội dung truyền thông.", status: "Đã hoàn thành", hours: 1.5 },
        { roomCode: "PH-B02", roomName: "Phòng họp B", date: "2024-05-31", start: "14:00", end: "15:30", time: "14:00 - 15:30", title: "Họp dự án ABC - Sprint 5", organizer: "Trần Thị Bình", people: 8, participants: "dev1@xyz.com, dev2@xyz.com", note: "Review tiến độ sprint 5 và các lỗi cần xử lý.", status: "Đã hoàn thành", hours: 1.5 },
        { roomCode: "PH-C03", roomName: "Phòng họp C", date: "2024-05-30", start: "13:30", end: "15:00", time: "13:30 - 15:00", title: "Training sản phẩm mới", organizer: "Phạm Thu Hà", people: 20, participants: "sales@xyz.com, support@xyz.com", note: "Đào tạo tính năng sản phẩm mới cho bộ phận kinh doanh và hỗ trợ.", status: "Đã hoàn thành", hours: 1.5 },
        { roomCode: "PH-A01", roomName: "Phòng họp A", date: "2024-05-29", start: "09:30", end: "11:00", time: "09:30 - 11:00", title: "Họp chiến lược quý 2", organizer: "Nguyễn Văn An", people: 16, participants: "manager@xyz.com, lead@xyz.com", note: "Trao đổi mục tiêu kinh doanh quý 2.", status: "Đã hoàn thành", hours: 1.5 },
        { roomCode: "PH-D04", roomName: "Phòng họp D", date: "2024-05-28", start: "09:00", end: "10:00", time: "09:00 - 10:00", title: "Phỏng vấn ứng viên", organizer: "Huỳnh Đức Long", people: 3, participants: "hr@xyz.com", note: "Phỏng vấn vị trí thực tập sinh phát triển phần mềm.", status: "Đã hoàn thành", hours: 1 }
    ]
};

let state = loadState();
let editingRoomCode = null;
let editingBookingId = null;
let pendingCancelBookingId = null;
let currentHistoryDetailItems = [];

function $(id) {
    return document.getElementById(id);
}

function today() {
    return new Date().toISOString().slice(0, 10);
}

function currentTimeText() {
    const now = new Date();
    return String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
}

function loadState() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return normalizeState(structuredClone(sampleData));
    try {
        const parsed = JSON.parse(stored);
        return normalizeState({
            rooms: parsed.rooms || structuredClone(sampleData.rooms),
            bookings: parsed.bookings || structuredClone(sampleData.bookings),
            history: parsed.history || structuredClone(sampleData.history)
        });
    } catch (error) {
        return normalizeState(structuredClone(sampleData));
    }
}

function normalizeState(raw) {
    const rooms = (raw.rooms || structuredClone(sampleData.rooms)).map((room) => ({
        code: room.code || room.id,
        name: room.name,
        capacity: Number(room.capacity || 1),
        status: room.status === "Ngưng sử dụng" ? "Bảo trì" : (room.status || "Hoạt động"),
        devices: typeof room.devices === "string"
            ? { projector: room.devices.includes("Máy chiếu") ? 1 : 0, camera: room.devices.includes("Camera") || room.devices.includes("Webcam") ? 1 : 0, micro: room.devices.includes("Micro") ? 1 : 0, board: room.devices.includes("Bảng") ? 1 : 0 }
            : { projector: Number(room.devices?.projector || 0), camera: Number(room.devices?.camera || 0), micro: Number(room.devices?.micro || 0), board: Number(room.devices?.board || 0) }
    }));

    const bookings = (raw.bookings || structuredClone(sampleData.bookings)).map((booking, index) => {
        const roomCode = booking.roomCode || booking.roomId || rooms[0]?.code || "";
        const room = rooms.find((item) => item.code === roomCode) || rooms[0] || { name: "Không rõ" };
        const status = booking.status === "Chờ duyệt" ? "Chờ xác nhận" : (booking.status || "Chờ xác nhận");
        return {
            id: booking.id || `BK-${String(index + 1).padStart(3, "0")}`,
            roomCode,
            roomName: booking.roomName || room.name,
            date: booking.date || today(),
            start: booking.start || "09:00",
            end: booking.end || "10:00",
            title: booking.title || "Cuộc họp mới",
            owner: booking.owner || "Nguyễn Văn An",
            people: Number(booking.people || 1),
            participants: booking.participants || "",
            note: booking.note || "",
            cancelReason: booking.cancelReason || "",
            status: BOOKING_STATUSES.includes(status) ? status : "Chờ xác nhận"
        };
    });

    const history = (raw.history || structuredClone(sampleData.history)).map(normalizeHistoryItem);

    return {
        rooms,
        bookings,
        history
    };
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatDate(dateText) {
    const [year, month, day] = String(dateText || "").split("-");
    if (!year || !month || !day) return dateText || "";
    return `${day}/${month}/${year}`;
}

function normalize(text) {
    return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function statusClass(status) {
    if (["Hoạt động", "Trống", "Đã hoàn thành", "Đồng ý"].includes(status)) return "green";
    if (["Bảo trì", "Chờ xác nhận", "Chưa phản hồi"].includes(status)) return "yellow";
    if (["Đã duyệt"].includes(status)) return "blue";
    if (["Đã hủy"].includes(status)) return "red";
    return "gray";
}

function deviceText(devices) {
    return `Máy chiếu: ${devices.projector}, Camera: ${devices.camera}, Micro: ${devices.micro}, Bảng trắng: ${devices.board}`;
}

function deviceTags(devices) {
    const tags = [];
    if (devices.projector > 0) tags.push("Máy chiếu");
    if (devices.camera > 0) tags.push("Camera");
    if (devices.micro > 0) tags.push("Micro");
    if (devices.board > 0) tags.push("Bảng trắng");
    return tags;
}


function renderBookingStatus(booking) {
    if (booking.status === "Chờ xác nhận" || booking.status === "Đã duyệt") {
        const approveBtn = booking.status === "Chờ xác nhận"
            ? `<button type="button" data-booking-action="approve" data-booking-id="${booking.id}">Duyệt</button>`
            : "";
        return `
            <div class="status-dropdown" data-booking-id="${booking.id}">
                <button class="badge badge-button ${statusClass(booking.status)}" type="button" data-status-toggle="${booking.id}">
                    ${booking.status} <span class="chevron">▾</span>
                </button>
                <div class="status-menu">
                    ${approveBtn}
                    <button type="button" data-booking-action="cancel" data-booking-id="${booking.id}">Hủy</button>
                </div>
            </div>
        `;
    }

    if (booking.status === "Đã hủy") {
        const reason = booking.cancelReason ? `<small class="cancel-reason">Lý do: ${escapeHtml(booking.cancelReason)}</small>` : "";
        return `
            <div class="status-cell">
                <span class="badge red">Đã hủy</span>
                ${reason}
                <button class="delete-canceled-booking" type="button" data-booking-action="delete-canceled" data-booking-id="${booking.id}">Xóa khỏi lịch đặt</button>
            </div>
        `;
    }

    return `<span class="badge ${statusClass(booking.status)}">${booking.status}</span>`;
}

function setupNavigation() {
    document.querySelectorAll(".nav-item").forEach((button) => {
        button.addEventListener("click", () => activatePage(button.dataset.page));
    });
}

function activatePage(pageId) {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === pageId));
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    $(pageId).classList.add("active");
    renderAll();
}

function renderStats() {
    $("totalRooms").textContent = state.rooms.length;
    $("activeRooms").textContent = state.rooms.filter((room) => room.status === "Hoạt động").length;
    $("maintainRooms").textContent = state.rooms.filter((room) => room.status === "Bảo trì").length;
}

function renderRooms() {
    const keyword = normalize($("roomSearch").value);
    const status = $("roomStatusFilter").value;

    const rooms = state.rooms.filter((room) => {
        const matchKeyword = normalize(`${room.code} ${room.name}`).includes(keyword);
        const matchStatus = status === "all" || room.status === status;
        return matchKeyword && matchStatus;
    });

    const tbody = $("roomsTable");
    if (!rooms.length) {
        tbody.innerHTML = `<tr><td colspan="5" class="empty">Không tìm thấy phòng họp phù hợp.</td></tr>`;
        return;
    }

    tbody.innerHTML = rooms.map((room) => `
        <tr class="clickable" data-code="${room.code}">
            <td>${room.code}</td>
            <td>${room.name}</td>
            <td>${room.capacity}</td>
            <td><div class="device-text">${deviceText(room.devices)}</div></td>
            <td><span class="badge ${statusClass(room.status)}">${room.status}</span></td>
        </tr>
    `).join("");

    tbody.querySelectorAll("tr[data-code]").forEach((row) => {
        row.addEventListener("click", () => fillRoomForm(row.dataset.code));
    });
}

function resetRoomForm() {
    editingRoomCode = null;
    $("roomCode").disabled = false;
    $("roomCode").value = "";
    $("roomName").value = "";
    $("roomCapacity").value = 20;
    $("roomStatus").value = "Hoạt động";
    $("projector").value = 1;
    $("camera").value = 1;
    $("micro").value = 2;
    $("board").value = 1;
    setRoomMessage("Đang ở chế độ thêm mới. Nhập thông tin rồi bấm Lưu phòng.");
}

function fillRoomForm(code) {
    const room = state.rooms.find((item) => item.code === code);
    if (!room) return;

    editingRoomCode = room.code;
    $("roomCode").disabled = true;
    $("roomCode").value = room.code;
    $("roomName").value = room.name;
    $("roomCapacity").value = room.capacity;
    $("roomStatus").value = room.status;
    $("projector").value = room.devices.projector;
    $("camera").value = room.devices.camera;
    $("micro").value = room.devices.micro;
    $("board").value = room.devices.board;
    setRoomMessage(`Đang chỉnh sửa ${room.code} - ${room.name}.`, "success");
}

function setRoomMessage(text, type = "") {
    const message = $("roomMessage");
    message.className = "message";
    if (type) message.classList.add(type);
    message.textContent = text;
}

function saveRoom(event) {
    event.preventDefault();

    const code = $("roomCode").value.trim().toUpperCase();
    const name = $("roomName").value.trim();
    const capacity = Number($("roomCapacity").value);
    const status = $("roomStatus").value;
    const devices = {
        projector: Number($("projector").value),
        camera: Number($("camera").value),
        micro: Number($("micro").value),
        board: Number($("board").value)
    };

    if (!code || !name || !capacity || capacity <= 0) {
        setRoomMessage("Vui lòng nhập mã phòng, tên phòng và số chỗ hợp lệ.", "error");
        return;
    }

    if (Object.values(devices).some((value) => value < 0 || Number.isNaN(value))) {
        setRoomMessage("Số lượng thiết bị phải lớn hơn hoặc bằng 0.", "error");
        return;
    }

    const existed = state.rooms.some((room) => room.code === code);
    if (!editingRoomCode && existed) {
        setRoomMessage("Mã phòng đã tồn tại, vui lòng nhập mã khác.", "error");
        return;
    }

    if (editingRoomCode) {
        state.rooms = state.rooms.map((room) => room.code === editingRoomCode ? { code, name, capacity, status, devices } : room);
        state.bookings = state.bookings.map((booking) => booking.roomCode === editingRoomCode ? { ...booking, roomName: name } : booking);
        state.history = state.history.map((history) => history.roomCode === editingRoomCode ? { ...history, roomName: name } : history);
        setRoomMessage("Đã cập nhật thông tin phòng họp.", "success");
    } else {
        state.rooms.push({ code, name, capacity, status, devices });
        setRoomMessage("Đã thêm phòng họp mới.", "success");
    }

    saveState();
    refreshSelects();
    renderAll();
}

function deleteRoom() {
    const code = $("roomCode").value.trim().toUpperCase();
    if (!code) {
        setRoomMessage("Vui lòng chọn phòng cần xóa.", "error");
        return;
    }

    const room = state.rooms.find((item) => item.code === code);
    if (!room) {
        setRoomMessage("Không tìm thấy phòng cần xóa.", "error");
        return;
    }

    const futureBookings = state.bookings.filter((booking) =>
        booking.roomCode === code &&
        booking.status !== "Đã hủy" &&
        booking.status !== "Đã hoàn thành" &&
        booking.date >= today()
    );

    if (futureBookings.length) {
        setRoomMessage("Phòng đang có lịch đặt trong tương lai nên không thể xóa. Hãy hủy hoặc đổi phòng cho các lịch đó trước.", "error");
        return;
    }

    if (!confirm(`Bạn có chắc muốn xóa ${room.code} - ${room.name}?`)) return;

    state.rooms = state.rooms.filter((item) => item.code !== code);
    state.bookings = state.bookings.filter((booking) => booking.roomCode !== code);
    resetRoomForm();
    setRoomMessage("Đã xóa phòng họp khỏi danh sách.", "success");

    saveState();
    refreshSelects();
    renderAll();
}

function refreshSelects() {
    const optionAll = `<option value="all">Tất cả phòng</option>`;
    const roomOptions = state.rooms.map((room) => `<option value="${room.code}">${room.name} (${room.code})</option>`).join("");
    $("bookingRoomFilter").innerHTML = optionAll + roomOptions;
    $("freeRoomSelect").innerHTML = roomOptions;
    if ($("meetingRoom")) $("meetingRoom").innerHTML = roomOptions;
}

function renderBookings() {
    const room = $("bookingRoomFilter").value;
    const date = $("bookingDateFilter").value;
    const status = $("bookingStatusFilter").value;
    const keyword = normalize($("bookingSearch").value);

    const result = state.bookings.filter((booking) => {
        const matchRoom = room === "all" || booking.roomCode === room;
        const matchDate = !date || booking.date === date;
        const matchStatus = status === "all" || booking.status === status;
        const matchKeyword = normalize(`${booking.title} ${booking.owner} ${booking.participants} ${booking.roomName} ${booking.roomCode}`).includes(keyword);
        const notCompleted = booking.status !== "Đã hoàn thành";
        return matchRoom && matchDate && matchStatus && matchKeyword && notCompleted;
    });

    const tbody = $("bookingTable");
    if (!result.length) {
        tbody.innerHTML = `<tr><td colspan="9" class="empty">Không có lịch đặt phòng phù hợp.</td></tr>`;
        return;
    }

    tbody.innerHTML = result.map((booking) => `
        <tr>
            <td>${booking.roomCode}</td>
            <td>${booking.roomName}</td>
            <td>${formatDate(booking.date)}</td>
            <td>${booking.start}</td>
            <td>${booking.end}</td>
            <td>${escapeHtml(booking.title)}</td>
            <td>${escapeHtml(booking.owner)}</td>
            <td class="participants-cell">${escapeHtml(booking.participants || "Chưa mời")}</td>
            <td>${renderBookingStatus(booking)}</td>
        </tr>
    `).join("");

    tbody.querySelectorAll("[data-status-toggle]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            const dropdown = button.closest(".status-dropdown");
            document.querySelectorAll(".status-dropdown.open").forEach((item) => {
                if (item !== dropdown) item.classList.remove("open");
            });
            dropdown.classList.toggle("open");
        });
    });

    tbody.querySelectorAll("[data-booking-action]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            handleBookingAction(button.dataset.bookingId, button.dataset.bookingAction);
        });
    });

}


function handleBookingAction(id, action) {
    const booking = state.bookings.find((item) => item.id === id);
    if (!booking) return;

    if (action === "delete-canceled") {
        deleteCanceledBooking(id);
        return;
    }

    if (booking.status !== "Chờ xác nhận" && booking.status !== "Đã duyệt") {
        alert("Chỉ lịch đang Chờ xác nhận hoặc Đã duyệt mới được thao tác.");
        return;
    }

    if (action === "approve") {
        booking.status = "Đã duyệt";
        booking.cancelReason = "";
        saveState();
        renderBookings();
        renderHistory();
        renderFreeTime();
        return;
    }

    if (action === "cancel") openCancelReasonModal(id);
}

function openCancelReasonModal(id) {
    const booking = state.bookings.find((item) => item.id === id);
    if (!booking) return;
    if (booking.status === "Đã hủy" || booking.status === "Đã hoàn thành") {
        alert("Lịch đã hủy hoặc đã hoàn thành không thể hủy tiếp.");
        return;
    }

    pendingCancelBookingId = id;
    const detail = `${booking.title} - ${booking.roomName} (${formatDate(booking.date)} ${booking.start} - ${booking.end})`;
    $("cancelBookingDetail").textContent = detail;
    $("cancelReasonInput").value = booking.cancelReason || "";
    setCancelReasonMessage("Nhập lý do để người đặt biết vì sao lịch bị hủy.");
    $("cancelReasonModal").classList.add("show");
    $("cancelReasonModal").setAttribute("aria-hidden", "false");
    setTimeout(() => $("cancelReasonInput").focus(), 50);
}

function closeCancelReasonModal() {
    pendingCancelBookingId = null;
    $("cancelReasonModal").classList.remove("show");
    $("cancelReasonModal").setAttribute("aria-hidden", "true");
}

function setCancelReasonMessage(text, type = "") {
    const message = $("cancelReasonMessage");
    message.textContent = text;
    message.className = `message full modal-message ${type}`.trim();
}

function submitCancelReason(event) {
    event.preventDefault();
    const reason = $("cancelReasonInput").value.trim();

    if (!reason) {
        setCancelReasonMessage("Bạn phải nhập lý do hủy lịch đặt phòng.", "error");
        return;
    }

    const booking = state.bookings.find((item) => item.id === pendingCancelBookingId);
    if (!booking) {
        setCancelReasonMessage("Không tìm thấy lịch đặt cần hủy.", "error");
        return;
    }

    booking.status = "Đã hủy";
    booking.cancelReason = reason;

    saveState();
    closeCancelReasonModal();
    renderBookings();
    renderHistory();
    renderFreeTime();
}

function deleteCanceledBooking(id) {
    const booking = state.bookings.find((item) => item.id === id);
    if (!booking) return;

    if (booking.status !== "Đã hủy") {
        alert("Chỉ lịch đã hủy mới được xóa khỏi trang lịch đặt phòng.");
        return;
    }

    const agree = confirm("Xóa lịch đã hủy khỏi trang Lịch đặt phòng? Lịch đã hủy sẽ không đưa vào Lịch sử sử dụng.");
    if (!agree) return;

    const timeText = `${booking.start} - ${booking.end}`;
    state.bookings = state.bookings.filter((item) => item.id !== id);
    state.history = state.history.filter((item) => !(
        item.status === "Đã hủy" &&
        item.roomCode === booking.roomCode &&
        item.date === booking.date &&
        item.time === timeText &&
        item.title === booking.title
    ));
    saveState();
    renderBookings();
    renderHistory();
    renderFreeTime();
}

function minutesFromTime(timeText) {
    const [hour, minute] = String(timeText).split(":").map(Number);
    return hour * 60 + minute;
}

function isOverlap(startA, endA, startB, endB) {
    return minutesFromTime(startA) < minutesFromTime(endB) && minutesFromTime(startB) < minutesFromTime(endA);
}

function getActiveBookings(roomCode, date) {
    return state.bookings.filter((booking) =>
        booking.roomCode === roomCode &&
        booking.date === date &&
        booking.status !== "Đã hủy" &&
        booking.status !== "Đã hoàn thành"
    );
}

function bookingHours(booking) {
    return (minutesFromTime(booking.end) - minutesFromTime(booking.start)) / 60;
}

function splitHistoryTime(timeText) {
    const [start = "", end = ""] = String(timeText || "").split(" - ");
    return { start: start.trim(), end: end.trim() };
}

function normalizeHistoryItem(item, index = 0) {
    const timeParts = splitHistoryTime(item.time);
    const start = item.start || timeParts.start || "09:00";
    const end = item.end || timeParts.end || "10:00";
    return {
        id: item.id || item.historyId || `HS-${String(index + 1).padStart(3, "0")}`,
        roomCode: item.roomCode || item.roomId || "",
        roomName: item.roomName || "Không rõ",
        date: item.date || today(),
        start,
        end,
        time: item.time || `${start} - ${end}`,
        title: item.title || "Cuộc họp đã sử dụng",
        organizer: item.organizer || item.owner || "Không rõ",
        people: Number(item.people || 1),
        participants: item.participants || "",
        note: item.note || "",
        status: item.status || "Đã hoàn thành",
        cancelReason: item.cancelReason || "",
        hours: Number(item.hours || durationHours(start, end) || 0)
    };
}

function durationHours(start, end) {
    return (minutesFromTime(end) - minutesFromTime(start)) / 60;
}

function bookingToHistoryItem(booking) {
    return {
        id: booking.id,
        roomCode: booking.roomCode,
        roomName: booking.roomName,
        date: booking.date,
        start: booking.start,
        end: booking.end,
        time: `${booking.start} - ${booking.end}`,
        title: booking.title,
        organizer: booking.owner,
        people: booking.people || 1,
        participants: booking.participants || "",
        note: booking.note || "",
        hours: bookingHours(booking),
        status: booking.status,
        cancelReason: booking.cancelReason || ""
    };
}

function renderHistory() {
    const roomKeyword = normalize($("historyRoomSearch").value);
    const keyword = normalize($("historySearch").value);

    const completedBookings = state.bookings
        .filter((booking) => booking.status === "Đã hoàn thành")
        .map(bookingToHistoryItem);

    const allHistory = [...state.history, ...completedBookings]
        .filter((item) => item.status !== "Đã hủy");

    const result = allHistory.filter((item) => {
        const matchRoom = normalize(`${item.roomCode} ${item.roomName}`).includes(roomKeyword);
        const matchKeyword = normalize(`${item.title} ${item.organizer} ${item.cancelReason || ""}`).includes(keyword);
        return matchRoom && matchKeyword;
    });

    const totalHours = result.reduce((sum, item) => sum + Number(item.hours || 0), 0);
    const roomCount = result.reduce((map, item) => {
        map[item.roomCode] = (map[item.roomCode] || 0) + 1;
        return map;
    }, {});

    let topCode = result[0]?.roomCode || "PH-A01";
    let topCount = 0;
    Object.entries(roomCount).forEach(([code, count]) => {
        if (count > topCount) {
            topCode = code;
            topCount = count;
        }
    });

    const topRoom = state.rooms.find((room) => room.code === topCode) || { code: topCode, name: "Phòng họp A" };

    $("historyTotal").textContent = result.length;
    $("historyTopRoom").textContent = `${topRoom.code} - ${topRoom.name}`;
    $("historyTopCount").textContent = `${topCount} lượt sử dụng`;
    $("historyHours").textContent = `${totalHours.toFixed(totalHours % 1 === 0 ? 0 : 1)} giờ`;

    const tbody = $("historyTable");
    if (!result.length) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty">Không có lịch sử sử dụng phù hợp.</td></tr>`;
        $("historyResultText").textContent = "Hiển thị 0 đến 0 của 0 kết quả";
        return;
    }

    currentHistoryDetailItems = result;

    tbody.innerHTML = result.map((item, index) => `
        <tr>
            <td>${item.roomCode}</td>
            <td>${item.roomName}</td>
            <td>${formatDate(item.date)}</td>
            <td>${item.time}</td>
            <td>${escapeHtml(item.title)}</td>
            <td>${escapeHtml(item.organizer)}</td>
            <td>${item.people}</td>
            <td><button class="mini-action" type="button" data-history-detail="${index}">Xem chi tiết</button></td>
        </tr>
    `).join("");

    tbody.querySelectorAll("[data-history-detail]").forEach((button) => {
        button.addEventListener("click", () => openHistoryDetailModal(Number(button.dataset.historyDetail)));
    });

    $("historyResultText").textContent = `Hiển thị 1 đến ${result.length} của ${result.length} kết quả`;
}

function openHistoryDetailModal(index) {
    const item = currentHistoryDetailItems[index];
    if (!item) return;

    $("historyDetailTitle").textContent = item.title || "Chi tiết cuộc họp";
    $("historyDetailContent").innerHTML = `
        <div class="detail-grid">
            <div class="detail-item"><span>Mã phòng</span><strong>${escapeHtml(item.roomCode)}</strong></div>
            <div class="detail-item"><span>Tên phòng</span><strong>${escapeHtml(item.roomName)}</strong></div>
            <div class="detail-item"><span>Ngày sử dụng</span><strong>${formatDate(item.date)}</strong></div>
            <div class="detail-item"><span>Thời gian</span><strong>${escapeHtml(item.time)}</strong></div>
            <div class="detail-item"><span>Người tổ chức</span><strong>${escapeHtml(item.organizer)}</strong></div>
            <div class="detail-item"><span>Số người</span><strong>${item.people}</strong></div>
            <div class="detail-item"><span>Số giờ sử dụng</span><strong>${Number(item.hours || 0).toFixed(Number(item.hours || 0) % 1 === 0 ? 0 : 1)} giờ</strong></div>
            <div class="detail-item"><span>Trạng thái</span><strong><span class="badge ${statusClass(item.status)}">${escapeHtml(item.status)}</span></strong></div>
            <div class="detail-item full"><span>Người tham gia</span><strong>${escapeHtml(item.participants || "Chưa có thông tin")}</strong></div>
            <div class="detail-item full"><span>Nội dung / ghi chú cuộc họp</span><strong>${escapeHtml(item.note || "Không có ghi chú")}</strong></div>
            ${item.cancelReason && item.status !== "Đã hủy" ? `<div class="detail-item full danger-detail"><span>Ghi chú trạng thái</span><strong>${escapeHtml(item.cancelReason)}</strong></div>` : ""}
        </div>
    `;

    $("historyDetailModal").classList.add("show");
    $("historyDetailModal").setAttribute("aria-hidden", "false");
}

function closeHistoryDetailModal() {
    $("historyDetailModal").classList.remove("show");
    $("historyDetailModal").setAttribute("aria-hidden", "true");
}

function renderFreeTime() {
    const selectedRoomCode = $("freeRoomSelect").value || state.rooms[0]?.code;
    const selectedRoom = state.rooms.find((room) => room.code === selectedRoomCode) || state.rooms[0];
    const date = $("freeDateInput").value || today();
    const keyword = normalize($("freeSearch").value);

    if (!selectedRoom) return;

    $("timelineTitle").textContent = `Lịch trống ngày ${formatDate(date)} - ${selectedRoom.name} (${selectedRoom.code})`;

    const timeRanges = [
        { time: "07:00 - 08:00", work: false },
        { time: "08:00 - 09:00", work: true },
        { time: "09:00 - 10:00", work: true },
        { time: "10:00 - 11:00", work: true },
        { time: "11:00 - 12:00", work: true },
        { time: "13:00 - 14:00", work: true },
        { time: "14:00 - 15:00", work: true },
        { time: "15:00 - 16:00", work: true },
        { time: "16:00 - 17:00", work: true }
    ];

    const activeBookings = getActiveBookings(selectedRoom.code, date);
    const baseSlots = timeRanges.map((range) => {
        const [start, end] = range.time.split(" - ");
        if (!range.work) return { time: range.time, type: "blank", text: "Ngoài giờ làm việc", person: "" };
        const booking = activeBookings.find((item) => isOverlap(start, end, item.start, item.end));
        if (booking) return { time: range.time, type: "booked", text: `Đã đặt: ${booking.title}`, person: booking.owner };
        return { time: range.time, type: "free", text: "Trống", person: "" };
    });

    const shift = $("freeShiftSelect").value;
    const shiftedSlots = baseSlots.filter((slot) => {
        const start = slot.time.slice(0, 5);
        if (shift === "Sáng") return start < "12:00";
        if (shift === "Chiều") return start >= "13:00";
        return true;
    });

    const slots = shiftedSlots.filter((slot) => normalize(`${slot.time} ${slot.text} ${slot.person}`).includes(keyword));
    $("timelineList").innerHTML = slots.map((slot) => `
        <div class="time-row">
            <div class="time-label">${slot.time}</div>
            <div class="slot ${slot.type}">
                <span>${slot.text}</span>
                ${slot.person ? `<span class="slot-person">${slot.person}</span>` : ""}
            </div>
        </div>
    `).join("") || `<div class="empty">Không tìm thấy khung giờ phù hợp.</div>`;

    const freeSlots = shiftedSlots.filter((slot) => slot.type === "free");
    const tags = deviceTags(selectedRoom.devices);

    $("roomInfoContent").innerHTML = `
        <div class="info-section">
            <div class="info-item">
                <span class="info-label">Mã phòng</span>
                <span class="info-value">${selectedRoom.code}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Tên phòng</span>
                <span class="info-value">${selectedRoom.name}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Số chỗ ngồi</span>
                <span class="info-value">${selectedRoom.capacity} người</span>
            </div>
            <div class="info-item">
                <span class="info-label">Thiết bị</span>
                <div class="device-tags">${tags.map((tag) => `<span class="device-tag">${tag}</span>`).join("")}</div>
            </div>
        </div>
        <div class="free-list-title">Các khung giờ còn trống</div>
        <ul class="free-list">
            ${freeSlots.map((slot) => `<li>${slot.time} (${durationText(slot.time)})</li>`).join("") || "<li>Không còn khung giờ trống.</li>"}
        </ul>
    `;
}

function durationText(timeText) {
    const [start, end] = timeText.split(" - ");
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const minutes = (eh * 60 + em) - (sh * 60 + sm);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours && mins) return `${hours} giờ ${mins} phút`;
    if (hours) return `${hours} giờ`;
    return `${mins} phút`;
}

function openBookingModal(roomCode = "", bookingId = "") {
    editingBookingId = bookingId;
    $("bookingModal").classList.add("show");
    $("bookingModal").setAttribute("aria-hidden", "false");

    if (bookingId) {
        const booking = state.bookings.find((item) => item.id === bookingId);
        if (!booking) return;
        $("bookingModalTitle").textContent = "Sửa thông tin cuộc họp";
        $("bookingSubmitBtn").textContent = "Lưu thay đổi";
        $("meetingTitle").value = booking.title;
        $("meetingRoom").value = booking.roomCode;
        $("meetingPeople").value = booking.people;
        $("meetingDate").value = booking.date;
        $("meetingStart").value = booking.start;
        $("meetingEnd").value = booking.end;
        $("meetingOwner").value = booking.owner;
        $("meetingParticipants").value = booking.participants;
        $("meetingNote").value = booking.note;
        setBookingFormMessage("Đang sửa cuộc họp. Sau khi lưu, hệ thống sẽ kiểm tra lại trùng lịch phòng.");
        return;
    }

    $("bookingModalTitle").textContent = "Tạo lịch họp mới";
    $("bookingSubmitBtn").textContent = "Xác nhận tạo";
    $("bookingForm").reset();
    $("meetingDate").value = today();
    $("meetingStart").value = "09:00";
    $("meetingEnd").value = "10:00";
    $("meetingOwner").value = "Nguyễn Văn An";
    if (roomCode) $("meetingRoom").value = roomCode;
    setBookingFormMessage("Điền thông tin để tạo lịch họp mới.");
}

function closeBookingModal() {
    $("bookingModal").classList.remove("show");
    $("bookingModal").setAttribute("aria-hidden", "true");
    $("bookingForm").reset();
    editingBookingId = null;
    setBookingFormMessage("Điền thông tin để tạo lịch họp mới.");
}

function setBookingFormMessage(text, type = "") {
    const message = $("bookingFormMessage");
    message.className = "message full modal-message";
    if (type) message.classList.add(type);
    message.textContent = text;
}

function validateBooking(formData, ignoreId = "") {
    const room = state.rooms.find((item) => item.code === formData.roomCode);
    if (!room) return "Phòng họp không tồn tại.";
    if (room.status !== "Hoạt động") return "Phòng họp này không ở trạng thái hoạt động nên không thể đặt lịch.";
    if (!formData.title) return "Vui lòng nhập tiêu đề cuộc họp.";
    if (!formData.owner) return "Vui lòng nhập người tạo cuộc họp.";
    if (!formData.people || formData.people <= 0) return "Số người phải là số nguyên dương.";
    if (formData.people > room.capacity) return `Số người vượt quá sức chứa của ${room.name}.`;
    if (!formData.date || !formData.start || !formData.end) return "Vui lòng nhập đầy đủ ngày họp, giờ bắt đầu và giờ kết thúc.";
    if (formData.start >= formData.end) return "Thời gian kết thúc phải lớn hơn thời gian bắt đầu.";
    if (formData.date < today()) return "Không được chọn ngày trong quá khứ.";
    if (formData.date === today() && formData.start <= currentTimeText()) {
        return "Không được tạo lịch có giờ bắt đầu đã qua. Vui lòng chọn giờ bắt đầu lớn hơn giờ hiện tại.";
    }

    const duplicated = getActiveBookings(formData.roomCode, formData.date)
        .some((booking) => booking.id !== ignoreId && isOverlap(formData.start, formData.end, booking.start, booking.end));
    if (duplicated) return "Phòng đã có lịch trong khung giờ này. Vui lòng chọn thời gian khác.";
    return "";
}

function saveBookingFromForm(event) {
    event.preventDefault();
    autoCompletePastBookings();
    const roomCode = $("meetingRoom").value;
    const room = state.rooms.find((item) => item.code === roomCode);
    const formData = {
        id: editingBookingId || `BK-${Date.now()}`,
        roomCode,
        roomName: room?.name || "Không rõ",
        date: $("meetingDate").value,
        start: $("meetingStart").value,
        end: $("meetingEnd").value,
        title: $("meetingTitle").value.trim(),
        owner: $("meetingOwner").value.trim(),
        people: Number($("meetingPeople").value),
        participants: $("meetingParticipants").value.trim(),
        note: $("meetingNote").value.trim(),
        status: editingBookingId ? (state.bookings.find((item) => item.id === editingBookingId)?.status || "Chờ xác nhận") : "Chờ xác nhận",
        cancelReason: editingBookingId ? (state.bookings.find((item) => item.id === editingBookingId)?.cancelReason || "") : ""
    };

    const error = validateBooking(formData, editingBookingId);
    if (error) {
        setBookingFormMessage(error, "error");
        return;
    }

    if (editingBookingId) {
        state.bookings = state.bookings.map((booking) => booking.id === editingBookingId ? formData : booking);
        setBookingFormMessage("Đã cập nhật cuộc họp thành công.", "success");
    } else {
        state.bookings.push(formData);
        setBookingFormMessage("Tạo lịch họp thành công. Lịch đang ở trạng thái Chờ xác nhận.", "success");
    }

    saveState();
    refreshSelects();
    $("bookingRoomFilter").value = "all";
    $("bookingDateFilter").value = formData.date;
    $("bookingStatusFilter").value = "all";
    $("bookingSearch").value = "";
    $("freeRoomSelect").value = formData.roomCode;
    $("freeDateInput").value = formData.date;
    renderAll();

    setTimeout(() => {
        closeBookingModal();
        activatePage("bookingPage");
    }, 650);
}

function autoCompletePastBookings() {
    const currentDate = today();
    const currentTime = currentTimeText();
    let isChanged = false;

    state.bookings.forEach((booking) => {
        if (booking.status === "Đã duyệt") {
            if (booking.date < currentDate || (booking.date === currentDate && booking.end <= currentTime)) {
                booking.status = "Đã hoàn thành";
                isChanged = true;
            }
        }
    });

    if (isChanged) saveState();
}

function renderAll() {
    autoCompletePastBookings();
    renderStats();
    renderRooms();
    renderBookings();
    renderHistory();
    renderFreeTime();
}

function setupEvents() {
    $("roomSearch").addEventListener("input", renderRooms);
    $("roomStatusFilter").addEventListener("change", renderRooms);
    $("roomForm").addEventListener("submit", saveRoom);
    $("cancelRoomBtn").addEventListener("click", resetRoomForm);
    $("deleteRoomBtn").addEventListener("click", deleteRoom);

    $("openBookingBtn").addEventListener("click", () => openBookingModal());
    $("closeBookingBtn").addEventListener("click", closeBookingModal);
    $("cancelBookingBtn").addEventListener("click", closeBookingModal);
    $("cancelReasonForm").addEventListener("submit", submitCancelReason);
    $("closeCancelReasonBtn").addEventListener("click", closeCancelReasonModal);
    $("cancelReasonBackBtn").addEventListener("click", closeCancelReasonModal);
    $("closeHistoryDetailBtn").addEventListener("click", closeHistoryDetailModal);
    $("historyDetailCloseBtn").addEventListener("click", closeHistoryDetailModal);
    $("bookingForm").addEventListener("submit", saveBookingFromForm);
    $("bookingModal").addEventListener("click", (event) => {
        if (event.target.id === "bookingModal") closeBookingModal();
    });
    $("historyDetailModal").addEventListener("click", (event) => {
        if (event.target.id === "historyDetailModal") closeHistoryDetailModal();
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".status-dropdown.open").forEach((item) => item.classList.remove("open"));
    });

    $("viewBookingBtn").addEventListener("click", renderBookings);
    $("bookingSearch").addEventListener("input", renderBookings);
    $("bookingRoomFilter").addEventListener("change", renderBookings);
    $("bookingDateFilter").addEventListener("change", renderBookings);
    $("bookingStatusFilter").addEventListener("change", renderBookings);
    $("resetBookingBtn").addEventListener("click", () => {
        $("bookingRoomFilter").value = "all";
        $("bookingDateFilter").value = today();
        $("bookingStatusFilter").value = "all";
        $("bookingSearch").value = "";
        renderBookings();
    });

    $("historySearchBtn").addEventListener("click", renderHistory);
    $("historySearch").addEventListener("input", renderHistory);
    $("historyRoomSearch").addEventListener("input", renderHistory);
    $("historyResetBtn").addEventListener("click", () => {
        $("historyRoomSearch").value = "";
        $("historyDateRange").value = "01/05/2024 → 31/05/2024";
        $("historySearch").value = "";
        renderHistory();
    });

    $("freeSearchBtn").addEventListener("click", renderFreeTime);
    $("freeRoomSelect").addEventListener("change", renderFreeTime);
    $("freeDateInput").addEventListener("change", renderFreeTime);
    $("freeSearch").addEventListener("input", renderFreeTime);
    $("freeShiftSelect").addEventListener("change", renderFreeTime);
}

function setupStorageEventListener() {
    window.addEventListener("storage", (event) => {
        if (event.key === STORAGE_KEY) {
            state = loadState();
            refreshSelects();
            renderAll();
        }
    });
}

function init() {
    setupNavigation();
    refreshSelects();
    if ($("bookingDateFilter")) $("bookingDateFilter").value = today();
    if ($("freeDateInput")) $("freeDateInput").value = today();
    setupEvents();
    setupStorageEventListener();
    saveState();
    renderAll();
}

init();
