function validateNumber(dienthoai) {
  const re = /^[0-9]*$/gm;
  return re.test(dienthoai);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const ValidData = (data) => {
  let errors = {};
  for (const key in data) {
    let msg = ValidInputForm(key, data[key], data.password);
    if (msg !== null) {
      errors[key] = msg;
    }
  }

  return errors;
};

export const ValidInputForm = (key, value, password) => {
  let msg = "";
  switch (key) {
    case "sdt":
      if (value === undefined || value === "") {
        msg = "Bạn chưa nhập số điện thoại.";
      } else if (!validateNumber(value)) {
        msg = "Số điện thoại không đúng.";
      } else if (value.length < 10) {
        msg = "Số điện thoại không đủ.";
      } else {
        msg = null;
      }
      return msg;

    case "email":
      if (value === undefined || value === "") {
        msg = "Bạn chưa nhập email.";
      } else if (!validateEmail(value)) {
        msg = "Email không đúng.";
      } else {
        msg = null;
      }
      return msg;

    case "hovaten":
      if (value === undefined || value === "") {
        msg = "Bạn chưa nhập họ và tên.";
      } else if (value.length < 4) {
        msg = "Họ và tên phải lớn hơn 4 ký tự.";
      } else {
        msg = null;
      }
      return msg;

    case "password":
      if (value === undefined || value === "") {
        msg = "Bạn chưa nhập mật khẩu.";
      } else if (value.length < 6) {
        msg = "Mật khẩu phải hơn 6 ký tự.";
      } else {
        msg = null;
      }
      return msg;

    case "cf_password":
      if (value !== password) {
        msg = "Mật khẩu không khớp.";
      } else {
        msg = null;
      }
      return msg;

    default:
      return;
  }
};
