#!/usr/bin/env node

import { Command } from 'commander'
import { command as applicationCommand } from './command/application/'
import { command as functionCommand } from './command/function/'
import { command as dependencyCommand } from './command/dependency/'
import { loginCommand, logoutCommand } from './command/auth'
import { command as storageCommand } from './command/storage'
import { command as policyCommand } from './command/policy'
import { command as websiteCommand } from './command/website'

const program = new Command()
program.option('-v, --version', 'output version').action((options) => {
  if (!options.version) {
    program.outputHelp()
    return
  }
  const version = require('../package.json').version
  console.log(version)
})

program.addCommand(loginCommand())
program.addCommand(logoutCommand())
program.addCommand(applicationCommand())
program.addCommand(functionCommand())
program.addCommand(storageCommand())
program.addCommand(dependencyCommand())
program.addCommand(policyCommand())
program.addCommand(websiteCommand())

program.parse(process.argv)
