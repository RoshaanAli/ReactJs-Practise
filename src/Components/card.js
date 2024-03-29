import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props) {
    return (
        <div style={{height:'100%'}} className="card">
            <img className="card-img-top"
                src={props.featureImage}
                alt="cap image" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
}