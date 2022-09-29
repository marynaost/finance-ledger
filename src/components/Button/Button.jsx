import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa'
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

const HeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: #28a745;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.39;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`
const AboutButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  line-height: 1.375;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #28a745;
    background: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
const BlogButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  line-height: 1.375;
  &:hover,
  &:focus {
    color: #0284d0;
    background: #fff;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 16px 56px;
  background: #28a745;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  line-height: 1.39;
  border: none;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`
