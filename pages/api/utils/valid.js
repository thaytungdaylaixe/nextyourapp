function validateNumber(dienthoai) {
  const re = /^[0-9]*$/gm;
  return re.test(dienthoai);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const ValidRegister = (data) => {
  let errors = {};
  let countErrors = 0;

  if (data.sdt === "") {
    errors.sdt = "Bạn chưa nhập số điện thoại.";
    countErrors += 1;
  }
  if (!validateNumber(data.sdt)) {
    errors.sdt = "Số điện thoại không đúng.";
    countErrors += 1;
  }

  if (data.email === "") {
    errors.email = "Bạn chưa nhập email.";
    countErrors += 1;
  }
  if (!validateEmail(data.email)) {
    errors.email = "Email không đúng.";
    countErrors += 1;
  }

  if (data.hovaten === "") {
    errors.hovaten = "Bạn chưa nhập họ và tên.";
    countErrors += 1;
  }
  if (data.hovaten.length < 4) {
    errors.hovaten = "Họ và tên phải lớn hơn 4 ký tự.";
    countErrors += 1;
  }

  if (data.password === "") {
    errors.password = "Bạn chưa nhập mật khẩu.";
    countErrors += 1;
  } else if (data.password.length < 6) {
    errors.password = "Mật khẩu phải hơn 6 ký tự.";
    countErrors += 1;
  } else if (data.password !== data.cf_password) {
    errors.cf_password = "Mật khẩu không khớp.";
    countErrors += 1;
  }

  if (data.cf_password === "") {
    errors.cf_password = "Bạn chưa nhập lại mật khẩu.";
    countErrors += 1;
  } else if (data.password !== data.cf_password) {
    errors.cf_password = "Mật khẩu không khớp.";
    countErrors += 1;
  }

  return { errors, countErrors };
};

// export const ValidInputForm = (name, value) => {
//   switch (name) {
//     case "sdt":
//       if (value === "") return "Bạn chưa nhập số điện thoại.";
//       if (!validateNumber(value)) return "Số điện thoại không đúng.";
//       if (value.length < 10) return "Số điện thoại không đủ.";
//       return null;

//     case "hovaten":
//       if (value === "") return "Bạn chưa nhập họ và tên.";
//       if (value.length < 4) return "Họ và tên phải lớn hơn 4 ký tự.";
//       return null;

//     case "password":
//       if (value === "") return "Bạn chưa nhập mật khẩu.";
//       if (value.length < 6) return "Mật khẩu phải hơn 6 ký tự.";
//       return null;

//     case "cf_password":
//       if (value === "") return "Bạn chưa nhập mật khẩu.";
//       return null;

//     default:
//       return;
//   }
// };

// export const ValidDangNhap = (data) => {
//   const errors = {};
//   const countErrors = 0;

//   if (data.sdt === "") {
//     errors.sdt = "Bạn chưa nhập số điện thoại.";
//     countErrors += 1;
//   }
//   if (!validateNumber(data.sdt)) {
//     errors.sdt = "Số điện thoại không đúng.";
//     countErrors += 1;
//   }

//   if (data.password === "") {
//     errors.password = "Bạn chưa nhập mật khẩu.";
//     countErrors += 1;
//   } else if (data.password.length < 6) {
//     errors.password = "Mật khẩu phải hơn 6 ký tự.";
//     countErrors += 1;
//   }

//   return { errors, countErrors };
// };
