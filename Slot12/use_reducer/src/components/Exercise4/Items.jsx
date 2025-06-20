import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

const initialState = {
  items: [],
  filter: '',
  sort: 'name',
  editingId: null,
  editingValue: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!action.payload.trim()) return state;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(),
            name: action.payload,
            created: Date.now(),
          },
        ],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'START_EDIT':
      return {
        ...state,
        editingId: action.payload.id,
        editingValue: action.payload.name,
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        editingId: null,
        editingValue: '',
      };
    case 'SAVE_EDIT':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === state.editingId ? { ...item, name: state.editingValue } : item
        ),
        editingId: null,
        editingValue: '',
      };
    case 'SET_EDITING_VALUE':
      return {
        ...state,
        editingValue: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_SORT':
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
}

function sortItems(items, sort) {
  if (sort === 'name') {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'created') {
    return [...items].sort((a, b) => a.created - b.created);
  }
  return items;
}

const Items = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: input });
    setInput('');
  };

  const filteredItems = sortItems(
    state.items.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
    state.sort
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form onSubmit={handleAdd}>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter item name"
                />
                <Button variant="primary" type="submit">
                  Add Item
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search items"
              value={state.filter}
              onChange={e => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
            />
            <Form.Select
              value={state.sort}
              onChange={e => dispatch({ type: 'SET_SORT', payload: e.target.value })}
              style={{ maxWidth: 200 }}
            >
              <option value="name">Sort by Name</option>
              <option value="created">Sort by Created Time</option>
            </Form.Select>
          </InputGroup>

          <h5 className="mb-3">Item List:</h5>
          <ListGroup>
            {filteredItems.length === 0 && (
              <ListGroup.Item className="text-center text-muted">No items found.</ListGroup.Item>
            )}
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center justify-content-between">
                {state.editingId === item.id ? (
                  <>
                    <Form.Control
                      style={{ maxWidth: 250, marginRight: 8 }}
                      value={state.editingValue}
                      onChange={e => dispatch({ type: 'SET_EDITING_VALUE', payload: e.target.value })}
                      size="sm"
                    />
                    <div>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => dispatch({ type: 'SAVE_EDIT' })}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => dispatch({ type: 'CANCEL_EDIT' })}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => dispatch({ type: 'START_EDIT', payload: item })}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Items; 