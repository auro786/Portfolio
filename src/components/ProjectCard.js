import { Row, Col } from "react-bootstrap";

export const ProjecCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={projUrl} id="proj-link" target="_blank">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
