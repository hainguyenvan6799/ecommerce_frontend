import * as Yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username can not be empty"),
  password: Yup.string()
    .required("Password can not be empty")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "Password must be at least 8 characters, contains letters and numbers and special characters"
    ),
});
