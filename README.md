# Vitaliy's Front-end challenge
## See the [GIF!](https://pleo-expenses.netlify.com/app-demo-fast.gif)
**[See the expenses app in action!](https://pleo-expenses.netlify.com)**<br/><br/>
🚄 The API deployed to Heroku with the cronjob to wake it up every 30 minutes :)<br/>
🚄 The SPA deployed to Netlify<br/>

### 💡 Lighthouse report:<br/>
![](https://pleo-expenses.netlify.com/lighthouse-report.png)<br/>


## 📝 Functional requirements
✅ User can list expenses<br />
✅ User can add a comment on an expense<br />
✅ User can filter on expenses (client side filters - merchant, comment, user name, amount)<br />
✅ User can add a receipt image on an expense<br /><br />
**💪 Extra mile:**<br />
✅ Responsive design<br />
✅ Implement with a state management library (Redux)<br />
✅ Localization: support for multiple languages (English, French, ...)<br />
✅ Router and smooth navigation - a user can share the URL for an expense<br />
✅ Deployed and available over the Internet

## 📜 Details
* I used **React, Redux, Saga, SCSS, React-Intl**.
* **Tests** for complex components and sagas.<br />
* 🎨 Visual side:<br />
  * **Responsive** design<br />
  * CSS **animations** and transitions<br />
  * Attention to details:<br />
    * **Spinners** for fetching the list of expenses, posting comments or uploading files. <br />
    * **Notifications** for connectivity issues with proper `alertdialog` ARIA role.<br />
* Semantic and **accessibility 👓**.<br />
  * Cards pattern for expenses (see [implementation](https://github.com/vstanyshevskyy/expenses-app/blob/master/frontend/src/helpers/card-click-helper.js) inspired by [Heydon Pickering](https://inclusive-components.design/cards/))<br />
  * The list of expenses is actually `<ul>` with nested - great for SEO and accessibility as well.<br />
* **97-100** in Google Lighthouse.<br />

## 🤓 Challenging moments
* I18n
* Responsive design

## ⏰ Time spent: ~22 hours

## 🤔 What I would like to add
* Filtering by currency
* Some gallery/modal for receipt + ability to delete a receipt.
* Drag and drop for receipts upload
* [Web Sharing API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) to share expenses

## 🤖 API changes
* Moved TS dependencies from dev-deps to deps in order to deploy it to Heroku
* Allowed to send an empty comment to delete it. [Commit](https://github.com/vstanyshevskyy/expenses-app/commit/aca61616d5c60c7717f5554cf0189e74c25aaea1)
