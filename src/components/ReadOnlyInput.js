import React, { Component } from "react";

export default class ReadOnlyInput extends Component {
    render() {
        const { id, label, value, color = "black", size = "3" } = this.props;
        return (
            <div className={`input-field col s${size}`}>
                <input
                    id={id}
                    value={value}
                    type="text"
                    style={{
                        color: color,
                        fontWeight: "bold",
                    }}
                    readOnly
                />
                <label htmlFor={id}>{label}</label>
            </div>
        );
    }
}
