import { fireEvent, render as routerRender } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import ListItem from '../components/list-item/ListItem';

describe('ListItem', () => {

    const render = (ui, {route = '/'} = {}) => {
        window.history.pushState({}, 'Test page', route)
        return routerRender(ui, {wrapper: HashRouter})
    }

    const handleChange = jest.fn()

    const basicTodo = {
        id: "3",
        title: "Detail a TODO",
        done: false,
        important: false,
        description: "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view)."
    }
    const doneTodo = {
        id: "3",
        title: "Detail a TODO",
        done: true,
        important: false,
        description: "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view)."
    }
    const importantTodo = {
        id: "3",
        title: "Detail a TODO",
        done: false,
        important: true,
        description: "As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view)."
    }

    it('should render a basic todo', () => {
        const { queryByText } = render(<ListItem todo={basicTodo} handleChange={handleChange}/>);
        expect(queryByText("Detail a TODO")).toBeTruthy();
        expect(queryByText("!!!")).toBeFalsy();
    })

    it('should render an important todo', () => {
        const { queryByText } = render(<ListItem todo={importantTodo} handleChange={handleChange}/>);
        expect(queryByText("!!!")).toBeTruthy();
    })

    it('should render a done todo', () => {
        const { getByTestId } = render(<ListItem todo={doneTodo} handleChange={handleChange}/>);
        const checkbox = getByTestId(`listItem_checkbox_${doneTodo.id}`)
        expect(checkbox.checked).toEqual(true)
    })

    it('should render a done todo when a basic one is checked', () => {
        const { getByTestId } = render(<ListItem todo={basicTodo} handleChange={handleChange}/>);
        const checkbox = getByTestId(`listItem_checkbox_${basicTodo.id}`)
        expect(checkbox.checked).toEqual(false)
        fireEvent.click(checkbox)
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(checkbox.checked).toEqual(true)
    })

    it('should render a basic todo when a done one is checked', () => {
        const { getByTestId } = render(<ListItem todo={doneTodo} handleChange={handleChange}/>);
        const checkbox = getByTestId(`listItem_checkbox_${doneTodo.id}`)
        expect(checkbox.checked).toEqual(true)
        fireEvent.click(checkbox)
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(checkbox.checked).toEqual(false)
    })

    it('should render a see more button', () => {
        const { queryByText } = render(<ListItem todo={basicTodo} handleChange={handleChange}/>);
        expect(queryByText("See More")).toBeTruthy();
    })
})

