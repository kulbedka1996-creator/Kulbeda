'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    id: '001',
    title: 'OFFtrail',
    type: 'промо-лендинг',
    year: '2026',
    text: 'Маршрутный лендинг для продукта, которому нужно ощущение движения, свободы и точной структуры.',
  },
  {
    id: '002',
    title: 'Noxi AI',
    type: 'app concept',
    year: '2025',
    text: 'Спокойный интерфейс для сна и восстановления: мягкий AI, понятная логика и тихий визуальный язык.',
  },
  {
    id: '003',
    title: 'STEREO ROOM',
    type: 'e-commerce',
    year: '2025',
    text: 'Онлайн-магазин винила, где пластинки выбираются не только фильтрами, но и состоянием.',
  },
  {
    id: '004',
    title: 'Tripandplay Theatre',
    type: 'редизайн сайта',
    year: '2026',
    text: 'Театральный сайт с афишей, сценой, маршрутом зрителя и большим воздухом между событиями.',
  },
]

const services = [
  {
    title: 'Сайт',
    text: 'Структура, визуальный язык, адаптив и понятный путь пользователя.',
  },
  {
    title: 'Лендинг',
    text: 'Промо-страница, которая быстро объясняет идею и ведет к действию.',
  },
  {
    title: 'Презентация',
    text: 'Слайды для продукта, питча, выступления или визуальной упаковки проекта.',
  },
  {
    title: 'Tilda',
    text: 'Аккуратная посадка дизайна, настройка блоков, анимаций и публикации.',
  },
  {
    title: 'AI-визуалы',
    text: 'Изображения, обложки и атмосферные материалы под стиль проекта.',
  },
]

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Навигация">
        <a href="#top">KULBEDA</a>
        <nav>
          <a href="#works">проекты</a>
          <a href="#services">услуги</a>
          <a href="#contact">контакт</a>
        </nav>
        <span>web-design</span>
      </header>

      <section id="top" className="hero poster-grid">
        <motion.div
          className="hero-title frame-cell"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="cell-label">designer / portfolio</span>
          <h1>Делаю сайты и презентации.</h1>
          <p>
            Я Анастасия Кульбеда, web & presentation designer. Собираю
            выразительные страницы, лендинги, презентации и AI-визуалы для
            проектов, которым нужен характер.
          </p>
          <div className="hero-actions">
            <a href="#works">смотреть проекты</a>
            <a href="#contact">обсудить задачу</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo frame-cell"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          <Image
            src="/assets/portrait.png"
            alt="Портрет Анастасии Кульбеды"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
          />
          <div className="scan-corners" aria-hidden="true" />
        </motion.div>
      </section>

      <section className="identity-strip" aria-label="Краткая информация">
        <div>
          <span>// дизайнер</span>
          <strong>Анастасия Кульбеда</strong>
        </div>
        <div>
          <span>// роль</span>
          <strong>Web & presentation designer</strong>
        </div>
        <div>
          <span>// фокус</span>
          <strong>сайты / презентации / AI-визуалы</strong>
        </div>
      </section>

      <section id="works" className="works poster-grid" aria-label="Проекты">
        <div className="section-title frame-cell">
          <span className="cell-label">архив работ</span>
          <h2>проекты</h2>
          <a href="https://www.behance.net/6bb5c573" target="_blank" rel="noreferrer">
            смотреть Behance
          </a>
        </div>

        {projects.map((project, index) => (
          <motion.a
            href="https://www.behance.net/6bb5c573"
            target="_blank"
            rel="noreferrer"
            className="project-row frame-cell"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.05, ease }}
          >
            <span>{project.id}</span>
            <div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
            <em>{project.type}</em>
            <strong>{project.year}</strong>
          </motion.a>
        ))}
      </section>

      <section id="services" className="services poster-grid" aria-label="Услуги">
        <div className="services-head frame-cell">
          <span className="cell-label">что можно заказать</span>
          <h2>форматы работы</h2>
          <p>
            Не делаю одинаковые карточки “под копирку”. Сначала разбираю задачу,
            затем собираю структуру, визуальный ритм и понятную точку действия.
          </p>
        </div>
        <div className="service-board frame-cell">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04, ease }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact poster-grid" aria-label="Контакты">
        <div className="contact-title frame-cell">
          <span className="cell-label">open for freelance / full-time</span>
          <h2>если нужен сайт с характером — давайте обсудим задачу</h2>
        </div>
        <div className="contact-links frame-cell">
          <a href="https://t.me/Kulbeda_design" target="_blank" rel="noreferrer">Telegram</a>
          <a href="mailto:email@example.com">email soon</a>
          <a href="https://vk.com/" target="_blank" rel="noreferrer">VK soon</a>
          <a href="https://www.behance.net/6bb5c573" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </section>
    </main>
  )
}
