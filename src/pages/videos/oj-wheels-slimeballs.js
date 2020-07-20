import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/seo"

const OJSlimePage = () => (
  <Layout>
    <SEO title="OJSlimePage" />
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
          to="/videos/oj-wheels-rain"
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
        src={`https://www.youtube.com/embed/jzNG1TSN7bs`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 2020 promo"
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
        src={`https://www.youtube.com/embed/69BABGRWz0o`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 5"
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
        src={`https://www.youtube.com/embed/-Amo7LoszWw`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 2020 promotional"
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
        src={`https://www.youtube.com/embed/yjHIyzIhBUM`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 9"
      />
    </div>
  </Layout>
)

export default OJSlimePage
