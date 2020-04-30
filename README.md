# Front-end challenge

Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation.

## Description of the project

I've tried to recreate the same visual appearance as seen on this screenshot:

![Pleo screenshot](https://www.pleo.io/cbbc592f6101b0f5cd3275098b986e94.png)

The project is totally functional. You can:

- Expense listing (limit queries to 25 items per page).
- Load more pages.
- Filter through all fields (Currency, for example)
- Open a expense detail.
- Post a comment.
- Upload as much receipts as desired
- Show receipts in a modal
- People avatar on every expense :)

I've used:

- Vue
- Vuex
- i18n
- TailwindCSS (which internally uses PostCSS)
- FontAwesome SVG icons
- Axios
- Moment (for dates)
- ESLint
- Prettier

I've tried to be as modular as needed and follow naming conventions to easily detect components and their aim.

### App

- App. Where layout (Sidebar and double column flex layout) is defined. Here you have `<router-view>`, where views will be shown thanks to Vue Router.

### Views

- Expenses- What Vue-Router calls. Here you have everything about expenses.

### Components

- **Layout**
  - **Sidebar**. Here you have logo, profile photo and name. Language switcher (thanks to vue-i18n), a fake menu, and A Help & Support section pinned to bottom
- **Expenses**
  - **ExpensesActionBar**. Middle column upper action bar. Where Available balance, Add and Share are.
  - **ExpensesSearch**. Functional search box. It filters over the store. There is no API calls.
  - **ExpensesExpense**. An element in Expenses List wich is iterated over the view. It has a prop where expense object is sent. It has a Vuex action to open expense detail when clicks over it.
  - **ExpensesExpenseDetail**. It's the detail view. It calls other ExpensesExpenseDetail components. It has a watcher over the store, to have this always updated. It also has some methods:
    - _setExpenseAfterUpload_
    - _getCurrency_
    - _processingEvent_. It dynamically sets url where upload receipt.
    - _sendingEvent_. It process upload.
    - _getPreviousImgs_. It get previous receipts urls. Read receipts array and push it into a data array.
    - _updateCurrentExpense_. When upload a receipt, it takes the returned currentExpense payload from server and then it updates the store.
    - _openModal_. Well... it... opens a modal :)))
  - **ExpensesExpenseDetailElements**. Elements to be shown in detail view. Profile, team, VAT...
  - **ExpensesExpenseDetailElementsElement**. An "icon + value" template. It gets info from props.

### State Management

You can check all the state management in store folder. Talking about actions:

- **getExpenses**. It get expenses from server. By default, you get a limit of 25 elements. But if you call getExpenses with more than one page loaded, it takes it into account and calls for the exact amount of element to the server. It's needed when you edit an element of page 2 or 3. When it is saved we reload the elements store, and this element needs to be found. It could be a refactor.
- **searchExpenses** It search for expenses over the store state.
- **setExpense** It find an expense from the store state and add it into currentExpense (which is shown in detail view)
- **setExpenseAfterUpload** When uploads, if 200, server returns a payload with the currentExpense. Here we save it into the store
- **setComment** Here we post the comment and update the expense list, to show comment info in the current element on it.

## Things that are not OK

Due to the dimension of the project, I rather prefered to use Vue and my expertise and be as detailed as possible in order to have everything working properly. That means:

- There is no typescript.
- There is no React at all.

I think it shows you more globally where I am. React is an issue, but nothing I can't solve studying and practicing. Same with Typescript.

Also, i'm not a designer, i've tried to do my best. The visual approach is more or less ok (by my point of view at least! xD) but that also means

- There is no mobile view
- SaaS presence is almost a joke

I've prefered to use Tailwind because it has a fast approach for developers.

It took me Friday afternoon, Saturday more or less all the day, 8h of the sunday and some hours more today (monday).
So. Here you have. It was fun!!

## Functional requirements

- DONE. User can list expenses. Expenses are listed.
- DONE. User can add a comment on an expense
- DONE. User can filter on expenses (client side filters).
- DONE. User can add a receipt image on an expense

## General requirements

A single page application using a modern JS library/framework including:

- DONE. A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- DONE. A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- DONE. Tailwind + some SASS lines. CSS can be written using PostCSS, SASS, LESS or similar higher-level language
- YEAH. The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?

## Nice to have

Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).

- Responsive design
- DONE. Implement with a state management library (Redux, Mobx, VueX, ...)
- Implement solution in TypeScript
- DONE. Localization: support for multiple languages (English, French, ...)

## What we're looking for

- Using high-quality existing libraries or small amounts of custom code
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

## A few last things 👇
 - Please note that while you are free to use libraries of your choosing, we encourage you to write at least some your own code. This is your chance to really impress us with your skills.
- You are welcome to make changes to the API code if you think it will improve your solution
