const { Command } = require('@oclif/command')
const { cli } = require('cli-ux')

class BuildCommand extends Command {
  async run () {
    // Add command logic here
  }
}

BuildCommand.description = `Build a production version of your theme`

module.exports = BuildCommand