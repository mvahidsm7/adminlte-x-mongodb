import type { Metadata } from 'next'
import { Folder, FolderOpen, FileText, Image, Film, Upload, Grid, List, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = { title: 'File Manager — AdminLTE' }

const folders = [
  { name: 'Documents',  children: ['Reports', 'Contracts', 'Templates'] },
  { name: 'Images',     children: ['Screenshots', 'Photos'] },
  { name: 'Videos',     children: ['Tutorials', 'Recordings'] },
  { name: 'Downloads',  children: [] },
  { name: 'Shared',     children: ['Team', 'Public'] },
]

const files = [
  { name: 'project-brief.pdf', type: 'pdf',   size: '2.4 MB',  modified: '2026-06-10' },
  { name: 'design-mockup.fig', type: 'fig',   size: '8.1 MB',  modified: '2026-06-09' },
  { name: 'meeting-notes.docx',type: 'docx',  size: '124 KB',  modified: '2026-06-08' },
  { name: 'banner.png',        type: 'image', size: '1.2 MB',  modified: '2026-06-07' },
  { name: 'demo-video.mp4',    type: 'video', size: '45.3 MB', modified: '2026-06-06' },
  { name: 'data-export.csv',   type: 'csv',   size: '540 KB',  modified: '2026-06-05' },
  { name: 'invoice-q2.pdf',    type: 'pdf',   size: '340 KB',  modified: '2026-06-04' },
  { name: 'logo.svg',          type: 'image', size: '12 KB',   modified: '2026-06-03' },
]

function FileIcon({ type }: { type: string }) {
  if (type === 'image') return <Image className="w-8 h-8 text-accent-purple" />
  if (type === 'video') return <Film className="w-8 h-8 text-accent-orange" />
  return <FileText className="w-8 h-8 text-steel" />
}

export default function FileManagerPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">File Manager</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost"><Grid className="w-4 h-4" /></Button>
          <Button variant="ghost"><List className="w-4 h-4" /></Button>
          <Button variant="primary">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Folder tree */}
        <Card className="w-56 shrink-0">
          <div className="p-3">
            <p className="text-xs font-semibold text-steel uppercase tracking-wider mb-3 px-2">Folders</p>
            <ul className="space-y-0.5">
              {folders.map(folder => (
                <li key={folder.name}>
                  <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-surface text-sm text-ink text-left">
                    <FolderOpen className="w-4 h-4 text-mongo-green-dark shrink-0" />
                    <span className="flex-1 truncate">{folder.name}</span>
                    {folder.children.length > 0 && <ChevronRight className="w-3.5 h-3.5 text-steel" />}
                  </button>
                  {folder.name === 'Documents' && (
                    <ul className="ml-4 space-y-0.5">
                      {folder.children.map(child => (
                        <li key={child}>
                          <button className="w-full flex items-center gap-2 px-2 py-1 rounded-md hover:bg-surface text-sm text-steel text-left">
                            <Folder className="w-3.5 h-3.5 shrink-0" />
                            {child}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* File grid */}
        <div className="flex-1">
          <div className="flex items-center gap-1 text-sm text-steel mb-4">
            <span className="hover:text-ink cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-medium">Documents /</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {files.map(file => (
              <Card key={file.name} className="hover:shadow-level-2 cursor-pointer transition-shadow">
                <div className="p-4 flex flex-col items-center text-center gap-2">
                  <FileIcon type={file.type} />
                  <p className="text-xs font-medium text-ink leading-tight break-all">{file.name}</p>
                  <p className="text-[11px] text-steel">{file.size}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
