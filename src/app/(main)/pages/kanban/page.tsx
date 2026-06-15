'use client'
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { Plus, MoreHorizontal } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

interface KanbanCard {
  id: string
  title: string
  label: 'green' | 'purple' | 'orange'
  labelText: string
  dueDate?: string
}

interface Column {
  id: string
  title: string
  cards: KanbanCard[]
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'Todo',
    cards: [
      { id: 'c1', title: 'Set up Next.js project',    label: 'green',  labelText: 'Feature' },
      { id: 'c2', title: 'Create design tokens',      label: 'purple', labelText: 'Design',  dueDate: '2026-06-20' },
      { id: 'c3', title: 'Write unit tests',          label: 'orange', labelText: 'Testing' },
      { id: 'c4', title: 'Configure CI/CD pipeline',  label: 'green',  labelText: 'DevOps',  dueDate: '2026-06-25' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    cards: [
      { id: 'c5', title: 'Build auth pages',             label: 'green',  labelText: 'Feature', dueDate: '2026-06-16' },
      { id: 'c6', title: 'Implement sidebar navigation', label: 'purple', labelText: 'Design' },
      { id: 'c7', title: 'Add chart components',         label: 'green',  labelText: 'Feature' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    cards: [
      { id: 'c8',  title: 'Project scaffolding',    label: 'green',  labelText: 'Feature' },
      { id: 'c9',  title: 'Tailwind CSS setup',     label: 'purple', labelText: 'Design' },
      { id: 'c10', title: 'MongoDB design tokens',  label: 'orange', labelText: 'Design' },
    ],
  },
]

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    const sourceCol = columns.find(c => c.id === source.droppableId)!
    const destCol = columns.find(c => c.id === destination.droppableId)!
    const sourceCards = [...sourceCol.cards]
    const [moved] = sourceCards.splice(source.index, 1)

    if (source.droppableId === destination.droppableId) {
      sourceCards.splice(destination.index, 0, moved)
      setColumns(cols => cols.map(c => c.id === source.droppableId ? { ...c, cards: sourceCards } : c))
    } else {
      const destCards = [...destCol.cards]
      destCards.splice(destination.index, 0, moved)
      setColumns(cols => cols.map(c => {
        if (c.id === source.droppableId) return { ...c, cards: sourceCards }
        if (c.id === destination.droppableId) return { ...c, cards: destCards }
        return c
      }))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Kanban</h1>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add column
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map(col => (
            <div key={col.id} className="w-72 shrink-0">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
                  <span className="w-5 h-5 rounded-full bg-hairline text-steel text-[11px] font-semibold flex items-center justify-center">
                    {col.cards.length}
                  </span>
                </div>
                <button className="p-1 text-steel hover:text-ink rounded">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <Droppable droppableId={col.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`space-y-2 min-h-[100px] rounded-lg p-2 transition-colors ${snapshot.isDraggingOver ? 'bg-surface-feature' : 'bg-surface'}`}
                  >
                    {col.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white rounded-lg border p-3 shadow-level-1 cursor-grab active:cursor-grabbing transition-shadow ${snapshot.isDragging ? 'shadow-level-3 border-mongo-green' : 'border-hairline'}`}
                          >
                            <Badge variant={card.label}>{card.labelText}</Badge>
                            <p className="text-sm font-medium text-ink mt-2">{card.title}</p>
                            {card.dueDate && (
                              <p className="text-[11px] text-steel mt-2">{card.dueDate}</p>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <button className="mt-2 w-full flex items-center gap-1.5 px-2 py-2 text-sm text-steel hover:text-ink rounded-lg hover:bg-surface transition-colors">
                <Plus className="w-4 h-4" />
                Add card
              </button>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
