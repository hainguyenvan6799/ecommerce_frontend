import { Publish } from "@material-ui/icons"
import { PATH_NAME } from "configs"
import InputField from "customField/InputField/InputField"
import Chart from "features/AdminDashboard/components/chart/Chart"
import { FastField, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { validationSchema } from "./formikConfig"
import "./product.css"

const productData = [
    {
        name: "Jan",
        Sales: 4000
    },
    {
        name: "Feb",
        Sales: 5000,
    },
    {
        name: "March",
        Sales: 6000,
    }
]

function Product({ detailProduct, setDetailProductId, handleUpdateProduct }) {

    // http://localhost:3000/admin-dashboard/product/60d832241b4464232cf2d9e2
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        if (id) {
            setDetailProductId(id)
        }
    }, [id]);

    useEffect(() => {
        if (detailProduct) {
            setInitialValues({
                productId: detailProduct._id,
                url: detailProduct.url,
                detailUrl: detailProduct.detailUrl,
                shortTitle: detailProduct.title.shortTitle,
                longTitle: detailProduct.title.longTitle,
                cost: detailProduct.price.cost,
                mrp: detailProduct.price.mrp,
                discount: detailProduct.discount,
                discountInPercent: detailProduct.price.discount,
                tagline: detailProduct.tagline,
                description: detailProduct.description
            })
        }
    }, [detailProduct]);

    return (
        detailProduct && initialValues &&
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to={PATH_NAME.ADMIN_NEWPRODUCT}>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={detailProduct.url} alt="" className="productInfoImg" />
                        <span className="productName">{detailProduct.title.shortTitle}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID: </span>
                            <span className="productInfoValue">{detailProduct._id}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Name: </span>
                            <span className="productInfoValue">{detailProduct.title.shortTitle}</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Price: </span>
                            <span className="productInfoValue">{detailProduct.price.cost}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleUpdateProduct}
                    validateOnMount={true}

                >
                    {formikProps => {
                        const { isValid, isSubmitting } = formikProps;

                        return (
                            <Form className="productForm">
                                <div className="productFormLeft">
                                    <FastField
                                        name="url"
                                        component={InputField}

                                        label="Image Link"
                                        placeholder="Enter your image link"
                                    />

                                    <FastField
                                        name="shortTitle"
                                        type="text"
                                        component={InputField}

                                        label="Short Title"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="longTitle"
                                        type="text"
                                        component={InputField}

                                        label="Long Title"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="cost"
                                        type="text"
                                        component={InputField}

                                        label="Cost"
                                        placeholder="Enter cost..."
                                    />

                                    <FastField
                                        name="mrp"
                                        type="text"
                                        component={InputField}

                                        label="MRP"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="discount"
                                        type="text"
                                        component={InputField}

                                        label="Discount Discribe"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="discountInPercent"
                                        type="text"
                                        component={InputField}

                                        label="Discount in percent"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="tagline"
                                        type="text"
                                        component={InputField}

                                        label="Tag Line"
                                        placeholder="Enter product name..."
                                    />

                                    <FastField
                                        name="description"
                                        type="text"
                                        component={InputField}

                                        label="Description"
                                        placeholder="Enter product name..."
                                    />

                                </div>
                                <div className="productFormRight">
                                    <div className="productUpload">
                                        <img src={initialValues.url} alt="" className="productUploadImg" />
                                        <label htmlFor="file">
                                            <Publish />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>

                                    <button className="productButton" type="submit"
                                        disabled={!isValid || isSubmitting}>Update</button>

                                </div>


                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Product
