import Table from "react-bootstrap/Table";
import TableCheckedRow from "./TableCheckedRow";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
import AddProduct from "./AddProduct";

const ProductsTable = (props) => {
  const products = props.products;
  const markets = props.markets;
  const categories = props.categories;
  const onDelete = props.onDelete;
  const [basket, setBasket] = useState([]);
  const [oldBasketLength, setOldBasketLength] = useState(basket.length);
  const jsConfetti = new JSConfetti();
  useEffect(() => {
    if (
      products.length === basket.length &&
      products.length > 0 &&
      oldBasketLength < basket.length
    ) {
      jsConfetti.addConfetti();
    }
  }, [products, basket, oldBasketLength]);
  

  return (
    <div>
      <h2>Listele</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Market</th>
            <th>Kategori</th>
            <th>Ürün</th>
            <th>ID</th>
            <th>Alındı mı?</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableCheckedRow
              product={product}
              markets={markets}
              categories={categories}
              key={product.id}
              onCheck={(checkState) => {
                if (checkState.checked) {
                  setBasket((oldBasket) => {
                    setOldBasketLength(oldBasket.length);
                    return [...oldBasket, checkState];
                  });
                } else {
                  setBasket((oldBasket) => {
                    setOldBasketLength(oldBasket.length);
                    return basket.filter((b) => b.id !== product.id);
                  });
                }
              }}
              onDelete={(id) => {
                onDelete(id);
                setBasket(basket.filter((b) => b.id !== id));
              }}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsTable;
