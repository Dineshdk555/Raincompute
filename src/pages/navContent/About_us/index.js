import React from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Card,
  CardBody,
  Col,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"


const BlogDetails = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>About Us | Rain Computing</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="About Us" breadcrumbItem="About Us" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="pt-3">
                    <div className="row justify-content-center">
                      <div className="col-xl-8">
                        <div>
                          <div className="mt-4">
                            <div className="text-muted font-size-14">
                              <p>
                              Rain Computing was founded to address one of the most challenging IT issues
                              in your company: Managing the diversified software licenses with multiple device platforms.
                              </p>

                              <p className="mb-4">
                              Our purpose is to establish a new way for you to deploy software across multiple
                              device platforms and centralizes software management and licensing to reduce cost.
                              </p>

                              <p>
                              Rain Computing’s system enables a common software infrastructure and offers 
                              a privileged enterprise communication channel among team members.
                              Our solution deploys software across multiple device platforms and
                              centralizes software management and licensing to reduce cost.
                              The built-in topic-based real-time collaboration attempts to replace
                              traditional emails and instant messaging, so as to enhance data security and confidentiality.

                              </p>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BlogDetails
