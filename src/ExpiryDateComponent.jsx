import { useState, useEffect } from "react";

import React from 'react'

export const ExpiryDateComponent = () => {
    return (<>
        <DateAndQuantityComp />
    </>
    )
}

const DateAndQuantityComp = () => {
    const [data, setData] = useState([])
    const submitHandle = (e) => {
        e.preventDefault()
        setData((data) => [...data, {
            date: e.target.date.value,
            quantity: e.target.quantity.value
        }]
        )
    }
    return (<>
        <form onSubmit={(e) => submitHandle(e)}>
            <input type="date" name="date" />
            <input type="number" name="quantity" />
            <button type="submit" >+</button>
        </form>
        <TableComp data={data} />
    </>)
}
const TableComp = (props) => {
    const { data } = props;
    return (<>
        <table border={1}>
            <thead>
                <th>Date</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                {data.map((obj) => {
                    return (<tr>
                        <td>{obj.date}</td>
                        <td>{obj.quantity}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </>)
}
