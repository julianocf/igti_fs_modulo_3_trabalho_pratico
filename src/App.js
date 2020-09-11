import React, { Component } from "react";

import { calculateSalaryFrom } from "./helpers/salary";
import { formatCurrency } from "./helpers/formatHelper";

import PercentageBar from "./components/PercentageBar";
import ReadOnlyInput from "./components/ReadOnlyInput";

export default class App extends Component {
    constructor() {
        super();
        this.state = { grossSalary: 0 };
    }

    calculatePercentage = (number, total) => {
        if (number === 0) {
            return 0;
        }
        return ((number * 100) / total).toFixed(2);
    };

    handleGrossSalaryChange = (event) => {
        let grossSalary = parseFloat(event.target.value);

        if (isNaN(grossSalary)) {
            grossSalary = 0;
        }
        this.setState({ grossSalary });
    };

    render() {
        const {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        } = calculateSalaryFrom(this.state.grossSalary);

        const discountINSSPercentage = this.calculatePercentage(
            discountINSS,
            this.state.grossSalary
        );
        const discountIRPFPercentage = this.calculatePercentage(
            discountIRPF,
            this.state.grossSalary
        );
        const netSalaryPercentage = this.calculatePercentage(
            netSalary,
            this.state.grossSalary
        );

        return (
            <div className="container">
                <h1>React Salário</h1>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="gross_salary"
                            type="number"
                            defaultValue="0"
                            onChange={this.handleGrossSalaryChange}
                            autoFocus
                        />
                        <label htmlFor="salario_bruto">Salário bruto</label>
                    </div>
                    <ReadOnlyInput
                        id="base_inss"
                        label="Base INSS"
                        value={formatCurrency(baseINSS)}
                    />
                    <ReadOnlyInput
                        id="desconto_inss"
                        label="Desconto INSS"
                        value={`${formatCurrency(
                            discountINSS
                        )} (${discountINSSPercentage}%)`}
                        color="#e67e22"
                    />
                    <ReadOnlyInput
                        id="base_irpf"
                        label="Base IRPF"
                        value={formatCurrency(baseIRPF)}
                    />
                    <ReadOnlyInput
                        id="desconto_irpf"
                        label="Desconto IRPF"
                        value={`${formatCurrency(
                            discountIRPF
                        )} (${discountIRPFPercentage}%)`}
                        color="#c0392b"
                    />
                    <ReadOnlyInput
                        id="salario_liquido"
                        label="Salário líquido"
                        value={`${formatCurrency(
                            netSalary
                        )} (${netSalaryPercentage}%)`}
                        color="#16a085"
                    />
                </div>
                <PercentageBar
                    valueINSS={discountINSSPercentage}
                    colorINSS="#e67e22"
                    valueIRPF={discountIRPFPercentage}
                    colorIRPF="#c0392b"
                    valueNetSalary={netSalaryPercentage}
                    colorNetSalary="#16a085"
                />
            </div>
        );
    }
}
