import fs from 'fs'
import winston from 'winston'

const logsDir = './logs'
const logsPath = `${logsDir}/${new Date().toLocaleString().replace(/[-: , /]/g, '_')}.log`

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true })
}

if (!fs.existsSync(logsPath)) {
  fs.writeFileSync(logsPath, '')
}

const winstonFormat = winston.format.printf((f) => {
  const { level, message } = f

  return `${new Date().toLocaleString()} [${level.toUpperCase()}] ${message}`
})

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? 'debug',
  format: winstonFormat,
  defaultMeta: {},
  transports: [
    new winston.transports.Console({ format: winstonFormat }),
    new winston.transports.File({ filename: logsPath, format: winstonFormat })
  ]
})

export default logger
