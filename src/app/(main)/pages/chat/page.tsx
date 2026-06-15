import type { Metadata } from 'next'
import { Send, Phone, Video, MoreVertical } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'

export const metadata: Metadata = { title: 'Chat — AdminLTE' }

const contacts = [
  { name: 'Alice Brown',  lastMsg: 'See you tomorrow!',        time: '2m',  unread: 2 },
  { name: 'Bob Chen',     lastMsg: 'Can you review the PR?',   time: '15m', unread: 0 },
  { name: 'Carol Davis',  lastMsg: 'Sent the files.',           time: '1h',  unread: 0 },
  { name: 'Dave Evans',   lastMsg: 'Meeting at 3pm.',           time: '2h',  unread: 1 },
  { name: 'Eve Foster',   lastMsg: 'Thanks for the help!',      time: '3h',  unread: 0 },
  { name: 'Frank Green',  lastMsg: "I'll check it out.",        time: '1d',  unread: 0 },
]

const messages = [
  { from: 'Alice Brown', text: "Hey, how's the project going?",                          time: '10:00 AM', self: false },
  { from: 'Me',          text: 'Going great! Just finished the auth pages.',              time: '10:02 AM', self: true  },
  { from: 'Alice Brown', text: 'Nice! When do you think the content pages will be done?', time: '10:05 AM', self: false },
  { from: 'Me',          text: 'Should have them done by end of week.',                   time: '10:06 AM', self: true  },
  { from: 'Alice Brown', text: "Perfect. I'll review them on Friday then.",               time: '10:08 AM', self: false },
  { from: 'Me',          text: 'Sounds good! See you tomorrow.',                          time: '10:09 AM', self: true  },
  { from: 'Alice Brown', text: 'See you tomorrow!',                                       time: '10:10 AM', self: false },
]

export default function ChatPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-ink">Chat</h1>

      <div className="flex h-[calc(100vh-12rem)] min-h-[500px] border border-hairline rounded-lg overflow-hidden bg-white">
        {/* Sidebar: contact list */}
        <div className="w-64 shrink-0 border-r border-hairline flex flex-col">
          <div className="p-3 border-b border-hairline">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full h-9 rounded-md border border-hairline-strong px-3 text-sm focus:outline-none focus:border-mongo-green-dark"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-3 hover:bg-surface cursor-pointer border-b border-hairline-soft ${i === 0 ? 'bg-surface-feature' : ''}`}
              >
                <Avatar name={contact.name} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-ink truncate">{contact.name}</p>
                    <span className="text-xs text-steel shrink-0 ml-1">{contact.time}</span>
                  </div>
                  <p className="text-xs text-steel truncate">{contact.lastMsg}</p>
                </div>
                {contact.unread > 0 && (
                  <span className="w-4 h-4 rounded-full bg-mongo-green text-ink text-[10px] font-bold flex items-center justify-center shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Chat header */}
          <div className="h-14 border-b border-hairline flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-3">
              <Avatar name="Alice Brown" size="sm" />
              <div>
                <p className="text-sm font-semibold text-ink">Alice Brown — Active Chat</p>
                <p className="text-xs text-mongo-green">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-steel">
              <button className="p-2 hover:bg-surface rounded-md"><Phone className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-surface rounded-md"><Video className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-surface rounded-md"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.self ? 'flex-row-reverse' : ''}`}>
                {!msg.self && <Avatar name={msg.from} size="sm" className="shrink-0 mt-1" />}
                <div className={`max-w-[70%] ${msg.self ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.self
                      ? 'bg-mongo-teal-deep text-white rounded-tr-sm'
                      : 'bg-surface text-ink rounded-tl-sm border border-hairline'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-steel mt-1 px-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-3 border-t border-hairline flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 h-10 rounded-full border border-hairline-strong px-4 text-sm focus:outline-none focus:border-mongo-green-dark"
            />
            <button className="w-10 h-10 rounded-full bg-mongo-green flex items-center justify-center hover:bg-mongo-green-mid transition-colors">
              <Send className="w-4 h-4 text-ink" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
