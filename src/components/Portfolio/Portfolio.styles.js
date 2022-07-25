import styled from "styled-components";

export const Wrapper = styled.section`
  background: whitesmoke;
  color: black;
  padding-top: 2vh;
  padding-left: 20vw;
  padding-right: 20vw;
  height: 160vh;
  /* margin-left: 5vw;
    margin-right: 5vw; */

  @media screen and (max-width: 720px) {
    margin-left: -5px;
    padding-left: 20px;
    height: 1250px;
    max-width: 100vw;

    .projectImage {
      visibility: hidden;
    }
  }
`;

export const PaycordStyle = styled.div`
  position: relative;
  float: left;
  padding-bottom: 50px;

  @media screen and (max-width: 720px) {
    max-width: 100vw;
  }

  img {
    border-radius: 5px;
  }

  a.projectName {
    text-decoration: none;
    color: var(--orange);
    position: absolute;
    top: 25px;
    right: -400px;
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      position: relative;
      right: 0px;
      top: -350px;
    }

    :visited {
      color: var(--orange);
    }
  }

  h3 {
    margin: 0px;
  }

  p {
    position: absolute;
    top: 75px;
    right: -400px;
    width: 450px;
    padding: 25px;
    border-radius: 10px;
    background: lightgray;
    box-shadow: 2px 2px 1px gray;

    @media screen and (max-width: 720px) {
      left: 0px;
      top: 50px;
      width: 90vw;
    }
  }

  ul {
    position: absolute;
    left: 750px;
    bottom: 150px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    opacity: 75%;

    @media screen and (max-width: 720px) {
      left: 0px;
      bottom: 175px;
    }

    li {
      display: inline;
      padding-right: 10px;
    }
  }
`;

export const TeamBlueStyle = styled.div`
  position: relative;
  float: right;
  padding-bottom: 50px;
  padding-right: 20px;

  @media screen and (max-width: 720px) {
    max-width: 95vw;
    left: -180px;
  }

  img {
    border-radius: 5px;
    right: 10px;
  }

  a.projectName {
    text-decoration: none;
    color: var(--orange);
    position: absolute;
    top: 50px;
    left: -425px;
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      top: -100px;
      left: 230px;
    }

    :visited {
      color: var(--orange);
    }
  }

  h3 {
    margin: 0px;
    max-width: 500px;
    padding-left: 20px;
  }

  p {
    position: absolute;
    top: 100px;
    left: -400px;
    width: 450px;
    padding: 25px;
    border-radius: 10px;
    background: lightgray;
    box-shadow: 2px 2px 1px gray;

    @media screen and (max-width: 720px) {
      top: 0px;
      left: 250px;
      width: 90vw;
    }
  }

  ul {
    position: absolute;
    right: 900px;
    bottom: 125px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    opacity: 75%;
    width: 200px;

    @media screen and (max-width: 720px) {
      right: -150px;
      bottom: 175px;
    }

    li {
      display: inline;
      padding-right: 10px;
      height: 5px;
    }
  }
`;

export const BlenderStyle = styled.div`
  position: relative;
  padding-bottom: 50px;
  bottom: -450px;
  left: 0px;

  @media screen and (max-width: 720px) {
    max-width: 100vw;
  }

  img {
    position: absolute;
    border-radius: 5px;
    right: 650px;
    top: 400px;
  }

  a.projectName {
    text-decoration: none;
    color: var(--orange);
    position: absolute;
    top: 400px;
    right: 0px;
    font-size: var(--fontSuperBig);
    max-width: 500px;

    @media screen and (max-width: 720px) {
      position: relative;
      right: 0px;
      top: -550px;
    }

    :visited {
      color: var(--orange);
    }
  }

  h3 {
    margin: 0px;
  }

  p {
    position: absolute;
    top: 500px;
    right: 150px;
    width: 550px;
    padding: 25px;
    border-radius: 10px;
    background: lightgray;
    box-shadow: 2px 2px 1px gray;

    @media screen and (max-width: 720px) {
      left: 0px;
      top: 475px;
      width: 90vw;
    }
  }

  ul {
    position: absolute;
    left: 550px;
    top: 650px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    opacity: 75%;

    @media screen and (max-width: 720px) {
      left: 10px;
      top: 660px;
    }

    li {
      display: inline;
      padding-right: 10px;
      height: 5px;
    }
  }
`;
