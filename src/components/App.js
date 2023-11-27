import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
// import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
	state = {
		users: [],
	};

	handleDataFetch = () => {
		fetch(API)
			.then(response => {
				if (response.ok) {
					return response;
				}
				throw Error(response.status);
			})
			.then(response => response.json())
			.then(data => {
				const user = data.results;
				this.setState(prevState => ({
					users: prevState.users.concat(user),
				}));
			})
			.catch(error => console.log(error));
	};

	buttonFetchUsers = () => {
		return <button onClick={this.handleDataFetch}>Dodaj użytkownika</button>;
	};

	render() {
		const users = this.state.users;
		return (
			<div>
				{this.buttonFetchUsers()}
				{/* <ButtonFetchUsers click={this.handleDataFetch} /> */}
				<div>{users.length > 0 ? <UsersList users={users} /> : users}</div>
			</div>
		);
	}
}

export default App;