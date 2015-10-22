import React from 'react';

import {VelocityTransitionGroup} from 'velocity-react';

const MegaCounterizer = React.createClass({
    render: function () {
        return (
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                {this.props.show ? <div className="megaCounterizer">
                    {this.props.count}
                </div> : undefined }
            </VelocityTransitionGroup>
        );
    }
});

export default MegaCounterizer;
