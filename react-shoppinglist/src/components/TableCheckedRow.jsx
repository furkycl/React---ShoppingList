import { useEffect, useState } from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { MdDelete } from "react-icons/md";

const TableCheckedRow = ({
  product,
  markets,
  categories,
  onCheck,
  onDelete,
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    onCheck({ checked, id: product.id });
  }, [checked]);
  return (
    <>
      <tr
        onClick={() => {
          setChecked(!checked);
        }}
        key={product.id}
      >
        <td>{markets.find((market) => market.id === product.marketID).name}</td>
        <td>
          {
            categories.find(
              (categories) => categories.id === product.categoryID
            ).name
          }
        </td>
        <td>{product.productName}</td>
        <td>{product.id}</td>
        <td>
          <FormCheckInput checked={checked} />
        </td>
        <td
          onClick={() => {
            onDelete?.(product.id);
          }}
        >
          <MdDelete />
        </td>
      </tr>
    </>
  );
};

export default TableCheckedRow;
