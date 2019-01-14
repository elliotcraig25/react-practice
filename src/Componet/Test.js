import React, {Component} from 'react'

class Test extends Component{
    constructor(){
        super()
        this.state = {
            a: 'a',
            b: 'b',
            c: 'c',
            name: '',
        }
    }
    handleChang(value){
        this.setState({
            name: value
        })
    }
    render(){
        return (
            <div>
                <h4></h4>
                <div></div>
                <span></span>
                <input onChange={event => this.handleChang(evenet.target.value)}/>
            </div>
        )
    }
}

export default Test