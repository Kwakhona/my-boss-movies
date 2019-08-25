import React from 'react';
// import PropTypes from 'prop-types';
import { CardBody, Card, CardImage, CardText, CardTitle, CardFooter, CardTextMuted } from './styles';


const Movie = ({title, synopsis, imageUrl, releaseDate}) => {

  return (
    <Card>
      <CardImage src={imageUrl} />
      <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {synopsis}
            </CardText>
          </CardBody>
          <CardFooter>
            <strong>Release: </strong><CardTextMuted>{releaseDate}</CardTextMuted>
          </CardFooter>
        </Card>
  );
}
Movie.propTypes = {

};
export default Movie;