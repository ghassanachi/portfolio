import React from "react";
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
    <img src="https://imgs.xkcd.com/comics/containers_2x.png" />
    <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
  </Layout>
)


export default Home;