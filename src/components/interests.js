import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { srConfig } from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section } from '../styles';

import ScrollReveal from 'scrollreveal';
import Heading from '../styles/Heading';

const InterestsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;

const InterestsGrid = styled.div`
  .interests {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const InterestInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 25px;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${theme.colors.lightNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  &:hover,
  &:focus {
    ${InterestInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${theme.colors.shadowNavy};
      box-shadow: 0 19px 38px ${theme.colors.darkestNavy} 0 15px 12px ${theme.colors.shadowNavy};
    }
  }
`;
const InterestTop = styled.div``;
const InterestBottom = styled.div``;
const InterestHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const InterestName = styled.h5`
  margin: 0 0 10px;
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.lightestSlate};
`;
const InterestDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;
  a {
    ${mixins.inlineLink};
  }
`;

class Interests extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  state = {
    showMore: false,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.interests, srConfig());
    this.revealRefs.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)));
  }

  render() {
    const GRID_LIMIT = 6;
    const { data } = this.props;
    const projectsToShow = data;

    return (
      <InterestsContainer id="interests">
        <Heading ref={el => (this.interests = el)}>My Interests</Heading>
        <InterestsGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title } = frontmatter;
                return (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                    exit={false}>
                    <Project
                      key={i}
                      ref={el => (this.revealRefs[i] = el)}
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}>
                      <InterestInner>
                        <InterestTop>
                          <InterestName>{title}</InterestName>
                          <InterestDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </InterestTop>
                        <InterestBottom />
                      </InterestInner>
                    </Project>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </InterestsGrid>
      </InterestsContainer>
    );
  }
}

export default Interests;
