import inquirer from 'inquirer'
import barMenu from './features/bar/menu.js'

export default () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'feature',
      message: 'Select feature:',
      choices: ['bar', 'exit']
    }
  ]).then(answers => {
    switch (answers.feature) {
      case 'bar':
        barMenu()
        break
      case 'exit':
        process.exit()
    }
  })
}
