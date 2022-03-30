import AllContacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const firstFive = AllContacts.slice(30, 35);
  const [celebs, setCelebs] = useState(firstFive);
  console.log(firstFive);

  // const addRandom = () => {
  //   const randomIndex = Math.floor(Math.random() * AllContacts.length);
  //   const setCelebrities = new Set(celebs);
  //   setCelebs([AllContacts[randomIndex], ...celebs]);
  // };

  const addRandom = () => {
    const random = AllContacts[Math.floor(Math.random() * AllContacts.length)];
    if (celebs.find((celebs) => celebs.id === random.id)) {
      if (celebs.length < AllContacts.length) {
        addRandom();
      }
      return;
    }
    setCelebs((celebs) => [random, ...celebs]);
  };

  const sortByName = () => {
    const deepCopy = JSON.parse(JSON.stringify(celebs));
    deepCopy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setCelebs(deepCopy);
  };

  const sortByPop = () => {
    const deepCopy = JSON.parse(JSON.stringify(celebs));
    deepCopy.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    setCelebs(deepCopy);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPop}>Sort By Popularity</button>
      <button onClick={addRandom}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th className="betterLook">Won Oscar</th>
            <th className="betterLook">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((el, index) => {
            return (
              <tr>
                <td>
                  <img
                    src={el.pictureUrl}
                    alt="celebrities Pictures"
                    style={{ height: "200px" }}
                  />
                </td>
                <td>
                  <h3>{el.name}</h3>
                </td>
                <td>
                  <h3>{el.popularity}</h3>
                </td>
                <td>
                  {el.wonOscar ? <h3 className="betterLookH3">🏆</h3> : null}
                </td>
                <td>
                  <h3>
                    {el.wonEmmy ? <h3 className="betterLookH3">🏆</h3> : null}
                  </h3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
