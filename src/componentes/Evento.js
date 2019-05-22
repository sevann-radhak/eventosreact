import React from 'react';
import PropTypes from 'prop-types';

const Evento = (props) => {
    const { name } = props.evento;

    if (!name) return null;

    let desc = props.evento.description.text;

    if(desc.length > 250){
        desc = desc.substr(0, 250);
        desc += "...";
    }

    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {props.evento.logo !== null ?
                        <img src={props.evento.logo.url} alt={props.evento.name.text} />
                        :
                        ''
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-titule">{props.evento.name.text}</h3>
                    <p>{desc}</p>
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" href={props.evento.url} rel="noopener noreferrer" target="_blank">Más información</a>
                </div>
            </div>
        </div>
    );
}

Evento.propTypes = {
    evento: PropTypes.object.isRequired
}

export default Evento;