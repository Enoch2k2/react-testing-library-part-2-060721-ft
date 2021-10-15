import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../../App';

describe('Todo List', () => {
  it('renders Todo List as a heading', () => {
    render(
      <App />
    );
    const heading = screen.getByRole('heading', { name: /todo list/i });
    expect(heading).toBeInTheDocument();
  })
})

describe('Todo Form', () => {
  it('has an input for adding a title', () => {
    render(<App />);
  
    const titleInput = screen.getByLabelText(/title/i);

    fireEvent.change(titleInput, { target: { value: 'hello world' }});

    expect(titleInput.value).toBe('hello world');
  })

  it('has a checkbox for marking a todo complete', () => {
    render(<App />);

    const checkbox = screen.getByLabelText(/completed/i)

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked();
  })

  it('can create a todo', () => {
    render(<App />);

    const titleInput = screen.getByLabelText(/title/i);
    const checkbox = screen.getByLabelText(/completed/i);
    const submit = screen.getByRole('button', { name: 'Create Todo' });
    
    fireEvent.change(titleInput, { target: { value: 'Walk the Dog' }});
    fireEvent.click(checkbox);
    fireEvent.click(submit);

    const li = screen.getByText('Walk the Dog - completed')

    expect(li).toBeInTheDocument();
  })
})