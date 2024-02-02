import logger from '../../../../../lib/logger.js'

export const bar = async (answers) => {
  logger.info(`bar: ${JSON.stringify(answers)}`)
}
