import React from 'react';
import './Activity.styles.css';

const ActivityList = ({ list, setList }) => {

  const handleChange = (e) => {
      const data = list.filter((item, index) => {
        if (index.toString() === e.target.value){
            item.isDone = !item.isDone;
        }

        return item;
      });
      setList(data);
  }

  const handleDelete = (index) => {
    const data = list.filter((item, i) => index !== i);
    setList(data);
  }

  return (
      <table>
        <tbody>
          {list.map((item, index) => (
              <tr key={`item-${index}`}>
                <td>
                  <input type="checkbox" name='list' value={index} onChange={handleChange} />
                </td>
                <td>
                  {item.isDone ? (<strike>{item.name}</strike>) : item.name}
                </td>
                <td>
                  <input type="button" value="Delete" className='deleteBtn' onClick={() => handleDelete(index)} />
                </td>
              </tr>
          ))}
          </tbody>
      </table>
  )
}

export default ActivityList;
