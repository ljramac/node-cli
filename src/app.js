import inquirer from 'inquirer'
import fooMenu from './modules/foo/menu.js'

export default () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'module',
      message: 'Select module:',
      choices: ['foo', 'exit']
    }
  ]).then(answers => {
    switch (answers.module) {
      case 'foo':
        fooMenu()
        break
      case 'exit':
        process.exit()
    }
  })
}
