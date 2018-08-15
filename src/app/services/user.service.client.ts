
import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('https://a-node-server.herokuapp.com/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  register = (newUser) =>
    fetch('https://a-node-server.herokuapp.com/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

  currentUser() {
    return fetch('https://a-node-server.herokuapp.com/api/profile', {
      credentials: 'include'
    }).then(response => {
      if (response.status == 403) {
        return null;
      }
      return response.json()
    });
  }


  updateUser = (updatedUser) =>
    fetch('https://a-node-server.herokuapp.com/api/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })

  logout = () =>
    fetch('https://a-node-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })


}
