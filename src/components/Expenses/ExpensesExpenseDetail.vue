<template>
  <div class="flex flex-col w-full overflow-y-auto">
    <div class="flex flex-row font-semibold justify-between w-full pb-6">
      <div class="pl-12 pt-3">
        <font-awesome-icon
          class="mr-4 text-grey-dark cursor-pointer"
          icon="chevron-up"
          :title="$t('expense.up')"
        />
        <font-awesome-icon
          class="mr-4 text-grey-light cursor-pointer"
          icon="chevron-down"
          :title="$t('expense.down')"
        />
      </div>
      <div class="flex flex-row pb-3">
        <div class="pl-3 pt-3 pb-3 pr-5 border-pleo border-b-2 text-grey-darker cursor-pointer">
          {{ $t('expense.details') }}
        </div>
        <div class="pl-5 pt-3 pb-3 pr-3 text-grey border-grey-light border-b-2 cursor-pointer">
          {{ $t('expense.activity') }}
        </div>
      </div>
      <div class="pt-3  ">
        <font-awesome-icon class="mr-4 text-grey-dark" icon="eye" :title="$t('expense.watching')" />
        <span class="text-grey">3</span>
      </div>
    </div>
    <div class="pl-12 flex flex-col items-center pt-24">
      <div class="flex flex-col justify-center block h-24 sm:h-24 w-24 rounded-full bg-green-light">
        <span class="text-white text-5xl ml-8">{{ merchantInitial }}</span>
      </div>
      <div class="text-xl font-medium text-grey-darkest pt-4"></div>
      <div class="text-3xl font-normal text-grey-dark pt-2">
        {{ getCurrency(currentExpense.amount.currency) }}{{ currentExpense.amount.value }}
      </div>
      <div class="font-normal text-grey pt-2">{{ currentExpense.date | moment }}</div>
    </div>

    <div class="pl-40 flex flex-col items-left pt-12">
      <ExpensesExpenseDetailElements :expense="currentExpense" />
    </div>
    <!-- eslint-disable vue/attribute-hyphenation -->
    <div class="flex flex-row flex-wrap ml-32">
      <div
        v-for="image in previewImages"
        :key="image"
        class="flex preview-thumbnail mt-4 p-4 border-grey-lighter border-2 rounded-lg max-w-xxs mx-2 cursor-pointer"
      >
        <img class="self-center" :src="image" alt="" @click="openModal(image)" />
      </div>
      <vue-dropzone
        id="drop1"
        ref="receiptUploader"
        :key="dropzoneKey"
        :useCustomSlot="true"
        :options="dropOptions"
        class="mt-4 pl-12 pr-16 border-grey-lighter border-2 rounded-lg max-w-xxs mx-2"
        @vdropzone-processing="processingEvent"
        @vdropzone-sending="sendingEvent"
        @vdropzone-success="updateCurrentExpense"
      >
        <div
          class="flex items-center content-center rounded-full h-14 w-14 shadow text-pleo-blue text-3xl font-bold cursor-pointer"
        >
          <div class="self-center mx-auto">+</div>
        </div>
      </vue-dropzone>
    </div>
    <modal name="receiptModal" height="auto">
      <img :src="clickedReceipt" />
    </modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { getCurrency } from '@/utils';
import vueDropzone from 'vue2-dropzone';
import moment from 'moment';
import ExpensesExpenseDetailElements from '@/components/Expenses/ExpensesExpenseDetailElements.vue';

export default {
  name: 'ExpensesExpenseDetail',

  components: {
    ExpensesExpenseDetailElements,
    vueDropzone,
  },

  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
  },

  data() {
    return {
      currentExpense: {
        id: '',
        amount: { value: '', currency: '' },
        date: '',
        merchant: '',
        receipts: [],
        comment: '',
        category: '',
        user: { first: '', last: '', email: '' },
        index: null,
      },
      dropOptions: {
        url: 'http://demo.es',
        acceptedFiles: 'image/*',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
        },
        // previewsContainer: '.custom-preview',
        thumbnailWidth: 120,
        thumbnailHeight: 120,
      },
      fileContainerKey: 'fileContainer',
      previewImages: [],
      dropzoneKey: 'dropzone',
      clickedReceipt: '',
    };
  },

  computed: {
    ...mapGetters(['expense']),

    merchantInitial() {
      return this.currentExpense.merchant[0];
    },
  },

  mounted() {
    this.$store.watch(
      (state, getters) => getters.expense,
      newValue => {
        this.currentExpense = newValue;
        this.dropzoneKey = Math.random(8);
        this.getPreviousImgs();
      },
    );
  },

  methods: {
    ...mapActions(['setExpenseAfterUpload']),

    getCurrency,

    processingEvent() {
      this.$refs.receiptUploader.setOption(
        'url',
        `http://localhost:3000/expenses/${this.currentExpense.id}/receipts`,
      );
    },

    async sendingEvent(file, xhr, formData) {
      await formData.append('receipt', file);
    },

    getPreviousImgs() {
      this.previewImages = [];
      this.fileContainerKey = this.currentExpense.id;
      const receiptsImages = this.currentExpense.receipts;
      receiptsImages.map(e => {
        var url = `http://localhost:3000${e.url}`;
        this.previewImages.push(url);
      });
    },

    updateCurrentExpense(file, response) {
      this.setExpenseAfterUpload(response);
    },

    openModal(image) {
      this.clickedReceipt = image;
      this.$modal.show('receiptModal');
    },
  },
};
</script>
