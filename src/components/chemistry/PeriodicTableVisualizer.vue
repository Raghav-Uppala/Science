<template>
  <div>
    <Selector></Selector>
    <PeriodicTable></PeriodicTable>
  </div>
</template>

<script>

import PeriodicTable from './PeriodicTable.vue'
import Selector from './Selector.vue'

export default {
  name: 'PeriodicTableVisualizer',
  components: {
    PeriodicTable,
    Selector
  }, 
}

</script>