export const emailValidation = {
  required: {
    value: true,
    message: "필수 입력 항목입니다.",
  },
  maxLength: {
    value: 100,
    message: "최대 100자까지 입력할 수 있습니다.",
  },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "이메일 형식이 올바르지 않습니다.",
  },
};

export const phoneNumberValidation = {
  required: {
    value: true,
    message: "필수 입력 항목입니다.",
  },
  maxLength: {
    value: 100,
    message: "최대 100자까지 입력할 수 있습니다.",
  },
  pattern: {
    value: /^010\d{4}\d{4}$/,
    message: "휴대폰번호 형식이 올바르지 않습니다.",
  },
};

export const imageValidation = {
  required: {
    value: true,
    message: "필수 입력 항목입니다.",
  },
  validate: {
    isImage: (fileList: FileList) => {
      const file = fileList[0];
      if (!file) return true;

      const validExtensions = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (!fileExtension) return "이미지를 업로드 해주세요.";
      if (validExtensions.includes(fileExtension)) {
        return true;
      } else {
        return "유효한 이미지 파일이 아닙니다. (jpg, jpeg, png, gif만 가능)";
      }
    },
  },
};
