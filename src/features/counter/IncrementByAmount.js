import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice"

export default function IncrementByAmount() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <label>Enter Amount to Increment: </label>
                <input id="amount" type={'number'}></input>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(Number(document.getElementById('amount').value)))}
                >
                    Increment By Amount
                </button>
                <span>{count}</span>
            </div>
        </div>
    )
}