import { Publish } from "@material-ui/icons";
import InputField from "customField/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import { useProduct } from "hooks";
import { initialValues, validationSchema } from "./formikConfig";
import "./newproduct.css";

function NewProduct() {
    const { setFile, addProduct, previewImgUrl, setPreviewImgUrl } = useProduct();

    return (
        <div className="newproduct">
            <h1 className="addProductTitle">New Product</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addProduct}
                validateOnMount={true}

            >
                {formikProps => {
                    const { isValid, isSubmitting } = formikProps;

                    return (
                        <Form className="addProductForm">
                            {/* <div className="addProductItem">
                                <FastField
                                    name="url"
                                    component={InputField}

                                    label="Image Link"
                                    placeholder="Enter your image link"
                                />

                                {initialValues.url && <img src={initialValues.url} alt="No alternate" className="addProductImg" />}
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="detailUrl"
                                    component={InputField}

                                    label="Detail Url"
                                    placeholder="Enter your detail url"
                                />

                                {initialValues.url && <img src={initialValues.url} className="addProductImg" alt="No alternate" />}
                            </div> */}

                            <div className="addProductItem">
                                <FastField
                                    name="shortTitle"
                                    type="text"
                                    component={InputField}

                                    label="Short Title"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="longTitle"
                                    type="text"
                                    component={InputField}

                                    label="Long Title"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="cost"
                                    type="number"
                                    component={InputField}

                                    label="Cost"
                                    placeholder="Enter cost..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="mrp"
                                    type="number"
                                    component={InputField}

                                    label="MRP"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="discount"
                                    type="text"
                                    component={InputField}

                                    label="Discount Discribe"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="discountInPercent"
                                    type="text"
                                    component={InputField}

                                    label="Discount in percent"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="tagline"
                                    type="text"
                                    component={InputField}

                                    label="Tag Line"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                <FastField
                                    name="description"
                                    type="text"
                                    component={InputField}

                                    label="Description"
                                    placeholder="Enter product name..."
                                />
                            </div>

                            <div className="addProductItem">
                                {previewImgUrl && <img src={previewImgUrl} alt="" className="productUploadImg" />}
                                <label htmlFor="file">
                                    <Publish />
                                </label>
                                <input accept=".png, .jpg, .jpeg" type="file" id="file" style={{ display: "none" }} onChange={(e) => {
                                    setPreviewImgUrl(URL.createObjectURL(e.target.files[0]));
                                    setFile(e.target.files[0])
                                }} />
                            </div>

                            <button className="addProductButton" type="submit"
                                disabled={!isValid || isSubmitting}>Create</button>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default NewProduct;
