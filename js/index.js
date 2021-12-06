async function showForm() {
  var title = "Tạo học sinh mới ";
  await Swal.fire({
    title: title,
    confirmButtonText: "Tạo học sinh",
    html:
      '<input id="name" class="swal2-input" placeholder="Mã số sinh viên">' +
      '<input id="toan" class="swal2-input" placeholder="Tên sinh viên">' +
      '<input id="van" class="swal2-input" placeholder="Điểm văn">' +
      '<input id="toan" class="swal2-input" placeholder="Điểm toán">',
    focusConfirm: false,
    preConfirm: () => {
      Swal.fire("Thông báo", "Lưu học sinh thành công", "success");
    },
  });
}
