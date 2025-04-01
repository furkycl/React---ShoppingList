import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { nanoid } from "/node_modules/nanoid/nanoid.js";
import { useState } from "react";

const input_bgcolor = "green";
const Input = styled.input`
  background-color: ${input_bgcolor};
  color: white;
  outline: none;
  border: none;
`;

const AddProduct = (props) => {
  const markets = props.markets;
  const categories = props.categories;
  const [marketID, setMarketID] = useState(markets[0].id);
  const [categoryID, setCategoryID] = useState(categories[0].id);
  const [productName, setProductName] = useState("");
  const [filterShop, setFilterShop] = useState(markets[0].id);
  const [filterCategory, setFilterCategory] = useState(categories[0].id);
  const [filterIsbought, setFilterisbought] = useState(null);
  const [filterProductName, setFilterProductName] = useState("");
  
  /*
  const [products, setProducts] = useState([]);
  const filteredProducts = products.filter(product => {
    if(filterProductName !== '') {
      const fuse = new Fuse(products, {keys: ["name"]});
      const searchedProductsForName = fuse.search(filterProductName)
      let searchedProductsForIsbought = searchedProductsForName
      if (filterIsbought === true) {
        searchedProductsForIsbought = searchedProductsForIsbought.filter(p => p.item.isBought === true)
      } else if(filterIsbought === false) {
        searchedProductsForIsbought = searchedProductsForIsbought.filter(p => p.item.isBought === false)
      }
      let searchedProductsForShop = searchedProductsForIsbought;
      if(filterShop !== null) {
      searchedProductsForShop = searchedProductsForShop.filter(p => p.item.markets === filterShop)
      }
      let searchedProductsForCategory = searchedProductsForShop
      if(filterCategory !== null) {
        searchedProductsForCategory = searchedProductsForCategory.filter(p => p.item.categories === filterCategory)
      }
      return searchedProductsForCategory.map((s) => s.item);
    }
    else {
      return product
    }
    

  });
*/
  return (
    <>
      <h2>EKLE</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props?.onAdd?.({
            marketID,
            categoryID,
            id: nanoid(),
            productName,
          });
        }}
      >
        <div className="d-flex gap-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {markets.find((market) => market.id === marketID).name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {markets.map((market) => (
                <Dropdown.Item
                  onClick={() => setMarketID(market.id)}
                  key={market.id}
                  href="#/action-1"
                >
                  {market.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {
                categories.find((categories) => categories.id === categoryID)
                  .name
              }
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((categories) => (
                <Dropdown.Item
                  onClick={() => setCategoryID(categories.id)}
                  key={categories.id}
                  href="#/action-1"
                >
                  {categories.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Input
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            value={productName}
            className="rounded-3"
          />
          <Button type="submit" variant="primary">
            Ekle
          </Button>
        </div>
      </Form>
      <h2>FILTRELE</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props?.onAdd?.({
            marketID,
            categoryID,
            id: nanoid(),
            productName,
          });
        }}
      >
        <div className="d-flex gap-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {markets.find((market) => market.id === filterShop).name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {markets.map((market) => (
                <Dropdown.Item
                  onClick={() => setFilterShop(market.id)}
                  key={market.id}
                  href="#/action-1"
                >
                  {market.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {
                categories.find((categories) => categories.id === filterCategory)
                  .name
              }
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((categories) => (
                <Dropdown.Item
                  onClick={() => setFilterCategory(categories.id)}
                  key={categories.id}
                  href="#/action-1"
                >
                  {categories.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div key={`default-radio`} className="mb-3">
            <Form.Check
              type={"radio"}
              id={`default-radio`}
              label={`tümü`}
              name="isbought"
              checked={filterIsbought === null}
              onClick={() => {
                setFilterisbought(null);
              }}
            />
            <Form.Check
              type={"radio"}
              id={`default-radio`}
              label={`satin alinmis`}
              name="isbought"
              checked={filterIsbought === true}
              onClick={() => {
                setFilterisbought(true);
              }}
            />

            <Form.Check
              checked={filterIsbought === false}
              onClick={() => {
                setFilterisbought(false);
              }}
              type={"radio"}
              label={`satın alinmamis`}
              id={`default-radio-2`}
              name="isbought"
            />
            <Input
            onChange={(e) => {
              setFilterProductName(e.target.value);
            }}
            value={filterProductName}
            className="rounded-3"
          />
          </div>
          <Button type="submit" variant="primary">
            Filtrele
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddProduct;
