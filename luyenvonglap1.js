// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

for (i = 1; i < 100; i++) {
  document.write(i + "<br>");
  if (i == 99) {
    alert("đã hoàn thành");
  }
}

// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
let nhietdo = +prompt("mời bạn nhập nhiệt độ");
if (nhiet)