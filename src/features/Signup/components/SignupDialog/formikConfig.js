import * as Yup from "yup";

export const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name can not be empty"),
  lastname: Yup.string().required("Last name can not be empty"),
  username: Yup.string()
    .required("Username can not be empty")
    .matches(/^\S*$/, "Can not contain spaces"),
  email: Yup.string()
    .required("Email can not be empty")
    .email("E.g: abc123@gmail.com"),
  password: Yup.string()
    .required("Password can not be empty")
    .min(8, "Password must be at least 8 characters"),
  phone: Yup.string()
    .required("Phone can not be empty")
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      "E.g: +84379343794"
    ),
});
