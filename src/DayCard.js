import React from "react";

export class DayCard extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="day">

                </div>

                <div className="weatherIcon">
                    
                </div>

                <div className="temperature">
                    <div className="temperatureLow">

                    </div>
                    <div className="temperatureHigh">

                    </div>
                </div>
            </div>
        )
    }

}