import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { nanoid } from '/node_modules/nanoid/nanoid.js'
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

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props?.onAdd?.({
            marketID,
            categoryID,
            id : nanoid(),
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
    </>
  );
};

export default AddProduct;
