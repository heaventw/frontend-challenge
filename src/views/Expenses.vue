<template>
  <div class="flex-1 ml-64 bg-white h-full">
    <div class="inline-flex w-1/2 pl-20 pr-20 mt-12">
      <div class="flex flex-col w-full">
        <ExpensesActionbar />
        <ExpensesSearch />
        <Expense v-for="(expense, index) in expenses" :key="index" :expense="expense" />
        <div
          class="text-grey-darker text-center px py-2 mt-2 ml-2 mb-2 mr-6 cursor-pointer"
          @click="getNextPage()"
        >
          {{ $t('expenses.loadMore') }}
        </div>
      </div>
    </div>
    <div class="inline-flex w-2/5 fixed mt-6 border-grey-lighter border-l-2 h-full">
      <ExpenseDetail />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ExpensesActionbar from '@/components/Expenses/ExpensesActionbar.vue';
import Expense from '@/components/Expenses/ExpensesExpense.vue';
import ExpensesSearch from '@/components/Expenses/ExpensesSearch.vue';
import ExpenseDetail from '@/components/Expenses/ExpensesExpenseDetail.vue';

export default {
  name: 'Expenses',
  components: {
    ExpensesActionbar,
    Expense,
    ExpensesSearch,
    ExpenseDetail,
  },

  computed: {
    ...mapGetters(['expenses', 'page', 'expense']),
  },

  mounted() {
    this.$store.watch(
      (state, getters) => getters.expenses,
      () => {
        this.setExpense(this.expense.id);
      },
    );
  },
  created() {
    this.getExpenses();
  },

  methods: {
    ...mapActions(['getExpenses', 'setExpense']),

    getNextPage() {
      this.getExpenses(this.page + 1);
    },

    getAvatarUrl: email => `https://api.adorable.io/avatars/285/${email}`,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
