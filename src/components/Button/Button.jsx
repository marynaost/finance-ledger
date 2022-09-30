import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
import { mainTextColor, accentColor, blogBgColor } from 'styles/stylesVars'

export default function Button({ children, hero, about, blog, submit }) {
  return (
    <>
      {hero && (
        <HeroButton>
          <FaAngleRight /> {children}
        </HeroButton>
      )}
      {about && <AboutButton>{children}</AboutButton>}
      {blog && <BlogButton>{children}</BlogButton>}
      {submit && <SubmitButton>{children}</SubmitButton>}
    </>
  )
}

const ButtonWrap = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 5px;
  color: ${mainTextColor};
  cursor: pointer;
`

const HeroButton = styled(ButtonWrap)`
  background: ${accentColor};
  font-size: 18px;
  line-height: 1.39;
  border: none;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`

const AboutButton = styled(ButtonWrap)`
  background: transparent;
  border: 1px solid ${mainTextColor};
  font-size: 16px;
  line-height: 1.375;

  &:hover,
  &:focus {
    color: ${accentColor};
    background: ${mainTextColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
const BlogButton = styled(AboutButton)`
  &:hover,
  &:focus {
    color: ${blogBgColor};
  }
`
const SubmitButton = styled(HeroButton)`
  padding: 16px 56px;
`
