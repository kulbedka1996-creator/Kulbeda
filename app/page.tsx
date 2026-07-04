'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    title: 'OFFtrail',
    kind: 'Promo landing page',
    year: '2026',
    noteRu: 'Лендинг как маршрут: немного дикости, четкая структура, ощущение движения до первого клика.',
    noteEn: 'A landing page as a route: wild enough to feel alive, structured enough to sell.',
    tags: ['landing', 'storytelling', 'visual concept'],
    href: 'https://www.behance.net/6bb5c573',
    mark: 'off / trail',
  },
  {
    title: 'Noxi AI',
    kind: 'Sleep & calm app concept',
    year: '2025',
    noteRu: 'Тихий интерфейс для сна и восстановления: мягкий AI, спокойный UX, без цифрового шума.',
    noteEn: 'A quiet interface for sleep and recovery: soft AI, calm UX, no digital noise.',
    tags: ['mobile app', 'ai', 'wellbeing'],
    href: 'https://www.behance.net/6bb5c573',
    mark: 'noxi / calm',
  },
  {
    title: 'STEREO ROOM',
    kind: 'Online vinyl store',
    year: '2025',
    noteRu: 'Магазин винила с настроением комнаты, где пластинки выбирают не по фильтру, а по состоянию.',
    noteEn: 'A vinyl store with the feeling of a room where records are chosen by mood, not only by filters.',
    tags: ['ecommerce', 'web ui', 'atmosphere'],
    href: 'https://www.behance.net/6bb5c573',
    mark: 'stereo / room',
  },
  {
    title: 'Tripandplay Theatre',
    kind: 'Website redesign',
    year: '2026',
    noteRu: 'Редизайн театрального сайта: афиша, сцена, маршрут зрителя и больше воздуха между событиями.',
    noteEn: 'A theatre website redesign: repertoire, stage, visitor route, and more air between events.',
    tags: ['redesign', 'culture', 'ux/ui'],
    href: 'https://www.behance.net/6bb5c573',
    mark: 'theatre / web',
  },
]

const services = [
  ['UX/UI дизайн сайтов', 'Website UX/UI design'],
  ['Лендинги и промо-страницы', 'Landing pages and promo pages'],
  ['Посадка дизайна на Tilda', 'Tilda implementation'],
  ['Редизайн без потери характера', 'Redesigns with character kept intact'],
  ['AI-визуалы и визуальные концепции', 'AI visuals and visual concepts'],
]

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a href="#top" className="brand">Cool Beta Designer</a>
        <nav aria-label="Main navigation">
          <a href="#works">works</a>
          <a href="#process">process</a>
          <a href="#contact">contact</a>
        </nav>
        <span>ru / en</span>
      </header>

      <section id="top" className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="kicker">UX/UI designer / AI visuals / websites with a pulse</p>
          <h1>
            Cool Beta
            <span>Designer</span>
          </h1>
          <p className="lead">
            Я проектирую сайты, лендинги и цифровые миры на стыке структуры,
            сторителлинга и визуального эксперимента.
          </p>
          <p className="lead lead-en">
            I design websites, landing pages, and atmospheric digital worlds where
            business logic meets a memorable visual voice.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button">обсудить задачу</a>
            <a href="#works" className="text-link">смотреть архив</a>
          </div>
        </motion.div>

        <motion.div
          className="portrait-collage"
          initial={{ opacity: 0, rotate: -2, scale: 0.96 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          aria-label="AI avatar placeholder"
        >
          <div className="portrait-card">
            <span>AI avatar</span>
            <strong>photo soon</strong>
          </div>
          <div className="tape tape-one">beta / not boring</div>
          <div className="tape tape-two">структура + магия</div>
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
        </motion.div>
      </section>

      <section className="manifest" aria-label="Manifest">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          Мне интересно делать интерфейсы, у которых есть лицо: не шаблонный
          экран, а маленькая вселенная, где владелец бизнеса узнает себя, а
          HR видит не только навыки, но и способ мышления.
        </motion.p>
      </section>

      <section id="works" className="works" aria-label="Selected works">
        <div className="section-heading">
          <h2>archive of worlds</h2>
          <p>4 кейса с Behance / четыре разных настроения для бизнеса, культуры и продукта</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
            >
              <div className="project-image" aria-hidden="true">
                <span>{project.mark}</span>
              </div>
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.kind}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.noteRu}</p>
              <p className="en">{project.noteEn}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="services" aria-label="Services">
        <div className="section-heading">
          <h2>what I can build</h2>
          <p>Для малого и среднего бизнеса, команд, которым нужен не просто макет, а точка притяжения.</p>
        </div>
        <div className="service-list">
          {services.map(([ru, en], index) => (
            <motion.div
              className="service-row"
              key={ru}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{ru}</strong>
              <em>{en}</em>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="process" className="process" aria-label="Process">
        <div className="process-note">
          <h2>как работаю?</h2>
          <p>
            Сначала ищу не красивый стиль, а точное ощущение: что человек должен
            почувствовать, куда нажать, чему поверить. Потом собираю структуру,
            прототип, визуальный язык, анимации и финальную посадку.
          </p>
        </div>
        <div className="process-steps">
          <span>brief - mood - prototype - visual system - motion - handoff</span>
          <span>задача - атмосфера - структура - дизайн - движение - запуск</span>
        </div>
      </section>

      <section id="contact" className="contact" aria-label="Contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="kicker">open for freelance / full-time</p>
          <h2>если хочется сайта с характером - давайте обсудим задачу</h2>
          <div className="contact-links">
            <a href="https://t.me/Kulbeda_design" target="_blank" rel="noreferrer">Telegram</a>
            <a href="mailto:email@example.com">email soon</a>
            <a href="https://vk.com/" target="_blank" rel="noreferrer">VK soon</a>
            <a href="https://www.behance.net/6bb5c573" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
