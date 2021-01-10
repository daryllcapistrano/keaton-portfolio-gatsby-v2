import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const PricesAreLow = () => (
  <Layout>
    <SEO title="Prices Are Low" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-rain">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/creature-quarantine-sessions">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/TVbZff32XIQ`}
          frameBorder="0"
          allowFullScreen={true}
          title="prices are low"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default PricesAreLow
