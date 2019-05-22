import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {
  token = 'UIHWZHELM4H4F7H4RH3S';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locate=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({ categorias: categorias.categories });
      })
  }

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=date&categories=${busqueda.categoria}&token=${this.token}`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        this.setState({ eventos: eventos.events });
        console.log(this.state.eventos)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />
          <Eventos
            eventos={this.state.eventos}
          />
        </div>
      </div>
    );
  }
}

export default App;
