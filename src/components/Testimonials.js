import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useStaticQuery, graphql } from 'gatsby';

const Testimonials = () => {

  const data = useStaticQuery(graphql`
    query PortraitQuery {
      allFile(filter: {ext: {regex: "/(jpeg)|(png)|(jpg)/"}, name: {in: ["portrait_1", "portrait_2"]}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <TestimonialsContainer>
      <TopLine>
        Testimonials
      </TopLine>
      <Description>
        What People Are Saying?
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline 
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michaels</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb 
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
           />
            <h3>Sarah Kim</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {
            data.allFile.edges.map((image, index) => {
              const img = getImage(image.node);
              return (
                <Images image={img} key={index} alt="" />
              )
            })
          }
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  text-align: left;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  p {
    color: #3b3b3b;
  }
`;

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Images = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`;

export default Testimonials;