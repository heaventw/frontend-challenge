<template>
  <div class="flex flex-row pt-8">
    <div class="mr-4">
      <div class="rounded-full mx-auto max-w-sm overflow-hidden w-6">
        <div v-if="user" class="sm:items-center">
          <img
            class="block h-5 sm:h-5 rounded-full self-center"
            :src="getAvatarUrl(user.email)"
            alt
          />
        </div>
        <div v-else class="sm:items-center">
          <font-awesome-icon class="font-semibold ml-1" :class="color" :icon="fontIcon" />
        </div>
      </div>
    </div>
    <input
      v-if="typeComment"
      ref="inputComment"
      v-model="comment"
      class="appearance-none bg-transparent border-b border-green-light w-full text-grey-darker
    mr-2 leading-tight focus:outline-none mr-20"
      type="text"
      :placeholder="$t('expense.addComment')"
      aria-label="comment"
      @keyup.enter="blurField"
      @blur="saveComment"
    />
    <div v-else class="font-medium text-grey-darkest text-grey-darker">{{ getValue }}</div>
  </div>
</template>

<script>
import { fontIcon } from '@/utils';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ExpensesExpenseDetailElementElement',
  props: {
    type: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
    user: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: () => 'text-grey-dark',
    },
  },
  data() {
    return {
      comment: '',
    };
  },
  computed: {
    ...mapGetters(['expense']),
    fontIcon,
    getValue() {
      return this.user ? `${this.user.first} ${this.user.last}` : this.value;
    },
    typeComment() {
      return this.type === 'comment';
    },
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.expense,
      () => (this.comment = this.expense.comment != '' ? this.expense.comment : ''),
    );
  },
  methods: {
    ...mapActions(['setComment']),
    getAvatarUrl: email => `https://api.adorable.io/avatars/285/${email}`,
    blurField() {
      this.$refs.inputComment.blur();
    },
    saveComment() {
      const commentCreated = {
        id: this.expense.id,
        comment: this.comment,
      };

      this.setComment(commentCreated);
    },
  },
};
</script>
