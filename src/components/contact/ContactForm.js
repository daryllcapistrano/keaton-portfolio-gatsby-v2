import React from "react"
import Container from "@material-ui/core/Container"
import { IconContext } from "react-icons"
import { GrContactInfo, GrInstagram, GrSend, GrPhone } from "react-icons/gr"
import {
  Wrapper,
  ContactHeader,
  Link,
  InfoContainer,
  ContactList,
  ListItem,
  FormWrapper,
  ButtonWrapper,
  FormButton,
  TextFieldWrapper,
  StyledTextField,
  Response,
} from "./styles"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <Wrapper>
        <Container>
          <ContactHeader>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "3em",
              }}
            >
              <Container>
                <GrContactInfo />
              </Container>
            </IconContext.Provider>
            Contact Me
          </ContactHeader>
        </Container>
        <InfoContainer>
          <ContactList>
            <ListItem>
              <Link className="button" href="tel:971.347.6704">
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "1rem",
                  }}
                >
                  <GrPhone />
                </IconContext.Provider>{" "}
                <p>971.347.6704</p>
              </Link>
            </ListItem>
            <hr />
            <ListItem>
              <Link
                className="button"
                href="mailto:keatonrodgersmedia@gmail.com"
              >
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "1rem",
                  }}
                >
                  <GrSend />
                </IconContext.Provider>{" "}
                <p>keatonrodgersmedia@gmail.com</p>
              </Link>
            </ListItem>
            <hr />
            <ListItem>
              <Link
                className="button"
                href="https://www.instagram.com/keatonrodgers"
              >
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "1rem",
                  }}
                >
                  <GrInstagram />
                </IconContext.Provider>{" "}
                <p>@keatonrodgers</p>
              </Link>
            </ListItem>
          </ContactList>
        </InfoContainer>
        {/* begin form */}
        <FormWrapper
          onSubmit={this.submitForm}
          action="https://formspree.io/mqkyekqz"
          method="POST"
          autoComplete="off"
          noValidate
        >
          <TextFieldWrapper>
            <StyledTextField
              id="standard-basic-firstname"
              type="text"
              name="first-name"
              label="First Name"
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              id="standard-basic-lastname"
              type="text"
              name="last-name"
              label="Last Name"
              fullWidth
              variant="outlined"
            />

            <StyledTextField
              id="standard-basic-email"
              type="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
            />

            <StyledTextField
              id="standard-basic-message"
              type="text"
              name="message"
              label="Send me a message"
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              data-shrink="false"
            />
          </TextFieldWrapper>
          {status === "SUCCESS" ? (
            <Response>Thanks! I'll contact you shortly</Response>
          ) : (
            <ButtonWrapper>
              <FormButton>Submit</FormButton>
            </ButtonWrapper>
          )}
          {status === "ERROR" && <Response>Please enter a message</Response>}
        </FormWrapper>
      </Wrapper>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
