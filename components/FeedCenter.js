import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap';


const FeedCenter = () => {
  return (
    <React.Fragment>
      <div className='border border-primary rounded p-4 'style={{width: '35rem'}}>
        <div>
        <Card className='mb-3 d-flex flex-row'>
          <CardBody>
            <CardLink href="#" >
            <img alt="Card cap" src="https://picsum.photos/100/100" style={{border:"3px solid red" ,borderRadius:"100%"}} width="55px" height="55px" className='p-1'/>
            </CardLink>
          </CardBody>
        </Card>
        </div>

        <div >
          <Card >
            <CardBody>

              <div className='d-flex align-items-center justify-content-between' style={{height:"30px"}}>
                <div className='d-flex align-items-center justify-content-between'>
                  <CardBody>
                    <CardLink >
                    <img alt="Card cap" src="https://picsum.photos/100/100" style={{border:"1px solid red" ,borderRadius:"100%"}} width="35px" height="35px" className='p-1'/>
                    </CardLink>
                  </CardBody>

                  <CardTitle tag="h5">Umaid</CardTitle>
                </div>
              <CardSubtitle className="mb-2 text-muted" tag="h6">...</CardSubtitle>
              </div>

            </CardBody>
            <img alt="Card cap" src="https://picsum.photos/320/360" width="100%" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div>

        <div className='mt-3'>
          <Card>
            <CardBody>

              <div className='d-flex align-items-center justify-content-between' style={{height:"30px"}}>
                <div className='d-flex align-items-center justify-content-between'>
                  <CardBody>
                    <CardLink >
                    <img alt="Card cap" src="https://picsum.photos/100/100" style={{border:"1px solid red" ,borderRadius:"100%"}} width="35px" height="35px" className='p-1'/>
                    </CardLink>
                  </CardBody>

                  <CardTitle tag="h5">Umaid</CardTitle>
                </div>
              <CardSubtitle className="mb-2 text-muted" tag="h6">...</CardSubtitle>
              </div>

            </CardBody>
            <img alt="Card cap" src="https://picsum.photos/320/400" width="100%" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div>

        <div className='mt-3'>
          <Card>
            <CardBody>

              <div className='d-flex align-items-center justify-content-between' style={{height:"30px"}}>
                <div className='d-flex align-items-center justify-content-between'>
                  <CardBody>
                    <CardLink >
                    <img alt="Card cap" src="https://picsum.photos/100/100" style={{border:"1px solid red" ,borderRadius:"100%"}} width="35px" height="35px" className='p-1'/>
                    </CardLink>
                  </CardBody>

                  <CardTitle tag="h5">Umaid</CardTitle>
                </div>
              <CardSubtitle className="mb-2 text-muted" tag="h6">...</CardSubtitle>
              </div>

            </CardBody>
            <img alt="Card cap" src="https://picsum.photos/390/400" width="100%" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div>

      </div>
    </React.Fragment>
  )
}

export default FeedCenter