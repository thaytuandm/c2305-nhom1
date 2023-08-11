document.getElementById("myForm").addEventListener("submit", function(event) {
  var isValid = this.checkValidity();
  if (!isValid) {
    event.preventDefault(); // Ngăn chặn gửi form khi dữ liệu không hợp lệ
    alert("Vui lòng nhập đúng định dạng cho các trường!"); // Hiển thị thông báo lỗi
  }
})
