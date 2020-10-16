import { Application } from 'probot' // eslint-disable-line no-unused-vars
import { autoAssignIssue } from './Issues/auto-assign-issue'

export = (app: Application) => {
  /**
   * Automatically assign users(github usernames) to newely created issues
   */
  app.on('issues.opened', autoAssignIssue)
}
