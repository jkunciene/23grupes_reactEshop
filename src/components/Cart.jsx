import { Table } from 'react-bootstrap';

const Cart = ({ products }) => {
    console.log(products);

    if (products.length > 0) {
        return (
            <div>
                <h2>Cart</h2>
                <Table striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((oneProduct, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{oneProduct.name}</td>
                                    <td className="d-flex justify-content-around">
                                        <button className="btn btn-info">+</button>
                                    {oneProduct.quantity}
                                    <button className="btn btn-info">-</button>
                                    </td>
                                    <td>{oneProduct.price}</td>
                                    <td><button className="btn btn-danger">Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    } else return <div>Prekių krepšelis tuščias</div>

}

export default Cart
