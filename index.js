import path from 'path'
import { config } from 'dotenv'
import inquirer from 'inquirer'
import app from './src/app.js'

(() => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'env',
      message: 'Select environment:',
      choices: ['des', 'pre', 'exit']
    }
  ]).then(({ env }) => {
    if (env === 'exit') {
      process.exit()
    }

    config({ path: path.resolve(`./config/${env}.env`) })

    app()
  })
})()
