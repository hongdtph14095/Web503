import React from 'react'
import { ProductType } from '../types/product'
import {Link} from 'react-router-dom'


type ManagerProductProps = {
    data: ProductType[], 
    onRemove: (id: number) => void
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    {/* <th>Price</th> */}
                </tr>
            </thead>
            <tbody>
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        {/* <td>{item.price}</td> */}
                        <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                        <td>
                        { <button onClick={() => props.onRemove(item._id)}>Remove</button> }
                        </td>
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct