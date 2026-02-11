import React , {Component} from "react";
 class Users extends Component{

    constructor(){
        super()
    }
    state = {
        usersData : []

    }
    static getDerivedstateFromProps(){
     return null
    }

    componentDidMount(){
        this.FetchUsersData()
    }
    FetchUsersData = async() => {
        const response = await fetch("http://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
        this.setState({usersData :data})
    }
    render(){
        

        return(
         <>
         <h2>Users</h2>
         {

            // this.state.usersData && this.state.usersData.length>0 && 
            //  this.state.usersData.map((ele,_i)=>(
            //   <tr key = {-i}>

                
            //   </tr>
            // )
            // )

            
         }
                              
         </>)
    }
 }

export default Users