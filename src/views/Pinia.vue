<script setup>
import { computed, onMounted, onUpdated } from '@vue/runtime-core';
import { useCounterStore} from './../stores';

const counterStore = useCounterStore();
const incBy = counterStore.incrementBy


/**
 * reset store state => store.$reset() 
 * update store partially => store.$patch({ counter: 1 }) or store.$patch(state => state.counter = 1)
 * Replacing the state => store.$state = { counter: 3, name: 'Paimon' } or pinia.state.value = {}
 */

onMounted(() => {
    // const timer = setInterval(() => {
    //     if(counterStore.count >= 10) return clearInterval(timer);
    //     counterStore.count++;
    // },1000)
})



</script>
<template>
  <h1>Learn Pinai(New Vue Store)</h1>

  <div>
      My Coounter : {{counterStore.count}} <br/>
      Computed Doubled my counter : {{counterStore.doubleCount}} <br />
      Computed Trippled my counter : {{counterStore.tripleCount}} <br /> <hr />
      Double count plus one : {{counterStore.doubleCountPlusOne}} <br />
      <button @click="counterStore.count++">inc count</button>
      <!-- <button @click="incBy(10)">inc by 10</button>
      <button @click="incBy(20)">inc by 20</button>
      <button @click="incBy(30)">inc by 30</button> -->
  </div>

  <div>{{incBy(10)}}</div>
  
</template>