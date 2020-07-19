import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ChromeIndustriesPage = () => (
  <Layout>
    <SEO title="ChromeIndustriesPage" />
    <div>
      <div style={{ textAlign: "center", padding: `20px` }}>
        <Link
          to="/"
          style={{
            color: "#000000",
            padding: "10px",
          }}
        >
          Back
        </Link>
        <Link
          to="/videos/green-dream"
          style={{
            color: "#000000",
            padding: "10px",
          }}
        >
          Next
        </Link>
      </div>
    </div>
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        marginBottom: `.5rem`,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/WrBE1s6HSo4`}
        frameBorder="0"
        allowFullScreen={true}
        title="chrome industries short shorts - u lock"
      />
    </div>
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        marginBottom: `.5rem`,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/XmNUroFU0lc`}
        frameBorder="0"
        allowFullScreen={true}
        title="chrome industries short shorts - pocket"
      />
    </div>
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        marginBottom: `.5rem`,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/8WCbwy9DpII`}
        frameBorder="0"
        allowFullScreen={true}
        title="chrome industries short shorts - water resistance"
      />
    </div>
  </Layout>
)

export default ChromeIndustriesPage
