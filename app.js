class App extends React.Component {
    state = {
        value: '',
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleButtonClick = () => {
        this.setState(() => ({
            value: '',
        }))
    }

    render() {
        return (
            <>
                <input value={this.state.value} placeholder="Write something" onChange={this.handleInputChange} type="text" />
                <ResetButton click={this.handleButtonClick} />
                <TextPanel text={this.state.value.toUpperCase()} />
            </>
        )
    }
}

const ResetButton = (props) => {
    return (
        <button onClick={props.click}>Reset</button>
    )
}

const TextPanel = (props) => {
    return (
        <h1 className="title">{props.text}</h1>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));