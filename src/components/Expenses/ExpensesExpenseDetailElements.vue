<template>
  <div>
    <ExpensesExpenseDetailElementsElement type="profile" :user="expense.user" />
    <ExpensesExpenseDetailElementsElement type="team" value="Design Team" />
    <ExpensesExpenseDetailElementsElement
      type="category"
      color="text-green-light"
      :value="expense.merchant"
    />
    <ExpensesExpenseDetailElementsElement type="vat" value="20%" />
    <ExpensesExpenseDetailElementsElement type="comment" :value="expense.comment" />
  </div>
</template>
<script>
import ExpensesExpenseDetailElementsElement from '@/components/Expenses/ExpensesExpenseDetailElementsElement.vue';

export default {
  name: 'ExpensesExpenseDetailElements',
  components: {
    ExpensesExpenseDetailElementsElement,
  },
  props: {
    expense: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
