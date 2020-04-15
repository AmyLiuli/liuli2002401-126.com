import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'

class MainPage extends React.Component{
    render(){
        return(
            <div >
<Container>
    <Row>
        <Col>a001</Col><Col>a002</Col><Col>a003</Col>
    </Row>
    <hr/>
    <Row>                        
        <Col>b001</Col><Col>b002</Col><Col>b003</Col><Col md={6}>b004</Col>
    </Row>
    <hr/>
    <Row className="justify-content-md-center">                        
        <Col md={3}>c001</Col><Col md={3}>c002</Col><Col md="auto">c003</Col>
    </Row>
    <hr/>
<Container>
<Row>
    <Col lg={{span:3,offset:6, noGutters:true}}>column span is 3, and offset is 6</Col>
    <Col lg={2}>my span is 2</Col>
</Row>
</Container>

</Container>
            </div>
        )
    }
}

export default MainPage