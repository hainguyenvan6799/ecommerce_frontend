import "./productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { PATH_NAME } from "configs";

function ProductList({ products, handleRemoveProduct }) {

    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        {
            field: "Product", headerName: "Product", width: 200, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.url} alt="" className="productListImg" />
                        {params.row.title.shortTitle}
                    </div>
                )
            }
        },
        {
            field: "price", headerName: "price", width: 160, renderCell: (params) => params.row.price.cost
        },
        { field: "description", headerName: "Description", width: 200 },
        { field: "discount", headerName: "Discount", width: 120 },
        { field: "tagline", headerName: "Tag Line", width: 120 },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={PATH_NAME.ADMIN_LINKTOPRODUCTDETAIL(params.row._id)}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleRemoveProduct(params.row._id)}
                        />
                    </>
                )
            }
        }
    ]

    return (
        <div className="product-list">
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                rowsPerPageOptions={[8, 10, 20]}
                pageSize={8}

                checkboxSelection
            />
        </div>
    )
}

export default ProductList
