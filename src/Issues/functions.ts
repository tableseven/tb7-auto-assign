/**
 * This function will select one username in the given array and
 * return that username for the issue to be assigned too
 *
 * @param available list of github usernames
 */
export function chooseAssignee(available: string[]): string[] {
  let assignToUser: string = available[Math.floor(Math.random() * available.length)]

  return available.reduce<string[]>((values, current) => {
    if (current === assignToUser) {
      values.push(current)
    }

    return values
  }, [])
}
