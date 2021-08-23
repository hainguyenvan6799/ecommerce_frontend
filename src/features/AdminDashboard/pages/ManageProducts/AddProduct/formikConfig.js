import * as Yup from "yup";

export const initialValues = {
  url: "",
  detailUrl: "",
  shortTitle: "",
  longTitle: "",
  cost: "",
  mrp: "",
  discount: "",
  discountInPercent: "",
  tagline: "",
  description: "",
};

export const validationSchema = Yup.object().shape({
  url: Yup.string().required("Url can not be empty"),
  detailUrl: Yup.string().required("Password can not be empty"),
});
