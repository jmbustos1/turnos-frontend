import React, { Component } from 'react';

export default class SignUp extends Component {
  // Inicializa el estado para almacenar los valores de los campos de entrada
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  // Maneja los cambios en los campos de entrada y actualiza el estado
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Maneja el envío del formulario
  handleSubmit = async (event) => {
    event.preventDefault();

    const signUpUrl = 'http://localhost:8000/api/signup/';
    const { firstName, lastName, email, password } = this.state;

    try {
      const response = await fetch(signUpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Registro exitoso
        console.log('Registro exitoso');
        // Aquí puedes redireccionar al usuario o mostrar un mensaje de éxito
      } else {
        // Manejo de respuestas de error del servidor
        console.error('Error en el registro');
      }
    } catch (error) {
      // Manejo de errores en la solicitud
      console.error('Error en la solicitud:', error);
    }
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            value={firstName}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            value={lastName}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}