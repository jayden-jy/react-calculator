import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="돈가방을 보여주는 로고" />
      <h1>투자 계산기</h1>
    </header>
  );
}
