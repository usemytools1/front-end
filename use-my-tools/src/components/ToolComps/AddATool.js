import React from "react";

class AddATool extends React.Component {
    state = {
        tool: {
            name: "",
            brand: "",
            category: "",
            description: ""
        }
    };

    handleChange = e => {
        this.setState({
            tool: {
                ...this.state.tool,
                [e.target.name]: e.target.value
            }
        });
    };

    handleAdd = e => {
        e.preventDefault();
        this.props.AddTool(this.state.tool);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.tool.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="brand"
                        value={this.state.tool.brand}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="category"
                        value={this.state.tool.category}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={this.state.tool.description}
                        onChange={this.handleChange}
                    />
                    <button>Add Tool</button>
                </form>
            </div>
        );
    }
}

export default AddATool;
