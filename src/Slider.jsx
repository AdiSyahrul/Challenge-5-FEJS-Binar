import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function Slider(){
  return (
    <Carousel>
      {/* 1 */}
      <Carousel.Item interval={750}>
        <img className="d-block w-100"
        src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg"
        alt="First slide"/>
        <Carousel.Caption>
          <h3>The Godfather</h3>
          <p>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 2 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>The Shawshank Redemption</h3>
          <p>Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/kGzFbGhp99zva6oZODW5atUtnqi.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The Godfather Part II</h3>
          <p>In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/zb6fM1CX41D9rF9hdgclu0peUmy.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Schindler's List</h3>
          <p>The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* 5 */}
      <Carousel.Item interval={750}>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>千と千尋の神隠し</h3>
          <p>A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;