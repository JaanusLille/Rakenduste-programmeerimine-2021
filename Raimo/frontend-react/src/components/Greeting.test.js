import React from "react";
import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

it('checks if greeting text title exists', () =>{
    const div = document.createElement('div')
    render(<Greeting/>, div)

    const titleElement = screen.queryByText(/greeting title/i)

    expect(titleElement).not.toBeNull()
})