import React from "react";
import PaymentComponent from "./PaymentWidget/PaymentComponent";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Container>
            <PaymentComponent
              keys={{
                stripe:
                  "pk_test_51Lx5qsGk9QczIREZpDbqjZyvsaRSPUY0grzLNOYs0TOdQl79nEgyuuZMjflNM5HJ0TGtDGZyVeKV0GCLYF4BcLF700q7sKpf15",
              }}
            />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}
