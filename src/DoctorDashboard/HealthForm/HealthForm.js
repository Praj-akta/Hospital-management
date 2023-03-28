import React, { useState } from 'react';
import '../HealthForm/HealthForm.scss';

function HealthForm() {
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyTemperature, setBodyTemperature] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ bloodPressure, bloodSugar, weight, bodyTemperature, prescription });
  };

  return (
  <div className="HealthForm">
    <form onSubmit={handleSubmit}>
      <label>
        Blood Pressure:
        <input type="text" value={bloodPressure} onChange={(event) => setBloodPressure(event.target.value)} />
      </label>
      <br />
      <label>
        Blood Sugar:
        <input type="text" value={bloodSugar} onChange={(event) => setBloodSugar(event.target.value)} />
      </label>
      <br />
      <label>
        Weight:
        <input type="text" value={weight} onChange={(event) => setWeight(event.target.value)} />
      </label>
      <br />
      <label>
        Body Temperature:
        <input type="text" value={bodyTemperature} onChange={(event) => setBodyTemperature(event.target.value)} />
      </label>
      <br />
      <label>
        Prescription:
        <input type="text" value={prescription} onChange={(event) => setPrescription(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );

}

export default HealthForm;