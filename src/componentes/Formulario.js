import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    // Crear los refs
    nombreRef = React.createRef();
    categoriaRef = React.createRef();

    mostrarOpciones = (key) => {
        const categoria = this.props.categorias[key];
        const { id, name_localized } = categoria;

        if (!id || !name_localized) {
            return null;
        }

        return (
            <option key={id} value={id}>{name_localized}</option>
        )
    }

    buscarEvento = (e) => {
        // Prevenir la recarga de la página
        e.preventDefault();

        // Crear el objeto
        const datosBusqueda = {
            nombre: this.nombreRef.current.value,
            categoria: this.categoriaRef.current.value
        }

        // Pasarlo por props
        this.props.obtenerEventos(datosBusqueda);
    }

    render() {
        const categorias = Object.keys(this.props.categorias);

        return (
            <form onSubmit={this.buscarEvento}>
                <fieldset className="uk-fieldset uk-magin">
                    <legend className="ul-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input className="uk-input" type="text" ref={this.nombreRef} placeholder="Nombre de evento o ciudad" />
                        </div>

                        <div className="uk-margin" uk-margin="true">
                            <select className="uk-select" ref={this.categoriaRef}>
                                {categorias.map(this.mostrarOpciones)}
                            </select>
                        </div>

                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

Formulario.propTypes = {
    obtenerEventos: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}

export default Formulario;