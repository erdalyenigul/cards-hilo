<template>
  <div class="roundInfo">
    <span class="currenctRound">
      <span v-if="cardHistory.length > 1">{{ gameover ? cardHistory.length - 2 : cardHistory.length - 1 }}</span>
    </span>
    <span class="highestRecord" v-if="highestRecord || currentRecord">
      En Yüksek Skorunuz: {{ highestRecord > currentRecord ? highestRecord : currentRecord }}
    </span>
  </div>
  <div class="history" v-if="!isGameStart">
    <div class="playingCards simpleCards" id="autoScroll">
      <ul class="table">
        <li v-for="(card, index) in cardHistory" :key="index">
          <div class="card">
            <span :class="`rank ${card.symbol}`">{{ card.rank }}</span>
            <span class="suit"> 
              <img class="smybol-1" :src="gameSymbols(card.symbol)" :alt="card.symbol">
              <img class="smybol-2" :src="gameSymbols(card.symbol)" :alt="card.symbol">
            </span>
            <div
              v-if="card.status !== 'start'"
              :class="`card__decision card__decision-${setHistoryDecision(card.lose)} ${setHistoryStatusClass(card.status)}`"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, onMounted, ref } from 'vue';
import { useMock } from '../stores/mock';

const { cardHistory, gameover, isGameStart, highestRecord, currentRecord } = toRefs(useMock());

const gameSymbols = (symbol: string) => {
 return new URL(`../assets/images/game-symbols/${symbol}.svg`, import.meta.url).href;
};

function setHistoryDecision(lose: boolean) {
  if(lose === false) return 'correct';
  else if(lose === true) return 'wrong';
  else { return }
}

function setHistoryStatusClass(status: string) {
  if(status == 'start') return 'start';
  else if(status == 'higher') return 'card__decision-correct--up';
  else if(status == 'lower') return 'card__decision-correct--down';
  else { return 'card__decision-correct--other' }
}

onMounted(() => {
  if(localStorage.getItem('highestRecord')) {
    highestRecord.value = localStorage.getItem('highestRecord')
  }
})
</script>

<style lang="scss">

</style>