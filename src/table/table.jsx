import React, { useState } from 'react';
import "./table.css"

function Table() {
  const [items, setItems] = useState([
    { id: 1, name: 'Товар 1', description: 'Описание 1', quantity: 10 },
    { id: 2, name: 'Товар 2', description: 'Описание 2', quantity: 20 },
    // Добавьте дополнительные элементы по желанию
  ]);

  const handleQuantityChange = (id, quantity) => {
    const numberQuantity = Number(quantity);
    if (!isNaN(numberQuantity)) {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: numberQuantity } : item
      ));
    }
  };
  
  const handleSave = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const currentItog = isNaN(item.itog) ? 0 : item.itog;
        const newItog = currentItog + item.quantity;
        return { ...item, itog: newItog, quantity: "" };
      } else {
        return item;
      }
    }));
  };
  
  
  
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Итог</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <input 
                  type="number" 
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                />
              </td>
              <td>{item.itog}</td>
              <td>
                <button onClick={() => handleSave(item.id)}>Сохранить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table;
