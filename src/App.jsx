import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const toggleItem = item => {
    return selectedGood === item ? setSelectedGood('') : setSelectedGood(item);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              onClick={() => setSelectedGood('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              key={item}
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === item,
              })}
            >
              <td>
                <button
                  onClick={() => toggleItem(item)}
                  data-cy={selectedGood === item ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    ('button', cn({ 'is-info': selectedGood === item }))
                  }
                >
                  {selectedGood === item ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
