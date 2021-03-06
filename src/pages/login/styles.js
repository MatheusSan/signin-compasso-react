import styled from "styled-components";
import bgImage from "../../assets/login/background.png";
import User from "../../assets/login/icon_user.svg";
import Password from "../../assets/login/icon_password.svg";
import Logo from "../../assets/login/logo.png";

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  @media (max-width: 1024px) {
    background: none;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  height: 100vh;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    background: #1c1d20;
    height: ${(props) => (props.error ? "115vh" : "105vh")};
  }
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  width: auto;
  flex-flow: column;
  margin-top: 10%;

  width: 100%;
`;

export const ResponsiveBox = styled.div`
  width: 379px;
  @media (max-width: 1024px) {
    width: 90%;
    max-width: 500px;
  }
`;

export const IconContainer = styled.form`
  width: 100%;
  height: 93px;
  @media (max-width: 1024px) {
  }
`;

export const BackgroundContainer = styled.div`
  width: 50%;
  float: right;
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: #e0e0e0;
  font-size: 60px;
  text-align: left;
  margin-bottom: 17px;
`;

export const SubTitle = styled.p`
  color: #e0e0e0;
  font-size: 16px;
  text-align: left;
  margin-bottom: 135px;
  @media (max-width: 1024px) {
    margin-bottom: 93px;
  }
  @media (max-height: 850px) {
    margin-bottom: 40px;
  }
`;

export const LoginTitle = styled.p`
  color: #e0e0e0;
  font-size: 30px;
  text-align: left;
  margin-bottom: 32px;
  @media (max-height: 750px) {
    margin-bottom: 20px;
  }
`;

export const UserIcon = styled.p`
  background-image: url(${User});
  width: 20px;
  background-repeat: no-repeat;
  height: 25px;
  margin-left: 89%;
  position: relative;
  top: -80px;
  @media (max-width: 1024px) {
    float: right;
    position: relative;
    transform: translateY(160%);
    margin-right: 20px;
  }
`;

export const PasswordIcon = styled.p`
  background-image: url(${Password});
  width: 20px;
  background-repeat: no-repeat;
  height: 25px;
  margin-left: 89%;
  position: relative;
  top: -80px;
  @media (max-width: 1024px) {
    float: right;
    position: relative;
    transform: translateY(160%);
    margin-right: 20px;
  }
`;

export const LogoIcon = styled.p`
  background-image: url(${Logo});
  width: 306px;
  height: 69px;
  margin-top: 35px;
`;

export const LogoForm = styled.p`
  background-image: url(${Logo});
  display: none;
  width: 306px;
  height: 69px;
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: contain;
  top: 11px;
  right: 8%;
  float: right;
  position: absolute;
  @media (max-width: 1024px) {
    display: block;
    width: 248px;
    height: 57px;
  }
`;

export const Error = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #e9b425;
  padding-bottom: 20px;
  line-height: 22px;
`;
