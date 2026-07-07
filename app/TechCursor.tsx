'use client'

import { useEffect, useState } from 'react'

export function TechCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(pointer: fine)').matches

    if (!canUseCustomCursor) {
      return
    }

    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
      setActive(Boolean((event.target as HTMLElement).closest('a, button, [role="button"]')))
    }

    const leave = () => {
      setVisible(false)
    }

    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <div
      className={`tech-cursor${visible ? ' is-visible' : ''}${active ? ' is-active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className="tech-cursor__ring" />
      <span className="tech-cursor__dot" />
      <span className="tech-cursor__axis tech-cursor__axis--x" />
      <span className="tech-cursor__axis tech-cursor__axis--y" />
    </div>
  )
}
