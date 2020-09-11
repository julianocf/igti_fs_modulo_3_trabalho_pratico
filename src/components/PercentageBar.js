import React, { Component } from 'react'

export default class PercentageBar extends Component {
    render() {
        const { valueINSS = "0", colorINSS, valueIRPF = "0", colorIRPF, valueNetSalary = "0", colorNetSalary } = this.props;
        return (
            <div style={{ marginTop: "50px", display: "flex"}}>
                <div style={{
                    backgroundColor: colorINSS,
                    width: valueINSS + "%",
                    height: "15px",                
                }}></div>
                <div style={{
                    backgroundColor: colorIRPF,
                    width: valueIRPF + "%",
                    height: "15px",                
                }}></div>
                <div style={{
                    backgroundColor: colorNetSalary,
                    width: valueNetSalary + "%",
                    height: "15px",                
                }}></div>
            </div>
        )
    }
}
