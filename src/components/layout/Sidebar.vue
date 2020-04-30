<template>
  <!-- Sidebar -->
  <div class="sidebar fixed w-64 min-h-screen pt-12 text-grey-darker">
    <div class="text-center p4 relative">
      <img src="/images/pleo.png" />
    </div>
    <div class="mt-12 rounded-lg mx-auto max-w-sm rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img class="block h-12 sm:h-12 rounded-full mx-auto" src="/images/ray_garcia.png" alt />
      </div>
    </div>
    <div class="flex flex-row justify-center mx-auto mb-10 text-grey-dark font-semibold">
      <div class="mr-1">Ray</div>
      <font-awesome-icon
        class="ml-1 cursor-pointer"
        icon="chevron-down"
        :title="$t('expense.down')"
      />
    </div>
    <div class="text-center mx-auto flex flex-row justify-center mb-24 cursor-pointer">
      <div class="mr-2" @click="changeLang('en')"><img src="/images/en.png" alt="English" /></div>
      <div class="ml-2" @click="changeLang('es')"><img src="/images/es.png" alt="Español" /></div>
    </div>
    <div class="menu-items">
      <div class="menu-item py-3 text-grey-darker cursor-pointer">
        <span class="font-medium py-1 pl-16 border-l-2 border-pleo">{{ $t('menu.expenses') }}</span>
      </div>
      <div class="menu-item py-4 text-grey-darker cursor-pointer">
        <span class="font-normal pl-16">{{ $t('menu.myCards') }}</span>
      </div>
      <div class="menu-item py-4 text-grey-darker cursor-pointer">
        <span class="font-normal pl-16">{{ $t('menu.teams') }}</span>
      </div>
      <div class="menu-item py-4 text-grey-darker cursor-pointer">
        <span class="font-normal pl-16">{{ $t('menu.wallet') }}</span>
      </div>
      <div class="menu-item py-4 text-grey-darker cursor-pointer">
        <span class="font-normal pl-16">{{ $t('menu.analytics') }}</span>
      </div>
      <div class="menu-item py-4 text-grey-darker cursor-pointer">
        <span class="font-normal pl-16">{{ $t('menu.more') }}</span>
      </div>
    </div>

    <div class="absolute pin-b w-64 pt-4 pb-4 border-t-2 border-grey-lighter cursor-pointer">
      <div class="pl-16">{{ $t('menu.help') }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  methods: {
    changeLang(ln) {
      this.$locale = ln;
    },
  },
};
</script>
