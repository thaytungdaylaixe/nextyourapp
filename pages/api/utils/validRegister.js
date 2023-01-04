const ValidSignin = (sdt, password) => {
  if (!dienthoai || !password) {
    return "Vui lòng điền đầy đủ thông tin.";
  }
  if (!validateNumber(dienthoai)) return "Số điện thoại không đúng.";
  if (password.length < 6) return "Mật khẩu phải hơn 6 ký tự.";
};

const validSignUp = (name, dienthoai, email, password, cf_password) => {
  if (!name || !dienthoai || !email || !password || !cf_password) {
    return "Please add all fields.";
  }
  if (!validateNumber(dienthoai)) return "Số điện thoại không đúng.";
  if (!validateEmail(email)) return "Email không đúng.";
  if (password.length < 6) return "Mật khẩu phải hơn 6 ký tự.";
  if (password !== cf_password) return "Mật khẩu không khớp.";
};

function validateNumber(dienthoai) {
  const re = /^[0-9]*$/gm;
  return re.test(dienthoai);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const valid = (name, value) => {
  switch (name) {
    case "sdt":
      if (value === "") return "Bạn chưa nhập số điện thoại.";
      if (!validateNumber(value)) return "Số điện thoại không đúng.";
      return null;

    case "sdt":
      if (value === "") return "Bạn chưa nhập số điện thoại.";
      if (!validateNumber(value)) return "Số điện thoại không đúng.";
      return null;

    case "password":
      if (value === "") return "Bạn chưa nhập số mật khẩu.";
      if (value.length < 6) return "Mật khẩu phải hơn 6 ký tự.";
      return null;

    default:
      return;
  }
};

export default valid;
