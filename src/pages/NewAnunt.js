import { useHistory } from 'react-router-dom';

import NewAnuntForm from '../components/Anunturi/NewAnuntForm';

function NewAnuntPage() {
const history = useHistory();

  function addAnuntHandler(AnuntData) {
    fetch(
      'https://my-react-app-ddf88-default-rtdb.europe-west1.firebasedatabase.app/Anunturi.json',
      {
        method: 'POST',
        body: JSON.stringify(AnuntData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then (() => {
        history.replace('/');
    });
  }

  return (
    <section>
      <h1>Adauga Anunt</h1>
      <NewAnuntForm onAddAnunt={addAnuntHandler} />
    </section>
  );
}

export default NewAnuntPage;