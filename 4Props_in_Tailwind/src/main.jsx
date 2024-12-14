import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card  from './components/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username='Hitesh Bhai' position='Senior Coder' pic='https://imgs.search.brave.com/crwu6kFt0Gy9W5GZDtF-vV-nxvpzLNhr2vH-PXLKHgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS9m/N2JkM2IxZmRlZTVh/MDRiYWVlNDk5ZThj/MzU2MWMzNWZiNjc5/YjBlZTA4YTAwNDJj/MDZjMTAwZGFmYzc1/NmI0LzY4NzQ3NDcw/NzMzYTJmMmY2OTZk/NjcyZTc5NmY3NTc0/NzU2MjY1MmU2MzZm/NmQyZjc2NjkyZjc4/NDE3NjU0Njc0Mzcz/NDM0ODRjNzMyZjcz/NjQ2NDY1NjY2MTc1/NmM3NDJlNmE3MDY3' />
    <Card username='Harry Bhai' position='Senior Coder' pic='https://imgs.search.brave.com/rF3PK4e9OVwZLXe9HRWQ6DuVdiLj-DnNkGjtx2XqLUY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXdz/aW5kaWFndXJ1LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wOS9jb2Rld2l0/aGhhcnJ5XzI4MDA4/OTU4NV8xMzU0NjQ2/NjI4MzUzMzMyXzE4/NTAxOTA5MTU5MTkw/NTAzNTZfbi53ZWJw' />
  </StrictMode>,
)
