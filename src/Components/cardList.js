import React from 'react';
import Card from './card';
import logo from './logo.jpg';
import github from './github.png';
import react from './react.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardList() {
    return (
        <div>
            <div style={{margin:"10px"}} className="row">
                <div className="col-sm-4">
                    <Card
                        featureImage={github}
                        title="Github"
                        description="GitHub is a code hosting platform for collaboration and version control. GitHub lets you (and others) work together on projects."
                        link="https://www.github.com"
                    />
                </div>
                <div className="col-sm-4">
                    <Card
                        featureImage={logo}
                        title="Youtube"
                        description="YouTube is a video sharing service where users can create their own profile, upload videos, watch, like and comment on other videos."
                        link="https://www.youtube.com"
                    />
                </div>
                <div className="col-sm-4">
                    <Card
                        featureImage={react}
                        title="React"
                        description="A JavaScript library for building user interfaces"
                        link="https://reactjs.org"
                    />
                </div>
            </div>

            <div style={{margin:"10px"}} className="row">
                <div className="col-sm-4">
                    <Card
                        featureImage={github}
                        title="Github"
                        description="GitHub is a code hosting platform for collaboration and version control. GitHub lets you (and others) work together on projects."
                        link="https://www.github.com"
                    />
                </div>
                <div className="col-sm-4">
                    <Card
                        featureImage={logo}
                        title="Youtube"
                        description="YouTube is a video sharing service where users can create their own profile, upload videos, watch, like and comment on other videos."
                        link="https://www.youtube.com"
                    />
                </div>
                <div className="col-sm-4">
                    <Card
                        featureImage={react}
                        title="React"
                        description="A JavaScript library for building user interfaces"
                        link="https://reactjs.org"
                    />
                </div>
            </div>
        </div>
    );
}