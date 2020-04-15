import React from 'react'
import Pic01 from './Pic01.jpeg'
import {Media} from 'react-bootstrap'

class ImagePage extends React.Component{
    render(){
        return (
            <div>
                <Media>
                <img src={Pic01}
                    width={60}
                    height={75}
                    className="mr-3"/>
                <Media.Body>
                    <h5>this is h5 title</h5>
                    <p>content from here</p>
                </Media.Body>
                </Media>
            </div>
        );
    }
}

export default ImagePage