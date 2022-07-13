import React from "react"


class DisplayTable extends React.Component{

    constructor(props){
    super(props)
    this.state = {
        list: []
    }

    this.callAPI = this.callAPI.bind(this)
    this.callAPI();
    }

    callAPI(){
        //fetch data from API
        fetch("https://api.sampleapis.com/fakebank/accounts").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list:data.data
            })
        })
    }

render(){
    let tb_data = this.state.list.map((item) =>{
        return(
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.debit}</td>
                <td>{item.credit}</td>
                <td>{item.id}</td>
                <td>
                    <button className="btn btn-danger">Detail</button>
                </td>
            </tr>
        )
    })
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Transaction Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {tb_data}
                </tbody>
            </table>
        </div>
    )}
}

export default DisplayTable;