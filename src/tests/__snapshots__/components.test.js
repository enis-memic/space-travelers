import { MemoryRouter } from 'react-router-dom';
import {
  render,
  screen, fireEvent, within,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import store from '../../redux/store';
import Missions from '../../components/Missions';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Myprofile from '../../components/Myprofile';

import '@testing-library/jest-dom/extend-expect';
import Rockets from '../../components/Rockets';

describe('Render All Components', () => {
  test('render navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
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
      </MemoryRouter>,
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
      </MemoryRouter>,
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
      </MemoryRouter>,
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

const mockStore = configureMockStore();

describe('Rockets', () => {
  const initialState = {
    rockets: {
      rockets: [
        {
          id: '1',
          rocket_name: 'Rocket 1',
          description: 'Rocket 1 description',
          flickr_images: ['https://example.com/rocket1.jpg'],
          reserved: false,
        },
        {
          id: '2',
          rocket_name: 'Rocket 2',
          description: 'Rocket 2 description',
          flickr_images: ['https://example.com/rocket2.jpg'],
          reserved: false,
        },
        {
          id: '3',
          rocket_name: 'Rocket 3',
          description: 'Rocket 3 description',
          flickr_images: ['https://example.com/rocket2.jpg'],
          reserved: true,
        },
      ],
      fetched: true,
    },
  };

  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  test('renders Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /Rocket 1/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Rocket 2/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Rocket 3/i })).toBeInTheDocument();
  });

  test('reserves a rocket', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketElement = screen.getByTestId('rocket-1');
    const reserveButton = within(rocketElement).getByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton);

    expect(store.getActions()).toEqual([{ type: 'rockets/bookRockets', payload: '1' }]);
  });

  test('cancels reservation', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketElement = screen.getByTestId('rocket-3');
    const cancelButton = within(rocketElement).getByText(/Cancel Reservation/i);
    fireEvent.click(cancelButton);

    expect(store.getActions()).toEqual([{ type: 'rockets/unBookRockets', payload: '3' }]);
  });
});
