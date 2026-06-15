'use client'
import { useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
  type PaginationState,
} from '@tanstack/react-table'
import { Search, ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

type User = {
  id: number
  name: string
  email: string
  role: string
  status: string
  joined: string
}

const USERS: User[] = [
  { id: 1,  name: 'Alice Martin',    email: 'alice@example.com',    role: 'Admin',     status: 'Active',   joined: '2024-01-15' },
  { id: 2,  name: 'Bob Chen',        email: 'bob@example.com',      role: 'Editor',    status: 'Active',   joined: '2024-02-03' },
  { id: 3,  name: 'Carol Davis',     email: 'carol@example.com',    role: 'Viewer',    status: 'Inactive', joined: '2024-03-10' },
  { id: 4,  name: 'David Kim',       email: 'david@example.com',    role: 'Editor',    status: 'Active',   joined: '2024-04-22' },
  { id: 5,  name: 'Eva Torres',      email: 'eva@example.com',      role: 'Admin',     status: 'Active',   joined: '2024-05-08' },
  { id: 6,  name: 'Frank Lee',       email: 'frank@example.com',    role: 'Viewer',    status: 'Inactive', joined: '2024-06-14' },
  { id: 7,  name: 'Grace Wong',      email: 'grace@example.com',    role: 'Editor',    status: 'Active',   joined: '2024-07-01' },
  { id: 8,  name: 'Henry Park',      email: 'henry@example.com',    role: 'Viewer',    status: 'Active',   joined: '2024-07-19' },
  { id: 9,  name: 'Iris Nguyen',     email: 'iris@example.com',     role: 'Editor',    status: 'Inactive', joined: '2024-08-05' },
  { id: 10, name: 'James Brown',     email: 'james@example.com',    role: 'Admin',     status: 'Active',   joined: '2024-08-30' },
  { id: 11, name: 'Karen White',     email: 'karen@example.com',    role: 'Viewer',    status: 'Active',   joined: '2024-09-12' },
  { id: 12, name: 'Liam Scott',      email: 'liam@example.com',     role: 'Editor',    status: 'Active',   joined: '2024-09-28' },
  { id: 13, name: 'Mia Johnson',     email: 'mia@example.com',      role: 'Viewer',    status: 'Inactive', joined: '2024-10-07' },
  { id: 14, name: 'Noah Adams',      email: 'noah@example.com',     role: 'Editor',    status: 'Active',   joined: '2024-10-21' },
  { id: 15, name: 'Olivia Hill',     email: 'olivia@example.com',   role: 'Admin',     status: 'Active',   joined: '2024-11-03' },
  { id: 16, name: 'Peter Clark',     email: 'peter@example.com',    role: 'Viewer',    status: 'Inactive', joined: '2024-11-18' },
  { id: 17, name: 'Quinn Lewis',     email: 'quinn@example.com',    role: 'Editor',    status: 'Active',   joined: '2024-12-02' },
  { id: 18, name: 'Rachel Green',    email: 'rachel@example.com',   role: 'Viewer',    status: 'Active',   joined: '2024-12-15' },
  { id: 19, name: 'Sam Taylor',      email: 'sam@example.com',      role: 'Editor',    status: 'Inactive', joined: '2025-01-04' },
  { id: 20, name: 'Tina Young',      email: 'tina@example.com',     role: 'Admin',     status: 'Active',   joined: '2025-01-20' },
]

const roleBadge: Record<string, 'green' | 'purple' | 'orange'> = {
  Admin:  'green',
  Editor: 'purple',
  Viewer: 'orange',
}

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('name',   { header: 'Name',   cell: info => <span className="font-medium text-ink">{info.getValue()}</span> }),
  columnHelper.accessor('email',  { header: 'Email',  cell: info => <span className="text-steel">{info.getValue()}</span> }),
  columnHelper.accessor('role',   { header: 'Role',   cell: info => <Badge variant={roleBadge[info.getValue()]}>{info.getValue()}</Badge> }),
  columnHelper.accessor('status', { header: 'Status', cell: info => (
    <span className={clsx(
      'inline-flex items-center gap-1.5 text-xs font-medium',
      info.getValue() === 'Active' ? 'text-mongo-green-dark' : 'text-steel'
    )}>
      <span className={clsx('w-1.5 h-1.5 rounded-full', info.getValue() === 'Active' ? 'bg-mongo-green' : 'bg-hairline-strong')} />
      {info.getValue()}
    </span>
  )}),
  columnHelper.accessor('joined', { header: 'Joined', cell: info => <span className="text-steel">{info.getValue()}</span> }),
]

function SortIcon({ sorted }: { sorted: false | 'asc' | 'desc' }) {
  if (sorted === 'asc')  return <ChevronUp   className="w-3.5 h-3.5 text-mongo-green" />
  if (sorted === 'desc') return <ChevronDown className="w-3.5 h-3.5 text-mongo-green" />
  return <ChevronsUpDown className="w-3.5 h-3.5 text-hairline-strong" />
}

export default function DataTablePage() {
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

  const table = useReactTable({
    data: USERS,
    columns,
    state: { globalFilter, sorting, pagination },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: true,
  })

  const { pageIndex, pageSize } = table.getState().pagination
  const totalFiltered = table.getFilteredRowModel().rows.length
  const from = totalFiltered === 0 ? 0 : pageIndex * pageSize + 1
  const to   = Math.min((pageIndex + 1) * pageSize, totalFiltered)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Data Table</h1>
        <p className="text-sm text-steel mt-1">TanStack Table v8 with search, sortable columns, and pagination.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-base font-semibold text-ink">User Directory</h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel pointer-events-none" />
              <input
                type="text"
                value={globalFilter}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search users…"
                className="w-full h-9 pl-9 pr-3 text-sm rounded-md border border-hairline-strong bg-white text-ink placeholder:text-steel focus:outline-none focus:border-2 focus:border-mongo-green-dark"
              />
            </div>
          </div>
        </CardHeader>

        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} className="border-b border-hairline bg-surface">
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className={clsx(
                          'px-4 py-3 text-left text-xs font-semibold text-steel uppercase tracking-wider',
                          header.column.getCanSort() && 'cursor-pointer select-none hover:text-ink'
                        )}
                      >
                        <div className="flex items-center gap-1">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <SortIcon sorted={header.column.getIsSorted()} />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                {table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="hover:bg-surface transition-colors">
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="px-4 py-3">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="px-4 py-8 text-center text-steel text-sm">
                      No users match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-hairline">
            <p className="text-xs text-steel">
              Showing {from} to {to} of {totalFiltered} {totalFiltered === 1 ? 'entry' : 'entries'}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="h-8 w-8 p-0 flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-xs text-ink font-medium px-2">
                Page {pageIndex + 1} of {table.getPageCount()}
              </span>
              <Button
                variant="secondary"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="h-8 w-8 p-0 flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
