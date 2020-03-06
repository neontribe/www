# Contribution guidelines

Ongoing development on this project is managed by this project board: https://github.com/neontribe/www/projects/6.

## Getting tickets/issues ready to be worked on

Before a thing can be worked on it must be both created as an issue, and prioritised using a definition of done.

### Creating issues

1. Open the `Issues` tab and click [`New issue`](https://github.com/neontribe/www/issues/new/choose) and choose the right template.
   - anyone can create issues
   - `Bug` is for bugs
   - `Story` is for new things, e.g. code, content to meet a user need
   - `Tasks` is for simple actions such as dependency updates, they are often repeatable and related to maintenance
   - `Research` is for tasks that are not going to effect the site _yet_
   - `Catch-up Meeting` is for the weekly catchup meeting [Prioritising issues](prioritising-issues)
1. Follow the template so that the issue can be understood by others
   - the template explains what you need to fill out
   - don't worry about having everything, fill in as much as you can and focus on the [Definition of done](#definition-of-done)
1. There is no need to attach the card to the project board, that step only happens during a prioritising session.

### Prioritising issues

This takes place during a weekly catchup meeting when we need more issues for the project board, or when someone asks for a particular issue to be considered.

1. View new issues using this filter: [https://github.com/neontribe/www/issues](https://github.com/neontribe/www/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+no%3Aproject+).
1. Decide whether the [Definition of done](#definition-of-done) is ready for action on a given ticket.
   - if further work is needed then assign a related action in the meeting notes
1. Take tickets that are ready for action and add to `Top priority issues` or `Backlog` columns based on group instincts of user value.
   - not all tickets will be high enough priority to **make it**
   - decisions from previous meetings should not be revisited in the weekly cycle
1. Document reason for decision on tickets, so that it makes sense later.

From time-to-time we may decide to hold more in depth prioritisation meetings to involve more people and to look at bigger issues.

### Definition of done

These differ for each type of issue:

- [`Bug`](https://english.stackexchange.com/a/40935) has clearly documented steps to reproduce the error _and_ we are sure the error has been eliminated.
- `Story` the definition of done uses Acceptance Criteria, this can be quite broad, specifically when the ticket is first created. We expect that the Acceptance Criteria will be refined during both prioritisation, and development, so that the final goal is clear and testable.
- `Task` the description of the task usually contains its own definition of done, additional things such as security notes may be relevant.
- `Research` will depend on the context and may be a simple statement of research aims.

## Getting started on development

Any issues in the `Top priority issues` column are important enough and have been prioritised.

When contributing to this project please do the following:

1. Pick something near the top of the `Top priority issues` column, which you feel you have the time and confidence to tackle.
   - We expect you to learn while tackling issues, please don't be put off by a tasks' seeming complexity.
1. Check the [Definition of done](#definition-of-done) for the ticket to see if you understand it.
   - If you need more information please follow up with the person who spawned/created the task.
1. Assign yourself and move the ticket to the `In progress` column.
1. Create a branch with a name to help match it to the ticket, e.g.: `307-contrib-docs`.
   - [avoid slashes in branch names](https://stackoverflow.com/questions/2527355/using-the-slash-character-in-git-branch-name/2527452#2527452)
1. Work on the feature branch, make small commits which include the _reason_ for each commit's change.
   - We don't expect you to battle the problem alone, put any queries on the github issue and slack, people will help when they have time.
1. When you're happy with the changeset/the commits you've made, and you're happy that the ticket passes its [Definition of done](#definition-of-done) create a pull request.
1. `now.sh` will generate a build and deploy to a temporary URL which is available on your pull request page, along with the status of build.
   - :star: Check it :star:
   - Both you and reviewers should check that the changes you've made are available on the temporary URL.
1. Await code review, see [Review process](#review-process)
   - Pull requests are the pull requester's responsibility, use slack and other channels to encourage people to review for you.
   - Before you merge, it is your responsibility to respond to suggestions and change requests.

Please make sure that you keep your activity up-to-date:

1. take each ticket as far as you can, before taking another one (e.g. ready for code review)
   - if the ticket needs to be put on hold because you've reached the limit of your availability or understanding then;
     - put your findings/thoughts on the ticket
     - put the branch name (if any) on the ticket
     - unassign yourself and put it back in `Top priority issues`

---

WIP:

## Review process

Two or more peers need to approve the commit, when reviewing check the code for errors and check that it achieves the definition of done for the ticket

## Testing

is done using feature branch deploys on pull request
