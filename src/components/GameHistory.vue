<template>
  <div class="history">
    <div class="playingCards simpleCards" id="autoScroll">
      <ul class="table">
        <li v-for="(card, index) in cardHistory" :key="index">
          <div class="card">
            <span :class="`rank ${card.symbol}`">{{ card.rank }}</span>
            <span class="suit"> 
              <img class="smybol-1" :src="`src/assets/images/game-symbols/${card.symbol}.svg`" :alt="card.symbol">
              <img class="smybol-2" :src="`src/assets/images/game-symbols/${card.symbol}.svg`" :alt="card.symbol">
            </span>
            <div
              v-if="card.status !== 'start'"
              :class="`card__decision card__decision-${setHistoryDecision(card.lose)} ${setHistoryStatusClass(card.status)}`"
            ></div>
          </div>
          <div class="history__element">{{ card.status === 'start' ? 'Start' : card.bet }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useMock } from '../stores/mock';

const { cardHistory } = toRefs(useMock());


function setHistoryDecision(lose: boolean) {
  if(lose === false) return 'correct';
  else if(lose === true) return 'wrong';
  else { return }
}

function setHistoryStatusClass(status: string) {
  if(status == 'start') return 'start';
  else if(status == 'higher') return 'card__decision-correct--up';
  else if(status == 'lower') return 'card__decision-correct--down';
  else { return }
}
</script>

<style lang="scss">

</style>