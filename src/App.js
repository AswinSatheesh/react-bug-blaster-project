import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./Components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import { useReducer } from "react";
import TicketList from "./Components/TicketList";

function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <div>
          <TicketForm dispatch={dispatch} />

          {state.tickets.length > 0 && (
            <div className="results">
              <h2>All Tickets</h2>

              <TicketList tickets={state.tickets} dispatch={dispatch} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
