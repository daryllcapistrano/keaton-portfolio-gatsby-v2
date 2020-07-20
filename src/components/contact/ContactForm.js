import React from "react"
import styled from "styled-components"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import { IconContext } from "react-icons"
import { GrContactInfo, GrInstagram, GrSend, GrPhone } from "react-icons/gr"

const Wrapper = styled(Container)`
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
`
const ContactHeader = styled.h3`
  text-align: center;
  font-size: 1em;
`
const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: 200;
`
const FormButton = styled.button`
  background-color: #373a47;
  border: none;
  color: #f0f0f0;
  padding: 7px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
`

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
              <div>
                <GrContactInfo />
              </div>
            </IconContext.Provider>
            Contact Me
          </ContactHeader>
        </Container>
        <Container style={{ paddingLeft: `7px` }}>
          <ul style={{ listStyleType: `none`, padding: `0` }}>
            <li>
              <Link class="button" href="tel:971.347.6704">
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "1rem",
                  }}
                >
                  <GrPhone />
                </IconContext.Provider>{" "}
                <span>971.347.6704</span>
              </Link>
            </li>
            <br />
            <li>
              <Link class="button" href="mailto:keatonrodgersmedia@gmail.com">
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "1rem",
                  }}
                >
                  <GrSend />
                </IconContext.Provider>{" "}
                <span>keatonrodgersmedia@gmail.com</span>
              </Link>
            </li>
            <br />
            <li>
              <Link
                class="button"
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
                <span>@keatonrodgers</span>
              </Link>
            </li>
          </ul>
        </Container>
        {/* begin form */}
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mqkyekqz"
          method="POST"
          autoComplete="off"
          noValidate
          style={{ borderRadius: 0 }}
        >
          <Container style={{ padding: `0` }}>
            <TextField
              id="standard-basic-firstname"
              type="text"
              name="first-name"
              label="First Name"
              fullWidth
              variant="outlined"
              style={{ margin: `5px` }}
            />
            <TextField
              id="standard-basic-lastname"
              type="text"
              name="last-name"
              label="Last Name"
              fullWidth
              variant="outlined"
              style={{ margin: `5px` }}
            />
          </Container>

          <TextField
            id="standard-basic-email"
            type="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            style={{ margin: `5px` }}
          />

          <TextField
            id="standard-basic-message"
            type="text"
            name="message"
            label="Send me a message"
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            data-shrink="false"
            style={{ margin: `5px` }}
          />
          {status === "SUCCESS" ? (
            <p style={{ textAlign: `center` }}>
              Thanks! I'll contact you shortly
            </p>
          ) : (
            <div style={{ textAlign: `center`, padding: `.5rem` }}>
              <FormButton>Submit</FormButton>
            </div>
          )}
          {status === "ERROR" && (
            <p style={{ textAlign: `center` }}>Please enter a message</p>
          )}
        </form>
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
