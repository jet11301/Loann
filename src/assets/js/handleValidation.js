

export default function handleValidation(editData, errors) {
    if (!/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(editData.phonenumber)) {
        errors.phonenumber = 'Số điện thoại là 10 chữ số';
    }
    if (editData.phonenumber == '' || editData.phonenumber == ' ' || editData.phonenumber == null) {
        errors.phonenumber = "Số điện thoại không được để trống";
    }

    if (editData.fullname == '' || editData.fullname == ' ' || editData.fullname == null) {
        errors.fullname = "Tên không được để trống";
    }

    if (editData.salary == '' || editData.salary == ' ' || editData.salary == null) {
        errors.salary = "Lương không được để trống";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editData.email)) {
        errors.email = 'Email phải hợp lệ';
    }
    if (editData.email == '' || editData.email == ' ' || editData.email == null) {
        errors.email = "Email không được để trống";
    }

    if (editData.workingat == '' || editData.workingat == ' ' || editData.workingat == null) {
        errors.workingat = "Nơi làm việc không được để trống";
    }

    if (editData.address == '' || editData.address == ' ' || editData.address == null) {
        errors.address = "Địa chỉ không được để trống";
    }
}