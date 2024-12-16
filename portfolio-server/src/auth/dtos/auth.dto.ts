import * as yup from "yup";

const signUpDto = {
  body: yup.object().shape({
    userId: yup.string().email().required(),
    password: yup.string().min(8).required(),
  }),
};

const signInDto = {
  body: yup.object().shape({
    userId: yup.string().email().required(),
    password: yup.string().min(8).required(),
  }),
};

export { signUpDto, signInDto };
