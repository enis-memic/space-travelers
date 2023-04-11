import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Missions from '../../components/Missions';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Myprofile from '../../components/Myprofile';

describe('Render All Components', () => {
  test('render navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot(`
    <div className="links">
      <a href="/">Rockets</a>
      <a href="Missions">Missions</a>
      <div className="line"> </div>
      <a href="Myprofile">My Profile</a>
    </div>`);
  });

  test('render Header', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot(`<div className="header">
    <div className="header-1">
      <img src={planet} alt="planet logo" />
      <h1 className="header-photo">Space Travelers&apos; Hub</h1>
    </div>
    <Navbar />
  </div>`);
  });

  test('render missions', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot(`
        <table>
           <thead>
             <tr>
               <th>
                 Mission
               </th>
               <th>
                 Description
               </th>
               <th>
                 Status
               </th>
             </tr>
           </thead>
           <tbody />
         </table>
         <tr
      class="mission-list"
    >
      <td
        class="mission-title"
      />
      <td
        class="mission-description"
      />
      <td
        class="mission-status"
      >
        <button
          class="non-member"
        >
          Reserve
        </button>
      </td>
      <td
        class="mission-button"
      >
        <button
          class="Reserve"
          type="button"
        >
          Join Mission
        </button>
      </td>
    </tr>
    `);
  });
  test('render MyProfile', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Myprofile />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot(`
    <div className="my-profile-div">
      <div>
        <h2 className="my-profile-h2">My missions</h2>
        <table className="mprtable">
          <tbody>
            <tr key={joinedMission.mission_id}>
                 <td className="mprtd"></td>
                </tr>
          </tbody>
        </table>
      </div>
      <div className="mprdiv">
        <h2 className="my-profile-h2">My rockets</h2>
        <table className="mprtable">
          <tbody>
             <tr key={reservedRocket.id}>
                  <td className="mprtd"></td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>`);
  });
});
