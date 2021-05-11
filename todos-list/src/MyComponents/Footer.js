import React from 'react'

export const Footer = () => {
    let footerStyle={
        position:"relative",
        top:"120vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; Shivam Todo List
            </p>
        </footer>
    )
}
