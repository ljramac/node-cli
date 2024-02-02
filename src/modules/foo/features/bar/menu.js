import moment from 'moment'
import inquirer from 'inquirer'
import { bar } from './index.js'

export default () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'from',
      message: 'Selelect start date (YYYY-MM-DD hh:mm:ss):',
      default: () => moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00')
    },
    {
      type: 'input',
      name: 'to',
      message: 'Select end date:',
      default: () => moment().format('YYYY-MM-DD 23:59:59')
    },
    {
      type: 'input',
      name: 'search',
      message: 'Text to search',
      default: null
    }
  ]).then(answers => {
    if (Object.values(answers).includes('exit')) {
      process.exit()
    }

    bar(answers)
  })
}
