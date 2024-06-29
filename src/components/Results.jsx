import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  // console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>연도</th>
          <th>투자 가치</th>
          <th>이자(연도)</th>
          <th>총 이자</th>
          <th>투자 자본</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((YearData) => {
          const totalInterest =
            YearData.valueEndOfYear -
            YearData.annualInvestment * YearData.year -
            initialInvestment;
          const totalAmountInvested = YearData.valueEndOfYear - totalInterest;

          return (
            <tr key={YearData.year}>
              <td>{YearData.year}</td>
              <td>{formatter.format(YearData.valueEndOfYear)}</td>
              <td>{formatter.format(YearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
