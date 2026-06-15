import { render, screen } from '@testing-library/react'
import KanbanPage from '../page'

jest.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Droppable: ({ children }: any) => <>{children({ innerRef: () => {}, droppableProps: {}, placeholder: null }, { isDraggingOver: false })}</>,
  Draggable: ({ children }: any) => <>{children({ innerRef: () => {}, draggableProps: {}, dragHandleProps: {} }, { isDragging: false })}</>,
}))

describe('KanbanPage', () => {
  it('renders kanban heading', () => {
    render(<KanbanPage />)
    expect(screen.getByRole('heading', { name: /kanban/i })).toBeInTheDocument()
  })

  it('shows three columns', () => {
    render(<KanbanPage />)
    expect(screen.getByText('Todo')).toBeInTheDocument()
    expect(screen.getByText('In Progress')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  it('shows task cards', () => {
    render(<KanbanPage />)
    expect(screen.getByText('Set up Next.js project')).toBeInTheDocument()
  })

  it('has add card button', () => {
    render(<KanbanPage />)
    expect(screen.getAllByRole('button', { name: /add card/i }).length).toBeGreaterThanOrEqual(1)
  })
})
