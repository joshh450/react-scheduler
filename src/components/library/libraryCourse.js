import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat aliquam dui, ac convallis metus. Mauris ut purus vulputate diam ultricies vehicula. Sed viverra scelerisque purus, id luctus felis ullamcorper quis. Vivamus et lectus et tellus bibendum euismod. Suspendisse vehicula vehicula sodales.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;