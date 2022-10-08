import {Col, Row, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Banner = () =>{
    return (
        <div className='box-title'>
            <Container className='text-white d-flex justify-content-start
            align-items-center'>
                <Row>
                    <Col>
                        <div className='text'>
                            Doctor Strange in the
                            <div>
                                Multiverse of
                            </div>
                            <div>
                                Madness
                            </div>
                        </div>
                    </Col>
                        <div>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, 
                            and publishing industries for previewing layouts and visual mockups.
                        </div>
                    <Container>
                        <Button variant="danger" className='mt-4'>Watch Trailer</Button>{' '}
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;