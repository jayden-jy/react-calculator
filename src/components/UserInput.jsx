export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">초기 투자액</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">연간 투자량</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">예상 수익</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">투자 기간</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
