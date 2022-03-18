import React from 'react'
import { ProductType } from '../types/product'

type ManagerProductProps = {
    data: ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                        {/* <button onClick={() => removeItem(item._id)}>Remove</button> */}
                        </td>
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct