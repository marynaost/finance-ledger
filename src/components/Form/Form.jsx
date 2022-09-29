import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { Picture } from 'components/Picture/Picture'
import { handleSubmit } from 'services/netlifyForm'
import Container from 'components/Container/Container'
import contact from 'images/home/contact.jpg'
import contact2 from 'images/home/contact@2x.jpg'
import contactwebp from 'images/home/contact.webp'
import contactwebp2 from 'images/home/contact@2x.webp'

const validateSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a required field'),
})

export default function Forma() {
  return (
    <Section id="contact">
      <Picture
        webp1x={contactwebp}
        webp2x={contactwebp2}
        jpg1x={contact}
        jpg2x={contact2}
        className="picture"
        imgStyle="img"
      />
      <Container className="secondary">
        <Title>Request Callback</Title>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={validateSchema}
          onSubmit={(values, onSubmitProps) => {
            handleSubmit(values)
            onSubmitProps.resetForm()
          }}
        >
          {({ errors, touched }) => (
            <Form name='contact' method="POST" data-netlify="true">
              <FieldWrap>
                <Field
                  name="name"
                  type="text"
                  placeholder=" "
                  className="field"
                  id="name"
                />
                <label for="name" className="label">
                  Enter your name
                </label>
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <Field
                  name="email"
                  type="email"
                  placeholder=" "
                  className="field"
                  id="email"
                />
                <label for="email" className="label">
                  Enter email*
                </label>
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </FieldWrap>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  color: #333;
  .picture {
    @media screen and (min-width: 768px) {
      width: 48%;
    }
  }
  .img {
    @media screen and (min-width: 768px) {
      height: 100%;
      object-fit: cover;
    }
  }
  .secondary {
    padding-top: 51px;
    padding-bottom: 25px;
    background: #f4f4f4;

    @media screen and (min-width: 768px) {
      width: 52%;
      margin: 0;
      padding: 32px 32px 33px;
    }

    @media screen and (min-width: 1360px) {
      padding: 80px 20px 80px 28px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    padding-bottom: 40px;
    font-size: 18px;
    line-height: 1.39;
  }
  @media screen and (min-width: 1360px) {
    padding: 0;
  }
`
const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 69px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
    margin-bottom: 24px;
    text-align: left;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 31px;
  }
`

const FieldWrap = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:nth-child(2) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1360px) {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    &:nth-child(2) {
      margin-bottom: 40px;
    }
  }

  .field {
    /* position: relative; */
    width: 100%;
    height: 56px;
    padding: 16px 8px;
    font-size: 16px;
    line-height: 1.35;
    border-radius: 5px;
    outline: none;
    border: 1px solid #f5f5f5;
    color: #333;
    &:focus ~ .label,
    &:not(:placeholder-shown) ~ .label {
      top: 0;
      transform: translateY(calc(-100% - 4px));
      color: #333;
    }
    @media screen and (min-width: 768px) {
      height: 57px;
    }
  }

  .label {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    color: #808080;
  }
  .error {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    align-items: center;
    padding: 4px;
    color: #d11212;
  }
`
