<template>
  <div class="panel">
    <div class="panel__bet">
      <div class="panel__bet-label">
        <label>BET AMOUNT</label>
      </div>
      <div class="panel__bet-shortcut">
        <input type="number" />
        <button class="panel__bet-shortcut-button">
          ½
        </button>
        <button class="panel__bet-shortcut-button">
          2x
        </button>
      </div>
    </div>
    <div class="panel__bet-button">
      <button v-if="isGameStart || gameover" @click="startGame()">BET</button>
      <button v-else @click="cashout()"><img class="panel__bet-button-icon" src="../assets/images/cashout.svg" alt="Cashout"></button>
    </div>
    <div class="panel__bet">
      <div class="panel__bet-label">
        <label>PROFIT (X1)</label>
      </div>
      <div class="panel__bet-shortcut panel__bet-profit">
        <div class="panel__bet-profit-number">0</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useMock } from '../stores/mock';

const { isGameStart, gameover } = toRefs(useMock());
const { gameCardChange, tryAgain } = useMock();

gameCardChange('start')
function startGame() {
  isGameStart.value = false
  
  if(gameover.value) {
    gameover.value = false
    tryAgain()
  }
}

function cashout() {
  console.log('cashover')
}
</script>

<style scoped>

</style>