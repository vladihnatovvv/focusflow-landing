import { CheckCircle2, Circle, Pause, Volume2 } from 'lucide-react'

const RADIUS = 84
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const PROGRESS = 0.64

const tasks = [
  { label: 'Draft Q4 roadmap', done: true },
  { label: 'Review design specs', done: false },
  { label: 'Reply to investors', done: false },
]

/** Illustration of the FocusFlow app, built with markup so it stays crisp at any size. */
export function PhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[260px] rounded-[2.75rem] bg-ink p-2.5 shadow-phone sm:w-[290px]"
      role="img"
      aria-label="FocusFlow app showing a 25 minute deep work session in progress"
    >
      <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-flow-900 to-ink px-5 pb-6 pt-4 text-white">
        {/* Status bar */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-white/80">
          <span>9:41</span>
          <span className="h-5 w-20 rounded-full bg-black" aria-hidden="true" />
          <span>100%</span>
        </div>

        <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-flow-100/70">
          Deep work
        </p>
        <p className="mt-1 text-center font-display text-base font-semibold">Draft Q4 roadmap</p>

        {/* Timer ring */}
        <div className="relative mx-auto mt-5 h-[184px] w-[184px]">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
            <circle
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              stroke="url(#ring)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
            />
            <defs>
              <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2BB89E" />
                <stop offset="100%" stopColor="#F7B84B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-4xl font-bold tabular-nums">16:04</span>
            <span className="mt-1 text-[11px] text-white/60">of 25:00</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Volume2 className="h-4 w-4" />
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flow-400 text-ink">
            <Pause className="h-6 w-6" fill="currentColor" />
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold">
            +5
          </span>
        </div>

        {/* Tasks */}
        <ul className="mt-6 space-y-2 rounded-2xl bg-white/5 p-3">
          {tasks.map((task) => (
            <li key={task.label} className="flex items-center gap-2.5 text-[12px]">
              {task.done ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-flow-400" />
              ) : (
                <Circle className="h-4 w-4 shrink-0 text-white/30" />
              )}
              <span className={task.done ? 'text-white/50 line-through' : 'text-white/85'}>
                {task.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
