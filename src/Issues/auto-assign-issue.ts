import { Context } from 'probot' // eslint-disable-line no-unused-vars
import { AppConfig } from './auto-assign-issues-interface'
import { chooseAssignee } from './functions'

const ConfigFilename = 'auto-assign-issues.yml'

export async function autoAssignIssue(context: Context): Promise<void> {
  const config = (await context.config(ConfigFilename)) as AppConfig

  // checking if the config file exists in repo
  if (!config) {
    throw new Error(`${ConfigFilename} configuration file not found`)
  }

  // Checking if config file has users listed
  if (!config.addAssignees) {
    return
  }

  const assignees = chooseAssignee(config.assignees || [])

  try {
    const addAssigneeParams = context.issue({ assignees: assignees })
    await context.github.issues.addAssignees(addAssigneeParams)
  } catch (error) {
    // TODO: Need to handle this bettter
    context.log(error)
  }
}
